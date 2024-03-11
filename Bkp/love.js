document.getElementById('numeroInput').addEventListener('keydown', function (event) {
    if (!(event.key === 'Backspace' || event.key === 'Tab' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'Delete' || (event.key >= '0' && event.key <= '9'))) {
        event.preventDefault();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var numeroInput = document.getElementById('numeroInput');

    function validarYRedirigir() {
        var numeroInputValue = numeroInput.value;

        if (numeroInputValue === '') {
            Swal.fire({
                icon: 'error',
                title: 'No ha ingresado ning\xFAn n\xFAmero',
                text: 'El campo de n\xFAmero est\xE1 vac\xEDo.',
                locale: 'es',
                allowEscapeKey: false,
                allowOutsideClick: false,
            });
        }
        else if (numeroInputValue === '87') {
            window.location.href = 'love2.html';
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'El n\xFAmero ' + numeroInputValue + ' es incorrecto',
                text: 'Segu\xED intentando...',
                locale: 'es',
                allowEscapeKey: false,
                allowOutsideClick: false,
            });
            numeroInput.value = '';
        }
    }

    numeroInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            validarYRedirigir();
        }
    });
    ingresarButton.addEventListener('click', function () {
        validarYRedirigir();
    });
});