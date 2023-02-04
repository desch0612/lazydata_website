'use strict'

class CookieBanner extends HTMLElement{
    constructor(){
        super();

        const template = document.createElement('template');
        template.innerHTML =
            <div class="cookie-banner">
                <h3>Cookie akzeptieren</h3>
                <p>Wir verwenden cookies weil das so ist</p>
                <p class = "cookie-source">
                    <label><input type="checkbox" name="required" disabled checked>Notwendige</label>
                    <label><input type="checkbox" name="statistics" > Statistiken </label>
                    <label><input type="checkbox" name="required" > Marketing </label>

                </p>
                <button class = "confirm">Auswahl bestätigen</button>
                <button class="green">Alle bestätigen</button>
            </div>
    }
}
customElements.define('cookie-banner', CookieBanner);