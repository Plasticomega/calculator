function add(firstNumber,secondNumber){
return firstNumber + secondNumber
}

function subtract(firstNumber,secondNumber){
return firstNumber - secondNumber
}

function multiply(firstNumber,secondNumber){
return firstNumber * secondNumber
}

function divide(firstNumber,secondNumber){
return firstNumber / secondNumber
}

let firstNumber
let secondNumber
let operator

function operate(operator,firstNumber,secondNumber){
    if(operator = addition){
        add(firstNumber,secondNumber)
    }else if(operator = subtraction){
        subtract(firstNumber,secondNumber)
    }else if(operator = multiplication){
        multiply(firstNumber,secondNumber)
    }else if(operator = division){
        divide(firstNumber,secondNumber)
    }
}