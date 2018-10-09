const webpack = require('webpack');
const path = require('path');
const PATH = require('./build_path');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const stylelintRules = require('../stylelint.config.js');

var config = (module.exports = {
  context: PATH.ROOT_PATH,
  entry: {
    index: PATH.ROOT_PATH + 'example/index.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              emitWarning: true
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['es2015', 'react', 'stage-2'] }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)\??.*$/,
        use: [
          {
            loader: 'url-loader?limit=8192&name=font/[name].[ext]',
            query: {
              // outputPath: 'assets/',
              // publicPath: 'http://localhost:8080/',
              // emitFile: true
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)\??.*$/,
        use: [{ loader: 'url-loader?limit=8192&name=img/[name].[ext]' }]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.css$/,
        include: [/node_modules/, path.join(PATH.ROOT_PATH, '/lib')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                // ident: 'postcss',
                plugins: loader => [
                  require('postcss-import')({
                    root: loader.resourcePath
                  }),
                  require('autoprefixer')(),
                  require('cssnano')()
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/, path.join(PATH.ROOT_PATH, '/lib')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                // ident: 'postcss',
                plugins: loader => [
                  require('postcss-import')({
                    root: loader.resourcePath
                  }),
                  require('autoprefixer')(),
                  require('cssnano')()
                ]
              }
            }
          ]
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.coffee', '.json'],
    alias: {
      STYLES: path.join(PATH.SOURCE_PATH, '/css')
    }
  },
  output: {
    path: PATH.ASSET_PATH,
    filename: 'js/[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    disableHostCheck: true,
    // public: 'your-host:8080',
    host: '0.0.0.0',
    port: 9000
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: 'commons',
    //   chunks: ['lib', 'index']
    // }),
    new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/),
    new webpack.ProvidePlugin({
      React: 'React',
      react: 'React',
      'window.react': 'React',
      'window.React': 'React',
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new ManifestPlugin({
      fileName: 'rev-manifest.json'
    }),
    // new webpack.DllReferencePlugin({
    //   context: PATH.ROOT_PATH,
    //   manifest: require(path.join(
    //     PATH.ASSET_PATH,
    //     './react_vendors-manifest.json'
    //   ))
    // }),
    new HtmlWebpackPlugin({
      template: PATH.HTML_PATH + '/layout.html',
      title: 'react inputs validation',
      page: 'index',
      filename: 'index.html',
      hash: false,
      // customStyle: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      chunksSortMode: function(chunk1, chunk2) {
        var orders = ['common', 'index'];
        var order1 = orders.indexOf(chunk1.names[0]);
        var order2 = orders.indexOf(chunk2.names[0]);
        if (order1 > order2) {
          return 1;
        } else if (order1 < order2) {
          return -1;
        } else {
          return 0;
        }
      }
    })
    // new CopyWebpackPlugin([
    //   {
    //     from: PATH.ROOT_PATH + '/src/config/',
    //     to: PATH.ROOT_PATH + '/dist/config/'
    //   }
    // ])
    // new AddAssetHtmlPlugin({
    //   hash: true,
    //   filepath: require.resolve(PATH.ASSET_PATH + '/react_vendors.js'),
    //   includeSourcemap: false
    // })
    // new CopyWebpackPlugin([
    //   { from: PATH.ROOT_PATH + 'src/config.js', to: PATH.ROOT_PATH + 'dist/config.js' },
    // ])
    // new webpack.DllReferencePlugin({
    //   context: PATH.ROOT_PATH,
    //   manifest: require(path.join(PATH.ASSET_PATH, './jquery-manifest.json'))
    // }),
  ]
});
