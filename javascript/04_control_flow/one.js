const isUserLoggedIn = true;

if (isUserLoggedIn) {
  console.log("Welcome to the dashboard");
}

let temperture = 1;

if (temperture > 30) {
  console.log("It's hot outside");
} else if (temperture < 20) {
  console.log("It's cold outside");
} else {
  console.log("It's moderate outside");
}

// don't use var use let and const instead of var because var can be accessed outside the block scope for example:

// let score = 100;

// if (score >= 100) {
//   var power = "fly";
//   console.log(`You have ${power} power`);
// }

// console.log(`You have ${power} power`); // this will work because var is function scoped not block scoped which means it can be accessed outside the block scope.

const userLoggedIn = true;
const debitCard = true;
const userVerified = false;

// if (userLoggedIn && debitCard) {
//   console.log("You can purchase the item");
// }

if (userLoggedIn || debitCard) {
  console.log("You can purchase the item");
}

// if (userLoggedIn && debitCard && userVerified) {
//   console.log("You can purchase the item");
// } else {
//   console.log("You can not purchase the item");
// }
