"use strict";

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the handle of a computer",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.options.value;

  if (option) {
    app.options.push(option);
    e.target.elements.options.value = "";
    renderApp();
  }
};

// create "Remove All" button above list
// on click -> wipe the array -> rerender
var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderApp();
};

var appRoot = document.getElementById("app");

var renderApp = function renderApp() {
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
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option, index) {
        return React.createElement(
          "li",
          { key: index },
          option
        );
      })
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "Remove All"
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "options" }),
      React.createElement(
        "button",
        null,
        "Add option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
