'use strict'
const path = require('path')
const config = require('config')

module.exports = {
  build: {
    assetsRoot: path.resolve(__dirname, '../build'),
    assetsSubDirectory: 'static',
    assetsPublicPath: config.prefix,
    productionSourceMap: true,
    browsers: ['last 2 versions', 'ie 9-11']
  }
}
