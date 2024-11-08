document.addEventListener('DOMContentLoaded', setup);

function setup(_) {
    setupNumberButtons();
}

function setupNumberButtons() {
    // const nSeven = document.getElementById('tDivSeven');
    // nSeven.onclick = addNumberToDisplay;

    // const nSeven = document.querySelector('#tDivSeven');
    // nSeven.addEventListener('click', addNumberToDisplay);

    const buttons = document.querySelectorAll('.number');
    // for (const button of buttons) {
    //     button.addEventListener('click', addNumberToDisplay);
    // }
    Array.from(buttons).forEach(button => button.addEventListener('click', addNumberToDisplay));
}


function addNumberToDisplay(e) {
    const number = parseInt(e.currentTarget.textContent); // textContent, innerText, innerHTML
    document.getElementById('tDivDisplay').textContent = number;
}