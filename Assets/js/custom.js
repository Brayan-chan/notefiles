function alertaPerzonalizada(type, mensaje) {
  Swal.fire({
    position: "top-end",
    icon: type,
    title: mensaje,
    showConfirmButton: false,
    timer: 1500,
  });
}

//Recuperar la tabla dentro de la función
function eliminarRegsitro(title, text, accion, url, table) {
  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: accion,
  }).then((result) => {
    if (result.isConfirmed) {
      const http = new XMLHttpRequest();

      http.open("GET", url, true);

      http.send();

      http.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

          //Se realiza primero el parseo para poder mostrar la alerta
          const res = JSON.parse(this.responseText);
          alertaPerzonalizada(res.tipo, res.mensaje);
          //Recargar la tabla de forma automatica
          if (res.tipo == 'success') {
            table.ajax.reload();
          }
        }
      };
    }
  });
}