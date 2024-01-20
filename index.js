const firstInput = document.getElementById('firstInput');
const secondInput = document.getElementById('secondInput');
const selectOperator = document.getElementById('selectOperator');
const showResult = document.getElementById('showResult');

const calculateResult = document.getElementById('calculateResult');
const resetCalculator = document.getElementById('resetCalculator');

const calculateInput = ()=>{
    
    let firstNumber = firstInput.value;
    let secondNumber = secondInput.value; 
    let operator = selectOperator.value;

    if (firstNumber === '' || secondNumber === '' || operator === '') {
        console.log('please enter input value first and then calculate');
    } else {
        console.log(firstNumber, secondNumber, operator);
    }
}


calculateResult.addEventListener('click', calculateInput);