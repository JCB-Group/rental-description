const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  watch: true,
  mode: 'development',
  output: {
    filename: 'main.js',
    path: '/Users/Chad/hr2019/rental-description/dist',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
    ],
  },
};
