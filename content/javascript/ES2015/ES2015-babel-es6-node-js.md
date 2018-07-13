---
title: ES6 (ES2015) and Beyond with Node.js
slug: es6-es2015-beyond-with-node-js-javascript
tags:
- ES2015
- Node
- Babel
date: 2017-03-07
---

tl;dr
---

```bash
# initialize
npm init -y

# install dependencies
npm i -D babel-cli babel-preset-es2015 babel-preset-stage-0 nodemon

# Babel config
touch .babelrc
echo '{ presets: [ "es2015", "stage-0" ] }' >> .babelrc

# directory structure
# mkdir src && touch src/index.js
# add some es6 code to index.js for testing

# run Babel
babel-node src/index.js

# add npm run scripts
```


Note: For the sake of simplicity, i use ES6 and ES2015 interchangeably. Both mean the same thing to me, though technically it should be called ES2015, that's the official version name.

### install dependencies

install Babel for code transpilation,  a babel preset for ES2015, and nodemon for monitoring file changes

```bash
npm i -D babel-cli babel-preset-es2015 nodemon
```

### babel configuration

create a Babel configuration file called `.babelrc`, and add your presets to it

```bash
nano .bablerc
```

```javascript
{
  presets: [ "es2015" ]
}
```

### boilerplate code for testing

test with some ES2015 code

```javascript
// path: src/index.js
import { createServer } from 'http' // ES6 named import instead of require()
createServer((req, res) => { // ES6 arrow function
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World \n')
}).listen(3000, '127.0.0.1')

console.log(`Server running at http://127.0.0.1:3000`)
```

### run babel

You can either transpile directly with the command `babel-node src/index.js` or add an npm run script to run babel 

```javascript
"scripts": {
  "dev": "babel-node src/index.js"
}
```

```bash
npm run dev
```

### bring in nodemon

```javascript
"scripts": {
  "dev": "nodemon --exec babel-node src/index.js"
}
```
Now `nodemon` will watch your files and if anything changes execute the `babel-node` command specified

### Babel for production
The is all good for development. But babel-node isn't meant to be used in production. We can add scripts though so it builds the code for production. The scripts will transpile our code and 

```javascript
"scripts": {
   "dev": "nodemon --exec babel-node src/index.js",
   "prestart": "babel src --out-dir dist",
   "start": "node dist/index.js"
}
```
If we call our script `prestart`, npm will automatically run it every time we run `start`, it'll run `prestart` first.

Also, add the `dist` directory to `.gitignore` so we are never checking in generated code, because we don't need to. 

```bash
echo 'dist' >> .gitignore
```

We can watch the whole folder, like so:

```javascript
"dev": "NODE_ENV=development nodemon -w src --exec \"babel-node src --presets=es2015,stage-0\""
```

Links
---
- [Egghead.io: Using ES6 and beyond with Node.js](https://egghead.io/lessons/node-js-using-es6-and-beyond-with-node-js)
- [Github: Nodemon](https://github.com/remy/nodemon)
