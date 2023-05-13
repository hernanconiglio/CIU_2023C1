var parrafos = document.querySelectorAll("p");

for(var i=0;i < parrafos.length;i++){
    parrafos[i].addEventListener("click", function(){
        this.classList.toggle("resaltado");
})};

document.querySelector("input").addEventListener('keydown', function(e) {
    document.querySelector('#code').textContent=e.keyCode
    document.querySelector('#string').textContent=String.fromCharCode(e.keyCode)
});