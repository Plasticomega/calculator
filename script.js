function add(firstNumber,secondNumber){
return parseInt(firstNumber) + parseInt(secondNumber)
}

function subtract(firstNumber,secondNumber){
return parseInt(firstNumber) - parseInt(secondNumber)
}

function multiply(firstNumber,secondNumber){
return parseInt(firstNumber) * parseInt(secondNumber)
}

function divide(firstNumber,secondNumber){
return parseInt(firstNumber) / parseInt(secondNumber)
}

function operate(firstNumber,operator,secondNumber){
    if(operator == '+'){
        return add(firstNumber,secondNumber)
    }else if(operator == '-'){
        return subtract(firstNumber,secondNumber)
    }else if(operator == '*'){
        return multiply(firstNumber,secondNumber)
    }else if(operator == '/'){
        return divide(firstNumber,secondNumber)
    }
}

