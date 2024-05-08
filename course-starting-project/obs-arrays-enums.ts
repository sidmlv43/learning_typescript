// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Siddharth",
//   age: 29,
//   hobbies: ["Cooking", "Coding"],
//   role: [1, "author"],
// };

enum Role {
  Author = 1,
  Writer = 2,
  Editor = 3,
}

const person = {
  name: "Siddharth",
  age: 29,
  hobbies: ["Cooking", "Coding"],
  role: Role.Author,
};

console.log(person.name);

