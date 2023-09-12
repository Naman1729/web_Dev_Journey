"use strict"; // treat all JS code as newer version of JS

// alert(3 + 4); // we are use nodejs, not browser, so we can't use alert() function for showing output like popup .

let name = "Virat Kohli"; // variables can store strings
let age = 32; // variables can store numbers of range -(2^53 - 1) to (2^53 - 1)
let isCaptain = true; // boolean value (true or false)
let state = null; // null value
let address; // undefined value

// bigInt
//  string => "" (name mentioned above)
// null => standalone value (state mentioned above)
// undefined => value is not assign yet (address mentioned above)
// symbol => unique

console.log(typeof null); // output => object

console.log(typeof undefined); // output => undefined
