'use strict'
const webpack = require('webpack')
let webpackConfig = require('./webpack.prod.conf')

webpack(webpackConfig, function (err, stats) {
  if (err) throw err
  console.log(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }))
})
