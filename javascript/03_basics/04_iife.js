// Immediately Invoked Function Expression (IIFE)

// IIFE is used to make a function which is executed immediately after it is created and it has its own scope. global scope is not affected by it. so, it reduces pollution of global scope and it is used to make a private scope.

(function message() {
  //IIFF
  console.log("database connected!");
})(); // semi-colon is used to tell the compiler that this is the end of the statement important to write in IIFE.

((name) => {
  console.log(`database connected 2 by ${name} !`);
})("Bharat");
