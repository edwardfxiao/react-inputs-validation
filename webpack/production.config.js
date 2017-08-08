const base = require('./base.js');
const _ = require('lodash');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = _.merge(base, {
  devtool: 'cheap-source-map',
  output: {
    publicPath: '/',
    filename: '[name].js'
  }
});

config.plugins.push(
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new ExtractTextPlugin({
    filename: 'css/[name].css',
    disable: false,
    allChunks: true
  })
);

module.exports = config;
