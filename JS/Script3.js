function calcularEdad() {
    fechaActual = new Date();
    a�oActual = fechaActual.getYear();
    mesActual = fechaActual.getMonth();
    diaActual = fechaActual.getDay();

    a�oNac = 1994;
    mesNac = 6;
    diaNac = 3;

    edad = a�oActual - a�oNac - 1;

    if (mesActual == mesNac && diaActual >= diaNac) {
        edad = edad + 1;
    }
    else if (mesActual > mesNac) {
        edad = edad + 1;
    }

    document.getElementById('parrafoBiografia').innerHTML = edad;
}