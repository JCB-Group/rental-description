const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test   :/\.jsx?$/,
        exclude:/(node_modules|bower_components)/,
        loader :'babel-loader',
        query  :{
            presets:['@babel/preset-react', '@babel/preset-env' ]
        }
      }
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader"
      //   }
      // }
    ]
  }
};




