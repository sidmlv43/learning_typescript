"use strict";
console.log("Generics: ");
const names = ["Siddharth"];
function bubbleSort(a) {
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
const unsortedArray = [4, 1, 9, 45, 43, 0];
bubbleSort(unsortedArray);
console.log(unsortedArray);
// bubbleSort(names);
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("This is done"), 2000);
});
promise.then((res) => console.log(res.length));
// Generic function
function merge(a, b) {
    return Object.assign(a, b);
}
const mergeObj = merge({ name: "Siddharth" }, { age: 23 });
console.log(mergeObj);
function countAndDescribe(element) {
    let descText = "Got no value.";
    if (element.length > 0) {
        descText = "Got " + element.length + " elements.";
    }
    return [element, descText];
}
console.log(countAndDescribe(["Sports", "Cooking"]));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
extractAndConvert({ name: "Siddharth", age: 19 }, "name");
extractAndConvert({ name: "Siddharth", age: 19 }, "age");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Hello world");
textStorage.addItem("I am here to help");
console.log(textStorage);
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.date = date;
    return courseGoal;
}
const nNames = ["Sid", "Anna"];
