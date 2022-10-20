
alert("Hello");

const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mul = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;
const sin = num => Math.sin(num);
const cos = num => Math.cos(num);
const pow = (num1, num2) => Math.pow(num1, num2);

const operators = {
    "+": add,
    "-": sub,
    "*": mul,
    "/": div,
    "cos": cos,
    "pow": pow,
    "sin": sin,
    "history": []
}

function doCalc() {
    const operation = prompt("Выберите операцию  +  -  *  / sin cos pow history");
    let result = null;

    if (operation === null) {
        return false;
    }

    if (operators[operation]) {
        if (operation === 'history') {
            result = operators['history'];
            alert(result);
        } else {
            const firstOperand = prompt("Введите число");
            const secondOperand = operation !== 'sin' && operation !== 'cos' && prompt("Введите второе число");

            if (!isNaN(+firstOperand) && !isNaN(+secondOperand)) {
                result = operators[operation](+firstOperand, +secondOperand);
            }

            if (result) {
                let resultStr = '';

                if (secondOperand) {
                    resultStr = `${firstOperand} ${operation} ${secondOperand} = ${result}`;
                } else {
                    resultStr = `${operation} ${firstOperand}  = ${result}`;
                }

                operators['history'].push(resultStr);

                alert(resultStr);
            }
        }
    } else {
        result = "Incorrect chose"
        alert(result);
    }

    if (result) {
        const oneMoreOperation = confirm("Хотите ли вы выполнить ещё какую-либо операцию?");

        if (oneMoreOperation) {
            doCalc();
        }
    }
}

doCalc();