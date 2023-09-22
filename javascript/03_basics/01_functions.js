// normal function

function sayMyName(name) {
  for (let index = 0; index < name.length; index++) {
    const element = name[index];
    console.log(`name[${index}] = ${name[index]}`);
  }
}

// sayMyName("NamanGautam");

function addTwoNumbers(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    throw new Error("Invalid input");
  }
  return number1 + number2;
}

// console.log(addTwoNumbers(2, 3));

// function loginUserMessage(name) {
//   if (name === null || name === undefined) {
//     throw new Error("Invalid input");
//   }
//   return `${name} logged in successfully`;
// }

// console.log(loginUserMessage("Naman"));

function loginUserMessage(name = "Naman") {
  if (name === null || name === undefined) {
    throw new Error("Invalid input");
  }
  return `${name} logged in successfully`;
}

console.log(loginUserMessage());
