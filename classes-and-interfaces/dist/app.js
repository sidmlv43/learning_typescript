"use strict";
let user1 = {
    name: "Sid",
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    },
};
user1.greet("Hello!");
class User {
    constructor(name, _id) {
        this._id = _id;
        this.name = name;
        this._id = _id;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
    get id() {
        return this._id;
    }
}
let siddhu = new User("Siddharth", "12c333812c333812c333812");
siddhu.greet("Jai Hind!");
console.log(siddhu.id);
let add = (a, b) => {
    return a + b;
};
class NamedUser {
    constructor(name) {
        this.name = name;
    }
}
let namedUser = new NamedUser("Siddhu");
// namedUser.name = "Siddhu";
//# sourceMappingURL=app.js.map