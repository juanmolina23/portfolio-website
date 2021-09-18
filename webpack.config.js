const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

module.exports = {
  entry: ["babel-polyfill", "./src/Main.js"], //{ index: path.resolve(__dirname, "src", "Main.js") }
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "src")
    },
    hot: true,
    historyApiFallback: true //{ index: "index.html" }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(s?css|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false } },
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|pdf|jpg)$/i,
        loader: "file-loader",
        options: {
          name: "assets/[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    }),
    new MiniCssExtractPlugin()
  ]
}
