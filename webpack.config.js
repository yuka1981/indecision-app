// entry -> output

const path = require("path");

// console.log(path.join(__dirname, "public"));

module.exports = {
  mode: "none",
  watch: true,
  entry: "./src/app.js",
  output: {
    // absolute path here
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
};
