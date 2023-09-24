const user = {
  userName: "Naman",
  price: 100,

  wellcomeMessage: function () {
    console.log(`Hello ${this.userName}! , Welcome to the website.`);
    // console.log(this);
  },
};

user.wellcomeMessage(); // Hello Naman! , Welcome to the website.

user.userName = "Mratyunjay";
user.wellcomeMessage(); // Hello Mratyunjay! , Welcome to the website.

// console.log(this); // output: {} // this is a global object in nodejs. but, In browser it is a window object

function newFunc() {
  console.log(this);
}

// newFunc();

// ============================================ Arrow Function ========================================================

const arrowFunc = () => {
  console.log(this); // output: {}
};

arrowFunc();

// const addTwoNumbers = (nums1, nums2) => {
//   return nums1 + nums2;
// };

const addTwoNumbers = (nums1, nums2) => nums1 + nums2; // if there is only one line of code in the function then we can write it like this
// const addTwoNumbers = (nums1, nums2) => ( nums1 + nums2 ); // we can also write it like this
const objectFunc = () => ({ userName: "Naman" }); // if we want to return an object then we have to write it like this

console.log(addTwoNumbers(6, 9));
console.log(objectFunc());
