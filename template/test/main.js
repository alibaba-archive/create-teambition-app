'use strict'
/* global describe, before, after, it */

describe('TeambitionApp', function () {
  before(function * () {
    console.log('Preparing.')
  })
  it('Should walk through test process', function * () {
    console.log('Twinkle, twinkle.')
  })
  after(function * () {
    console.log('Cleaning up.')
  })
})
