alert("Hello!");
let firstNumber = prompt("Enter first number");
let secondNumber = prompt("Enter second number");
let numbOne = Number(firstNumber);
let numbTwo = Number(secondNumber);
let addition = numbOne + numbTwo;
let subtraction = numbOne - numbTwo;
let multiplication = numbOne * numbTwo;
let division = numbOne / numbTwo;
alert("Calculations are finished!" + `\n` + "Sum: " + `${numbOne} + ${numbTwo} = ` + addition + `\n` + "Diff: " + `${numbOne} - ${numbTwo} = ` + subtraction + `\n` + "Mult: " + `${numbOne} * ${numbTwo} = ` + multiplication + `\n` + "Div: " + `${numbOne} / ${numbTwo} = ` + division);

