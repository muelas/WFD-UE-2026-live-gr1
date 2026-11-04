"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let add = (x, y) => {
    return x + y;
};
let multiply = (a, b) => {
    return a * b;
};
function doIt(data, fn) {
    if (data.length === 0)
        return 0;
    let result = data[0];
    for (let i = 1; i < data.length; i++) {
        result = fn(result, data[i]);
    }
    return result;
}
let numbers = [1, 2, 3, 4, 5];
console.log(doIt(numbers, add));
console.log(doIt(numbers, multiply));
// Defaultwerte
function addAll(a, b, c = 0) {
    return a + b + c;
}
console.log(addAll(1, 2));
console.log(addAll(1, 2, 3));
function sumAll(...number) {
    let result = 0;
    for (let i = 0; i < number.length; i++) {
        result += number[i];
    }
    return result;
}
