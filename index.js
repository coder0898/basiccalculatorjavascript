const firstInput = document.getElementById('firstInput');
const secondInput = document.getElementById('secondInput');
const selectOperator = document.getElementById('selectOperator');
const showResult = document.getElementById('showResult');

const calculateResult = document.getElementById('calculateResult');
const resetCalculator = document.getElementById('resetCalculator');

const calculateInput = () => {

    const firstNumber = parseInt(firstInput.value);
    const secondNumber = parseInt(secondInput.value);
    const operator = selectOperator.value;
    let inputResult = 0;

    if (firstNumber === '' || secondNumber === '' || operator === '') {
        console.log('please enter input value first and then calculate');
    } else {
        // console.log(firstNumber, secondNumber, operator);
        switch (operator) {
            case "+":
                inputResult += (firstNumber + secondNumber);
                showResult.innerText = inputResult;
                break;

            case '-':
                     if (firstNumber < secondNumber) {
                        inputResult = secondNumber - firstNumber;
                     } else {
                        inputResult = firstNumber - secondNumber;
                     }

                     showResult.innerText = inputResult;
                break;

            case '*':
                inputResult = firstNumber * secondNumber;
                    showResult.innerText = inputResult;
                break;

            case '/':
                     if (secondNumber === 0) {
                          showResult.innerText = 'Division by 0 is undefined.';
                     } else {
                        inputResult = firstNumber / secondNumber;
                        showResult.innerText = inputResult;
                     }
                break;

            case '%':
                if (secondNumber === 0) {
                    showResult.innerText = 'Division by 0 is undefined.';
               } else {
                inputResult = firstNumber % secondNumber;
                  showResult.innerText = inputResult;
               }
                break;
        }
    }
}


const resetAllInput = ()=>{
    firstInput.value = '';
    secondInput.value = '';
    selectOperator.value = '';
    showResult.innerText = '';
}

calculateResult.addEventListener('click', calculateInput);
resetCalculator.addEventListener('click', resetAllInput);