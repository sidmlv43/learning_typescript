

enum Gender {
  Male,
  Female,
  Other,
}

class Person {
  protected _name: string;
  protected _age: number;
  protected _gender: Gender;

  protected static nInstances: number = 0;

  constructor(_name: string, _age: number, _gender: Gender) {
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
  set name(name: string) {
    this._name = name;
  }
  set age(age: number) {
    this._age = age;
  }
  set gender(gender: Gender) {
    this._gender = gender;
  }

  introduce() {
    return `Hi! My name is ${this._name} and I am ${this._age} years old`;
  }

  static checkInstances() {
    return Person.nInstances;
  }
}

class Employee extends Person {
  protected _salary: number;
  protected skills: string[];

  constructor(
    _name: string,
    _age: number,
    _gender: Gender,
    _salary: number,
    skills: string[]
  ) {
    super(_name, _age, _gender);
    this._salary = _salary;
    this.skills = skills;
  }

  get salary() {
    return this._salary;
  }

  introduce(): string {
    return `Hi! My name is ${
      this._name
    } and I am proficient with ${this.skills.join(
      this.skills.length === 2 ? " and " : ", "
    )}.`;
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
