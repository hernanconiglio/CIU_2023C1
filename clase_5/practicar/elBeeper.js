var botonBeep = document.querySelector('#btnBeep');
var body = document.querySelector('body');
var seEjecutaEnEvento = function () {
    body.insertAdjacentHTML("beforeend", "<p>Hicieron click en el botón</p>");
    body.classList.toggle("color");
};
botonBeep.addEventListener('click', seEjecutaEnEvento);

