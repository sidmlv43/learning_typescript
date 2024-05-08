abstract class Human {
  protected _name: string;
  constructor(name: string) {
    this._name = name;
  }

  introduce(): void {
    console.log(`Hi, my name is ${this._name}`);
  }

  abstract set(name: string): void;
  abstract get name(): string;
}

class Emp extends Human {
  protected _salary: number;
  protected skills: string[];
  constructor(name: string, salary: number, skills: string[]) {
    super(name);
    this._salary = salary;
    this.skills = skills;
  }
  set(name: string): void {
    this._name = name;
  }
  get name(): string {
    return this._name;
  }
}

class Department {
    private _name: string;
    constructor(_name: string) {
      this._name = _name;
    }
  
    get name() {
      return this._name;
    }
    set name(name: string) {
      this._name = name;
    }
  
    describe() {
      return "Welcome to " + this._name + "!";
    }
  }
  
  const treasury = new Department("Treasury");
  console.log(treasury.name);
  
  console.log(treasury.describe());