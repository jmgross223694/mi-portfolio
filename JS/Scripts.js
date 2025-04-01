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

function cargarProyectos2() { //Inglés
    $.getJSON('DB/projects.json', function (data) {
        var proyectosContainer = $('#projectsContainer');
        var carouselInner = $('<div class="carousel-inner"></div>');

        data.forEach(function (proyecto, index) {
            var activeClass = index === 0 ? 'active' : '';
            var itemHtml = `
                    <div class="carousel-item ${activeClass}">
                        <a href="${proyecto.url}">
                            <div class="card mb-4">
                                <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.titulo}" loading="lazy">
                                <div class="card-body">
                                    <h5 class="card-title">${proyecto.titulo}</h5>
                                    <p class="card-text description">${proyecto.descripcion}</p>
                                    <p class="card-text technologies">${proyecto.technologies}</p>
                                </div>
                            </div>
                        </a>
                    </div>`;
            carouselInner.append(itemHtml);
        });

        var carouselHtml = `
                <div id="projectsCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
                    ${carouselInner.prop('outerHTML')}
                </div>`;

        proyectosContainer.html(carouselHtml);

        // Inicializar el carrusel manualmente después de agregarlo al DOM
        var carouselElement = document.querySelector("#projectsCarousel");
        var carouselInstance = new bootstrap.Carousel(carouselElement, {
            interval: 3000,
            ride: 'carousel',
            pause: false
        });
    });
}

function cargarProyectos() { //Español
    $.getJSON('DB/projects2.json', function (data) {
        var proyectosContainer = $('#projectsContainer2');
        var carouselInner = $('<div class="carousel-inner"></div>');

        data.forEach(function (proyecto, index) {
            var activeClass = index === 0 ? 'active' : '';
            var itemHtml = `
                    <div class="carousel-item ${activeClass}">
                        <a href="${proyecto.url}">
                            <div class="card mb-4">
                                <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.titulo}" loading="lazy">
                                <div class="card-body">
                                    <h5 class="card-title">${proyecto.titulo}</h5>
                                    <p class="card-text description">${proyecto.descripcion}</p>
                                    <p class="card-text technologies">${proyecto.technologies}</p>
                                </div>
                            </div>
                        </a>
                    </div>`;
            carouselInner.append(itemHtml);
        });

        var carouselHtml = `
                <div id="projectsCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
                    ${carouselInner.prop('outerHTML')}
                </div>`;

        proyectosContainer.html(carouselHtml);

        // Inicializar el carrusel manualmente después de agregarlo al DOM
        var carouselElement = document.querySelector("#projectsCarousel");
        var carouselInstance = new bootstrap.Carousel(carouselElement, {
            interval: 3000,
            ride: 'carousel',
            pause: false
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