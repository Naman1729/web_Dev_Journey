////////////////////////////////////////////
////////////// Numbers and Math ////////////
////////////////////////////////////////////

// ************************** Numbers **************************

const score = 100;
console.log(score);

const balance = new Number(500);
console.log(balance);

console.log(balance.toString()); // toString() is a method of Number object and it converts the number into string and we can access all the string methods on it
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num = 1729.229169;

console.log(num.toPrecision(8));

const num2 = 100000000000000;
console.log(num2.toLocaleString("en-US")); // output: 1,000,000,000,000,000
console.log(num2.toLocaleString("en-IN")); // output: 10,00,000,00,00,000

// ************************** Math **************************

// console.log(Math.PI);
// console.log(Math.round(2.4));
// console.log(Math.round(2.5));
// console.log(Math.ceil(2.4));
// console.log(Math.floor(2.4));
// console.log(Math.pow(2, 4));
// console.log(Math.sqrt(64));
// console.log(Math.abs(-64));
// console.log(Math.min(19, 28, 57, 90, 56, 98, 7, 76, 70));
// console.log(Math.max(10, 24, 30, 74, 587, 698, 798, 8, 976));

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
