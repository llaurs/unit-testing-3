const path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index.js'
  },
  resolve: {
    extensions: [ '.js', '.jsx' ],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@dist': path.resolve(__dirname, 'dist')
    }
  },
  stats: 'errors-only',
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
      },
    ]
  }
}
