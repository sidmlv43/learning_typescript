interface Greetable {
    name: string;
    greet(phrase: string): void;
}
declare let user1: Greetable;
declare class User implements Greetable {
    readonly _id: string;
    name: string;
    constructor(name: string, _id: string);
    greet(phrase: string): void;
    get id(): string;
}
declare let siddhu: User;
interface funcType {
    (a: number, b: number): number;
}
declare let add: funcType;
interface Named {
    readonly name: string;
    outputName?: string;
}
declare class NamedUser implements Named {
    readonly name: string;
    constructor(name: string);
}
declare let namedUser: NamedUser;
