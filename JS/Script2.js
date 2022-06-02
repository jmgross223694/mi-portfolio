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
    var añoActual = fechaActual.getYear();
    var mesActual = fechaActual.getMonth();
    var diaActual = fechaActual.getDay();

    var añoNac = 1994;
    var mesNac = 6;
    var diaNac = 3;

    var edad = añoActual - 1994 - 1;

    if (mesActual == mesNac && diaActual >= diaNac) {
        edad = edad + 1;
    }
    else if (mesActual > mesNac) {
        edad = edad + 1;
    }

    document.getElementById('parrafoBiografia').innerHTML = edad;
}