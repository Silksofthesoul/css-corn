const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  mode: 'public',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        // use: 'ts-loader',
        exclude: /(node_modules|dist)/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'json'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'CssCorn',
    libraryTarget: 'umd'
  }
}
