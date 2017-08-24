const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = merge([{
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '../src/index.js'),
  ],
  output: {
    path: path.join(__dirname, '../www'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: [/\.scss$/, /\.css$/],
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    stats: 'errors-only',
    host: 'localhost',
    port: 8080,
    contentBase: path.join(__dirname, '../www'),
  },
}]);
