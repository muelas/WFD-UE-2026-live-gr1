"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["X"] = 0] = "X";
    MyEnum[MyEnum["Y"] = 1] = "Y";
    MyEnum[MyEnum["Z"] = 2] = "Z"; //2
})(MyEnum || (MyEnum = {}));
var MyEnum2;
(function (MyEnum2) {
    MyEnum2[MyEnum2["X"] = 15] = "X";
    MyEnum2[MyEnum2["Y"] = 16] = "Y";
    MyEnum2[MyEnum2["Z"] = 25] = "Z";
    MyEnum2[MyEnum2["W"] = 26] = "W"; // 26
})(MyEnum2 || (MyEnum2 = {}));
var MyEnum3;
(function (MyEnum3) {
    MyEnum3["X"] = "X";
    MyEnum3["Y"] = "Y";
    MyEnum3["Z"] = "Z";
    // W   //Fehler: bei String Enums kein Auto-Increment
})(MyEnum3 || (MyEnum3 = {}));
var MyEnum4;
(function (MyEnum4) {
    MyEnum4[MyEnum4["X"] = 1] = "X";
    MyEnum4["Y"] = "Y";
    MyEnum4[MyEnum4["Z"] = 3] = "Z";
    MyEnum4[MyEnum4["W"] = 4] = "W"; // 4
})(MyEnum4 || (MyEnum4 = {}));
let r = MyEnum.X;
r = 2; // 2 entspricht MyEnum.Z
// r = 3;  // Fehler: 3 entspricht keinem Wert von MyEnum
// r = false;  // Fehler: false ist nicht vom Typ MyEnum
//Reverse Mapping
let s = MyEnum[2]; // Z
console.log(s);
let t = "Z";
// w = "W";    // Fehler: "W" ist nicht vom Typ MyLiteral
// w = 2;    // Fehler: 2 ist nicht vom Typ MyLiteral
