let score = "100";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "100" => 100
// "100abc" => NaN
// null => 0
// undefined => NaN
// true => 1
// false => 0
console.log("------------------------------");

let isloggedIn = 1;

let booleanIsloggedIn = Boolean(isloggedIn);
console.log(booleanIsloggedIn);
console.log(typeof booleanIsloggedIn);

console.log("------------------------------");

// 1 => true; 0 => false
// "abc" => true; "" => false
// null => false; undefined => false

let someNumber = 100;
let someString = String(someNumber);
console.log(someString);
console.log(typeof someString);

console.log("------------------------------");

///////////////////////////////
////////// Operations /////////
///////////////////////////////

let value = 3;
let anotherValue = -value;
console.log(anotherValue);

// console.log(2+3);
// console.log(2-3);
// console.log(2*3);
// console.log(2/3);
// console.log(2%3);
// console.log(2**3);

console.log("------------------------------");

let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2; //concatenation operation => "Hello World"
console.log(str3);

console.log("------------------------------");
