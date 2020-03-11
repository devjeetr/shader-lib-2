const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  devtool: 'inline-source-map',
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    // modules: [path.resolve(__dirname, 'test'), 'node_modules']
  },
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
