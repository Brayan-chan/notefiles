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
    <script src="<?php echo BASE_URL . 'Assets/js/colorPicker.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'Assets/js/format.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'Assets/js/aligns.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'Assets/js/addLink.js'; ?>"></script>
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

    <!-- Theme Styles -->
    <link href="<?php echo BASE_URL . 'Assets/css/colorPicker.css'; ?>" rel="stylesheet">
    <link href="<?php echo BASE_URL . 'Assets/css/main.min.css'; ?>" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="<?php echo BASE_URL . 'Assets/plugins/DataTables/datatables.min.css'; ?>">
    <link href="<?php echo BASE_URL . 'Assets/css/dashboard.css'; ?>" rel="stylesheet">
    <link href="<?php echo BASE_URL . 'Assets/css/custom.css'; ?>" rel="stylesheet">
    <link href="<?php echo BASE_URL . 'Assets/css/formats.css'; ?>" rel="stylesheet">
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
                        <a class="new-note-btn" href="#">NUEVA NOTA <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </li>
                    <li class="sidebar-title">
                        Historial
                    </li>
                    <ul class="note-list">
                        <li>
                            <a href="#">
                                <div class="note-item">
                                    <div class="note-icon">
                                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968890.png" alt="Nota Icono">
                                    </div>
                                    <div class="note-details">
                                        <div class="note-title">
                                            Motor Edege
                                        </div>
                                        <div class="note-category ideas">
                                            Ideas
                                        </div>
                                    </div>
                                    <div class="note-date">20 oct →</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="note-item">
                                    <div class="note-icon">
                                        <img src="https://elcomercio.pe/resizer/v2/XZLIR22TE5ECTFSKSYA2UVMFMQ.jpg?auth=b5f6688ab5050fc1a210341f9c54008f76980cb038f537aad97f072232565fb0&width=1200&height=810&quality=90&smart=true" alt="Nota Icono">
                                    </div>
                                    <div class="note-details">
                                        <div class="note-title">
                                            Meta AI
                                        </div>
                                        <div class="note-category tareas">
                                            Tareas
                                        </div>
                                    </div>
                                    <div class="note-date">18 oct →</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="note-item">
                                    <div class="note-icon">
                                        <img src="https://i.pinimg.com/736x/c3/e4/bb/c3e4bb7464bb8d8f57243b4a1dfebfec.jpg" alt="Nota Icono">
                                    </div>
                                    <div class="note-details">
                                        <div class="note-title">
                                            TareasWord
                                        </div>
                                        <div class="note-category tareas">
                                            Tareas
                                        </div>
                                    </div>
                                    <div class="note-date">17 oct →</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="note-item">
                                    <div class="note-icon">
                                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Nota Icono">
                                    </div>
                                    <div class="note-details">
                                        <div class="note-title">
                                            GitHubProjects
                                        </div>
                                        <div class="note-category proyectos">
                                            Proyectos
                                        </div>
                                    </div>
                                    <div class="note-date">10 oct →</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="note-item">
                                    <div class="note-icon">
                                        <img src="https://img.icons8.com/?size=512&id=9OGIyU8hrxW5&format=png" alt="Nota Icono">
                                    </div>
                                    <div class="note-details">
                                        <div class="note-title">
                                            VisualProjects
                                        </div>
                                        <div class="note-category proyectos">
                                            Proyectos
                                        </div>
                                    </div>
                                    <div class="note-date">8 oct →</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="note-item">
                                    <div class="note-icon">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZlkVJk93uK_JWHnKPWR1pqifjtFlwv4aPg&s" alt="Nota Icono">
                                    </div>
                                    <div class="note-details">
                                        <div class="note-title">
                                            MyClassroom
                                        </div>
                                        <div class="note-category tareas">
                                            Tareas
                                        </div>
                                    </div>
                                    <div class="note-date">30 sept →</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="note-item">
                                    <div class="note-icon">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpongnnyMifunqjxbRUe0a-H0FaW_FBmtrQ&s" alt="Nota Icono">
                                    </div>
                                    <div class="note-details">
                                        <div class="note-title">
                                            JiraProjects
                                        </div>
                                        <div class="note-category proyectos">
                                            Proyectos
                                        </div>
                                    </div>
                                    <div class="note-date">28 sept →</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="note-item">
                                    <div class="note-icon">
                                        <img src="https://cdn-icons-png.flaticon.com/512/2875/2875411.png" alt="Nota Icono">
                                    </div>
                                    <div class="note-details">
                                        <div class="note-title">
                                            Workspace
                                        </div>
                                        <div class="note-category tareas">
                                            Tareas
                                        </div>
                                    </div>
                                    <div class="note-date">27 sept →</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <hr>
                    <li class="sidebar-footer">
                        <a class="new-colaborate" href="#">COLABORAR <i class="fa-solid fa-building"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="app-container">
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
                                        <i class="material-icons">book</i><span class="name-note">Nombre de la nota <span class="categoria">Tareas</span></span>
                                    </a>
                                    <!-- Esta lista la utilizaremos para las categorias de nota -->
                                    <ul class="dropdown-menu" aria-labelledby="addDropdownLink">
                                        <li><a class="dropdown-item" href="#">Tareas</a></li>
                                        <li><a class="dropdown-item" href="#">Ideas</a></li>
                                        <li><a class="dropdown-item" href="#">Proyectos</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="d-flex">
                            <ul class="navbar-nav">
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