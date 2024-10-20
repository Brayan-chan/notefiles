<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Responsive Admin Dashboard Template">
    <meta name="keywords" content="admin,dashboard">
    <meta name="author" content="stacks">

    <!-- Title -->
    <title><?php echo $data['title']; ?></title>

    <!-- Styles -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">
    <link href="<?php echo BASE_URL . 'Assets/plugins/bootstrap/css/bootstrap.min.css'; ?>" rel="stylesheet">
    <link href="<?php echo BASE_URL . 'Assets/plugins/perfectscroll/perfect-scrollbar.css'; ?>" rel="stylesheet">
    <link href="<?php echo BASE_URL . 'Assets/plugins/pace/pace.css'; ?>" rel="stylesheet">
    <link href="<?php echo BASE_URL . 'Assets/plugins/highlight/styles/github-gist.css'; ?>" rel="stylesheet">
    <link href="<?php echo BASE_URL . 'Assets/plugins/fullcalendar/lib/main.min.css'; ?>" rel="stylesheet">
    <link href="<?php echo BASE_URL . 'Assets/plugins/summernote/summernote-lite.min.css'; ?>" rel="stylesheet">

    <!-- Theme Styles -->
    <link href="<?php echo BASE_URL . 'Assets/css/main.min.css'; ?>" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="<?php echo BASE_URL . 'Assets/plugins/DataTables/datatables.min.css'; ?>">
    <link href="<?php echo BASE_URL . 'Assets/css/dashboard.css'; ?>" rel="stylesheet">
    <link href="<?php echo BASE_URL . 'Assets/css/comentarios.css'; ?>" rel="stylesheet">
    <link href="<?php echo BASE_URL . 'Assets/css/cajaComentarios.css'; ?>" rel="stylesheet">
    <link href="<?php echo BASE_URL . 'Assets/css/mobile.css'; ?>" rel="stylesheet">

    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo BASE_URL . 'Assets/images/favicon.ico'; ?>" />
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo BASE_URL . 'Assets/images/notefiles.png'; ?>" />
</head>

<body>
    <div class="app align-content-stretch d-flex flex-wrap">
        <div class="app-sidebar">
            <div class="logo">
                <!--CREAR ISSUE DE COMO MOSTRAR EL NOMBRE DEL PROYECTO COMPLETO -->
                <a href="#" class="logo-icon"><span class="logo-text">NOTEFILES</span></a>
                <div class="sidebar-user-switcher user-activity-online">
                    <a href="#">
                        <img src="<?php echo BASE_URL . 'Assets/images/logo.png'; ?>">
                        <span class="activity-indicator"></span>
                        <!-- ABRIR ETIQUETA DE PHP PARA MOSTRAR EL NOMBRE DEL USUARIO Y EL CORREO -->
                        <span class="user-info-text">Usuario<br><span class="user-state-info">CorreoUsuario</span></span>
                    </a>
                </div>
            </div>
            <div class="app-menu">
                <ul class="accordion-menu">
                    <li>
                        <a href="#"><i class="material-icons">home</i>Inicio</a>
                    </li>
                    <li class="sidebar-title">
                        Apps
                    </li>
                    <li class=""> <!-- Se puede agregar la clase active-page para que el icono aparezca activo -->
                        <!-- Mandamos a llamar al controlador asistencias -->
                        <a href="#"><i class="material-icons">fact_check</i>Asistencias</a>
                    </li>
                    <li>
                        <!-- Mandamos a llamar al controlador eventos -->
                        <a href="<?php echo BASE_URL . 'admin'; ?>"><i class="material-icons">theater_comedy</i>Eventos<span class="badge rounded-pill badge-danger float-end">87<!-- Agregar el número de eventos --></span></a>
                    </li>
                    <li>
                        <a href="<?php echo BASE_URL . 'cartelera'; ?>"><i class="material-icons">movie</i>Cartelera</a>
                    </li>
                    <li>
                        <a href="<?php echo BASE_URL . 'galerias'; ?>"><i class="material-icons">collections</i>Galerías</a>
                    </li>
                    <li>
                        <!-- Mandamos a llamar al controlador reportes -->
                        <a href="<?php echo BASE_URL . 'reportes'; ?>"><i class="material-icons">article</i>Reportes</a>
                    </li>
                    <li>
                        <!-- Mandamos a llamar al controlador ranking -->
                        <a href="#"><i class="material-icons">hotel_class</i>Ranking</a>
                    </li>
                    <li>
                        <!-- Mandamos a llamar al controlador estadisticas -->
                        <a href="#"><i class="material-icons">leaderboard</i>Estádisticas</a>
                    </li>
                    <li>
                        <!-- Mandamos a llamar al controlador comentarios -->
                        <a href="<?php echo BASE_URL . 'comentarios'; ?>"><i class="material-icons">comment</i>Comentarios<span class="badge rounded-pill badge-success float-end">14</span></a>
                    </li>
                    <li>
                        <!-- El class="active" es para que aparezca el menu activo -->
                        <a href="<?php echo BASE_URL . 'usuarios'; ?>" class="active"><i class="material-icons">person</i>Usuarios</a>
                    </li>
                    <li>
                        <a href="<?php echo BASE_URL . 'principal/salir'; ?>" class="exit-mobile"><i class="material-icons">logout</i>Cerrar sesión</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="app-container">
            <div class="search">
                <form>
                    <input class="form-control" type="text" placeholder="Type here..." aria-label="Search">
                </form>
                <a href="#" class="toggle-search"><i class="material-icons">close</i></a>
            </div>
            <div class="app-header">
                <nav class="navbar navbar-light navbar-expand-lg">
                    <div class="container-fluid">
                        <div class="navbar-nav" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link hide-sidebar-toggle-button" href="#"><i class="material-icons">first_page</i></a>
                                </li>
                                <li class="nav-item dropdown hidden-on-mobile">
                                    <a class="nav-link dropdown-toggle" href="#" id="addDropdownLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="material-icons">add</i>
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="addDropdownLink">
                                        <li><a class="dropdown-item" href="#">New Workspace</a></li>
                                        <li><a class="dropdown-item" href="#">New Board</a></li>
                                        <li><a class="dropdown-item" href="#">Create Project</a></li>
                                    </ul>
                                </li>
                            </ul>

                        </div>
                        <div class="d-flex">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link toggle-search" href="#"><i class="material-icons">search</i></a>
                                </li>
                                <li class="nav-item hidden-on-mobile">
                                    <a class="nav-link nav-notifications-toggle" id="notificationsDropDown" href="#" data-bs-toggle="dropdown"><i class="material-icons" id="settingsIcon">settings</i></a>
                                    <div class="dropdown-menu dropdown-menu-end notifications-dropdown" aria-labelledby="notificationsDropDown">
                                        <h6 class="dropdown-header">Perfil</h6>
                                        <div class="notifications-dropdown-list">
                                            <a href="<?php echo BASE_URL . 'principal/perfil'; ?>">
                                                <div class="notifications-dropdown-item">
                                                    <div class="notifications-dropdown-item-image">
                                                        <span class="notifications-badge">
                                                            <i class="material-icons">person</i>
                                                        </span>
                                                    </div>
                                                    <div class="notifications-dropdown-item-text">
                                                        <p>Perfil</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="<?php echo BASE_URL . 'principal/salir'; ?>">
                                                <div class="notifications-dropdown-item">
                                                    <div class="notifications-dropdown-item-image">
                                                        <span class="notifications-badge">
                                                            <i class="material-icons">logout</i>
                                                        </span>
                                                    </div>
                                                    <div class="notifications-dropdown-item-text">
                                                        <p>Salir</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="app-content">
                <div class="content-wrapper">
                </div>
            </div>
        </div>
    </div>

        
    <script src="<?php echo BASE_URL . 'Assets/js/pages/animaciones.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'Assets/plugins/jquery/jquery-3.5.1.min.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'Assets/plugins/bootstrap/js/popper.min.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'Assets/plugins/bootstrap/js/bootstrap.min.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'Assets/plugins/perfectscroll/perfect-scrollbar.min.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'Assets/plugins/pace/pace.min.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'Assets/plugins/highlight/highlight.pack.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'Assets/plugins/fullcalendar/lib/main.min.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'Assets/plugins/apexcharts/apexcharts.min.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'Assets/js/main.min.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'Assets/js/sweetalert2@11.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'Assets/js/pages/calendar.js'; ?>"></script>
    <script type="text/javascript" src="<?php echo BASE_URL . 'Assets/plugins/DataTables/datatables.min.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'Assets/js/custom.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'Assets/js/vanilla-tilt.js'; ?>"></script>

    <script>
        const base_url = '<?php echo BASE_URL; ?>';
    </script>
    <!-- Verificar si existe el archivo asistencias.js -->
    <?php if (!empty($data['script'])) { ?>
        <script src="<?php echo BASE_URL . 'Assets/js/pages/' . $data['script']; ?>"></script>
    <?php } ?>
</body>

</html>