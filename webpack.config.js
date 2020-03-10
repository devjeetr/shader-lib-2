const merge = require("webpack-merge");
const common = require("./webpack.common.config")
const webpack = require("webpack");



module.exports = merge(common, {
  entry: ["./src/js/index.ts"],
  devServer: {
    stats: {
      colors: true,
      chunks: false,
      children: false
    }
  }
});
