// array

const myArr = [0, 1, 2, 3, true, 5, 6, 7, "eight"];
console.log(myArr);

const myArr2 = myArr;
console.log(myArr2);

myArr2[0] = "zero";
console.log(myArr2);
console.log(myArr);  // both arrays are same because they are pointing to the same memory location or we can say that they are referencing the same memory location

const myArr3 = new Array(3, 8, 9);
console.log(myArr3);

// Array Methods

// 1. push() - adds an element at the end of the array
myArr3.push(10);
myArr3.push(11);
console.log(myArr3);

// 2. pop() - removes an element from the end of the array
myArr3.pop();
console.log(myArr3);

// 3. unshift() - adds an element at the beginning of the array
myArr3.unshift(0);
console.log(myArr3);

// 4. shift() - removes an element from the beginning of the array
myArr3.shift();
myArr3.shift();
console.log(myArr3);

// 5. concat() - concatenates two arrays
const myArr4 = [3, 4, 5];
const myArr5 = [6, 7];
const myArr6 = myArr4.concat(myArr5);
console.log(myArr6);

// 6. reverse() - reverses the array
myArr6.reverse();
console.log(myArr6);

// 7. sort() - sorts the array
myArr6.sort();
console.log(myArr6);

// 8. includes() - checks if the array includes the given element
const isNinePresent = myArr6.includes(9); // returns a boolean value
console.log(isNinePresent);
console.log(myArr6.includes(6));

// 9. indexOf() - returns the index of the given element
console.log(myArr6.indexOf(6));
console.log(myArr6.indexOf(9)); // returns -1 if the element is not present in the array

// 10. join() - joins the elements of the array into a string
const convertAndJoinTheStringByArgument = myArr6.join(" "); // it returns a string
console.log(convertAndJoinTheStringByArgument);

// 11. slice() - returns a new array from the given index to the end of the array
const myArr7 = myArr6.slice(2); // similar to const myArr8 = myArr6.splice(2, 4);
console.log(myArr7);

// 12. splice() - returns a new array from the given index to the given index
const myArr8 = myArr6.splice(0, 3);
//console.log(myArr6); // output => [ 6, 7 ] because we have removed the first three elements from the array by using splice()
console.log(myArr8);
