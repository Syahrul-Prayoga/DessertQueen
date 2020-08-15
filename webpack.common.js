const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      // style and CSS Loader
      {
        test: /\.css$/,
        use: [{
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },

      // Image Loader
      {
        test: /\.(png|jpg|gif)$/i,
        use: [{
          loader: "file-loader"
        }]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};