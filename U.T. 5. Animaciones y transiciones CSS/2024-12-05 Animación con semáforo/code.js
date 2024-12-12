document.addEventListener('DOMContentLoaded', setup);


function setup(_) {
    turnOnTrafficLight();

    // car 1
    document.querySelector('.traffic-light').addEventListener('lightredon', _ => {
        document.querySelector('.car-1').classList.remove('car-running');
    });

    document.querySelector('.traffic-light').addEventListener('lightgreenon', _ => {
        document.querySelector('.car-1').classList.add('car-running');
    });

    // car 2
    document.querySelector('.traffic-light').addEventListener('lightredon', _ => {
        document.querySelector('.car-2').classList.remove('car-running');
    });

    document.querySelector('.traffic-light').addEventListener('lightgreenon', _ => {
        document.querySelector('.car-2').classList.add('car-running');
    });
}


function turnOnTrafficLight() {
    setupCycle();
    setInterval(setupCycle, 9000);

    function setupCycle() {
        turnOnLight('red');
        turnOffLight('orange');
        turnOffLight('green');

        setTimeout(
            () => {
                turnOffLight('red');
                turnOffLight('orange');
                turnOnLight('green');
            }
            , 4000
        );

        setTimeout(
            () => {
                turnOffLight('green');
                turnOffLight('red');
                turnOnLight('orange');
            }
            , 8000
        );
    }

}


function turnOnLight(color) {
    const nLight = document.querySelector(`.traffic-light>.light-${color}`);
    nLight.classList.add('light-on');

    const nTrafficLight = document.querySelector('.traffic-light');
    nTrafficLight.dispatchEvent(new CustomEvent(`light${color}on`));
}


function turnOffLight(color) {
    const nLight = document.querySelector(`.traffic-light>.light-${color}`);
    nLight.classList.remove('light-on');
}