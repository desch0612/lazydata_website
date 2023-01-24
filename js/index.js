'use strict'

/*Häufig gestellte Fragen: question 1*/

document.addEventListener('DOMContentLoaded', () => {
    const helpElements = document.querySelectorAll('[data-help]')
    for(const helpElement of helpElements){
        helpElement.addEventListener('click', (event) => {
            event.preventDefault()

            const helpText = helpElement.attributes[data-help].value
            alert(helpText)
        })
    }

    const cardHeaders = document.getElementsByClassName('card-header')

    for(const cardHeader of cardHeaders){
        cardHeader.addEventListener('click', (event) => {
            const cardBody = cardHeader.nextElementSibling

            cardBody.classList.toggle('d-none')

        })
    }
})