var HtmlWebpackPlugin = require('html-webpack-plugin'),
    HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    })

module.exports = {
  entry: [
    './src/js/index.js'
  ],
  output: {
    path: __dirname + '/dist/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: 'node_modules',
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
};
