# Intro to React Ecosystem

## Imperative (How) vs. Declarative (What)

Imperative = how to do something, specific instructions
Declarative = what to do, doing something that is somewhat already defined

## Composition (Components)
think in terms of components. components inside of components. breaking everything down to components.  nesting components. you can create larger components composed of smaller components.

Components = aka widgets, modules

Functional composition is where you write smaller _helper_ functions that you can use in bigger functions.

## Explicit Mutations
The only way a state will change or be kept is if you explicitly specify it using it `.setState()`

(In Angular 1, it magically keeps all your models in sync)

## It's just JavaScript
React is just JavaScript. If you're getting frustrated with React, it's probably because your JS knowledge is lacking. For example `.map()` is very good for generating HTML lists in React. But if you don't know the JS `.map()` method, you'll wonder what happened.

## Piecing the Puzzle
- React
- **React Router** (let's you map React components to certain URLs. As you move around in the app, different components become active based on what URL you are at)
- **Webpack** (like Grunt/Gulp. bundler, task runner, whatever you wanna call it)
- **Babel** (transpiler, let's you transform your code to standard JS. It could be JSX to JS, ES6 to ES7 etc.)
- **Axios** (making HTTP request, promises)

## JSX
JSX is just an XML-like syntax for writing React components. You can use plain JavaScript as well, but JSX makes it easy.

The “HTML” that you’re writing in the render method isn’t actually HTML but it’s what React is calling “JSX”. JSX simply allows us to write HTML like syntax which gets transformed to lightweight JavaScript objects. React is then able to take these JavaScript objects and from them form a “virtual DOM” or a JavaScript representation of the actual DOM. This creates a win/win situation where you get the accessibility of templates with the power of JavaScript.



## Setting up
- react: 

```bash
npm i -S react react-dom
```
- tools: 

```bash
npm i -D webpack html-webpack-plugin webpack-dev-server babel-{core,loader} babel-preset-react
```

### .babelrc

```json
{
"presets": [
    "react"
]
```

### webpack.config.js

```javascript
// webpack.config.js
// html-webpack-plugin
var htmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackPluginConfig = new htmlWebpackPlugin({
    template: __dirname + '/app/index.html', 
    filename: 'index.html',
    inject: 'body'
});

module.exports = {

    // Entry point(s)
    entry: [
        './app/index.js'    
    ],

    // Output dir and file
    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"     
    },

    // Trasnformations (loaders!)
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, include: __dirname + '/app', loader: "babel-loader"}
        ]
    },

    // Plugins to load
    plugins: [
        htmlWebpackPluginConfig 
    ]
};


```

### index.js

```javascript
var React = require('react');
var ReactDOM = require('react-dom');

// use the .createClass method on the React object to create a React component
class HelloMessage extends React.Component({

    // every React component must have a render method
    render() {
        return (
      <div> // every component needs to be wrapped in a containing element 
        Bonjour {this.props.name}!
      </div>
    )
    }
});

// Render the component we just created
ReactDOM.render(
    // takes two args
    <HelloMessage name="Aamnah"/>, // component to render
    document.getElementById('app')  // where to render to
);
```


Virtual DOM components start with a capital letter. While `<link>` is plain HTML, `<Link>` is a JSX React component

Links
---
- [React Training](https://online.reacttraining.com/courses/reactjsfundamentals/lectures/760073)
- http://www.developer.com/services/what-is-react.js.html
- http://blog.andrewray.me/reactjs-for-stupid-people/
