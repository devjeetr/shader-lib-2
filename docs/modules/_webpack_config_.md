[shader-library](../README.md) › [Globals](../globals.md) › ["webpack.config"](_webpack_config_.md)

# External module: "webpack.config"

## Index

### Variables

* [common](_webpack_config_.md#const-common)
* [merge](_webpack_config_.md#const-merge)
* [webpack](_webpack_config_.md#const-webpack)

## Variables

### `Const` common

• **common**: *object* = require("./webpack.common.config")

*Defined in [webpack.config.js:2](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/webpack.config.js#L2)*

#### Type declaration:

* **devtool**: *string* = "inline-source-map"

* **plugins**: *any[]* = [
    new HtmlWebPackPlugin({
      title: "VitalSE"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ]

* **target**: *string* = "web"

* ### **module**: *object*

  * **rules**: *object | object | object[]* = [
      {
        enforce: "pre",
        test: /\.(jsx?|tsx?)$/,
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

* ### **resolve**: *object*

  * **extensions**: *string[]* = [".ts", ".tsx", ".js", ".jsx"]

___

### `Const` merge

• **merge**: *any* = require("webpack-merge")

*Defined in [webpack.config.js:1](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/webpack.config.js#L1)*

___

### `Const` webpack

• **webpack**: *any* = require("webpack")

*Defined in [webpack.config.js:3](https://github.com/devjeetr/shader-lib-2/blob/ba2fd65/webpack.config.js#L3)*
