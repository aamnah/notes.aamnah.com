# Webpack
Webpack is hard. Partially because it's an extremely powerful tool and partially because the documentation is terrible. But if you have experience with tools like Grunt or Gulp, and have converted SASS files, it makes sense.

Webpack at it's core is a **code bundler**. It takes your code, transforms and bundles it, then returns a brand new version of your code. 

Where Webpack really shines is you're able to tell it every transformation your code needs to make, and it will do them and output a bundle file for you full of those changes (and some other helpful things as well like minification if you desire).

## Process
1.  Webpack needs to know the **starting point** of your application, or your root JavaScript file.

2. Webpack needs to know which **transformations** to make on your code.

3. Webpack needs to know to which **location it should save** the new transformed code.

## Getting started
**webpack.config.js** is what the configuration file is called. It's in the root directory of your project (where package.json is).

Once our file is made we need to make sure that this file exports an object which is going to represent our configurations for Webpack.

- install globally: `npm i -g webpack`
- run: `webpack`
- run and watch: `webpack -w`
- production: `webpack -p` will run transformation AND minify code

If you installed Webpack _locally_, you can run it by specifying the full path `node_modules/.bin/webpack`

### webpack.config.js
```javascript
// webpack.config.js
module.exports = {}
```

The complete file with placeholders looks like this:

```javascript
module.exports = {

  entry: ,

  output: {

  }

  modules: {
    loaders: [
    ]
  }
}
```

### Entry point(s)
You can have one entry point as a string or multiple entry points as an array.

```javascript
// webpack.config.js
module.exports = {

	// Entry point(s)
	entry: [
		'./app/index.js'	
	]
}
```

### Transformations (loaders)
You need to install the loaders first (`npm i -D loader_name`) and then include them in your webpack.config.js

Each loader needs to be composed of three things. The first is which file type to run the specific transformation on. For example, we don't want to run CSS transformations on a JavaScript file and vice versa. The next item is which directories should be included or excluded from being transformed. An example here is we don't want to run our transformations on anything in our node_modules folder, so we'd have the node_modules path as an excluded value. The last thing is the specific loader we want to run. Let's take a look at what this looks like.

```javascript
// webpack.config.js
module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [
      {test: /\.coffee$/, exclude: /node_modules/, loader: "coffee-loader"}
    ]
  },
}
```

### Output
Output is an object. It's `path` property tells Webpack to place your bundle in. the `file` property tells the filename of the bundled file


### Common loaders
- **html-webpack-plugin**: automatically injects our bundle into an HTML template
- **babel-loader**: let's you run Babel. needs Babel itself installed in order to work. It will run Babel, which'll then run the instructions in `babel.rc`


Links
---
- [React Training](https://online.reacttraining.com/courses/reactjsfundamentals/lectures/762538#/finished)  
- [Treehouse](https://teamtreehouse.com/library/understanding-webpackconfigjs)