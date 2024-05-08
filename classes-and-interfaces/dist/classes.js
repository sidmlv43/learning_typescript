"use strict";
class Human {
    constructor(name) {
        this._name = name;
    }
    introduce() {
        console.log(`Hi, my name is ${this._name}`);
    }
}
class Emp extends Human {
    constructor(name, salary, skills) {
        super(name);
        this._salary = salary;
        this.skills = skills;
    }
    set(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
class Department {
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    describe() {
        return "Welcome to " + this._name + "!";
    }
}
const treasury = new Department("Treasury");
console.log(treasury.name);
console.log(treasury.describe());
//# sourceMappingURL=classes.js.map