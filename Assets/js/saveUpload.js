document.addEventListener("DOMContentLoaded", function () {
    const editor = document.getElementById("editor");
    const fileInput = document.getElementById("fileInput");
    const importButton = document.getElementById("importButton");

    // Manejo de pegado de imágenes
    editor.addEventListener("paste", function (event) {
        const clipboardData = event.clipboardData || window.clipboardData;
        const items = clipboardData.items;

        for (let i = 0; i < items.length; i++) {
            if (items[i].type.indexOf("image") !== -1) {
                const blob = items[i].getAsFile();
                const reader = new FileReader();

                reader.onload = function(e) {
                    const img = document.createElement("img");
                    img.src = e.target.result;
                    img.className = "interactive-image";
                    img.style.width = "300px";
                    img.style.height = "auto";
                    img.style.position = "absolute";
                    img.style.left = "0px";
                    img.style.top = "0px";
                    editor.appendChild(img);
                    makeImageInteractive(img);
                };

                reader.readAsDataURL(blob);
                event.preventDefault();
                return;
            }
        }
    });

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
            scale: 2,
            useCORS: true,
            logging: false,
            allowTaint: true,
            backgroundColor: '#1f1f1f'
        });
        const imgData = canvas.toDataURL('image/png');
        
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgHeight = canvas.height * imgWidth / canvas.width;
        
        doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        
        if (imgHeight > pageHeight) {
            let heightLeft = imgHeight;
            let position = 0;
            
            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
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
            const result = await mammoth.convertToHtml({arrayBuffer: arrayBuffer});
            editor.innerHTML = result.value;
        }
    });
});