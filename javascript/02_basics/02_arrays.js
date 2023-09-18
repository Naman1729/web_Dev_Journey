const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

const array3 = array1.concat(array2);
console.log(array3);

// spread operator - ...    - it spreads the elements of the array into the new array
const array4 = [...array1, ...array2];
console.log(array4);

const another_array = [1, 2, 3, 4, [5, 6], 7, 8, [9, 10, [11, 12], 13, 14], 15]; // (-_-)ゞ゛or ( ・◇・)？ or ヽ(•́o•̀)ノ after seeing this array
const real_another_array = another_array.flat(Infinity); // flat() method is used to flatten the array
console.log(another_array);
console.log(real_another_array);

console.log(Array.isArray("abcdefghijk")); // output => false
console.log(Array.from("abcdefghijk")); // output => [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ]
console.log(Array.from({ name: "naman" })); // output => []  because it is not an iterable object

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // output => [ 100, 200, 300 ]   - it creates an array from the given arguments
