// function Logger(constructor: Function) {
//   console.log("Logger....");
//   console.log(constructor);
// }

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    console.log("rendering template");
    const hookEl = document.getElementById(hookId);
    // console.log(hookEl);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>TypeScript Decorators</h1>", "app")
class Person {
  name = "Sid";
  constructor() {
    console.log("Creating person object");
  }
}

const pers = new Person();

console.log(pers);

// Property decorators

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator!");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor Decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method Decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter Decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log2
  get price() {
    return this._price;
  }
  set price(val: number) {
    if (val > 0) {
      this._price = val;
      return;
    }
    throw new Error("Invalid price");
  }

  @Log3
  getPriceWithTax(@Log4 
    tax: number) {
    return this._price * (1 + tax);
  }
}
