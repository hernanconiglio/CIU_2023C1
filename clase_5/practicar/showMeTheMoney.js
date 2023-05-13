var botones = document.querySelectorAll('button');
var imagenes = document.querySelectorAll('img');

for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', function() {
        this.nextElementSibling.classList.toggle("oculto");
    });
}

for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('click', function() {
        this.classList.toggle("oculto");
    });
}  
