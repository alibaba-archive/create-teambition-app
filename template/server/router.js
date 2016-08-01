'use strict'
/**
 * API Routes
 */
const router = require('koa-router')()

/** Replace following codes with your business codes **/
router.get('/', function () {
  const pkg = require('../package.json')
  this.body = {'template-version': pkg.version}
})
/** Replace above codes with your business codes **/

module.exports = router
