function processArray(array, callback) {
    return callback(array)
}

const sum = arr => arr.reduce((acc, num) => acc + num, 0);

const min = arr => Math.min(...arr);
const max = arr => Math.max(...arr);
const numbers = [1, 2, 3, 4, 5]

console.log(processArray(numbers, sum));
console.log(processArray(numbers, min));
console.log(processArray(numbers, max));



function operate(a, b, callback) {
    return callback(a, b)
}

const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

console.log(operate(10, 5, add));
console.log(operate(10, 5, minus));
console.log(operate(10, 5, mult));
console.log(operate(10, 5, div));


