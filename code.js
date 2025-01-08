var header = document.getElementById('Header');
var sobremi = document.getElementById('sobremi');
var trabajos = document.getElementById('trabajos');
var contacto = document.getElementById('contacto');
var cv = document.getElementById('cv');


document.addEventListener("scroll", function(){
    var scroll = window.scrollY;
    if(scroll > 10){
        header.classList.add('scrolledFondo');
        sobremi.classList.add('scrolledTexto');
        trabajos.classList.add('scrolledTexto');
        contacto.classList.add('scrolledTexto');
        cv.classList.add('scrolledTexto');
    }else{
        header.classList.remove('scrolledFondo');
        sobremi.classList.remove('scrolledTexto');
        trabajos.classList.remove('scrolledTexto');
        contacto.classList.remove('scrolledTexto');
        cv.classList.remove('scrolledTexto');
    }
})  