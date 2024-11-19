function addLink() {
    // Guardar la selección actual del usuario
    const selection = window.getSelection();
    const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

    Swal.fire({
        title: 'Ingresa la URL del hipervínculo:',
        input: 'url',
        inputPlaceholder: 'https://ejemplo.com',
        showCancelButton: true,
        confirmButtonText: 'Insertar',
        cancelButtonText: 'Cancelar',
        inputValidator: (value) => {
            if (!value) {
                return '¡La URL no puede estar vacía!';
            }
        }
    }).then((result) => {
        if (result.isConfirmed && result.value) {
            const url = result.value;

            if (range) {
                // Crear el elemento <a>
                const a = document.createElement('a');
                a.href = url;
                a.target = '_blank'; // Abre el enlace en una nueva pestaña
                a.textContent = selection.toString() || url; // Usa el texto seleccionado o la URL como texto del enlace

                // Aplicar estilo desde JavaScript
                a.style.color = 'blue';
                a.style.textDecoration = 'underline';
                a.style.cursor = 'pointer';

                // Reemplazar la selección con el enlace
                range.deleteContents();
                range.insertNode(a);
            }
        }
    });
}

// Hacer clic en los enlaces funcionales
document.getElementById('editor').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault(); // Evitar el comportamiento por defecto en modo editable
        window.open(e.target.href, '_blank'); // Abrir el enlace en una nueva pestaña
    }
});