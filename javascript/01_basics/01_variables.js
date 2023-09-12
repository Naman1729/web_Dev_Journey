// const is used for variables that will not change ... ever ... like pi or the speed of light
const accountId = 1234;

// let is used for variables that will change   ... like the current temperature
let accountEmail = "xyz@gmail.com";

// var is used for variables that will change ... like the current temperature
/* - var is the old way of declaring variables in JS because it has some issues like hoisting in which the variable is declared at the top of the code even if it is declared at the bottom of the code ...
    this can cause some issues in the code like modifying the value of a variable before it is declared ... this is why we use let and const instead of var 
   - In simple words, issue in block scope and function scope
   */
var accountPassword = "meNhiBataunga1729";
accountCity = "Agra";
let accountState;

// accountId = 5678 // this will throw an error because we cannot change a const variable
accountEmail = "yzx@gmail.com";
accountPassword = "meNhiBataunga229169";
accountCity = "Delhi";

console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
