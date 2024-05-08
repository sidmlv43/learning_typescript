"use strict";
console.log("Starting");
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
printEmployeeInformation(e1);
class Car {
    drive() {
        console.log("driving...");
    }
}
class Truck {
    drive() {
        console.log("driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading cargo..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    //   if ("loadCargo" in vehicle) {
    //     vehicle.loadCargo(1000);
    //   }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingsSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at speed: " + speed);
}
moveAnimal({ type: "bird", flyingsSpeed: 40 });
// Type Casting.
// const paragraph = document.querySelector(
//   "#message-output"
// )! as HTMLParagraphElement;
const inpEl = document.querySelector("#text-input");
console.log(inpEl);
inpEl.value = "I am good";
const errorBag = {
    email: "not a valid email address",
    username: "Must start with a capital character",
};
// function overload
