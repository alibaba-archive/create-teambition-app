'use strict'
const path = require('path')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const locale = require('koa-locale')
const i18n = require('koa-i18n')
const mount = require('koa-mount')
const config = require('config')
const render = require('koa-ejs')
const router = require('./router')

const app = new Koa()

let renderOpts = {
  root: path.join(__dirname, '../views'),
  layout: false,
  viewExt: 'html',
  cache: true
}

if (config.debug) renderOpts.cache = false

// 使用 ejs 渲染
render(app, renderOpts)
// 判断客户端语言
locale(app, 'lang')
// 加载中间件
app.use(require('koa-logger')())
// 优先加载静态文件
app.use(require('koa-static')(path.join(__dirname, '../static')))

app.use(bodyParser())
app.use(i18n(app, {
  directory: './locales',
  extension: '.json',
  locales: ['zh', 'en'],
  modes: ['query', 'cookie', 'header']
}))
// 加载 API 路由前缀
app.use(mount('/api', router.routes()))

app.on('error', function (err) {
  // 忽略客户端错误
  if (err.status && err.status < 500) return
  console.warn(err.stack)
})

module.exports = app
