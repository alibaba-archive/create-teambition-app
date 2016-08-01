'use strict'
const config = require('config')
const app = require('./server/app')
const mount = require('koa-mount')

if (config.dev) {
  const devServer = require('./tools/dev-server')
  app.use(mount(config.prefix, devServer))
}

const port = process.env.PORT || config.port

app.listen(port, function () {
  console.log(`  Server listen on ${port}`)
})
