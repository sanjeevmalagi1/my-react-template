const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const path = require("path");

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000,
    open: true,
  }
};