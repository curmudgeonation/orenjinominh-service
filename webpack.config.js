const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');
const htmlTemplate = path.join(__dirname, 'client/src/index.html');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// let HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//   title: 'Development',
//   template: htmlTemplate,
//   filename: 'index.html',
//   inject: 'body'
// });

// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   entry: [`${SRC_DIR}/index.jsx`],
//   devtool: 'inline-source-map',
//   devServer: {
//     contentBase: DIST_DIR,
//   },
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         include: SRC_DIR,
//         loader: 'babel-loader',
//         query: {
//           presets: [
//             '@babel/preset-react'
//           ]
//         }
//       }
//     ]
//   },
//   plugins: [
//     new CleanWebpackPlugin(),
//     HTMLWebpackPluginConfig
//   ]
// };

module.exports = {
  entry: path.join(__dirname, '/client/src/index.jsx'),
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: [/\.css$/],
        use: ['style-loader', 'css-loader']
      }
    ]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
};