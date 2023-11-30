let menuVisible = false;

//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

//Oculto el menu una vez que selecciono una opcion
function seleccionar() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  let skills = document.getElementById("skills");
  let distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByName("progreso");
    habilidades[0].classList.add("soporteenpc");
    habilidades[1].classList.add("mantenimientopc");
    habilidades[2].classList.add("analisiscmdb");
    habilidades[3].classList.add("dedicacion");
    habilidades[4].classList.add("comunicacion");
    habilidades[5].classList.add("trabajo");
  }
}

//Detecto el scrolling para aplicar la animacion de la barra de las habilidades
window.onscroll = function () {
  efectoHabilidades();
};
