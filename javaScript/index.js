const loader = document.getElementById("loaderPagina")
window.addEventListener("load", setTimeout(desaparecer, 400), );
//setTimeout(display_container, 4000)
function desaparecer(){
    loader.classList.add(desaparecer);

}
function display_container(){
    loader.style.display="none";

}

