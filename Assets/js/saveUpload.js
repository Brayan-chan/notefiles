const peer = new Peer();

// Variables
let connections = [];
const editor = document.getElementById('editor');
const fileInput = document.getElementById("fileInput");
const importButton = document.getElementById("importButton");
const imageUpload = document.getElementById('image-upload');
let isTyping = false;

// Modal y botón de colaborar
const collaborateButton = document.getElementById('collaborate-button');
const collaborateModal = document.getElementById('collaborate-modal');
const modalPeerId = document.getElementById('modal-peer-id');
const copyButton = document.getElementById('copy-button');
const closeModal = document.getElementById('close-modal');

// Funcionalidad para guardar como Word
document.getElementById('saveWord').addEventListener('click', () => {
    const content = editor.cloneNode(true);
    content.querySelectorAll('img.interactive-image').forEach(img => {
        const x = parseFloat(img.getAttribute('data-x')) || 0;
        const y = parseFloat(img.getAttribute('data-y')) || 0;
        const width = img.style.width;
        const height = img.style.height;

        img.style.position = 'absolute';
        img.style.left = x + 'px';
        img.style.top = y + 'px';
        img.style.width = width;
        img.style.height = height;
        img.style.transform = '';
    });

    const blob = new Blob([`
            <html>
                <head>
                    <meta charset="UTF-8">
                    <style>
                        body { font-family: Arial, sans-serif; }
                        #editor { position: relative; min-height: 500px; }
                        img { position: absolute; }
                    </style>
                </head>
                <body>
                    <div id="editor">
                        ${content.innerHTML}
                    </div>
                </body>
            </html>
        `], { type: 'application/msword' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'documento.doc';
    link.click();
});

// Funcionalidad para guardar como PDF
document.getElementById('savePDF').addEventListener('click', async () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const canvas = await html2canvas(editor, {
        scale: 4,
        useCORS: true,
        logging: false,
        allowTaint: true,
    });
    const imgData = canvas.toDataURL('image/png');

    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = canvas.height * imgWidth / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    // Añadir la primera página
    doc.addImage(imgData, 'PNG', 0, 0, imgWidth, Math.min(pageHeight, imgHeight));
    heightLeft -= pageHeight;

    // Añadir páginas adicionales si es necesario
    while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, Math.min(pageHeight, heightLeft));
        heightLeft -= pageHeight;
    }

    doc.save('documento.pdf');
});

// Funcionalidad para importar archivos
importButton.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.name.endsWith('.txt')) {
        const text = await file.text();
        editor.innerHTML = `<p>${text.replace(/\n/g, '</p><p>')}</p>`;
    } else if (file.name.endsWith('.docx')) {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer: arrayBuffer });
        editor.innerHTML = result.value;
    }
});

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

// Conectar al peer con el ID especificado en el modal
document.getElementById('connect-button').addEventListener('click', () => {
    const connectToId = document.getElementById('connect-to-id').value;
    if (connectToId) {
        const conn = peer.connect(connectToId);
        setupNewConnection(conn);
    }
});

// Configuración de la conexión y otras funcionalidades
peer.on('connection', (conn) => {
    setupNewConnection(conn);
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

// Manejo de pegado de imágenes
editor.addEventListener("paste", function (event) {
    const clipboardData = event.clipboardData || window.clipboardData;
    const items = clipboardData.items;

    for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
            const blob = items[i].getAsFile();
            const reader = new FileReader();

            reader.onload = function (e) {
                const base64Image = e.target.result;
                insertImageInEditor(base64Image);
                broadcastImage(base64Image);
            };

            reader.readAsDataURL(blob);
            event.preventDefault();
            return;
        }
    }
});

function insertImageInEditor(base64Image) {
    const img = document.createElement("img");
    img.src = base64Image;
    img.className = "interactive-image";
    img.style.width = "300px";
    img.style.height = "auto";
    img.style.position = "absolute";
    img.style.left = "0px";
    img.style.top = "0px";
    editor.appendChild(img);
    makeImageInteractive(img);
}

function broadcastImage(base64Image) {
    connections.forEach((conn) => {
        if (conn.open) {
            conn.send({ type: 'new-image', data: base64Image });
        }
    });
}

// Hacer las imágenes interactivas
function makeImageInteractive(img) {
    interact(img)
        .draggable({
            inertia: true,
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: 'parent',
                    endOnly: true
                })
            ],
            autoScroll: true,
            listeners: {
                move: dragMoveListener,
            }
        })
        .resizable({
            edges: { left: true, right: true, bottom: true, top: true },
            listeners: {
                move: resizeMoveListener
            },
        });
}

function dragMoveListener(event) {
    var target = event.target;
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

function resizeMoveListener(event) {
    var target = event.target;
    var x = (parseFloat(target.getAttribute('data-x')) || 0);
    var y = (parseFloat(target.getAttribute('data-y')) || 0);

    target.style.width = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.transform = 'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

// Funcionalidad de carga de imagen
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

// Manejo de errores de peer
peer.on('error', (err) => {
    console.error(err);
});


