export const AddNumber = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
}

export const SubtractNumber = (firstNumber, secondNumber) => {
    let sub = 0;

    if (firstNumber < secondNumber) {
        sub = secondNumber - firstNumber;
    } else {
        sub = firstNumber - secondNumber;
    }

    return sub;
}

export const MultiplyNumber = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

export const DivideNumber = (firstNumber, secondNumber) => {
    let divide;

    if (secondNumber === 0) {
        divide = 'Division by 0 is undefined.';
    } else {
        divide = firstNumber / secondNumber;
    }

    return divide;
}

export const ModuloNumber = (firstNumber, secondNumber) => {
    let modulo;

    if (secondNumber === 0) {
        modulo = 'Division by 0 is undefined.';
    } else {
        modulo = firstNumber % secondNumber;
    }

    return modulo;
}
