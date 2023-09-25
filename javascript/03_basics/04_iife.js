// Immediately Invoked Function Expression (IIFE)

// IIFE is used to make a function which is executed immediately after it is created and it has its own scope. global scope is not affected by it. so, it reduces pollution of global scope and it is used to make a private scope.

(function message() {
  //IIFF
  console.log("database connected!");
})(); // semi-colon is used to tell the compiler that this is the end of the statement important to write in IIFE.

((name) => {
  console.log(`database connected 2 by ${name} !`);
})("Bharat");

// **************** javascript Execution Context  ****************
// 1. Global Execution Context(this)
// 2. Functional Execution Context
// 3. Eval Execution Context

// **************** How javascript Run  ****************
// 1. Memory Creation Phase
// 2. Code Execution Phase

// steps
// 1. Global Execution is created and allocated to this(this is a keyword which is used to refer to the current object in which it is used)
// 2. Memory is allocated to all the variables and functions
// 3. Code is executed line by line
