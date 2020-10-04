const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operation]");
const equal = document.querySelector("[data-equal]");
const calculate = document.querySelector("[data-calculate]");
const reset = document.querySelector("[data-reset]");
const result = document.querySelector("[data-result]");
const details = {
    operator: "",
    firstNumber: "",
    secondNumber: "",
    result: false
};

const updateView = () => {
    calculate.textContent = `${details.firstNumber}${details.operator}${details.secondNumber}`;
};

const addNumber = function(){
    const number = this.dataset.number;

    if(!details.result) !details.operator ? details.firstNumber += number : details.secondNumber += number;

    updateView();
};

const addOperator = function(){
    !details.operator && details.firstNumber ? details.operator = this.dataset.operation : null;

    updateView();
};

reset.onclick = () => {
    details.operator = "";
    details.firstNumber = "";
    details.secondNumber = "";
    details.result = false;
    result.textContent = "";
    
    updateView();
};

equal.onclick = () => {
    if(details.operator && details.firstNumber && details.secondNumber){
        details.result = true;
        result.textContent = eval(`${details.firstNumber}${details.operator}${details.secondNumber}`)
    };
}

numbers.forEach(element => element.addEventListener("click", addNumber));
operators.forEach(element => element.addEventListener("click", addOperator));