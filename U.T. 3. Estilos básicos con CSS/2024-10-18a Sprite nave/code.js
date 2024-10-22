document.addEventListener('DOMContentLoaded', inicializar);


function inicializar(_) {
    const intervalo = iniciarMovimientoNave();
    configurarBotonDestruir(intervalo);
}


function iniciarMovimientoNave() {
    let posicion = 0;
    let fotogramaActual = 1;

    const intervalo = setInterval(() => {
        const nNave = document.getElementById('tDivNave');
        posicion -= 100;
        fotogramaActual += 1;

        if (fotogramaActual === 4) {
            posicion = 0;
            fotogramaActual = 1;
        }

        nNave.style.backgroundPositionY = posicion + 'px';
    }, 250);

    return intervalo;
}

/**
 * Configura el botón destruir.
 * @param {number} intervalo - El identificador único del intervalo para poder detenerlo.
 */
function configurarBotonDestruir(intervalo) {
    const nBotonDestruir = document.getElementById('tButDestruir');

    nBotonDestruir.addEventListener('click', _ => {
        clearInterval(intervalo);
        const nNave = document.getElementById('tDivNave');
        nNave.style.backgroundPositionY = '-300px';
    });
}
