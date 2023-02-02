'use strict'
import React from 'react'
import ReaDOM from 'react-dom';
import './styles.css';



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
            /*just looked in the parents element 'cardHeader' */
            const cardIcon = cardHeader.querySelector(card-toggle-icon)

            /* sets the arrow down or up */
            cardBody.classList.toggle('d-none')
            if(cardBody.classList.contains('d-none')){
                cardIcon.ClassList.remove('fa-angle-double-down')
                cardIcon.ClassList.add('fa-angle-double-right')
            }
        })
    }
})

/* javascript jquery animations */
function Welcome(props){
    return<h1>Hello, {props.name}, {props.nachname}</h1>
}

const element = <Welcome name = "Dennis" nachname = "Schaefer" />;


class Clock extends React.Component{
    render(){
        return(
            <div>
                <h1>Aktuelle Uhrzeit: newDate() </h1>
            </div>
        )
    }

}

ReactDOM.render(
    element,
    document.getElementById('root')
)
