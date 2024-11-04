const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');



//math functions

function add(a,b){
    return a+b;
}

function sub (a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return b !== 0 ? a / b : 'Error';
} 

//define variables
let firstNumber = ''
let secondNumber = ''
let operator = ''

// calculate function
function operate (a, b, operator){
    if (operator === '+'){
        return add(a, b);
    } else if (operator === '-'){
        return sub(a, b);
    } else if (operator === '*'){
        return mul(a, b);
    } else if (operator === '/'){
        return div(a,b);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        console.log(value);

        // Gérer l'affichage des nombres et du point décimal
        if (!isNaN(value) || value === '.') {
            if (operator === '') {
                // Ajoute au premier nombre
                if (value !== '.' || !firstNumber.includes('.')) {
                    firstNumber += value;
                    display.textContent = firstNumber;
                }
            } else {
                // Ajoute au second nombre
                if (value !== '.' || !secondNumber.includes('.')) {
                    secondNumber += value;
                    display.textContent = secondNumber;
                }
            }
        } 
        // Gérer la réinitialisation
        else if (value === 'clear') {
            display.textContent = '';
            firstNumber = '';
            secondNumber = '';
            operator = '';
        } 
        // Gérer le changement de signe
        else if (value === 'sign') {
            if (operator === '') {
                if (firstNumber !== '') {
                    firstNumber = firstNumber.startsWith('-') ? firstNumber.slice(1) : '-' + firstNumber;
                    display.textContent = firstNumber;
                }
            } else if (secondNumber !== '') {
                secondNumber = secondNumber.startsWith('-') ? secondNumber.slice(1) : '-' + secondNumber;
                display.textContent = secondNumber;
            }
        } 
        // Gérer les opérateurs
        else if (['+', '-', '*', '/'].includes(value)) {
            if (firstNumber !== '') {
                operator = value;
                console.log('Operator set:', operator);
            }
        } else if (value === '=') {
            if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
                const result = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
                display.textContent = result;
                firstNumber = result.toString();
                secondNumber = '';
                operator = '';
            }
        } else {
            display.textContent = 'Error';
        }
    });
});