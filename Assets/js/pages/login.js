//alertaPerzonalizada("success", "Se ha registrado con exito");

const frm = document.querySelector("#formulario");
const correo = document.querySelector("#correo");
const clave = document.querySelector("#clave");

//comprobar si el documento se cargo correctamente
document.addEventListener("DOMContentLoaded", function () {
    frm.addEventListener("submit", function (e) {
        //evitar la recarga de la pagina
        e.preventDefault();

        //comprobamos si los campos estan vacios
        //console.log(correo.value);//prueba de que existe algo en correo y clave
        //console.log(clave.value);
        if (correo.value == "" || clave.value == "") {
            alertaPerzonalizada("warning", "Todos los campos con * son obligatorios");
        } else {
            const data = new FormData(frm);

            const http = new XMLHttpRequest();

            const url = base_url + 'principal/validar';

            http.open("POST", url, true);

            http.send(data);

            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    //console.log(this.responseText);

                    const res = JSON.parse(this.responseText);
                    //console.log(res);//Comprobar por consola la respuesta

                    //Modificamos la alerta personalizado para que reciba los parametros desde la variable res
                    alertaPerzonalizada(res.tipo, res.mensaje);

                    //Funcion para validar
                    if (res.tipo == 'success') {
                        let timerInterval;
                        Swal.fire({
                            title: res.mensaje,
                            html: "Redireccionando en <b></b> milliseconds.",
                            timer: 2000,
                            timerProgressBar: true,
                            didOpen: () => {
                                Swal.showLoading();
                                const timer = Swal.getPopup().querySelector("b");
                                timerInterval = setInterval(() => {
                                    timer.textContent = `${Swal.getTimerLeft()}`;
                                }, 100);
                            },
                            willClose: () => {
                                clearInterval(timerInterval);
                            },
                        }).then((result) => {
                            /* Read more about handling dismissals below */
                            if (result.dismiss === Swal.DismissReason.timer) {
                                //console.log("I was closed by the timer");

                                //Abrir la ventana en la locación
                                window.location = base_url + 'admin';
                            }
                        });
                    }
                }
            };
        }
    });
});
