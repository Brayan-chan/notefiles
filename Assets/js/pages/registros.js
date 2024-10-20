const frm = document.querySelector('#frmRegistro');
//Constante de prueba para mostrar el nombre registrado en el input del formulario
//const nombre = document.querySelector('#nombre');

    //registro de usuarios con ajax
    frm.addEventListener("submit", function (e) {
        //evitar la recarga de la pagina
        e.preventDefault();
        //Prueba de mostrar el formulario en la consola
        //console.log(nombre.value);
        if (frm.nombre.value == '' || frm.matricula.value == ''
            || frm.correo.value == ''|| frm.clave.value == '') 
            {
            alertaPerzonalizada("warning", "Todos los campos son obligatorios");
        } else {
            //Enviar los datos del formulario
            const data = new FormData(frm);

            //console.log('Enviando formulario...');
            //Crear el constante de la ruta
            const http = new XMLHttpRequest();

            const url = base_url + 'registros/guardar';

            http.open("POST", url, true);

            http.send(data);

            http.onreadystatechange = function () {

                if (this.readyState == 4 && this.status == 200) {

                    //Mostrar la alerta perzonalizada para confirmar el registro exitoso
                    const res = JSON.parse(this.responseText);
                    alertaPerzonalizada(res.tipo, res.mensaje); 

                    //Limpiar el formulario
                    if (res.tipo == 'success') {
                        frm.reset();
                        //Se puede agregar una alerta para redireccionar al panel del usuario
                        //Crear issue para poder validar los roles para que en login valide los diferentes roles
                    }
                }

            };

        }
    })
