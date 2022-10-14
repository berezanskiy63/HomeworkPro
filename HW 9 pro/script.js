const arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const products = [
    {name: 'Product 1', quantity: 10, price: 25},
    {name: 'Product 2', quantity: 3, price: 55},
    {name: 'Product 3', quantity: 22, price: 35},
];


const getMinMax = (arr, { min, max }) => {
  function isBetween(min, max) {
    return (currentNum) => {
      return currentNum >= min && currentNum <= max;
    }
  }

  return arr.filter(isBetween(min, max));
}

const createMessageAlert = () => {
  const num1 = +prompt('Enter the first number');
  const num2 = +prompt('Enter the second number');

  if (isNaN(num1) || isNaN(num2) || !num1 || !num2) {
    return createMessageAlert();
  }

  const min = num1 > num2 ? num2 : num1;
  const max = num1 > num2 ? num1 : num2;
  return { min, max };
}
console.log(getMinMax(arr, createMessageAlert()));



const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mul = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;
const pow = (num1, num2) => Math.pow(num1, num2);

const operators = {
    "+": add,
    "-": sub,
    "*": mul,
    "/": div,
    "pow": pow,
}

function doCalc() {
    const operation = prompt("Выберите операцию  +  -  *  /  pow");
    let result = null;
    if (operation === null && operation !== operators[operation])  {
        return false;
    } {
       const firstOperand = prompt("Введите число");
       const secondOperand = prompt("Введите второе число");

            if (!isNaN(+firstOperand) && !isNaN(+secondOperand)) {
                result = operators[operation](+firstOperand, +secondOperand);
            }
                let resultStr = '';
                resultStr = `${firstOperand} ${operation} ${secondOperand} = ${result}`;
                alert(resultStr);

    }

    if (result) {
        const oneMoreOperation = confirm("Хотите ли вы выполнить ещё какую-либо операцию?");

        if (oneMoreOperation) {
            doCalc();
        }
    }
}

doCalc();


function sortByField (fieldName, sortType) {
  if (sortType === 'asc') {
    return (a, b) => a[fieldName] - b[fieldName];
  } else if (sortType === 'desc'){
    return (a, b) => b[fieldName] - a[fieldName];
  };
};

console.log(products.sort(sortByField('quantity', 'asc')))




































