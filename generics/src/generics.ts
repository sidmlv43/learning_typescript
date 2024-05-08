console.log("Generics: ");
const names: Array<string> = ["Siddharth"];

function bubbleSort(a: Array<number>) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
}

const unsortedArray: Array<number> = [4, 1, 9, 45, 43, 0];

bubbleSort(unsortedArray);
console.log(unsortedArray);

// bubbleSort(names);

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => resolve("This is done"), 2000);
});

promise.then((res) => console.log(res.length));

// Generic function

function merge<T extends Object, U extends Object>(a: T, b: U) {
  return Object.assign(a, b);
}

const mergeObj = merge({ name: "Siddharth" }, { age: 23 });

console.log(mergeObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descText = "Got no value.";
  if (element.length > 0) {
    descText = "Got " + element.length + " elements.";
  }
  return [element, descText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));

function extractAndConvert<T extends Object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Siddharth", age: 19 }, "name");
extractAndConvert({ name: "Siddharth", age: 19 }, "age");

class DataStorage<T> {
  private data: T[] = [];
  addItem(item: T): void {
    this.data.push(item);
  }
  removeItem(item: T): void {
    this.data.splice(this.data.indexOf(item), 1);
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Hello world");
textStorage.addItem("I am here to help");
console.log(textStorage);

interface CourseGoal {
  title: string;
  description: string;
  date: Date;
}

function createCourseGoal(title: string, description: string, date: Date) {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.date = date;
  return courseGoal as CourseGoal;
}

const nNames: Readonly<string[]> = ["Sid", "Anna"];
