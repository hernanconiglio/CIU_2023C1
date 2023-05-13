var img = document.querySelector('img');
let clickApretado = false;

document.addEventListener('mousedown', function() {
    clickApretado = true;
});

document.addEventListener('mouseup', function() {
    clickApretado = false;
});

document.addEventListener('mousemove', function(evento) {
    if (clickApretado) {
        img.style.top = evento.clientY + 'px';
        img.style.left = evento.clientX + 'px';
        body.style.cursor = "none";
    }
});

var playa = document.querySelector('#magic');


playa.addEventListener('mouseover', function() {
    this.style.visibility = 'hidden';
});

playa.addEventListener('mouseout', function() {
    this.style.visibility = 'visible';
});