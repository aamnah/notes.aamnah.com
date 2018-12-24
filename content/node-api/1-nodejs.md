---
title: Node Refresher
date: 2017-09-15
---

### Nodejs
- Nodejs is simply a way to run JavaScript outside the context of the browser. Powered by V8.
- Most of the browser APIs do not exist in Node (no `document` object etc.) Some are still there, like `console` (tip: type `console` in Node REPL to see available methods)

#### Executing Nodejs

- You can use the REPL

```bash
node
> 
```

- You can execute files

```bash
node file.js
```

### NPM
- NPM is a package manager to handle dependencies. Using the `package.json` to store meta info about your package and what packages it may need.
- NPM is the standard, comes builtin with Nodejs
- All 3rd party modules, when downloaded, will be placed in the `node_modules` directory by default
- The `node_modules/` folder will always be at the root of the application, thanks to npm

---

### CommonJS
- Node uses `CommonJS` for it's module loader. Using `require()` we can get access to built in and 3rd party modules
- In HTML files you have `<script>` tags, in Nodejs JavaScript you use `require()` to associate with other JavaScript files/modules (aka a Module Loader)


```javascript
// built in Node module
var path = require('path'); // no ./ prefix means Node will assume it's either builtin or the a module in the default location (node_modules/)

// 3rd party module downloaded in node_modules/
var _ = require('lodash');

// a module we created in another file
var myModule = require('./path/to/my/module'); // you have to prefix with ./
```

- For builtin and downloaded (via npm) modules you don't have to provide the directory. For custom modules, you have to prefix the path with `./`
- You don't have to add `.js` at the end, it assumes it's a JavaScript file by default. If you do put the extension, it'll still work, but you don't have to.

#### Exposing modules with CommonJS

```javascript
// config.js
exports.setup = function () {}; // attach things to the `exports` object
exports.enable = function () {};
exports.ready = true;

// otherFile.js
// alternate way: `module.exports` is the entire object
module.exports = {
	action: function () {};
	trigger: true;
}
```

- Using the `exports` object on `module` we can expose our code to be required later. To execute node against a file we can run `node path/to/file`

#### exports vs. module.exports
- Once you use `module.exports` you can not export anything else in that file. `module.exports` is the only code that's going to be exported
- Using `exports` it'll always be an object when you `require()` it. So you can have `exports.setup` and `exports.enable` and `exports.ready` (a lot of exported stuff in your module) and 
- Using `module.exports` it will be whatever you export on `module.exports`, e.g. it can be number 5

```javascript
// config.js
exports.setup = function () {}; // attach things to the `exports` object
exports.enable = function () {};
exports.ready = true;

// otherFile.js
// alternate way: `module.exports` is the entire object
module.exports = 3
```

```javascript
var myModule = require('./config'); // this will be an object containing all the exported properties (exports.setup, exports.config, exports.ready)
var myOtherModule = require('./otherFile'); // this will be whatever you exported with module.exports, in this case: 3
```

### Globals
- Node wraps the code you write in an IIFY (Immediately Invoked Function Expression) and passes it stuff (globals) in that function wrapper

```javascript
(function(module, exports, __dirname){ 
	// your actual code 
})()
```

- Every file you create is wrapped in one of the above IIFY and gets passed [globals](https://nodejs.org/api/globals.html). That's how you can access `module` and `exports` and `__dirname` and all of that stuff in your code, because it's attached that way.

### ES6 Modules
- ECMAScript 2015 (aka ES6) comes with it's own Modules system. It is not yet supported out of the box (You'll need Babel to transpile).

```javascript
export const m = 1;
```

```javascript
import {m} from “foo”;
```

Links
---
- [Frontend Masters: API Design in Node.js (using Express & Mongo)](https://frontendmasters.com/courses/api-design-nodejs/)
- [Course Notes](http://fem-node-api.netlify.com/)
- [Frontend Masters: API Design in Node.js (using Express & Mongo) - Node Refresher](https://frontendmasters.com/courses/api-design-nodejs/nodejs-refresher/)
- [Node.js, TC-39, and Modules](https://hackernoon.com/node-js-tc-39-and-modules-a1118aecf95e)
- [An Update on ES6 Modules in Node.js](https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c)