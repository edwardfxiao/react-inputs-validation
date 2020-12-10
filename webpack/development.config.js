const base = require('./base.js');
const objectAssign = require('object-assign');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATH = require('./build_path');
const config = objectAssign(base, {
  mode: 'development',
  output: {
    publicPath: '/',
    filename: '[name].js',
  },
});
config.plugins.push(
  new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
  new HtmlWebpackPlugin({
    template: PATH.HTML_PATH + '/layout.html',
    title: 'react-inputs-validation',
    page: 'index',
    filename: 'index.html',
    hash: false,
    chunksSortMode: function(chunk1, chunk2) {
      var orders = ['index'];
      var order1 = orders.indexOf(chunk1.names[0]);
      var order2 = orders.indexOf(chunk2.names[0]);
      if (order1 > order2) {
        return 1;
      } else if (order1 < order2) {
        return -1;
      } else {
        return 0;
      }
    },
  }),
);
module.exports = config;
