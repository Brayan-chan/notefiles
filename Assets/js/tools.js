const editor = document.getElementById('editor');
const toolbar = document.getElementById('toolbar');

editor.addEventListener('select', handleSelection);
editor.addEventListener('mouseup', handleSelection);
editor.addEventListener('keyup', handleSelection);

document.addEventListener('mousedown', function(e) {
    if (!toolbar.contains(e.target) && e.target !== editor) {
        toolbar.style.display = 'none';
    }
});

function handleSelection() {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        if (!range.collapsed) {
            const rect = range.getBoundingClientRect();
            toolbar.style.display = 'block';
            toolbar.style.top = `${rect.top - toolbar.offsetHeight - 10}px`;
            toolbar.style.left = `${rect.left + (rect.width / 2) - (toolbar.offsetWidth / 2)}px`;
        } else {
            toolbar.style.display = 'none';
        }
    }
}

function changeFontSize(size) {
    document.execCommand('fontSize', false, size);
    editor.focus();
}