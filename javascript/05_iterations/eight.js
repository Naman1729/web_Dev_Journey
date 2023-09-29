const myNumbers = [1, 2, 3];

const myTotal = myNumbers.reduce((accumulator, currentValue) => {
  console.log(
    `accumulator is ${accumulator} and currentValue is ${currentValue}`
  );
  return accumulator + currentValue;
}, 0);
console.log(myTotal);

const shoppingCart = [
  {
    name: "toothpaste",
    price: 2.99,
  },
  {
    name: "mouthwash",
    price: 5.99,
  },
  {
    name: "toothbrush",
    price: 3.99,
  },
  {
    name: "gum",
    price: 1.99,
  },
  {
    name: "thandai megPack",
    price: 9.99,
  },
];

const totalShoppingCartMoney = shoppingCart.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);

console.log(totalShoppingCartMoney); // 24.950000000000003
console.log(totalShoppingCartMoney.toFixed(3)); // 24.950