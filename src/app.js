// import { square, add } from "./utils.js";
//
// console.log("app.js is running!!!");
// console.log(square(4));
// console.log(add(100, 23));

// person
// named export isAdult(18) - true if adult, otherwise false
// named export canDrink(18) - true if 21 and over, otherwise false
// import isSenior, { isAdult, canDrink } from "./person.js";

// console.log("age = 18", isAdult(18));
// console.log("age = 16", isAdult(16));
// console.log("age = 21", isAdult(21));
// console.log("age = 18", canDrink(18));
// console.log("age = 64", isSenior(64));

// import substract, { square, add } from "./utils.js";
// console.log(square(4));
// console.log(add(100, 23));
// console.log(substract(100, 18));

import React from "react";
import ReactDOM from "react-dom";

const template = React.createElement("p", {}, "test 123");

ReactDOM.render(template, document.getElementById("app"));
