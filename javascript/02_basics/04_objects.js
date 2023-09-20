// const discordUser = {} // this is not singleton object
const discordUser = new Object(); // this is a constructor object and it is used to create singleton object

discordUser.id = "987zyx";
discordUser.name = "Sammy";
discordUser.isLoggedIn = false;

// console.log(discordUser)

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "naman",
      lastName: "gautam",
    },
  },
};

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

// const obj3 = { obj1, obj2 }; we don't want this { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// const obj3 = Object.assign(obj1, obj2); // output => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } this will modifies the obj1 and become obj1 == obj3
// const obj4 = Object.assign({},obj1, obj2); // output => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } this will not modifies the obj1 and here target is empty object placed at first
const obj4 = { ...obj1, ...obj2 }; // most of the time we use this spread operator

console.log(obj4);

const users = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 2,
    email: "b@gmail.com",
  },
  {
    id: 3,
    email: "c@gmail.com",
  },
  {
    id: 4,
    email: "d@gmail.com",
  },
];

console.log(users[1].email); // output => b@gmail.com

console.log(discordUser);

console.log(Object.keys(discordUser)); // output => [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(discordUser)); // output => [ '987zyx', 'Sammy', false ]
console.log(Object.entries(discordUser)); // output => [ [ 'id', '987zyx' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(discordUser.hasOwnProperty("isLogged")); // false
console.log(discordUser.hasOwnProperty("isLoggedIn")); // true

const user = {
  name: "naman",
  age: 18,
  location: "India",
  isLoggedIn: false,
};

// we can access the object properties using dot notation like this user.name or user.age
// we can also access the object properties using bracket notation like this user["name"] or user["age"]

// we can also access the object properties using destructuring like this
// const { name } = user;
// console.log(name);

const { name: naam } = user; // we can also rename the property name like this

console.log(naam);

// json - javascript object notation
// json is a string representation of javascript object

// {
//     "name": "naman",
//     "age": 18,
//     "location": "India",
//     "isLoggedIn": false
// }

// we can represent json by using array of objects like this
// [
//     {
//         "name": "naman",
//         "age": 18,
//         "location": "India",
//         "isLoggedIn": false
//     },
//     {
//         "name": "ramanujan",
//         "age": 32,
//         "location": "India",
//         "isLoggedIn": false
//     }
// ]
