
const numberButtons = document.querySelectorAll('[data-numbers]');
const operationButtons = document.querySelectorAll('[data-operation]');


const equalsButton = document.querySelector('[data-equals]')

const deleteButton = document.querySelector('[data-delete]')

const allClearButton = document.querySelector('[data-all-clear]')

const previousOperandTextElement = document.querySelector('[data-previous-operand]')


const currentOperandTextElement  = document.querySelector('[data-current-operand]')



numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        currentOperandTextElement.innerText+= button.innerText;
        
    })
})

operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{

        currentOperandTextElement.innerText+= button.innerText;
    
        
       
        })
        
})


equalsButton.addEventListener('click',()=>{
   
   previousOperandTextElement.innerText = currentOperandTextElement.innerText;
   
    currentOperandTextElement.innerText = eval(currentOperandTextElement.innerText)

})


allClearButton.addEventListener('click',()=>{
    previousOperandTextElement.innerText = 0;
    currentOperandTextElement.innerText = "";
})


deleteButton.addEventListener('click',()=>{

    let a = currentOperandTextElement.innerText;
    let b = a.slice(0,-1);
    
    currentOperandTextElement.innerText = b


})