const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'client', 'dist');
const SRC_DIR = path.resolve(__dirname, 'client', 'src');
const SRC_FILE = path.resolve(SRC_DIR, 'index.jsx');

module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', SRC_FILE],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  devServer: {
    static: {
      directory: DIST_DIR
    },
    compress: true,
    port: 9000,
    hot: true
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
    extensions: ['css', '...'] // spread operator doesn't overrride defaults
  }
};

