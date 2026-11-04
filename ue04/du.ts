interface Admin {
    name: string;
    password: string;
    kind: "admin";
}

interface Guest {
    name: string;
    kind: "guest";
}

// wir erweitern um Default
interface DefaultUser {
    name: string;
    lastLogin: Date;
    kind: "default";
}

// type User = Admin | Guest;
type User = Admin | Guest | DefaultUser;


function canLogin(u: User): boolean {
    if (u.kind === "guest") {
        return false;
    } else {
        // console.log(u.password);
        return true;
    }
}

function doSomething(u: User) {
    switch (u.kind) {
        case "admin":
            console.log("Admin was here");
            break;
        case "guest":
            console.log("Guest was here");
            break;
        case "default":
            break;
        default:
            const x: never = u;
            break;
    }
}