// type aliases
type Combinable = number | string;
type ConversonDescriptor = "as-text" | "as-number";

type User = {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
};

const user: User = {
  name: "Siddharth",
  age: 29,
  hobbies: ["Cooking", "Coding"],
  role: [1, "author"],
};

function acrue(
  n1: Combinable,
  n2: Combinable,
  resultConversion: ConversonDescriptor
) {
  let result: number | string;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  if (resultConversion === "as-text") {
    return result.toString();
  }
  if (resultConversion === "as-number") {
    return +result;
  }
}

const combinedName = acrue("Siddharth ", "Malviya", "as-text");
console.log(combinedName);
