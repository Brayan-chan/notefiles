<?php
class Principal extends Controller
{
    public function __construct() {
        parent::__construct();
        #Inicializando la sesion
        session_start();
    }
    public function index() {
        #echo 'Hola mundo'; #Mensaje de prueba de la conexión exitosa

        #Creamos la variable title el cual reutilizaremos
        $data['title'] = 'Iniciar sesión';

        #Llamamos a una vista 
        $this->views->getView('principal', 'index', $data);
    }

    public function error() {
        $data['title'] = '404';

        $this->views->getView('principal', 'error', $data);
    }

    public function salir() {
        session_destroy();
        header('Location: ' . BASE_URL);
    }
}
