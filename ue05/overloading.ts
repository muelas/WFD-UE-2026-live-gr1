// === Einfaches Beispiel für Funktionsüberladung in TypeScript
function add(a: number, b: number): number;
function add(s: string, t: string): string;
function add(x: number | string, y: number | string): number | string {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    if (typeof x === "string" && typeof y === "string") {
        return x + y;
    }
    throw new Error("Die Typen der Parameter müssen übereinstimmen.");  // kann niemals auftreten, da die Überladungen dies verhindern
}

console.log(add(40, 2));    // Ausgabe: 42
console.log(add("the", " answer")); // Ausgabe: the answer

// console.log(add(42, "the answer")); // FEHLER: Die implementation signature darf nicht direkt aufgerufen werden

// === Beispiel 2
function format(s: string, toUpper: boolean): string;
function format(n: number): string;
function format(value: string | number, toUpper?: boolean): string {
    if (typeof value === "number") {
        return value.toFixed(2);
    }
    return toUpper ? value.toUpperCase() : value.toLowerCase();
}

// Gültige Aufrufe
format("hello", true);
format("ByE", false);
format(3.1415);

// Ungültige Aufrufe
// format(42, false);  // FEHLER: Überladung #2 erlaubt kein zweites Argument
// format("hi"); // FEHLER: Überladung #1 verlangt zwei Argumente


// === Beispiel 3: Überladen in Klassen
class Greeter {
    private readonly greeting: string;

    // Überladen von Konstruktoren
    constructor(customGreeting: string);
    constructor(nr: number);
    constructor(val: string | number) {
        if (typeof val === "string") {
            this.greeting = val;
        } else {
            this.greeting = "Hello" + "!".repeat(val);
        }
    }

    // Überladen von Methoden
    greet(person: string): string;
    greet(persons: string[]): string;
    greet(p: string | string[]): string {
        if (Array.isArray(p)) {
            return p
                .map((name) => `${this.greeting} ${name}`)   // mappt jeden Namen auf eine Begrüßung
                .join("; ");    // verbindet die Begrüßungen mit "; "
        } else {
            return `${this.greeting} ${p}`;
        }
    }
}

// Aufrufe der überladenen Konstruktoren
const g1 = new Greeter("Hey there");
const g2 = new Greeter(10);

// Aufrufe der überladenen Methoden
console.log(g1.greet("Felix"));
console.log(g1.greet(["Max", "Felix", "Katrin"]));