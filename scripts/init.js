'use strict'
const path = require('path')
const fs = require('fs-extra')
const spawn = require('cross-spawn')

// Build local package.json
module.exports = function (appPath, callback) {
  const targetRoot = path.resolve(appPath)
  const templateRoot = path.join(__dirname, '../template')
  const appName = path.basename(targetRoot)

  if (fs.existsSync(targetRoot)) return callback(new Error(`The directory <${appPath}> already exists. Aborting.`))

  console.log(`Creating a new teambition app in ${targetRoot}`)
  console.log()

  fs.mkdirSync(targetRoot)
  process.chdir(targetRoot)

  fs.copySync(templateRoot, targetRoot)

  // Rename app name
  const packagePath = path.join(targetRoot, 'package.json')
  let packageJson = require(packagePath)
  packageJson.name = appName

  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2))

  console.log('Installing packages. This might take a couple minutes.')
  console.log()

  let args = ['install']
  let proc = spawn('npm', args, {stdio: 'inherit'})

  proc.on('close', function (code) {
    if (code !== 0) return callback(new Error('`npm ' + args.join(' ') + '` failed'))
    console.log(`Success! Created ${appName} at ${targetRoot}.`)
    console.log(`Now \`cd ${targetRoot}\``)
    console.log('And run `npm start` to start the development server')
    callback()
  })
}
