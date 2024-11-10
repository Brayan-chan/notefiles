const peer = new Peer();

// Variables
let connections = [];
const editor = document.getElementById('editor');
const imageUpload = document.getElementById('image-upload');
let isTyping = false;

// Modal y botón de colaborar
const collaborateButton = document.getElementById('collaborate-button');
const collaborateModal = document.getElementById('collaborate-modal');
const modalPeerId = document.getElementById('modal-peer-id');
const copyButton = document.getElementById('copy-button');
const closeModal = document.getElementById('close-modal');

// Mostrar el ID de peer del usuario y actualizar el input en el modal
peer.on('open', (id) => {
    modalPeerId.value = id; // Mostrar el Peer ID en el modal
    console.log('Mi ID de Peer es:', id);
});

// Mostrar el modal al hacer clic en el botón "Colaborar"
collaborateButton.addEventListener('click', () => {
    collaborateModal.classList.remove('hidden');
});

// Cerrar el modal
closeModal.addEventListener('click', () => {
    collaborateModal.classList.add('hidden');
});

// Copiar el Peer ID al portapapeles
copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(modalPeerId.value).then(() => {
        alert('Peer ID copiado al portapapeles');
    }).catch((err) => {
        console.error('Error al copiar al portapapeles:', err);
    });
});

// Configuración de la conexión y otras funcionalidades (igual que antes)
peer.on('connection', (conn) => {
    setupNewConnection(conn);
});

document.getElementById('connect-button').addEventListener('click', () => {
    const connectToId = document.getElementById('connect-to-id').value;
    if (connectToId) {
        const conn = peer.connect(connectToId);
        setupNewConnection(conn);
    }
});

function setupNewConnection(conn) {
    if (!connections.includes(conn)) {
        connections.push(conn);
    }

    conn.on('open', () => {
        conn.send({ type: 'initial', content: editor.innerHTML });
    });

    conn.on('data', (data) => {
        if (data.type === 'update' && !isTyping) {
            editor.innerHTML = data.content;
            broadcastChange(data.content, conn);
        } else if (data.type === 'initial') {
            editor.innerHTML = data.content;
        } else if (data.type === 'new-image') {
            insertImageInEditor(data.data);
        }
    });

    conn.on('close', () => {
        connections = connections.filter((c) => c !== conn);
    });
}

function broadcastChange(content, originConn) {
    connections.forEach((conn) => {
        if (conn !== originConn && conn.open) {
            conn.send({ type: 'update', content: content });
        }
    });
}

editor.addEventListener('input', () => {
    isTyping = true;
    const content = editor.innerHTML;
    connections.forEach((conn) => {
        if (conn.open) {
            conn.send({ type: 'update', content: content });
        }
    });
    setTimeout(() => { isTyping = false; }, 100);
});

imageUpload.addEventListener('change', () => {
    const file = imageUpload.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const base64Image = reader.result;
            insertImageInEditor(base64Image);
            broadcastImage(base64Image);
        };
        reader.readAsDataURL(file);
    }
});

function insertImageInEditor(base64Image) {
    const imgElement = document.createElement('img');
    imgElement.src = base64Image;
    editor.appendChild(imgElement);
}

function broadcastImage(base64Image) {
    connections.forEach((conn) => {
        if (conn.open) {
            conn.send({ type: 'new-image', data: base64Image });
        }
    });
}

peer.on('error', (err) => {
    console.error(err);
});
