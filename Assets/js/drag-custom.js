document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos el editor
    const editor = document.getElementById("editor");
  
    // Añadimos un evento para detectar cuando una imagen es pegada
    editor.addEventListener("paste", function (event) {
      const clipboardData = event.clipboardData || window.clipboardData;
      const pastedData = clipboardData.getData("text/html");
  
      // Convertimos la imagen pegada en un objeto DOM temporal
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = pastedData;
  
      // Verificamos si el contenido pegado incluye una imagen
      const img = tempDiv.querySelector("img");
      if (img) {
        img.classList.add("interactive-image");
        editor.appendChild(img); // Añadimos la imagen con la clase
        event.preventDefault();
      }
    });
  
    // Aplicar interact.js a las imágenes dentro del editor con clase interactive-image
    interact('.interactive-image')
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true }, // Permite redimensionar desde cualquier borde
      })
      .on('resizemove', function (event) {
        const target = event.target;
        const x = (parseFloat(target.getAttribute('data-x')) || 0);
        const y = (parseFloat(target.getAttribute('data-y')) || 0);
  
        // Cambia el tamaño de la imagen, manteniendo su proporción si es necesario
        target.style.width = `${event.rect.width}px`;
        target.style.height = `${event.rect.height}px`;
  
        // Actualiza la posición de la imagen (si la has movido)
        target.style.transform = `translate(${x}px, ${y}px)`;
  
        // Prevenir cambios en otros estilos, como el tamaño de la fuente
        event.preventDefault();
      });
  
    // Permite mover las imágenes dentro del editor
    interact('.interactive-image')
      .draggable({
        onmove: function (event) {
          const target = event.target;
          const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
          const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
  
          // Mueve la imagen
          target.style.transform = `translate(${x}px, ${y}px)`;
  
          // Actualiza las posiciones almacenadas
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
  
          // Prevenir cambios en otros estilos, como el tamaño de la fuente
          event.preventDefault();
        }
      });
  });
  