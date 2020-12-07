const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '..' ,'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', "src", "index.html")
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000,
    open: true,
  }
};