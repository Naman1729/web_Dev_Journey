// for in

const myObject = {
  sol: "solidity",
  js: "JavaScript",
  py: "Python",
  rb: "Ruby",
  java: "Java",
  php: "PHP",
  swift: "Swift",
  c: "C",
  cpp: "C++",
  cs: "C#",
  go: "Go",
};

for (const key in myObject) {
  console.log(`Key: ${key}, Value: ${myObject[key]}`);
}

const languages = [
  "Solidity",
  "JavaScript",
  "Python",
  "Ruby",
  "Java",
  "PHP",
  "Swift",
  "C",
  "C++",
  "C#",
  "Go",
];

for (const index in languages) {
  console.log(`Index: ${index}, Value: ${languages[index]}`);
}

// const map = new Map();
// map.set("IN", "India");
// map.set("US", "United States");
// map.set("UK", "United Kingdom");
// map.set("CA", "Canada");
// map.set("MX", "Mexico");
// map.set("JP", "Japan");

// map is not iterable so this will not work

// for (const key in map) {
//   console.log(`Key: ${key}, Value: ${map[key]}`);
// }
