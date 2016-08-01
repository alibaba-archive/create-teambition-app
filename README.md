# Create Teambition Application

Command alias for creating teambition's application.

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

## How to use

```bash
npm install -g create-teambition-app

cta <my-app>
cd <my-app>/
npm start
```

## NPM scripts

CTA will inject three commands in your application's package.json, shown as below:

* `npm start` Start your application and listen on port 3000.
* `npm test` Test your application.
* `npm build` Build your application into build directory.

## Which contains

* A `koa` based server side application.
* A `vue.js` based client side application.
* A `mocha` and `mocha-co` based test framework.
* Compile client side code with webpack and babel.
* Hot reload in `development` mode.

## Which does not contains

* Deploy your code to cdn or remote server, you can try [sneaky](https://github.com/teambition/sneaky) to deploy your application.
* Database connection, you can try [mongoose](https://github.com/Automattic/mongoose) and [limbo](https://github.com/teambition/limbo) if you use mongodb.

## LICENSE

MIT

[npm-url]: https://npmjs.org/package/create-teambition-app
[npm-image]: http://img.shields.io/npm/v/create-teambition-app.svg

[travis-url]: https://travis-ci.org/sailxjx/create-teambition-app
[travis-image]: http://img.shields.io/travis/sailxjx/create-teambition-app.svg
