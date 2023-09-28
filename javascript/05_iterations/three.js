// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = ["a", "b", "c", "d", "e"];

for (const alphabet of arr) {
  console.log(`alphabet: ${alphabet}`);
}

// const greetings = "Hello World!";
// for (const greet of greetings) {
//   console.log(greet);
// }

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("CA", "Canada");
map.set("MX", "Mexico");
map.set("JP", "Japan");

console.log(map);

for (const [key, value] of map) {
  console.log(`Country Code: ${key}, Country: ${value}.`);
}

const myObject = {
  game1: "Cricket",
  game2: "Football",
  game3: "Hockey",
  game4: "Tennis",
  game5: "Basketball",
  game6: "Badminton",
  game7: "Volleyball",
  game8: "Baseball",
  game9: "Golf",
  game10: "Rugby",
};

for (const [key, value] of Object.entries(myObject)) {
  console.log(`Game ${key}: ${value}`);
}
