let index = 0;

while (index < 5) {
  console.log(`index: ${index}`);
  index++;
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let idx = 0;
while (idx < myArray.length) {
  console.log(`myArray[${idx}]: ${myArray[idx]}`);
  idx = idx + 2;
}

// let score = 1;
let score = 100;

do {
  console.log(`score: ${score}`);
  score++;
} while (score <= 5);
