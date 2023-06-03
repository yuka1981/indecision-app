"use strict";

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the handle of a computer"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  )
);

// var user = {
//   name: "Reid",
//   age: 41,
//   location: "Taipei",
// };
//
// var template = (
//   <div>
//     <h1>{user.name}</h1>
//     <p>Age: {user.age}</p>
//     <p>Location: {user.location}</p>
//   </div>
// );
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
