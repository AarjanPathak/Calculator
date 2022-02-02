let num1 = 0;
let num2 = 0;
let resetScreen = false;
let current_operator = "";

function add(a, b)
{
    return (a+b);
}

function multiply(a, b)
{
    return (a*b);
}

function subtract(a, b)
{
    return (a-b);
}

function divide(a, b)
{
    return (a/b);
}

function percentage(a, b)
{
    return (a*b)/100;
}

function log(a)
{
    return (Math.log(a));
}   

function power(a, b)
{
    return (Math.pow(a, b));
}

function factorial(a)
{
    let fact = 1;
    for(let i=a;i>0;i--)
    {
        fact = fact * i;
    }
    return fact;
}

function sqrroot(a)
{
    return (Math.pow(a, 1/2));
}

function operate(currentOperator, a, b)
{
    switch(currentOperator)
    {
        case "+":
           return add(a, b);
        case "-":
           return subtract(a, b);
        case "*":
           return multiply(a, b);
        case "÷":
           return divide(a, b);
        case "%":
            return percentage(a, b);
        case "^":
            return power(a, b);
        case "!":
            return factorial(a);
        case "√":
            return sqrroot(a);
        case "ln":
            return log(a);
        default:
            null;
    }
}

const screentext = document.querySelector('.screen');
const numbers = document.querySelectorAll('.btn');
const clearBtn = document.querySelector('.btn-clr');
const delBtn = document.querySelector('.btn-del');
const operators = document.querySelectorAll('.btn-2');
const equals = document.querySelector('.equals');

equals.addEventListener('click', ()=>EqualsTo());

function EqualsTo()
{
    num2 = Number(screentext.innerHTML);
    reset_screen();
    screentext.innerHTML = operate(current_operator, num1, num2);
    resetScreen = true;
}

function clear()
{
    screentext.innerHTML = "";
}

function del()
{
    screentext.innerHTML = screentext.innerHTML.toString().slice(0,-1);
}

clearBtn.addEventListener('click', clear);

delBtn.addEventListener('click', del);

function reset_screen()
{
    screentext.innerHTML = "";
    resetScreen = false;
}

numbers.forEach((number) =>
    number.addEventListener('click', () => appendScreen(number.innerHTML))
)

function appendScreen(button)
{
    if(resetScreen) reset_screen();
    screentext.innerHTML += button;
}

operators.forEach((operator) =>
    operator.addEventListener('click', () => operation(operator.innerHTML))
)

function operation(operator_button)
{
    num1 = Number(screentext.innerHTML);
    current_operator = operator_button;
    screentext.innerHTML += operator_button;
    resetScreen = true;
}

//Handle Keyboard Inputs
window.addEventListener('keydown', e=>{
    if(e.key>=0 || e.key<=9) appendScreen(e.key);
    if(e.key == "Backspace") del();
    if(e.key == "Escape") clear();
    if(e.key == "Enter") EqualsTo();
    if(e.key == "+" || e.key == "-" || e.key == "*" || e.key=="!" || e.key=="%")
    {
        operation(e.key);
    }
    if(e.key == "/") operation("÷");
})

