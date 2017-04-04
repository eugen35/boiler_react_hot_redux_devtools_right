var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './index.bundle'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    //publicPath: '/static/',
    library: "abac-sync",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ['', '.js']
  },
  resolveLoader: {
    'fallback': path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, '..', '..', 'src')
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: __dirname
    },
      {
        loaders: ["json-loader"],
        include: /\.json$/
      }
    ]
  },
  watchOptions: {
    aggregateTimeout: 300, // Delay the rebuilt after the first change. Value is a time in ms.
    //poll: true // bool - enable / disable polling or number - polling delay
    poll: 1000
  }
};
