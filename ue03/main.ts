// umwandlung in boolean
let s = "abc";

console.log(s);     //abd
console.log(!s);    //false
console.log(!!s);   //true


// type aliases

type GoodString = string;

let gs: GoodString = "Good";

function doitWithGS(x: GoodString): GoodString {
    return x.toLowerCase();
}

gs = doitWithGS(gs);    // GoodString wird zurückgegeben
gs = "xyz";      // string ist genauso kompatibel mit GoodString, also kein Fehler


// type aliases mit union types
type One = string;
type Two = string | number;
type Three = 'hello';


let a: One = "hello";
let b = a as Two; // Type Assertion
let b1: Two = a;  // Explizite Typzuweisung
let c = a as Three; // Type Assertion


// literal types und type assertions

function addOrConcat(a: number, b: number, c: "add" | "concat"): number | string {
    if (c == "add") {
        return a + b;   // addition der Zahlen
    } else {
        return "" + a + b;  // verkettung der Zahlen zu einem String
    }
}

let r: string = addOrConcat(4, 2, "concat") as string; // Type Assertion
// let r2: string = addOrConcat(4, 2, "add") as string; // Type Assertion - ACHTUNG: falsch!


// type aliases mit object types
type Person = {
    name: string,
    age: number,
};

let felix: Person = {
    name: "Felix",
    age: 8,
}

// let max: Person = {
//     name: "Max",
//     // age fehlt!
// }

felix.age = 9;
// felix.age = "acht"; // falscher Typ


// interfaces
interface IPerson {
    name: string;
    age: number;
}

let max: IPerson = {
    name: "Max",
    age: 6,
};

interface IStudent {
    name: string;
    age: number;
    sid?: string;
}

let katrin: IStudent = {
    name: "Katrin",
    age: 40,
    // keine sid - optional
}

let katrin2: IStudent = {
    name: "Katrin",
    age: 40,
    sid: "123456",
}

console.log(katrin.sid);    //undefined
console.log(katrin.sid?.toUpperCase());
console.log(katrin2.sid?.toUpperCase());


// interfaces erweitern
interface A {
    a: number;
}

// let v1: A = {
//     a: 41,
// }

interface A {
    b: number;
}

let vs2: A = {
    a: 42,
    b: 43,
}
