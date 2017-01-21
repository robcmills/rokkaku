var path = require('path')
var webpack = require('webpack')

var commonConfig = require('./common.config')

var commonLoaders = commonConfig.commonLoaders
var publicPath = commonConfig.output.publicPath
// var externals = commonConfig.externals

module.exports = {
  // The configuration for the server-side rendering
  name: 'server-side rendering',
  context: path.join(__dirname, '..', 'app'),
  entry: {
    server: '../server/index'
  },
  target: 'node',
  // node: {
  //   __dirname: false
  // },
  // devtool: 'sourcemap',
  output: {
    // The output directory as absolute path
    path: path.join(__dirname, '..', 'compiled'),
    // The filename of the entry chunk as relative path inside the output.path directory
    filename: '[name].dev.js',
    // The output path from the view of the Javascript
    // publicPath: publicPath,
    // libraryTarget: 'commonjs2'
  },
  module: {
    loaders: commonLoaders
  },
  // resolve: {
  //   root: [path.join(__dirname, '..', 'app')],
  //   extensions: ['', '.js', '.jsx'],
  // },
  plugins: [
      new webpack.EnvironmentPlugin(['NODE_ENV']),
  ],
  stats: {
    warnings: false
  }
}
