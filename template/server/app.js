'use strict'
const path = require('path')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const mount = require('koa-mount')
const locales = require('koa-locales')
const config = require('config')
const render = require('koa-ejs')
const router = require('./router')

const app = new Koa()

locales(app, {
  dirs: [path.join(__dirname, 'locales')],
  defaultLocale: 'zh'
})

let renderOpts = {
  root: path.join(__dirname, '../views'),
  layout: false,
  viewExt: 'html',
  cache: true
}

if (config.debug) renderOpts.cache = false

// 使用 ejs 渲染
render(app, renderOpts)
// 加载中间件
app.use(require('koa-logger')())
// 优先加载静态文件
app.use(mount('/static', require('koa-static')(path.join(__dirname, '../static'))))

app.use(bodyParser())
// 加载 API 路由前缀
app.use(mount('/api', router.routes()))

app.on('error', function (err) {
  // 忽略客户端错误
  if (err.status && err.status < 500) return
  console.warn(err.stack)
})

module.exports = app
