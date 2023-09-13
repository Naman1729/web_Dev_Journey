console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("------------------------------");

///////////
/// === ///
///////////

console.log(0 == false); // true
console.log("" == false); // true
console.log(0 === false); // false
console.log("" === false); // false

console.log("------------------------------");

// don't use these null and undefined in comparisons in production code

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log("------------------------------");

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false
console.log(undefined < 0); // false

console.log("------------------------------");
