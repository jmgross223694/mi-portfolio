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
    fechaActual = new Date();
    añoActual = fechaActual.getYear();
    mesActual = fechaActual.getMonth();
    diaActual = fechaActual.getDay();

    añoNac = 1994;
    mesNac = 6;
    diaNac = 3;

    edad = añoActual - añoNac - 1;

    if (mesActual == mesNac && diaActual >= diaNac) {
        edad = edad + 1;
    }
    else if (mesActual > mesNac) {
        edad = edad + 1;
    }

    document.getElementById('parrafoBiografia').innerHTML = edad;
}