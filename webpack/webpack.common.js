const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonPaths = require("./paths");

module.exports = {
  entry: commonPaths.entryPath,

  output: {
    filename: "[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|gif|svg|ttf)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: commonPaths.imagesFolder
          }
        }
      },
      {
        test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "fonts"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
      filename: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin({})
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  }
};
