'use strict'
const argv = require('minimist')(process.argv.slice(2))
const init = require('./init')
const commands = argv._

function usage () {
  console.log('Usage: cta <my-app>')
}

function aborting (message) {
  console.log(message)
  usage()
  process.exit(1)
}

if (argv.h || argv.help) {
  usage()
  process.exit()
}

if (commands.length < 1) {
  aborting('The project\'s directory not provided. Aborting.')
}

init(commands[0], function (err) {
  if (err) aborting(err.message)
  process.exit()
})
