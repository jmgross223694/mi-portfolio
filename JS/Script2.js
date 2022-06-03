$(function () {
    calcularEdad();
});

const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')

targets.forEach(target => {

    target.addEventListener('click', () => {

        content.forEach(c => {
            c.classList.remove('active')
        })

        const t = document.querySelector(target.dataset.target)
        t.classList.add('active')

    })

})

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

