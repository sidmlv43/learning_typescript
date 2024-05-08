"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
class Person {
    constructor(_name, _age, _gender) {
        this._name = _name;
        this._age = _age;
        this._gender = _gender;
        Person.nInstances++;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get gender() {
        return this._gender;
    }
    set name(name) {
        this._name = name;
    }
    set age(age) {
        this._age = age;
    }
    set gender(gender) {
        this._gender = gender;
    }
    introduce() {
        return `Hi! My name is ${this._name} and I am ${this._age} years old`;
    }
    static checkInstances() {
        return Person.nInstances;
    }
}
Person.nInstances = 0;
class Employee extends Person {
    constructor(_name, _age, _gender, _salary, skills) {
        super(_name, _age, _gender);
        this._salary = _salary;
        this.skills = skills;
    }
    get salary() {
        return this._salary;
    }
    introduce() {
        return `Hi! My name is ${this._name} and I am proficient with ${this.skills.join(this.skills.length === 2 ? " and " : ", ")}.`;
    }
}
const sid = new Employee("Siddharth", 23, Gender.Male, 1900000, [
    "typescript",
    "javascript",
]);
console.log(sid.name);
console.log(sid.introduce());
console.log(Employee.checkInstances());
console.log(Person.checkInstances());
//# sourceMappingURL=oops.js.map