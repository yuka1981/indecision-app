"use strict";

var visibility = false;
var toggleVisibiliy = function toggleVisibiliy() {
  // if (visibility) {
  //   visibility = false;
  //   render();
  // } else {
  //   visibility = true;
  //   render();
  // }
  visibility = !visibility;
  render();
};

var render = function render() {
  var jsx = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visiblility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: toggleVisibiliy },
      visibility ? "Hide details" : "Show details"
    ),
    visibility && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Hey! some message here."
      )
    )
  );

  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
