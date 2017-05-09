const path = require('path');
var GhPagesWebpackPlugin = require('gh-pages-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  plugins: [
      new GhPagesWebpackPlugin({
          path: path.join(__dirname, 'www'),
          options: {
              message: 'Update Home Page',
              user: {
                  name: 'Yair M',
                  email: 'yairmendelovich@gmail.com'
              }
          }
      })
  ]
};
