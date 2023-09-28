const languages = [
  "Solidity",
  "vyper",
  "JavaScript",
  "Python",
  "C++",
  "Java",
  "C",
];

languages.forEach(function (item) {
  console.log(item);
});

console.log("========================================");
languages.forEach((item) => {
  console.log(item);
});

console.log("========================================");

function printLanguage(item) {
  console.log(item);
}

languages.forEach(printLanguage);

console.log("========================================");

languages.forEach((item, idx, arr) => {
  console.log(item, idx, arr);
});

console.log("========================================");

const myCoding = [
  {
    languageName: "Javascript",
    languageFileName: "js",
  },
  {
    languageName: "Solidity",
    languageFileName: "sol",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];

myCoding.forEach((item, idx) => {
  console.log(item.languageName, item.languageFileName, idx);
});
