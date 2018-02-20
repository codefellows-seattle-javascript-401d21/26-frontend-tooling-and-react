'use strict';

const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-maps',
  entry: `${__dirname}/src/main.js`, //Loaded js file for build.
  output: {
    path: `${__dirname}/build`, // Output path for the bundles.
    filename: 'bundle-[hash].js', // Output information for js bundle, [hash] creates a random id hash.
    publicPath: '/', // Path used by browser to display this bundle.
  },
  plugins: [
    new HtmlPlugin({
      template: `${__dirname}/src/index.html`, // The only HTML file we will actually build, contains an empty html scaffold.
    }),
    new ExtractTextPlugin('bundle-[hash].css'), // Webpack places this CSS file into the build directory like the bundle JS.
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // Locates all .js files and sends them through the loader.
        exclude: /node_modules/, // Make sure the webpack loaders ignore the node modules installed by NPM.
        loader: 'babel-loader', // Loader used with .js files.
      },
      {
        test: /\.scss$/, // Locates all .scss files and sends them through the loader.
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']), // List of Loaders for use with .scss files.
      },
    ],
  },
};