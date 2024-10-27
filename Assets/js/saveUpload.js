const editor = document.getElementById('editor');
const fileInput = document.getElementById('fileInput');
const importButton = document.getElementById('importButton');

// Funcionalidad para guardar como Word
document.getElementById('saveWord').addEventListener('click', () => {
    const content = editor.innerHTML;
    const blob = new Blob([`
        <html>
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                ${content}
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
    
    const canvas = await html2canvas(editor, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 295; // A4 height in mm
    const imgHeight = canvas.height * imgWidth / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
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
        const result = await mammoth.convertToHtml({arrayBuffer: arrayBuffer});
        editor.innerHTML = result.value;
    }
});