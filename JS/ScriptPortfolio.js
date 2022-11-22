// JavaScript source code
$(function () {
    calcularEdad();
});

const sectionPresentacion = document.querySelector("#section-presentacion");
const sectionProyectos = document.querySelector("#section-proyectos");
const sectionCompuGross = document.querySelector("#section-compugross");
const checkboxBtnMenu = document.querySelector("#btn-menu");
const idTituloPagina = document.querySelector("#tituloPagina");

function mostrarPresentacion() {
    OcultarOtrasSection();
    OcultarMenuLateral();
    $('#tituloPagina').text("Qui\u00E9n soy?");
    sectionPresentacion.style.display = "block";
}

function mostrarProyectos() {
    OcultarOtrasSection();
    OcultarMenuLateral();
    $('#tituloPagina').text("Proyectos");
    idTituloPagina.classList
    sectionProyectos.style.display = "block";
}

function mostrarCompuGross() {
    OcultarOtrasSection();
    OcultarMenuLateral();
    $('#tituloPagina').text("CompuGross");
    sectionCompuGross.style.display = "block";
}

function OcultarMenuLateral() {
    checkboxBtnMenu.checked = false;
}

function OcultarOtrasSection() {
    sectionPresentacion.style.display = "none";
    sectionProyectos.style.display = "none";
    sectionCompuGross.style.display = "none";
}

function calcularEdad() {
    var fechaActual = new Date();

    var anioActual = fechaActual.getFullYear(); //Año (AAAA)
    var mesActual = fechaActual.getMonth() + 1; //Mes (0-11)
    var diaActual = fechaActual.getDate(); //Día (1-31)

    var anioNac = 1994;
    var mesNac = 6;
    var diaNac = 3;

    var edad = anioActual - anioNac - 1;

    if (mesActual == mesNac && diaActual >= diaNac) {
        edad = edad + 1;
    }
    else if (mesActual > mesNac) {
        edad = edad + 1;
    }

    $('#edadActual').text(edad);
}