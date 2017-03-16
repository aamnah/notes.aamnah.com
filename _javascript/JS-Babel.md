# Babel

Babel is a _transpiler_ that let's you use the JS features of tomorrow, in your applications today. _WHY_ you'd compile? Well, compatabilty for one. You can write code is ES6 and convert it to ES5 (which is fully supported by all browsers).

Transpiling is taking one language and converting it to another. If you have used SASS, you have _transpiled_ SASS code to CSS. Similar with CoffeeScript to generate JS.

_Compiling_ converts one language to another at a _lower abstraction level_, like Java to bytecode. Transpiling, on the other hand, converts one language to another at the _same abstraction level_, like SASS to CSS. Both are high level languages that serve the same purposes, i.e. styling HTML.

Babel will convert this newer ES6

```javascript
var my ArrowFunction = () => "Hello, ES2015.";
```

to this fully supported ES5

```javascript
var myArrowFunction = function myArrowFunction() {
    return "Hello, ES2015.";
}
```
## install

```javascript
npm i -D babel-cli
```

Babel is very modular. So not only will you install the Babel module (`bable-core`) to get started with, you'll also install other *modules for Babel* like presets (`babel-preset-react`) etc.

- **babel-core** is Babel itself
- **babel-loader** is a Webpack loader or Babel
- **babel-preset-react** is a React preset module for Babel

## Configuration (babelrc)

`babelrc` the Babel configuration file, is just another JSON file. The two most important properties are `plugins` and `presets`.

- **Plugins** is the features you want to use, like _arrow function_, ES2015 constants.
- **Presets** bundle multiple plugins together, so instead of specifying plugins manually, you can use all ES2015 features by using `babel-preset-es2015`.

You can install Babel's ES2015 preset with 

```bash
npm i -D babel-preset-es2015
```

```json
{
    "presets": [
        "babel-preset-es2015"
    ],
    "pugins": []
}
```

## Manual conversion
define a build command in the script section in *package.json*

```json
"scripts": {
    "build": "babel src -d build" // 
}
```
we want to take index.js from src dir, convert it, place in build dir. the babel command takes two args, the name of file/dir to be transpiled, and the dir where it should place the converted files. `-d` is for dirs.

run build: 

```bash
npm run build
```

## Automation
You can use Gulp, Grunt, Webpack or something similar
