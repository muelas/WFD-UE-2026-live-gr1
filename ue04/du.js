"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function canLogin(u) {
    if (u.kind === "guest") {
        return false;
    }
    else {
        // console.log(u.password);
        return true;
    }
}
function doSomething(u) {
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
            const x = u;
            break;
    }
}
