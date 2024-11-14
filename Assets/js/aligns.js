document.addEventListener("selectionchange", () => {
  const selection = window.getSelection().toString();
  const menu = document.getElementById("contextMenu");

  if (selection.length > 0) {
      menu.style.display = "block";
      const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
      menu.style.top = `${rect.bottom + window.scrollY}px`;
      menu.style.left = `${rect.left + window.scrollX -20}px`;
      // cuando el sidebar esta abierto el margen izquierdo es de 300px

      menu.style.display = "flex";
      menu.style.justifyContent = "space-between";
  } else {
      menu.style.display = "none";
  }
});

function applyAlign(align) {
  document.execCommand(align, false, null);
}