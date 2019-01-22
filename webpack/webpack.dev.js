const commonPaths = require("./paths");
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
  mode: "development",
  output: {
    filename: `[name].js`,
    path: commonPaths.outputPath
  },
  devServer: {
    inline:true,
    port: process.env.PORT || 9090
  },
  plugins: [new DashboardPlugin()],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          "sass-loader"
        ]
      }
    ]
  }
};
