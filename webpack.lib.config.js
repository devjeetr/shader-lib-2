
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: "./src/js/GPX/GPX.ts",
  mode: "production",
  optimization: {
    usedExports: true,
    minimizer: [new TerserPlugin()]
  },
  resolve: {
    extensions: [".ts", ".js"]
    // modules: ['node_modules']
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(jsx?|tsx?)$/,
        exclude: [/node_modules/, path.resolve(__dirname, "src/js/__tests__")],
        use: {
          loader: "eslint-loader",
          options: {
            emitWarning: true,
            fix: true
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",

        exclude: /node_modules/
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(),]
};
