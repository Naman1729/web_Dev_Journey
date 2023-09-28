// for loop

for (let index = 0; index <= 10; index++) {
  if (index == 5) {
    console.log("Five is my favorite number");
  }
  console.log(index);
}

for (let i = 0; i <= 10; i++) {
  console.log(`Outer loop: ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop: ${i} and ${j}`);
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

let myArray = [
  "Solidity",
  "Foundry",
  "Blockchain",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node",
];

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] === "React") {
    break;
  }
  console.log(myArray[i]);
}

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] === "React") {
    continue;
  }
  console.log(myArray[i]);
}
