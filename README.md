# Create Teambition Application

Command alias for creating teambition's application.

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
* Build documents with `gitbook`.

## Which does not contains

* Deploy your code to cdn or remote server, you can try [sneaky](https://github.com/teambition/sneaky) to deploy your application.

## LICENSE

MIT
