let x = 42;
x = 9;
// x = "string";
console.log(x);

let s: string = "AB";

let b: boolean = true;

let a: number[] = [42, 43, 44];
// a.push("fünf");
a.push(1);

// tuple vs array
let x1: [string, number, boolean] = ["Max", 8, true];
// x1[4] = 123;
x1[0] = "Katrin";
// x1[0] = 123;

let x2: (string | number | boolean)[] = ["Max", 6, false];
x2[4] = 123;
x2[5] = "test";
// x2[6] = {};

// functions
function func1(a: number, b: number): number {
    return a + b;
}

console.log(func1(1, 2));

// func1("eins", "zwei");

function func2(a: any) {
    a *= 2;
    return a;
}

console.log(func2(1));
console.log(func2("1"));
console.log(func2("eins"));

// type alias
let a1: string[] = ["a", "b", "c"];
type StringArray = string[];

let a2: StringArray = ["x", "y", "z"];

type Point = [number, number];
let p1: Point = [2, 3];