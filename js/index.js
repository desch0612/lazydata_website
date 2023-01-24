'use strict'

/*Häufig gestellte Fragen: question 1*/
document.addEventListener("DOMContentLoaded", () => {
    const Button = document.getElementById('question_button1')

    Button.addEventListener('click', () => {
        /*Prevents the default case from being prevented*/
        event.preventDefault()
    })
})

/*question 2*/
document.addEventListener('DOMContentLoaded', () =>{
    const Button = document.getElementById('question_button2')

    Button.addEventListener('click', () => {
        /*Prevents the default case from being prevented*/
        event.preventDefault()
    })
})

/*question 3*/
document.addEventListener('DOMContentLoaded', () => {
    const Button = document.getElementById('question_button3')

    Button.addEventListener('click', () => {
        /*Prevents the default case from being prevented*/
        event.preventDefault()
    })
})

/*The questions should be able to be folded in or out. That is what this function is for.*/
document.addEventListener('DOMContentLoaded', () => {
    const cardHeaders = document.getElementsByClassName('card-header')
    for(const cardHeader of cardHeaders){
        cardHeader.addEventListener('click', (event) => {

            cardbody.classList.add('d-none')

        })
    }
})
