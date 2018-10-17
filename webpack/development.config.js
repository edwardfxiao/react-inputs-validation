const base = require('./base.js');
const objectAssign = require('object-assign');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const PATH = require('./build_path');
const config = objectAssign(base, {
  mode: 'development',
  output: {
    publicPath: '/',
    filename: '[name].js'
  }
});
config.plugins.push(new MiniCssExtractPlugin({ filename: 'css/[name].css' }));
module.exports = config;
