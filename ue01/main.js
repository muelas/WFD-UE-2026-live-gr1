const myObj = {
    name: "Max",
    age: 6,
    drinks: {
        morning: "milk",
        lunch: "juice"
    },
    hobbies: ["football", "gaming"],
    action: function () {
        return `Hello ${this.name} how are you today?`;
    },
    action2: function (number) {
        return `Hello ${this.name} your lucky number is ${number}`;
    }
};

console.log(myObj);
console.log(myObj.name);
console.log(myObj.drinks.morning);
console.log(myObj.action());
console.log(myObj.action2(42));

myObj.name = "Felix";
console.log(myObj);

// myObj={};

//Klassen
class Pizza {
    #type;
    #size;

    constructor(pizzaType, pizzaSize) {
        this.#type = pizzaType;
        this.#size = pizzaSize;
        this.style = "italian";
        this.toppings = [];
    }

    bake() {
        console.log("Baking the pizza");
    }

    get pizzaSize() {
        return this.#size;
    }

    set pizzaSize(v) {
        this.#size = v;
    }

    get pizzaTopping() {
        return this.toppings[0];
    }

    set pizzaTopping(v) {
        this.toppings.push(v);
    }

    resetToppings() {
        this.toppings = [];
    }
}

const myPizza = new Pizza("Diavolo", "large");
console.log(myPizza);

// myPizza.#type = "Margherita";
// console.log(myPizza);^
myPizza.bake();
console.log(myPizza.pizzaSize);
myPizza.pizzaSize = "small";
console.log(myPizza.pizzaSize);

myPizza.pizzaTopping = "Salami";
myPizza.pizzaTopping = "Zwiebel";
console.log(myPizza.toppings);
console.log(myPizza.pizzaTopping);
myPizza.resetToppings();
console.log(myPizza.toppings);

// Vererbung
class SpecialPizza extends Pizza {
    constructor(pizzaSize) {
        super("Special", pizzaSize);
    }

    bake() {
        super.bake();
        console.log("This is a special pizza!");
    }

    neu() {
        console.log("ich bin neu");
    }
}

const mySpecialPizza = new SpecialPizza("large");
console.log(mySpecialPizza);
mySpecialPizza.bake();

console.log(typeof mySpecialPizza);
console.log(typeof myPizza);
console.log(typeof myObj);

console.log(mySpecialPizza instanceof SpecialPizza);
console.log(mySpecialPizza instanceof Pizza);
console.log(myPizza instanceof SpecialPizza);
