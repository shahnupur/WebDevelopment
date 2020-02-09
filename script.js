
const operators=document.querySelectorAll(".operator")
const calculatorScreen=document.querySelector('.calculator-screen')
const updateScreen=(number)=>{
    calculatorScreen.value=number
}
const numbers=document.querySelectorAll(".number")
numbers.forEach((number)=>{
    number.addEventListener("click", (event)=>{
        updateScreen(event.target.value);
    })
})
let previnput='0'
let calculationOperator=''
let currentInput='0'
const inputNumber=(number)=>{
    if(currentInput==='0'){
        currentInput=number
    }
    else{
        currentInput+=number
    }
    
}
numbers.forEach((number)=>{
    number.addEventListener(("click"),(event)=>{
        inputNumber(event.target.value)
        updateScreen(currentInput);
    })
})
operators.forEach((operator)=>{
operator.addEventListener("click",(event)=>{
    console.log(event.target.value)
})
})

const inputOperator=(operator)=>{
    prevInput=currentInput
    calculationOperator=operator
    currentInput='0'
}
operators.forEach((operator)=>{
    operator.addEventListener("click",(event)=>{
        inputOperator(event.target.value)
    })
})
const equalSign=document.querySelector('.equal-sign')
equalSign.addEventListener('click',()=>{
    console.log('Equal button is pressed')
    calculate()
    updateScreen(currentInput)
})
const calculate=()=>{
    let result =0
    switch(calculationOperator){
        case'+':
        result=parseInt(prevInput)+parseInt(currentInput)
        break;
        case'-':
        result=parseInt(prevInput)-parseInt(currentInput)
        break;
        case'*':
        result=parseInt(prevInput)*parseInt(currentInput)
        break;
        case'/':
        result=parseInt(prevInput)/parseInt(currentInput)
        break;
        default:
            return

    }
    currentInput=result.toString()
    calculationOperator=''
}
const clearBtn=document.querySelector('.all-clear')
clearBtn.addEventListener('click',()=>{
    console.log('AC pressed')
})
const clearAll=()=>{
    prevInput='0'
    calculationOperator=''
    currentInput='0'
}
clearBtn.addEventListener("click",()=>{
    clearAll()
    updateScreen(currentInput)
})