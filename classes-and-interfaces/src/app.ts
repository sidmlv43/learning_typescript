interface Greetable {
  name: string;
  greet(phrase: string): void;
}

let user1: Greetable = {
  name: "Sid",
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1.greet("Hello!");

class User implements Greetable {
  name: string;
  constructor(name: string, readonly _id: string) {
    this.name = name;
    this._id = _id;
  }
  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }

  get id(): string {
    return this._id;
  }
}

let siddhu = new User("Siddharth", "12c333812c333812c333812");
siddhu.greet("Jai Hind!");
console.log(siddhu.id);
// siddhu.id = "121212";

interface funcType {
  (a: number, b: number): number;
}

let add: funcType = (a, b) => {
  return a + b;
};

// optional parameters and properties

interface Named {
  readonly name: string;
  outputName?: string; // optional
}

class NamedUser implements Named {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let namedUser = new NamedUser("Siddhu");
// namedUser.name = "Siddhu";
