function changeFont() {
    const fontFamilySelect = document.getElementById("font-family");
    const selectedFont = fontFamilySelect.value;
    document.execCommand("fontName", false, selectedFont);
}