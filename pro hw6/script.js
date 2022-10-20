const utils = {
  reverse(arr) {
    if (arr.length === 0) {
      return [];
    }

    const result = [];

    for (let i = arr.length - 1; i >= 0; i --) {
      result.push(arr[i]);
    }

    return result;
  },

  verifyNumbers(arr) {
    if (!arr.length) {
      return [];
    }

    const result = [];

    for (let i = 0; i < arr.length; i ++) {
      if (typeof arr[i] === 'number') {
         result.push(arr[i]);
      }
    }

    return result;
  },

  getMin(arr) {
    if (arr.length === 0) {
      return [];
    }

    let min = Infinity;

    for (let i = 0; i < arr.length; i ++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }

    return min;
  },

  getAverage(arr) {
    if (!arr.length) {
      return null;
    }

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum / arr.length;
  },

  getMaxStr(arr) {
    if (arr.length === 0) {
      return [];
    }

    let maxStr = '', string;


    for (let i = 0; i < arr.length; i ++) {
      if (arr[i].length > maxStr) {
        maxStr = arr[i].length;
        string = arr[i];
      }
    }

    return string;
  }
};

utils.reverse([1, 2, 3, 'hello']);
console.log(utils.reverse([1, 2, 3, 'hello']));
utils.verifyNumbers([1, 2, 3, 'hello',null, '', {}, undefined]);
console.log(utils.verifyNumbers([1, 2, 3, 'hello', null, '', {}, undefined]));
utils.getMin([1, 2, 3, 0, 19, 100]);
console.log(utils.getMin([1, 2, 3, 0, 19, 100]));
utils.getAverage([1, 2, 3, 0, 19, 100]);
console.log(utils.getAverage([1, 2, 3, 0, 19, 100]));
utils.getMaxStr(['a', 'abc', 'hello', 'Super puper long string', 'qwerty']);
console.log(utils.getMaxStr(['a', 'abc', 'hello', 'Super puper long string', 'qwerty']))