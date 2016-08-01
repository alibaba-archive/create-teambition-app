'use strict'
const config = require('config')
const app = require('./server/app')
const mount = require('koa-mount')

if (config.dev) {
  const devServer = require('./tools/dev-server')
  app.use(mount(config.prefix, devServer))
} else if (config.static) {
  app.use(mount(config.prefix, (function () {
    const path = require('path')
    const Koa = require('koa')
    const staticApp = new Koa()
    staticApp.use(require('koa-logger')())
    staticApp.use(require('koa-static')(path.join(__dirname, 'build', config.prefix)))
    staticApp.use(function * () {
      yield require('koa-sendfile')(this, path.join(__dirname, 'build/index.html'))
    })
    return staticApp
  })()))
}

const port = process.env.PORT || config.port

app.listen(port, function () {
  console.log(`  Server listen on ${port}`)
})
