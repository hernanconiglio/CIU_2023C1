var botonTema = document.querySelector("#botonModo");
var modoActual = document.querySelector("html").getAttribute("data-bs-theme")

botonTema.addEventListener("click", function () {
    if (modoActual == "light") {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        modoActual = "dark";
    } else {
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        modoActual = "light";
    }
});
