$(function () {
    calcularEdad();
    calcularEdadCompuGross();
    cargarProyectos();
    cargarProyectos2();
});

function CerrarMenu() {
    document.getElementById('btn-menu').checked = false;
    document.getElementById('btn-menu2').checked = false;
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
    $('#edadActual2').text(edad);
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
    $('#edadCompuGross2').text(edad);
}

function cargarProyectos() {
    $.getJSON('DB/projects.json', function (data) { 
        var proyectosContainer = $('#projectsContainer');
        data.forEach(function (proyecto) { 
            var cardHtml = `<div class="col-md-4">
                                <a href="${proyecto.url}">
                                    <div class="card mb-4"> 
                                        <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.titulo}" loading="lazy">
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

function cargarProyectos2() {
    $.getJSON('DB/projects2.json', function (data) { 
        var proyectosContainer2 = $('#projectsContainer2'); 
        data.forEach(function (proyecto) { 
            var cardHtml = `<div class="col-md-4">
                                <a href="${proyecto.url}">
                                    <div class="card mb-4"> 
                                        <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.titulo}" loading="lazy">
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
            proyectosContainer2.append(cardHtml); 
        }); 
    });
}

function TraducirSitio() {
    // Alternar visibilidad de los botones
    document.getElementById('btnEnglish').classList.toggle('hidden');
    document.getElementById('btnSpanish').classList.toggle('hidden');

    // Listado de elementos en inglés y español
    const elementosEn = [
        document.getElementById('header'),
        document.getElementById('welcome'),
        document.getElementById('projects'),
        document.getElementById('compugross'),
        document.getElementById('about')
    ];

    const elementosEs = [
        document.getElementById('header2'),
        document.getElementById('welcome2'),
        document.getElementById('projects2'),
        document.getElementById('compugross2'),
        document.getElementById('about2')
    ];

    // Alternar visibilidad de elementos en inglés y español
    elementosEn.forEach(el => el.classList.toggle('hidden'));
    elementosEs.forEach(el => el.classList.toggle('hidden'));
}