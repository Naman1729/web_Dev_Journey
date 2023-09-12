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