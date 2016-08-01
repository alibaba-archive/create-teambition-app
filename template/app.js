'use strict'
const config = require('config')
const app = require('./server/app')

const port = process.env.PORT || config.port

app.listen(port, function () {
  console.log(`  Server listen on ${port}`)
})
