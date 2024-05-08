// core types in typescript

// In JavaScript and TypeScript there is only one type for numbers
// that is Number
// 1, 1.2, -1, these are all of type Number.

// Type: String ('Hi', "Hi", `Hi`)

// Type: Boolean (true, false)

function add(n1: number, n2: number, showResult: boolean, phrase: string = "") {
  /**
   * @param n1: Number,
   * @param n2: Number,
   * @param showResult: boolean,
   * @param phrase: string
   * @returns sum of @param n1 and @par     am n2
   */
  if (showResult) {
    if (phrase.length > 0) {
      console.log(`${phrase} ${n1 + n2}`);
      return;
    }
    console.log(n1 + n2);
    return;
  }
  return n1 + n2;
}

const num1 = 2.076;
const num2 = 4.924;
const showResult: boolean = true;
add(num1, num2, showResult, "result = ");

// Type: Array

const arr1: Array<number> = [1, 2, 3, 4, 5];
const arr2: Array<string> = ["a", "b", "c", "d", "e"];
const arr3: Array<boolean> = [true, false, true, false, true];

console.log(arr1);
class Car {
  constructor(public make: string, public model: string, public year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

let cars: Array<Car> = [];
cars.push(new Car("maruti", "800", 1990));

console.log(cars);
