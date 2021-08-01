import { sum, subtraction, division, multiplication } from "./calculator.js";

let output = document.querySelector('.text #output')

let firstNumber = 0;
let operation = null;


document.querySelectorAll('#calculator .number').forEach(button => {
    button.addEventListener('click', event => {
        let value = event.currentTarget.textContent 
        
        if (operation && output.value) {
            output.value += value
        } else {
            output.value += value
        }
    })
})


document.querySelectorAll('#calculator .operation').forEach(button => {
    button.addEventListener('click', event => {
        firstNumber = Number.parseInt(output.value, 10)
        operation = event.currentTarget.dataset.action 
        console.log(operation)
        output.value = null;
    })
})


document.querySelector('.equal').addEventListener('click', event => {
    let secondNumber = Number.parseInt(output.value, 10)

    if (operation === 'sum') {
        output.value = sum(firstNumber, secondNumber)
    } else if (operation === 'subtraction') {
        output.value = subtraction(firstNumber, secondNumber)
    } else if (operation === 'division') {
        output.value = division(firstNumber, secondNumber)
    } else if (operation==='multiplication') {
        output.value = multiplication(firstNumber, secondNumber)
    }

    operation = null
})

document.querySelector('#calculator .clear').addEventListener('click', event => {
    output.value = null;
})