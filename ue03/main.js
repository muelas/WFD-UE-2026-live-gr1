"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// umwandlung in boolean
let s = "abc";
console.log(s); //abd
console.log(!s); //false
console.log(!!s); //true
let gs = "Good";
function doitWithGS(x) {
    return x.toLowerCase();
}
gs = doitWithGS(gs); // GoodString wird zurückgegeben
gs = "xyz"; // string ist genauso kompatibel mit GoodString, also kein Fehler
let a = "hello";
let b = a; // Type Assertion
let b1 = a; // Explizite Typzuweisung
let c = a; // Type Assertion
// literal types und type assertions
function addOrConcat(a, b, c) {
    if (c == "add") {
        return a + b; // addition der Zahlen
    }
    else {
        return "" + a + b; // verkettung der Zahlen zu einem String
    }
}
let r = addOrConcat(4, 2, "concat"); // Type Assertion
// let r2: string = addOrConcat(4, 2, "add") as string; // Type Assertion - ACHTUNG: falsch!
