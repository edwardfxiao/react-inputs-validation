const base = require('./base.js');
const objectAssign = require('object-assign');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = objectAssign(base, {
  mode: 'production',
  devtool: 'cheap-source-map',
  output: {
    publicPath: '/dist/',
    filename: '[name]-[chunkhash].js'
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          output: {
            comments: false
          },
          compress: {
            warnings: false
          }
        }
      })
    ]
  }
});

config.plugins.push(new MiniCssExtractPlugin({ filename: 'css/[name]-[hash].css' }));

module.exports = config;
