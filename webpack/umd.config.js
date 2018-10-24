const env = require('yargs').argv.env; // use --env with webpack 2
const webpack = require('webpack');
const path = require('path');
const PATH = require('./build_path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let libraryName = 'react-inputs-validation';

let plugins = [],
  outputFile;

if (env === 'build') {
  plugins.push(new MiniCssExtractPlugin({ filename: libraryName + '.min.css' }));
  outputFile = libraryName + '.min.js';
} else {
  plugins.push(new MiniCssExtractPlugin({ filename: libraryName + '.css' }));
  outputFile = libraryName + '.js';
}

var config = (module.exports = {
  mode: 'production',
  context: PATH.ROOT_PATH,
  entry: PATH.ROOT_PATH + 'src/js/Inputs/index.umd.ts',
  module: {
    rules: [
      {
        test: /\.mp3?$/,
        include: [PATH.ROOT_PATH],
        exclude: [PATH.NODE_MODULES_PATH],
        loader: 'file-loader?name=audio/[name]-[hash].[ext]',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)\??.*$/,
        include: [PATH.ROOT_PATH],
        // exclude: [PATH.NODE_MODULES_PATH],
        loader: 'url-loader?limit=1&name=font/[name]-[hash].[ext]',
      },
      {
        test: /\.(jpe?g|png|gif|svg)\??.*$/,
        include: [PATH.ROOT_PATH],
        // exclude: [PATH.NODE_MODULES_PATH],
        loader: 'url-loader?limit=1&name=img/[name]-[hash].[ext]',
      },
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
            options: {
              // emitWarning: true
            },
          },
        ],
      },
      { test: /\.(ts|tsx)$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.jsx?$/,
        include: [PATH.ROOT_PATH],
        exclude: [PATH.NODE_MODULES_PATH],
        enforce: 'pre',
        enforce: 'post',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.jsx?$/,
        include: [PATH.ROOT_PATH],
        exclude: [PATH.NODE_MODULES_PATH],
        enforce: 'pre',
        enforce: 'post',
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        enforce: 'pre',
        enforce: 'post',
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: loader => [
                require('postcss-import')({
                  root: loader.resourcePath,
                }),
                require('autoprefixer')(),
                require('cssnano')({ safe: true }),
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'app')],
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.css'],
  },
  devtool: 'source-map',
  output: {
    path: PATH.ROOT_PATH + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
  },
  plugins,
});
