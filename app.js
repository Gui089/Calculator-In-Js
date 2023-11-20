const display = document.querySelector('#display');
const allNumbersBtns = document.querySelector('#buttons');
const operators = document.querySelector('#buttons');

allNumbersBtns.addEventListener('click', (event) => {
    /* console.log(event.target.id); */
    const btnValue = event.target.id;
    const numClassClicked = event.target.className === 'num';
    
    if(numClassClicked) {
        display.innerText += btnValue;
    }
});

let operator = null;
let valueOne = null;

const getValueOne = () => {
    let valueOne = Number(display.textContent);
    return valueOne;
}


operators.addEventListener('click', event => {
    const operatorValue = event.target.id;
    const operatorValueClass = event.target.className;

    if(operatorValueClass === 'op') {
        operator = operatorValue;
        valueOne = getValueOne();
        display.innerText = '';
        console.log(valueOne);
    }
});

const calculateResult = () => {
    const valueTwo = Number(display.textContent);
    let result;

    switch (operator) {
        case 'add':
            result = valueOne + valueTwo;
            break;
        case 'sub':
            result = valueOne - valueTwo;
            break;
        case 'mul':
            result = valueOne * valueTwo;
            break;
        case 'div':
            result = valueOne / valueTwo;
            break;
    }
    display.innerText = result;
};

const equalsBtn = document.querySelector('#equals'); 
equalsBtn.addEventListener('click', () => {
    calculateResult();
});

const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', () => {
    display.textContent = '';
})