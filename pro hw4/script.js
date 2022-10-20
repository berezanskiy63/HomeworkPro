alert("Hello!");

let firstNumber;
let secondNumber;
let question;
const history = [];

do {
    const operation = prompt("Выберите операцию  +  -  *  / sin cos pow history");
    if(operation === null) {
        break;
    }
    switch (operation) {
        case "sin":
        case "cos":
            firstNumber = prompt("Введите число");
            break;
        case "history":
            alert(history.join('\n'));
            break;
        default:
            firstNumber = prompt("Введите первое число");
            secondNumber = prompt("Введите второе число");
    }

    let numbOne = Number(firstNumber);
    let numbTwo = Number(secondNumber);

    switch (operation) {
        case "+":
            let addition = numbOne + numbTwo;
            const resultAdd =  "Sum: " + numbOne + "+" + numbTwo + "=" + addition;
            history.push(resultAdd);
            alert(resultAdd);
            break;
        case "-":
            let subtraction = numbOne - numbTwo;
            const resultSub = "Diff: " + numbOne + "-" + numbTwo + "=" + subtraction;
            history.push(resultSub);
            alert(resultSub);
            break;
        case "*":
            let multiplication = numbOne * numbTwo;
            const resultMul = "Mult: " + numbOne + "*" + numbTwo + "=" + multiplication;
            history.push(resultMul);
            alert(resultMul);
            break;
        case "/":
            let division = numbOne / numbTwo;
            const resulDiv = "Div: " + numbOne + "/" + numbTwo + "=" + division;
            history.push(resulDiv)
            alert("Div: " + numbOne + "/" + numbTwo + "=" + division);
            break;
        case "sin":
            let sin = Math.sin(numbOne);
            const resultSin = "sin:" + "(" + numbOne + ")" + "=" + sin;
            history.push(resultSin);
            alert(resultSin);
            break;
        case "cos":
            let cos = Math.cos(numbOne);
            const resultCos = "cos:" + "(" + numbOne + ")" + "=" + cos;
            history.push(resultCos)
            alert(resultCos);
            break;
        case "pow":
            let pow = Math.pow(numbOne, numbTwo);
            const result = "pow: " + numbOne + "^" + numbTwo + " = " + pow;
            history.push(result);
            alert(result);
            break;
        case "history":
            break;
        default:
            alert("Incorrect choice");
    }
    question = confirm("Хотите ли вы выполнить ещё какие-либо рачёты?");

} while (question);


