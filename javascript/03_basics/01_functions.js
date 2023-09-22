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

//  console.log(loginUserMessage());

// rest operator is used to take multiple arguments
// function calculateCartPrice(...num1) {
//   return num1;
// }

// console.log(calculateCartPrice(2, 3, 4, 5));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(2, 3, 4, 5));

const user = {
  userName: "Virat Kohli",
  price: 100,
};

function handleObject(anyObject) {
  console.log(
    `user name is ${anyObject.userName} and price is ${anyObject.price}`
  );
}

// handleObject(user);
handleObject({
  userName: "Sunil Chhetri",
  price: 100,
});

const myNewArray = [100, 200, 300, 400];

function handleArray(anyArray) {
  return anyArray[1];
}

console.log(handleArray(myNewArray));
