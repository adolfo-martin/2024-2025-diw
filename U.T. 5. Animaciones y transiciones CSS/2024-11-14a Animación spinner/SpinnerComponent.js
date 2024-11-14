export default class SpinnerComponent extends HTMLElement {
    _template = `
        <style>
            *,
            *::before,
            *::after {
                box-sizing: border-box;
                padding: 0;
                margin: 0;
            }

            .container {
                position: absolute;
                width: 100vw;
                height: 100vw;
                top: 0;
                left: 0;
                display: grid;
                place-items: center;
                z-index: 1000;
                background-color: #11111180;
            }

            .spinner {
                margin: auto;
                width: 100px;
                height: 100px;
                border: none;
                border-top: solid 10px red;
                border-right: solid 10px transparent;
                border-radius: 50%;
                position: relative;
                overflow: hidden;
                display: grid;
                place-items: center;
                z-index: 3;
                animation: spin 1000ms linear 0s infinite;
            }

            .spinner:focus {
                outline: none;
            }

            .spinner::before {
                content: "";
                position: absolute;
                width: inherit;
                height: inherit;
                border-top: solid 15px green;
                border-left: solid 15px green;
                border-right: solid 15px transparent;
                border-radius: 50%;
                z-index: 2;
            }

            .spinner::after {
                content: "";
                position: absolute;
                width: inherit;
                height: inherit;
                border-top: solid 25px blue;
                border-left: solid 25px blue;
                border-right: solid 25px transparent;
                border-radius: 50%;
                z-index: 1;
            }

            @keyframes spin {
                from {
                    rotate: 0turn;
                }

                to {
                    rotate: 1turn;
                }
            }
        </style>

        <div class="container">
            <dialog class="spinner"></dialog>
        </div>
    `;

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = this._template;
    }

    showSpinner() {
        this._shadowRoot.querySelector('.spinner').showModal();
    }

    closeSpinner() {
        this._shadowRoot.querySelector('.spinner').close();
    }
}

window.customElements.define('spinner-wait', SpinnerComponent);