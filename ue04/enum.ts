enum MyEnum {
    X,  //0
    Y,  //1
    Z   //2
}

enum MyEnum2 {
    X = 15,
    Y,  // 16
    Z = 25,
    W   // 26
}

enum MyEnum3 {
    X = "X",
    Y = "Y",
    Z = "Z",
    // W   //Fehler: bei String Enums kein Auto-Increment
}

enum MyEnum4 {
    X = 1,
    Y = "Y",
    Z = 3,
    W   // 4
}

let r: MyEnum = MyEnum.X;
r = 2;  // 2 entspricht MyEnum.Z
// r = 3;  // Fehler: 3 entspricht keinem Wert von MyEnum
// r = false;  // Fehler: false ist nicht vom Typ MyEnum

//Reverse Mapping
let s = MyEnum[2];  // Z
console.log(s);


// Alternative: Union von literals
type MyLiteral = "X" | "Y" | "Z";

let t: MyLiteral = "Z";
// w = "W";    // Fehler: "W" ist nicht vom Typ MyLiteral
// w = 2;    // Fehler: 2 ist nicht vom Typ MyLiteral