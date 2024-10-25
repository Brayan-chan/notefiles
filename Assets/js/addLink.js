function addLink() {
    const url = prompt("Ingresa la URL del hipervínculo:");
    if (url) {
        document.execCommand("createLink", false, url);
    }
}