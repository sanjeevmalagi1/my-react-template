const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");
const { merge } = require('webpack-merge');

const webpackModeConfig = process.env.NODE_ENV === 'development' ?
  require('./webpack.config.dev.js') : require('./webpack.config.prod.js');

const baseConfig = {
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
  ]
};

module.exports = merge(baseConfig, webpackModeConfig);