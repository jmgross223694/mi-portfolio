$(function () {
    calcularEdad();
    calcularEdadCompuGross();
    cargarProyectos();
});

function CerrarMenu() {
    document.getElementById('btn-menu').checked = false;
}               

function calcularEdad() {
    var fechaActual = new Date();

    var anioActual = fechaActual.getFullYear(); //A�o (AAAA)
    var mesActual = fechaActual.getMonth() + 1; //Mes (0-11)
    var diaActual = fechaActual.getDate(); //D�a (1-31)

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

function calcularEdadCompuGross() {
    var fechaActual = new Date();

    var anioActual = fechaActual.getFullYear(); //A�o (AAAA)
    var mesActual = fechaActual.getMonth() + 1; //Mes (0-11)
    var diaActual = fechaActual.getDate(); //D�a (1-31)

    var anioNac = 2013;
    var mesNac = 5;
    var diaNac = 2;

    var edad = anioActual - anioNac - 1;

    if (mesActual == mesNac && diaActual >= diaNac) {
        edad = edad + 1;
    }
    else if (mesActual > mesNac) {
        edad = edad + 1;
    }

    $('#edadCompuGross').text(edad);
}

function cargarProyectos() {
    $.getJSON('DB/projects.json', function (data) { 
        var proyectosContainer = $('#projectsContainer'); 
        data.forEach(function (proyecto) { 
            var cardHtml = `<div class="col-md-4">
                                <a href="${proyecto.url}">
                                    <div class="card mb-4"> 
                                        <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.titulo}">
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    ${proyecto.titulo}
                                                </h5>
                                                <p class="card-text description">
                                                    ${proyecto.descripcion}
                                                </p>
                                                <p class="card-text technologies">
                                                    ${proyecto.technologies}
                                                </p>
                                            </div>
                                    </div>
                                </a>
                            </div>`; 
            proyectosContainer.append(cardHtml); 
        }); 
    });
}