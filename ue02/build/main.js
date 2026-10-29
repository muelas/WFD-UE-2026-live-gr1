"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 42;
x = 9;
// x = "string";
console.log(x);
let s = "AB";
let b = true;
let a = [42, 43, 44];
// a.push("fünf");
a.push(1);
// tuple vs array
let x1 = ["Max", 8, true];
// x1[4] = 123;
x1[0] = "Katrin";
// x1[0] = 123;
let x2 = ["Max", 6, false];
x2[4] = 123;
x2[5] = "test";
// x2[6] = {};
// functions
function func1(a, b) {
    return a + b;
}
console.log(func1(1, 2));
// func1("eins", "zwei");
function func2(a) {
    a *= 2;
    return a;
}
console.log(func2(1));
console.log(func2("1"));
console.log(func2("eins"));
// type alias
let a1 = ["a", "b", "c"];
let a2 = ["x", "y", "z"];
let p1 = [2, 3];
//# sourceMappingURL=main.js.map