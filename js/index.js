
import {firstInput, secondInput, selectOperator, showResult, calculateResult, resetCalculator} from './variable.js';
import { AddNumber, SubtractNumber, MultiplyNumber, DivideNumber, ModuloNumber} from './operatorFunction.js';


// calculation method for mathematical calaculations.
const calculateInput = (e) => {
    e.preventDefault();

    const firstNumber = parseInt(firstInput.value);
    const secondNumber = parseInt(secondInput.value);
    const operator = selectOperator.value;
    let inputResult = 0;

    if (firstNumber === '' || secondNumber === '' || operator === '') {
        console.log('please enter input value first and then calculate');
    } else {
        switch (operator) {
            case "+":
                inputResult = AddNumber(firstNumber, secondNumber);
                showResult.innerText = inputResult;
                break;

            case '-':
                     inputResult = SubtractNumber(firstNumber,secondNumber)
                     showResult.innerText = inputResult;
                break;

            case '*':
                inputResult = MultiplyNumber(firstNumber, secondNumber);
                    showResult.innerText = inputResult;
                break;

            case '/':
                   showResult.innerText = DivideNumber( firstNumber, secondNumber);
                break;

            case '%':
                   showResult.innerText = ModuloNumber( firstNumber, secondNumber)
                break;
        }
    }
}

// reset method to reset all input value to default.
const resetAllInput = ()=>{
    firstInput.value = '';
    secondInput.value = '';
    selectOperator.value = '';
    showResult.innerText = '';
}

calculateResult.addEventListener('click', calculateInput);
resetCalculator.addEventListener('click', resetAllInput);