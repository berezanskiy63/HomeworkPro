alert("Hello!");
let firstNumber = prompt("Enter first number");
let secondNumber = prompt("Enter second number");
let numbOne = Number(firstNumber);
let numbTwo = Number(secondNumber);
let addition = numbOne + numbTwo;
let subtraction = numbOne - numbTwo;
let multiplication = numbOne * numbTwo;
let division = numbOne / numbTwo;
let operation = prompt("Enter operation  +  -  *  / ")

if (operation == "+") {
    alert(addition);
} else if(operation == "-") {
    alert(subtraction);
} else if(operation == "*") {
    alert(multiplication);
} else if(operation == "/") {
    alert(division);
} else {
    alert("Incorrect choice")
}

