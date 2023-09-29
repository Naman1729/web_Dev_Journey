const language = ["JavaScript", "Solidity", "Vyper", "PHP", "Python", "Ruby"];

language.forEach((item) => {
  console.log(item);
});

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myNums.filter((nums) =>
  nums > 4
    ? console.log("This is greater than four: ", nums)
    : console.log("This is less than four: ", nums)
);

const newNums = myNums.filter((nums) => nums > 4);
console.log(newNums);

const newNums2 = myNums.filter((nums) => {
  return nums > 4;
});

console.log(newNums2);

const newNums3 = [];

myNums.forEach((nums) => {
  if (nums > 4) {
    newNums3.push(nums);
  }
});

console.log(newNums3);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((book) => book.genre === "History");

userBooks = books.filter((book) => {
  return book.publish >= 1995 && book.genre === "History";
});

console.log(userBooks);
