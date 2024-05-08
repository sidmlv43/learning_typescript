declare enum Gender {
    Male = 0,
    Female = 1,
    Other = 2
}
declare class Person {
    protected _name: string;
    protected _age: number;
    protected _gender: Gender;
    protected static nInstances: number;
    constructor(_name: string, _age: number, _gender: Gender);
    get name(): string;
    get age(): number;
    get gender(): Gender;
    set name(name: string);
    set age(age: number);
    set gender(gender: Gender);
    introduce(): string;
    static checkInstances(): number;
}
declare class Employee extends Person {
    protected _salary: number;
    protected skills: string[];
    constructor(_name: string, _age: number, _gender: Gender, _salary: number, skills: string[]);
    get salary(): number;
    introduce(): string;
}
declare const sid: Employee;
