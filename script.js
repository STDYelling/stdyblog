let ubicacionP = window.pageYOffset;

window.addEventListener("scroll", () => {
    let desplazamiento = window.pageYOffset;
    if (ubicacionP >= desplazamiento) {
        document.getElementsByTagName("nav")[0].style.top = "0px";
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
    ubicacionP = desplazamiento;
})

/* programando el menu */
let enlacesH = document.querySelectorAll(".enlaces-header")[0];
let bandera = true;

document.querySelectorAll(".menu")[0].addEventListener("click", () => {
    enlacesH.classList.toggle("menu2");
    if (bandera) {
        document.querySelectorAll(".menu")[0].style.color="#ffffff";
    }else{
        document.querySelectorAll(".menu")[0].style.color="#000000";
    }
})