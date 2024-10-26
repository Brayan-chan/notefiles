<?php require_once 'Views/template/header.php'; ?>
<div class="app-content">
    <div class="content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="row">
                            <div class="col">
                                <div class="top-functions d-flex justify-content-between p-3 mx-3">
                                    <button onclick="applyFormat('bold')">
                                        <i class="material-icons">
                                            format_bold
                                        </i>
                                    </button>
                                    <button onclick="applyFormat('italic')">
                                        <i class="material-icons">
                                            format_italic
                                        </i>
                                    </button>
                                    <button onclick="applyFormat('underline')">
                                        <i class="material-icons">
                                            format_underlined
                                        </i>
                                    </button>
                                    <button onclick="applyFormat('strikethrough')">
                                        <i class="material-icons">
                                            format_strikethrough
                                        </i>
                                    </button>
                                    <button onclick="toggleColorPicker()" id="colorPickerButton">
                                        <i class="material-icons">
                                            title
                                        </i>
                                        <div class="color-indicator" id="colorIndicator"></div>
                                    </button>
                                    <button>
                                        <i class="material-icons">
                                            format_color_fill
                                        </i>
                                    </button>
                                    <button>
                                        <i class="material-icons">
                                            format_color_reset
                                        </i>
                                    </button>
                                    <button onclick="applyAlign('justifyLeft')">
                                        <i class="material-icons">
                                            format_align_left
                                        </i>
                                    </button>
                                    <button onclick="applyAlign('justifyCenter')">
                                        <i class="material-icons">
                                            format_align_center
                                        </i>
                                    </button>
                                    <button onclick="applyAlign('justifyRight')">
                                        <i class="material-icons">
                                            format_align_right
                                        </i>
                                    </button>
                                    <button onclick="applyAlign('justifyFull')">
                                        <i class="material-icons">
                                            format_align_justify
                                        </i>
                                    </button>
                                    <button>
                                        <i class="material-icons">
                                            format_list_bulleted
                                        </i>
                                    </button>
                                    <button>
                                        <i class="material-icons">
                                            format_list_numbered
                                        </i>
                                    </button>
                                    <button>
                                        <i class="material-icons">
                                            checklist_rtl
                                        </i>
                                    </button>
                                    <button onclick="addLink()">
                                        <i class="material-icons">
                                            add_link
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="note-container" class="note-content">
        <div class="page">
            <div class="page-content" contenteditable="true" id="editor">
                <!-- Div para el editor -->
            </div>
        </div>
    </div>
    <!-- Color picker interface -->
    <div class="color-picker" id="colorPicker">
        <div class="color-grid" id="colorGrid">
            <!-- Color cells will be dynamically added here -->
        </div>
        <div class="custom-section">
            <span class="custom-label">PERSONALIZADO</span>
            <button class="custom-button" onclick="openCustomColorPicker()">
                <i class="material-icons">add</i>
            </button>
            <button class="custom-button" onclick="activateEyedropper()">
                <i class="material-icons">colorize</i>
            </button>
        </div>
    </div>
    <!-- Custom color picker interface -->
    <div id="customColorPicker">
        <div id="colorGradient">
            <div id="colorSelector"></div>
        </div>
        <input type="range" id="colorSlider" min="0" max="360" value="0">
        <div id="customColorInputs">
            <div>
                <label for="hexInput">Hex:</label>
                <input type="text" id="hexInput" maxlength="7">
            </div>
            <div>
                <label for="rInput">R:</label>
                <input type="number" id="rInput" min="0" max="255">
            </div>
            <div>
                <label for="gInput">G:</label>
                <input type="number" id="gInput" min="0" max="255">
            </div>
            <div>
                <label for="bInput">B:</label>
                <input type="number" id="bInput" min="0" max="255">
            </div>
        </div>
        <div class="color-preview" id="colorPreview"></div>
        <div id="customColorButtons">
            <button onclick="cancelCustomColor()">Cancelar</button>
            <button onclick="acceptCustomColor()">Aceptar</button>
        </div>
    </div>
    <!-- Corregir el tamaño del card con js, eliminar todas las clases-->
    <div class="card position-fixed align-content-stretch bottom-0 start-50 translate-middle-x w-25 sidebar-hidden w-75"><!-- Cuando el sidebar se muestre se calcula el tamaño del card-->
        <div class="row">
            <div class="col">
                <div class="bottom-functions d-flex justify-content-between p-3 mx-3">
                    <label for="image-upload" id="image-upload-label">
                        <button onclick="addImage()">
                            <i class="material-icons">
                                image
                            </i>
                        </button>
                    </label>
                    <button>
                        <i class="material-icons">
                            format_italic
                        </i>
                    </button>
                    <button>
                        <i class="material-icons">
                            format_underlined
                        </i>
                    </button>
                    <button>
                        <i class="material-icons">
                            format_strikethrough
                        </i>
                    </button>
                    <button>
                        <i class="material-icons">
                            format_color_text
                        </i>
                    </button>
                    <button>
                        <i class="material-icons">
                            format_color_fill
                        </i>
                    </button>
                    <button>
                        <i class="material-icons">
                            format_color_reset
                        </i>
                    </button>
                    <button>
                        <i class="material-icons">
                            format_align_left
                        </i>
                    </button>
                    <button>
                        <i class="material-icons">
                            format_align_center
                        </i>
                    </button>
                    <button>
                        <i class="material-icons">
                            format_align_right
                        </i>
                    </button>
                    <button>
                        <i class="material-icons">
                            format_align_justify
                        </i>
                    </button>
                    <button>
                        <i class="material-icons">
                            format_list_bulleted
                        </i>
                    </button>
                    <button>
                        <i class="material-icons">
                            format_list_numbered
                        </i>
                    </button>
                    <button>
                        <i class="material-icons">
                            checklist_rtl
                        </i>
                    </button>
                    <button>
                        <i class="material-icons">
                            add_link
                        </i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
<?php require_once 'Views/template/footer.php'; ?>