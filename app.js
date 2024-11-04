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
    return a/b;
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
        
        if (!isNaN(value) || value === '.') {
            firstNumber += value;
            display.textContent = firstNumber; 
        } else if (value === 'clear') {
            display.textContent = '';
            firstNumber = '';
            secondNumber = '';
            operator = '';
        } else if (value === '.') {
            if (!firstNumber.includes('.')) {
                firstNumber += value;
                display.textContent = firstNumber;
            }
        } else if (value === 'sign') {
            if (operator === '') {
                if (firstNumber !== '') {
                    firstNumber = firstNumber.startsWith('-') ? firstNumber.slice(1) : '-' + firstNumber;
                    display.textContent = firstNumber;
                }
            } else if (secondNumber !== '') {
                secondNumber = secondNumber.startsWith('-') ? secondNumber.slice(1) : '-' + secondNumber;
                display.textContent = secondNumber
        } else {console.log('operator');}
    }
});
});