let firstNumber = "";
let operator = "";
let secondNumber = "";

const display = document.getElementById("display");


// Add number to display
function appendNumber(number) {

    if (display.value === "0" && number !== ".") {
        display.value = number;
    } 
    else {
        display.value += number;
    }
}


// Select mathematical operator
function chooseOperator(selectedOperator) {

    firstNumber = display.value;

    operator = selectedOperator;

    display.value = "";
}


// Calculate result
function calculate() {

    secondNumber = display.value;

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    let result;


    if (operator === "+") {
        result = num1 + num2;
    }

    else if (operator === "-") {
        result = num1 - num2;
    }

    else if (operator === "*") {
        result = num1 * num2;
    }

    else if (operator === "/") {

        if (num2 === 0) {
            display.value = "Cannot divide by 0";
            return;
        }

        result = num1 / num2;
    }

    else if (operator === "%") {
        result = num1 % num2;
    }

    display.value = result;

    firstNumber = result;
    operator = "";
}


// Clear calculator
function clearDisplay() {

    display.value = "0";

    firstNumber = "";
    operator = "";
    secondNumber = "";
}


// Delete last digit
function deleteLast() {

    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } 
    else {
        display.value = "0";
    }
}
