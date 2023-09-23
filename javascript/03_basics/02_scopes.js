let a = 100;

if (true) {
  var c = 300; // var can be accessed outside the block(scope) so it is not a good practice to use var
  let b = 200;
}

// console.log(a);
// console.log(c);

function one() {
  const userName = "Naman";
  function two() {
    const website = "github.com";
    console.log(userName);
  }
  //   console.log(website); // website is in two() scope so it can't be accessed in one() scope

  two();
}

one();

// ============================================ Some Glimpse Hoisting ========================================================

console.log(addOne(3));

function addOne(num1) {
  return num1 + 1;
}

// console.log(addTwo(3)); // this will throw an error because addTwo is store in a variable and it is not hoisted

const addTwo = function (num1) {
  return num1 + 2;
};

console.log(addTwo(3));
