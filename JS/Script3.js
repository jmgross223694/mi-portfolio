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