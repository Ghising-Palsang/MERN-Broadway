/**
 * Array
 *
 * -is a collection of data
 * separated by comma
 * desinged in index-value pair
 * index always stars from 0
 * always enclosed by []
 *
 *
 * -when to create array
 * for collection of data
 *
 * Type of array
 * -single dimensional array
 * - multi dimensional array
 */

//Single dimensional array => array containing with only primitive data type
let produtInfo = ["product name", 10, "Brand Name"];
console.log(produtInfo[1]);
console.log(produtInfo[0]);

//multi dimensional array => array, object or any data type inside an array
let allProducts = [
  ["product name", 10, "Brand Name 1"],
  ["product name 2", 50, "Brand name 2"],
  ["product name 3", 100, "Brand Name 3"],
];

console.log(allProducts[2][1]);

let product1 = ["iphone 12", "apple", "smart phone", 1200000, 10, 15];

let afterDiscount = product1[3] - (product1[3] * product1[4]) / 100;

let productObj = {
  name: "iphone 12",
  brand: "apple",
  category: "smart phone",
  price: 120000,
  discount: 10,
  stock: 15,
};

console.log(productObj.price);
console.log(productObj.name);

let result = productObj.price - (productObj.price * productObj.discount) / 100;
console.log(result);

//JSON   (Javascript object Notation)
//Universal Data type
//any programming language does support JSON
// API is used to consume and return JSON

// Insert in an array
// from end (like queue)
//from top (like stack)
// or any position

let phoneDirectory = [];

let userOne = {
  name: "username one",
  email: "userone@gmail.com",
  address: "kathmandu",
  phone: 9898989898,
};

let userTwo = {
  name: "username two",
  email: "userone@gmail.com",
  address: "lalitpur",
  phone: 9898989898,
};

let userThree = {
  name: "username three",
  email: "userone@gmail.com",
  address: "bhaktapur",
  phone: 9898989898,
};
phoneDirectory.push(userOne); // stay at end
phoneDirectory.unshift(userTwo); // stay at top
phoneDirectory.splice(1, 0, userOne); // if we add third value it replaces , if we donot then it will only shift

// Read from array => insert top , reads from end and vice-versa
// from end (stack)
// from top (queue)
// or any position

let last = phoneDirectory.pop(); // removes the last index value

let first = phoneDirectory.shift(); // removes the first index value

//splice(1,1) shifts the value

