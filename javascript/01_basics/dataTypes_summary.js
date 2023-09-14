////////////////////////////////////////////////////////////////////////////////////////
// primitive data types: number, string, boolean, null, undefined, symbol, bigint //////
////////////////////////////////////////////////////////////////////////////////////////

// number
const num = 42;
const nums = 1.97;

// string
const sentence = "I am a sentence storing string data type";
let sentence2 = "I am a sentence also storing string data type";

// boolean
const isTrue = true;
let isFalse = false;

// null
const nullValue = null;

// undefined
let undefinedValue;

// symbol
const id = Symbol("123");
const id2 = Symbol("123");
// console.log(typeof(id2));
// console.log(id === id2);

// bigint
const bigintValue = 1234567890123456789012345678901234567890n;
// console.log(bigintValue);
// console.log(typeof bigintValue);

////////////////////////////////////////////////////////////////////
// non-primitive data types(reference): object, function, array ////
////////////////////////////////////////////////////////////////////

// array
const arr = [1, 2, 3, 4, 5, "yoo"];
const arr2 = new Array(1, 2, 3, 4, 5, "yoo");
// console.log(arr2);
// console.log(arr === arr2);

// object
const obj = {
  name: "naman",
  age: 18,
  isMarried: false,
};

// function
const myFunction = function func() {
  console.log("I am a function");
};

// myFunction(); // calling the function


// *************************************************************************

//          memory
//           /  \
//          /    \
//       stack   heap
// (primitive)    (non-primitive)


let user = "jonny";

let user2 = user; // copy

user2 = "jenny";

console.log(user);
console.log(user2);

const customerOne = {
  name: "jonny",
  age: 18,
};

const customerTwo = customerOne; // reference
customerTwo.age = 20;

console.log(customerOne);
console.log(customerTwo);