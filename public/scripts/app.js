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

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
