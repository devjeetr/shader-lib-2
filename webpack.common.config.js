const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  devtool: "source-map",
  target: "web",
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(jsx|js)$/,
        exclude: [/node_modules/, /src\/js\/lib/],
        use: {
          loader: "eslint-loader",
          options: {
            emitWarning: true,
            fix: true,
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts"]
        },
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: { minimize: true }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: "VitalSE"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
};
