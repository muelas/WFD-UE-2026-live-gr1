// callbacks
function callback(p) {
    console.log(`Callback called with parameter: ${p}`);
}

function callback2(p) {
    console.log(`Callback2 called with parameter: ${p}`);
}

function firstFunction(param, cb) {
    cb(param);
}

firstFunction("Max", callback);
firstFunction("Felix", callback);
firstFunction("Felix", callback2);
firstFunction("Katrin", (p) => console.log("Arrow: " + p));

function secondFunction(params, cb) {
    for (let i = 0; i < params.length; i++) {
        cb(params[i]);
    }
}

secondFunction(["Max", "Felix", "Katrin"], callback);

//async
setTimeout(() => console.log("done"), 1000);
setTimeout(callback, 1000);


// Promises
const myPromise = new Promise((resolve, reject) => {
    const error = true;
    if (error) {
        reject("Fehler!");
    } else {
        resolve("Alles gut!");
    }
});

myPromise
    .then((val) => console.log(val))
    .catch((err) => console.log(err));

// fetch API
const users = fetch("https://jsonplaceholder.typicode.com/users");
console.log(users);

users
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((err) => console.log("Fehler: " + err));


//async await
async function myFunction() {
    try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await resp.json();
        console.log(users);
        console.log("A-A");
    } catch (err) {
        console.log("Fehler: " + err);
    }
}

myFunction();