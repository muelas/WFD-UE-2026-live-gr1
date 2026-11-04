"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    hobbies;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.hobbies = [];
    }
    addHobby(hobby) {
        this.hobbies.push(hobby);
    }
}
// modifier
class Person2 {
    _name;
    _age;
    _hobbies;
    constructor(name, age) {
        this._name = name;
        this._age = age;
        this._hobbies = [];
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    set age(v) {
        if (v > 0)
            this._age = v;
    }
}
const p2 = new Person2("Felix", 8);
console.log(p2.name);
p2.age = 9;
console.log(p2.age);
p2.age = -1;
console.log(p2.age);
// Parameter properties
class Person3 {
    _name;
    _age;
    _hobbies;
    constructor(_name, _age, _hobbies = []) {
        this._name = _name;
        this._age = _age;
        this._hobbies = _hobbies;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    set age(v) {
        if (v > 0)
            this._age = v;
    }
}
const p3 = new Person3("Felix", 8);
console.log(p3.name);
p3.age = 9;
console.log(p3.age);
p3.age = -1;
console.log(p3.age);
