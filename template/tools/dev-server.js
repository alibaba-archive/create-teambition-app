'use strict'
const path = require('path')
const config = require('config')
const koa = require('koa')
const webpack = require('webpack')
const webpackConfig = require('./webpack.dev.conf')
const fallback = require('connect-history-api-fallback')({
  index: path.join(config.prefix, '/index.html')
})

var app = koa()
var compiler = webpack(webpackConfig)

var devMiddleware = require('koa-webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

app.use(require('koa-logger')())

app.use(function * (next) {
  fallback(this, null, function () {})
  yield next
})

// serve webpack bundle output
app.use(devMiddleware)

app.use(require('koa-webpack-hot-middleware')(compiler, {
  path: path.join(config.prefix, '/__webpack_hmr')
}))

module.exports = app
