const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const commonPaths = require("./paths");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  output: {
    filename: `${commonPaths.jsFolder}/[name].[hash].js`,
    path: commonPaths.outputPath
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]__[hash:base64:5]"
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([commonPaths.outputPath.split("/").pop()], {
      root: commonPaths.root
    }),
    new MiniCssExtractPlugin({
      filename: `${commonPaths.cssFolder}/[name].css`
    })
  ],
  devtool: "source-map",
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
};
