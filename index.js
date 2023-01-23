'use strict'


// Function for the cookie-banner.
    window.addEventListener("load", function(){
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#edeff5",
                "text": "#838391"
            },
            "button": {
                "background": "#4b81e8"
            }
        },
        "theme": "edgeless",
        "content": {
            "message": "Wir verwenden Cookies auf der Website, um Ihren Besuch effizienter zu machen und Ihnen Benutzerfreundlichkeit bieten zu können.",
            "dismiss": "OK",
            "link": "Informationen",
            "href": href= "Datenschutzerklaerung.html"
        }
    })});
