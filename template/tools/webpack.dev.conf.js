'use strict'
const path = require('path')
const config = require('config')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
let utils = require('./utils')
let baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
  entry: {
    app: [
      `webpack-hot-middleware/client?path=${path.join(config.prefix, '/__webpack_hmr&noInfo=true&reload=true')}`,
      baseWebpackConfig.entry.app
    ]
  },
  module: {
    loaders: utils.styleLoaders()
  },
  vue: {
    loaders: utils.cssLoaders()
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.ejs',
      inject: true
    })
  ]
})
