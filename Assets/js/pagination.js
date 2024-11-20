const noteContainer = document.getElementById('note-container');
const MAX_LINES = 40;  // Número máximo de saltos de línea por página

// Crear una nueva página
function createNewPage() {
    const newPage = document.createElement('div');
    newPage.classList.add('page');
    
    const newPageContent = document.createElement('div');
    newPageContent.classList.add('page-content');
    newPageContent.contentEditable = true;
    
    newPage.appendChild(newPageContent);
    noteContainer.appendChild(newPage);
    
    return newPageContent;
}

// Función que cuenta los saltos de línea en una página
function countNewLines(element) {
    const content = element.innerHTML;
    const lines = content.split('<br>').length;  // Contar saltos de línea
    return lines;
}

// Manejar la paginación y evitar nuevos saltos de línea en una página llena
function handlePagination(event) {
    const pages = document.querySelectorAll('.page-content');
    let lastPageContent = pages[pages.length - 1];  // Última página activa
    
    let lines = countNewLines(lastPageContent);
    
    // Si el contenido excede el número de líneas permitidas
    if (lines >= MAX_LINES) {
        // Eliminar el salto de línea adicional y mantener el contenido dentro del límite
        if (event.inputType === 'insertParagraph' || event.inputType === 'insertLineBreak') {
            event.preventDefault();
            
            // Si la página está llena, crear una nueva y mover el enfoque allí
            const newPageContent = createNewPage();
            newPageContent.focus();  // Pasar el enfoque a la nueva página
        }
    }
}

// Escuchar cambios en el contenido de las páginas y manejar la creación de nuevas páginas
noteContainer.addEventListener('beforeinput', handlePagination);