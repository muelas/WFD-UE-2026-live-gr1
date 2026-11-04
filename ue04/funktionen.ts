type mathFunction = (x: number, y: number) => number;

let add: mathFunction = (x: number, y: number) => {
    return x + y;
}

let multiply: mathFunction = (a: number, b: number) => {
    return a * b;
}

function doIt(data: number[], fn: mathFunction) {
    if (data.length === 0)
        return 0
    let result = data[0] as number;
    for (let i = 1; i < data.length; i++) {
        result = fn(result, data[i] as number);
    }
    return result;
}

let numbers = [1, 2, 3, 4, 5];
console.log(doIt(numbers, add));
console.log(doIt(numbers, multiply));


// Defaultwerte
function addAll(a: number, b: number, c: number = 0): number {
    return a + b + c;
}

console.log(addAll(1, 2));
console.log(addAll(1, 2, 3));


function sumAll(...number: number[]): number {
    let result = 0;
    for (let i = 0; i < number.length; i++) {
        result += number[i] as number;
    }
    return result;
}