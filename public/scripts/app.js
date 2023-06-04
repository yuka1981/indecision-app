"use strict";

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the handle of a computer",
  options: ["One", "Two"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options" : "No options"
  )
);

var count = 0;

var addOne = function addOne() {
  console.log("addOne");
};

var minusOne = function minusOne() {
  console.log("minusOne");
};

var reset = function reset() {
  console.log("reset");
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: minusOne },
    "-1"
  ),
  React.createElement(
    "button",
    { onClick: reset },
    "reset"
  )
);

// Challenge
// Make button "-1" - setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
