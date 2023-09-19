// object
// 1. object literal
// 2. object constructor

// singleton object - it is an object that can be instantiated only once . constructor function is used to create singleton object. literal notation cannot be used to create singleton object.

// object literal
// Object.create(null); // it creates an empty object without any prototype methods. it is used to create a singleton object. This is constructor object.

const mySym1 = Symbol("mySym1");
const mySym2 = Symbol("mySym2");

const jsUser = {
  name: "naman",
  "full name": "naman gautam", // this is a valid key but not a good practice
  mySym1: "mySym", // this is not a symbol
  [mySym2]: "mySym", // this is a symbol
  age: 18,
  location: "India",
  isLoggedIn: false,
  lastLoginDays: ["Tuesday", "Thursday"],
};

console.log(jsUser);
console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym2]);

jsUser.age = "19";
console.log(jsUser.age);

// Object.freeze(jsUser); // it freezes the object and does not allow to change the value of the object
// jsUser.age = "20"; // this will not change the value of the object
// console.log(jsUser.age);

jsUser.greeting = function () {
  console.log("Hello js user");
};

jsUser.greetingTwo = function () {
  console.log(`Hello js user, my name is ${this.name}`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
