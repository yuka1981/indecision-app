// entry -> output

const path = require("path");
const webpack = require("webpack");

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
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
