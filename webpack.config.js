const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'client', 'dist');
const SRC_DIR = path.resolve(__dirname, 'client', 'src');
const SRC_FILE = path.resolve(SRC_DIR, 'index.jsx');

module.exports = {
  entry: SRC_FILE,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  mode: 'development',
  module: {
    rules: [
      { //Looks for .JS/.JSX files to compile
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.?css$/i,
        use: [ 'style-loader', 'css-loader' ],
      }
    ]
  },
  resolve: {
    extensions: ['css', '...']
  }
};

