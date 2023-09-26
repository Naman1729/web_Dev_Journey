const userEmail = null;

if (!userEmail) {
  console.log("Please provide a valid email address");
} else {
  console.log("Thank you for your submission");
}

// falsy values

// false, 0, "", null, undefined, NaN, -0, 0n(bigInt)

// truthy values

// everything else is truthy but some strange values are :
// [], {}, function(){}, "0", "false"," ", -1, 1n(bigInt)

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  console.log("The object is not empty");
}

// Nullish coalescing operator (??): null and undefined(all story is depend on this two keywords)

let val1;
// val1 = 5 ?? 10; // output: 5
// val1 = null ?? 10; // output: 10
// val1 = undefined ?? 10; // output: 10
val1 = undefined ?? 10 ?? 20; // output: 10

console.log(val1);

// Ternary operator (?:) (conditional operator like if else)

const age = 19;
const isOldEnough = age >= 18 ? "You can vote" : "You cannot vote"; // condition ? true : false
console.log(isOldEnough); // output: You can vote
