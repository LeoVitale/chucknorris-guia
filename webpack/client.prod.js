const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  name: 'client',
  target: 'web',
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
    vendor: [
      'react',
      'react-dom',
      'react-flexbox-grid',
      'react-redux',
      'redux',
      'redux-thunk',
      'redux-devtools-extension/logOnlyInProduction',
      'react-transition-group'
    ]

  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    },
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
      include: path.resolve(__dirname, '../')
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          query: {
            modules: true,
            sourceMap: true,
            importLoaders: 1,
            camelCase: 'dashes',
            localIdentName: '[name]__[local]--[hash:base64:5]'
          }
        },
        {
          loader: 'sass-loader',
          options: {
            data: '@import "utils/index.scss";',
            includePaths: [path.resolve('./src/sass/')],
            sourceMap: true
          }
        }
        ]
      })
    }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve('src/components'),
      containers: path.resolve('src/containers'),
      img: path.resolve('src/images'),
      services: path.resolve('src/api'),
      modules: path.resolve('src/redux'),
      utils: path.resolve('src/utils')
    },
    modules: [path.resolve('src/'), 'node_modules'],
    extensions: ['.js', '.css', '.scss']
  },
  plugins: [
    new UglifyJSPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        screw_ie8: true,
        comments: false
      },
      sourceMap: false
    }),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true
    })
  ]
};
