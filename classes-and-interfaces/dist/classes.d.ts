declare abstract class Human {
    protected _name: string;
    constructor(name: string);
    introduce(): void;
    abstract set(name: string): void;
    abstract get name(): string;
}
declare class Emp extends Human {
    protected _salary: number;
    protected skills: string[];
    constructor(name: string, salary: number, skills: string[]);
    set(name: string): void;
    get name(): string;
}
declare class Department {
    private _name;
    constructor(_name: string);
    get name(): string;
    set name(name: string);
    describe(): string;
}
declare const treasury: Department;
