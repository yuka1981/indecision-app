// const square = function (x) {
//   return x * x;
// };

// const squareArrow = (x) => {
//   return x * x;
// };

// const squareArrow = (x) => x * x;
//
// console.log(squareArrow(8));

// Challenge - Use arrow function
// getFistName("Mike Smith") -> "Mike"
// Create reqular arrow function
// Create arrow function using shorthand syntax

let fullName = "Mike Smith";

// const getFistName = (fullName) => {
//   return fullName.split(" ")[0];
// };

const getFistName = (fullName) => fullName.split(" ")[0];

console.log(getFistName(fullName));
