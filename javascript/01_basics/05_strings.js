const name = "naman";
const age = 18;

// console.log("My name is " + name + " and I am " + age + " years old"); // old way of doing it in js

console.log(`My name is ${name} and I am ${age} years old`);

const str = new String("Hello_World");
console.log(name.concat(" ", age));

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);
console.log(str.charAt(7));
console.log(str.indexOf("o"));
console.log(str.lastIndexOf("o"));

const newStr = str.slice(-8, 8);
console.log(newStr);

const newStr2 = str.slice(6, 11);
console.log(newStr2);

const newStr3 = str.substring(0, 5); // substring does not accept negative values as arguments and it strart from 0 if the first argument is negative
console.log(newStr3);

const nameWeTakeInInputForm = "        naman           ";
console.log(nameWeTakeInInputForm);
console.log(nameWeTakeInInputForm.trim());

const url = "https://www.naman.com/naman%20gautam";
const newUrl = url.replace("%20", " ");
console.log(url);
console.log(newUrl);

console.log(url.includes("naman")); // true

const str2 = "Hello_World_I_am_Naman_Gautam";
const arr = str2.split("_");
console.log(arr);
