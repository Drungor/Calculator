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

//avoid overflow
function updateDisplay(value) {
    if (value.length > 8) {
        value = value.slice(0, 8); 
    }
    display.textContent = value;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        console.log(value);

        // Display number on screen
        if (!isNaN(value) || value === '.') {
            if (operator === '') {
                if (value !== '.' || !firstNumber.includes('.')) {
                    firstNumber += value;
                    updateDisplay(firstNumber);
                }
            } else {
                if (value !== '.' || !secondNumber.includes('.')) {
                    secondNumber += value;
                    updateDisplay(secondNumber);
                }
            }
        } 
        // clear display
        else if (value === 'clear') {
            display.textContent = '';
            firstNumber = '';
            secondNumber = '';
            operator = '';
        } 
        // manage negative number
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
        // hundle operator
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