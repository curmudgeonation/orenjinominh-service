var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  target: 'node',
  output: {
    filename: 'main.js',
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.m?js$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  }
};