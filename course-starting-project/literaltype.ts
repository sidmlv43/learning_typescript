let userInput: unknown;

let username: string;

userInput = 5;
userInput = "Sid";
username = "sidmlv43";

// username = userInput; // not allowed as username is of type str

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

// generateError("An error occurred", 500);

console.log("wachMode on");
