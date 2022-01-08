const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    events: "./src/modules/events.js",
    projects: "./src/modules/projects.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: false, //allows reloading with HTML Templates
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo",
      template: "./src/index.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
