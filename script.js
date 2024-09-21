let firstNumber = ''
let secondNumber = ''
let opeartor

let istypingfirst = true
let istypingsecond = false

function add(firstNumber,secondNumber){
return parseFloat(firstNumber) + parseFloat(secondNumber)
}

function subtract(firstNumber,secondNumber){
return parseFloat(firstNumber) - parseFloat(secondNumber)
}

function multiply(firstNumber,secondNumber){
return parseFloat(firstNumber) * parseFloat(secondNumber)
}

function divide(firstNumber,secondNumber){
return parseFloat(firstNumber) / parseFloat(secondNumber)
}

function operate(firstNumber,operator,secondNumber){
    if(operator == '+'){
        return add(firstNumber,secondNumber)
    }else if(operator == '-'){
        return subtract(firstNumber,secondNumber)
    }else if(operator == '×'){
        return multiply(firstNumber,secondNumber)
    }else if(operator == '÷'){
        return divide(firstNumber,secondNumber)
    }
}

let input_display = document.querySelector('.screen')
let number = document.querySelectorAll('#number')

for(let i=0;i < number.length;i++){
    number[i].addEventListener('click',()=>{input_display.innerHTML += (number[i].innerHTML);
        if(istypingfirst){
            firstNumber += number[i].textContent
        }else if(istypingsecond){
            secondNumber += number[i].textContent
        }
    })
}

// take the first value - done
// when operator clicked store first value , store opeartor and take second value - done
// when equal to clicked run function operate()
// write a condition so that if first value !== '' and second value !== '' then operate those two first

let operators = document.querySelectorAll('#operator')
let operations = ['+','-','÷','×']
for(let i=0;i< operators.length;i++){
    operators[i].addEventListener('click',()=>{
        istypingfirst = false
        istypingsecond = true
        console.log(firstNumber)
        let containsOperator = operations.some(op => input_display.innerHTML.includes(op));
        if (!containsOperator) {
            input_display.innerHTML += operators[i].innerHTML;
        }else if(containsOperator && firstNumber.length > 0 && secondNumber >0){
            findsolution()
            input_display.innerHTML += operators[i].innerHTML;
            istypingfirst = false
        }
        opeartor = operators[i].textContent        
    });    
}
function findsolution(){
    let solution
    if(opeartor == '÷' && secondNumber == '0'){
        input_display.textContent ="you cannot divide by zero"
    }else{
        solution = operate(firstNumber,opeartor,secondNumber)
            input_display.innerHTML = solution
            firstNumber = input_display.innerHTML
            secondNumber = ''
            istypingfirst = true
    }
    

}


let equalTo = document.querySelector('.equalTo')
equalTo.addEventListener('click',findsolution)


let clearOne = document.querySelector('.clearOne')
clearOne.addEventListener('click',()=>{
    input_display.textContent = input_display.textContent.slice(0,input_display.textContent.length - 1);
    if(istypingfirst){
        firstNumber = firstNumber.slice(0,firstNumber.length-1)
    }
    if(istypingsecond){
        secondNumber = secondNumber.slice(0,secondNumber.length-1)
    }
})

let clearAll = document.querySelector('.clearAll')
clearAll.addEventListener('click',()=>{
    input_display.textContent = ''
    firstNumber = ''
    secondNumber = ''
    opeartor = undefined
    istypingfirst = true
})


