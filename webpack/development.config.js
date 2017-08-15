const base = require('./base.js');
const _ = require('lodash');
const webpack = require('webpack');
const PATH = require('./build_path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = _.merge(base, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  }
});

config.plugins.push(
  new ExtractTextPlugin({
    filename: 'css/[name].css',
    disable: false,
    allChunks: true
  })
);

module.exports = config;
