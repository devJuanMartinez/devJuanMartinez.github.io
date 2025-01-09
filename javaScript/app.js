let desplegar = document.querySelectorAll('#desplegar');
let oculto = document.querySelectorAll('#oculto');
let mostrarOcultarNav = document.getElementById('mostrarOcultarNav');
let nav = document.getElementById('nav');



let vanDesplegar = true;
for (let x = 0; x < desplegar.length; x++){
    desplegar[x].addEventListener('click', function(){
        if (vanDesplegar == true){
            oculto[x].classList.add('mostrar')
            oculto[x].classList.remove('oculto');

            desplegar[x].classList.add('arriba');
            desplegar[x].classList.remove('abajo');

            vanDesplegar = false;
        } else{

            oculto[x].classList.remove('mostrar')
            oculto[x].classList.add('oculto');

            desplegar[x].classList.remove('arriba');
            desplegar[x].classList.add('abajo');

            vanDesplegar = true;
        }
    });
}

vanNav = true;
mostrarOcultarNav.addEventListener('click', function(){
    if (vanNav == true){
        nav.classList.remove('ocultarSeccionNav');
        vanNav = false;
    } else{
        nav.classList.add('ocultarSeccionNav');
        vanNav = true;
    }
})