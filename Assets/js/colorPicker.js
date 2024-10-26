const colors = [
    ['#000000', '#434343', '#666666', '#999999', '#b7b7b7', '#cccccc', '#d9d9d9', '#efefef', '#f3f3f3', '#ffffff'],
    ['#980000', '#ff0000', '#ff9900', '#ffff00', '#00ff00', '#00ffff', '#4a86e8', '#0000ff', '#9900ff', '#ff00ff'],
    ['#e6b8af', '#f4cccc', '#fce5cd', '#fff2cc', '#d9ead3', '#d0e0e3', '#c9daf8', '#cfe2f3', '#d9d2e9', '#ead1dc'],
    ['#dd7e6b', '#ea9999', '#f9cb9c', '#ffe599', '#b6d7a8', '#a2c4c9', '#a4c2f4', '#9fc5e8', '#b4a7d6', '#d5a6bd'],
    ['#cc4125', '#e06666', '#f6b26b', '#ffd966', '#93c47d', '#76a5af', '#6d9eeb', '#6fa8dc', '#8e7cc3', '#c27ba0'],
    ['#a61c00', '#cc0000', '#e69138', '#f1c232', '#6aa84f', '#45818e', '#3c78d8', '#3d85c6', '#674ea7', '#a64d79'],
    ['#85200c', '#990000', '#b45f06', '#bf9000', '#38761d', '#134f5c', '#1155cc', '#0b5394', '#351c75', '#741b47'],
    ['#5b0f00', '#660000', '#783f04', '#7f6000', '#274e13', '#0c343d', '#1c4587', '#073763', '#20124d', '#4c1130']
];

let selectedColor = '#000000';

function createColorGrid() {
    const colorGrid = document.getElementById('colorGrid');
    if (!colorGrid) {
        console.error('Color grid element not found');
        return;
    }
    colors.forEach(row => {
        row.forEach(color => {
            const cell = document.createElement('button');
            cell.className = 'color-cell';
            cell.style.backgroundColor = color;
            cell.onclick = () => selectColor(color);
            colorGrid.appendChild(cell);
        });
    });
}

function selectColor(color) {
    selectedColor = color;
    updateColorIndicator();
    updateSelectedCell();
    applyColorToSelection(color);
    toggleColorPicker();
}

function updateColorIndicator() {
    const colorIndicator = document.getElementById('colorIndicator');
    if (colorIndicator) {
        colorIndicator.style.backgroundColor = selectedColor;
    }
}

function updateSelectedCell() {
    document.querySelectorAll('.color-cell').forEach(cell => {
        cell.classList.remove('selected');
        if (cell.style.backgroundColor === selectedColor) {
            cell.classList.add('selected');
        }
    });
}

function toggleColorPicker() {
    const picker = document.getElementById('colorPicker');
    const button = document.getElementById('colorPickerButton');
    if (picker && button) {
        const buttonRect = button.getBoundingClientRect();
        picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
        picker.style.top = `${buttonRect.bottom}px`;
        picker.style.left = `${buttonRect.left}px`;
    }
}

function applyColorToSelection(color) {
    document.execCommand('foreColor', false, color);
}

function openCustomColorPicker() {
    const customPicker = document.getElementById('customColorPicker');
    if (customPicker) {
        customPicker.style.display = 'block';
        updateCustomColorPicker(selectedColor);
    }
}

function updateCustomColorPicker(color) {
    const rgb = hexToRgb(color);
    document.getElementById('hexInput').value = color;
    document.getElementById('rInput').value = rgb.r;
    document.getElementById('gInput').value = rgb.g;
    document.getElementById('bInput').value = rgb.b;
    document.getElementById('colorPreview').style.backgroundColor = color;
    // Update gradient and slider (complex color conversion logic needed)
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function cancelCustomColor() {
    const customPicker = document.getElementById('customColorPicker');
    if (customPicker) {
        customPicker.style.display = 'none';
    }
}

function acceptCustomColor() {
    const hexInput = document.getElementById('hexInput');
    if (hexInput) {
        const hex = hexInput.value;
        selectColor(hex);
        document.getElementById('customColorPicker').style.display = 'none';
    }
}

function activateEyedropper() {
    if (!window.EyeDropper) {
        alert('Your browser does not support the EyeDropper API');
        return;
    }

    const eyeDropper = new EyeDropper();
    eyeDropper.open().then(result => {
        selectColor(result.sRGBHex);
    }).catch(e => {
        console.error(e);
    });
}

// Wait for the DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the color grid and set the default color
    createColorGrid();
    updateColorIndicator();
    updateSelectedCell();

    // Add event listeners for custom color picker
    const colorGradient = document.getElementById('colorGradient');
    if (colorGradient) {
        colorGradient.addEventListener('click', function(e) {
            // Update color based on click position (complex color calculation logic needed)
        });
    }

    const colorSlider = document.getElementById('colorSlider');
    if (colorSlider) {
        colorSlider.addEventListener('input', function(e) {
            // Update gradient based on hue (complex color calculation logic needed)
        });
    }

    ['hexInput', 'rInput', 'gInput', 'bInput'].forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', function(e) {
                // Update color preview and other inputs based on the changed input
                // (complex color conversion logic needed)
            });
        }
    });
});