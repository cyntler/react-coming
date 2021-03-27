const { join } = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: join(__dirname, '/src/index.tsx'),
  output: {
    path: join(__dirname, '/lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'babel-loader' }],
  },
};
