const frm = document.querySelector('#formulario');
//Constante de prueba para mostrar el nombre registrado en el input del formulario
//const nombre = document.querySelector('#nombre');
const btnNuevo = document.querySelector('#btnNuevo');
const title = document.querySelector('#title');


const modalRegistro = document.querySelector("#modalRegistro");

const myModal = new bootstrap.Modal(modalRegistro);

//Funcion para recargar la tabla
let tblUsuarios;

//comprobar si el documento se cargo correctamente
document.addEventListener("DOMContentLoaded", function () {
    //REGRESAR TODOS LOS DATOS EN EL DATATABLE 
    //Reemplazar myTable por el nombre del formulario en el controlador
    //Indicar id del formulario
    tblUsuarios = $('#tblUsuarios').DataTable( {
        ajax: {
            url: base_url + 'usuarios/listar',//Crear el controlador listar 
            dataSrc: ''
        },
        columns: [ 
            //Mostrar las columnas en el datatable
            
                { data: 'acciones' },
                { data: 'id' },
                { data: 'nombre' }, //nombres para poder mostrar tanto el nombre como el apellidos
                { data: 'matricula' },
                { data: 'correo' },
                { data: 'telefono' },
                { data: 'escuela' },
                { data: 'perfil' },
                { data: 'fecha' },
            
        ],
        // Agregar aqui las propiedades aquí
        language: {
            url : 'https://cdn.datatables.net/plug-ins/2.0.3/i18n/es-ES.json'
        },
        responsive: true,
        //Para ordenar los registros de forma ascendente o descendente
        order: [[1, 'desc']],
    } );

    btnNuevo.addEventListener("click", function () {
        //Se le asigno un evento click al boton para levantar un modal
        title.textContent = "NUEVO REGISTRO";
        //El id del nuevo registro lo dejamos vacio para no tener problemas con el id
        frm.id_usuario.value = '';
        //Reseteamos el modal para evitar regresar valores de algun usuario
        frm.reset();
        //Activamos la modificacion de la clave
        frm.clave.removeAttribute('readonly');
        myModal.show();
    })
    //registro de usuarios con ajax
    frm.addEventListener("submit", function (e) {
        //evitar la recarga de la pagina
        e.preventDefault();
        //Prueba de mostrar el formulario en la consola
        //console.log(nombre.value);
        if (frm.nombre.value == '' || frm.matricula.value == ''
            || frm.correo.value == '' || frm.telefono.value == ''
            || frm.escuela.value == '' || frm.clave.value == ''
            || frm.rol.value == '') {
            alertaPerzonalizada("warning", "Todos los campos son obligatorios");
        } else {
            //Enviar los datos del formulario
            const data = new FormData(frm);

            //console.log('Enviando formulario...');
            //Crear el constante de la ruta
            const http = new XMLHttpRequest();

            const url = base_url + 'usuarios/guardar';

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
                        myModal.hide();    
                        //Recargar la tabla de forma automatica
                        tblUsuarios.ajax.reload();          
                    }
                }

            };

        }
    })
})

function eliminar(id) {
    const url = base_url + 'usuarios/delete/' + id;
    eliminarRegsitro('¿ESTA SE SEGURO  DE ELIMINAR ESTE REGISTRO?', 'EL USUARIO NO SE ELIMINARÁ DE FORMA PERMANENTE', 'SI ELIMINAR', url, tblUsuarios)
}
function editar(id) {
    const http = new XMLHttpRequest();
 
    //Concatenar el controlador usuarios
    const url = base_url + 'usuarios/editar/' + id;
    
    http.open("GET", url, true);
  
    http.send();
  
    http.onreadystatechange = function() {
    
        if (this.readyState == 4 && this.status == 200) {
        
            //Hacemos la prueba por consola antes de hacer el parseo
            //console.log(this.responseText);
            
            const res = JSON.parse(this.responseText);
            //Modificar el titulo del modal
            title.textContent = 'EDITAR USUARIO';
            //Es necesario agregar un identificador para poder modificar los datos
            frm.id_usuario.value = res.id;
            frm.nombre.value = res.nombre;
            frm.matricula.value = res.matricula;
            frm.correo.value = res.correo;
            frm.telefono.value = res.telefono;
            frm.escuela.value = res.escuela;
            frm.clave.value = '0000000000000';
            //readonly es para que no se pueda modificar
            //setAttribute es para modificar el atributo
            frm.clave.setAttribute('readonly', 'readonly');
            frm.rol.value = res.rol;

            //Activamos el modal
            myModal.show();
        }
        
    };

}