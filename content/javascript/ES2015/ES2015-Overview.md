---
title: "[ES2015] ES6 Features Overview "
category: JavaScript
tags:
  - ES2015
date: 2016-12-22
---

# ES6 Features (ES2015)

## Arrow Function Syntax

- [MDN: Arrow Function Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Syntax)
- [Babel Docs](http://babeljs.io/docs/learn-es2015/)
- [Treehouse: Arrow Function Syntax](https://teamtreehouse.com/library/introducing-arrow-function-syntax)
- [YouTube: Arrow Function Syntax](https://www.youtube.com/watch?v=6sQDTgOqh-I)

Arrow function syntax is supported in all major browsers.

```javascript
// Function Declaration
function divide1(a,b) {
	return a/b;
}

// Function Expression
const divide2 = function(a,b) {
	return a/b;
}

// Arrow Function Expression
const divide3 = (a,b) => {
	return a/b; 
}

// Arrow Function Concise
const divide4 = (a,b) => a/b;
```

Arrow (aka lambda) functions define the function to the instance of wherever it was created (or something like that, requires citation). The benefit of this is that in React when defining event handler functions, you no longer have to specifically bind them in the render() method.

```javascript
handleClick = (e) => {
  e.preventDefault()
}

render() {
  <button onClick={this.handleClick} />
}
```

instead of

```javascript
function handleClick(e)  {
  e.preventDefault()
}

render() {
  <button onClick={this.handleClick.bind(this)} />
}
```

They also make writing code for Promises a lot easier.

## `let` and `const`
`let` is the new `var`. `const` is a single-assignment, meaning you only define it once, it won't change. 

For example

```javascript
let x = 15

const React = require('react')
const ReactDOM = require('react-dom')
```
## Rest parameters `...` and Spread operator `...`
Rest parameters and spread operator look the same but achieve different things. A rest parameter _collects the arguments passed to a function_ while the spread operator _expands an array or any  type of an expression_.

## Rest parameters `...`
`...params`

The three dots `...` before define a rest parameter, you can call it anything you want. It has to be the last parameter in the arguments


Returns an array of arguments

```javascript
const myFunc = (name, ...params) => console.log(name, params)
myFunc('Andrew', 1, 2, 3, 4, 'Elephant') // Andrew [1,  2, 3, 4, 'Elephant']
```

```javascript
const myFunc = (...params) => console.log(params)
myFunc('Andrew', 1, 2, 3, 4, 'Elephant') //  [ 'Andrew', 1,  2, 3, 4, 'Elephant']
```

```javascript
let flavorFunc = (name, iceCreamFlavor) => console.info(`${name} really likes ${iceCreamFlavor} ice cream`)

let args = ['Aamnah', 'Pistachio']

flavorFunc(...args) // Aamnah really likes Pistachio ice cream
```

## Spread operator `...`
`...array` or `...object`

- https://egghead.io/lessons/ecmascript-6-using-the-es6-spread-operator
- https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator

Bable ES2015 preset suports the Array spread but not the Object spread, since object spread is not part of ES2015 standard, it's a stage-2 proposal. To get object spread you need to install separate plugins

```bash
npm i -D babel-plugin-transform-object-rest-spread babel-plugin-syntax-object-rest-spread
```

and then include the plugins in your `.babelrc` file

```json
{
  "plugins": [
		"transform-object-rest-spread",
		"babel-plugin-syntax-object-rest-spread"
	]
}
```

## Destructing Assignment

Destructuring let's you extract values from arrays and objects and then assign those values to distinct variables.

### Objects
Here's an object:

```javascript
let person = {
  name: 'Aamnah',
  age: 27,
  status: 'Single',
  location: 'Lahore'
}
```

Now instead of doing this to reference the property values in the object

```javascript
console.info(`${person.name} is ${person.age} years old, ${person.status} and lives in ${person.location}`)
```

where i have to add `person.` with every property value to reference it out of the object (which we called `person`), i can destructure the object and assign the values as new variables, making it neat and easier to understand 

```javascript
let { name, age, status, location } = person
console.info(`${name} is ${age} years old, ${status} and lives in ${location}`)
```

We destructured the object into individual pieces and assigned those pieces to variables.

When destructuring, you don't have to keep the variable names same as the original property names in the object, you can assign new variable names, like so:

```javascript
let { location: city } = person
console.info(city) // Lahore
```

### Arrays

```javascript
let widgets = ['widget1', 'widget2', 'widget3', 'widget4', 'widget5']
let [a, b, c, ...d] = widgets
console.log(a) // widget1
console.log(d) // ['widget4', 'wdiget5']
```

### Declaring default values




Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays.

## Template Strings/Literals ``
Template literals let us mix string literals, variables and expressions. If you have done some Python coding, template strings be very familiar.

You can now do this:

```javascript
var greeting = `Hello ${name}, how are you this fine ${partOfDay()}?`
```

- To construct a template string, use the **grave accent** (also called a **back-tick**) (`) to enclose the string instead of single or double quotes. 
- Template strings provide **built-in support for multi-line strings**.
- The `$` character is used to specify placeholders within a template string. The syntax is `${expression}`


## String search methods
`startsWith`, `endsWith` and `includes`

```javascript
let stringToSearch = 'really-long-string-that-i-want-to-search'

// see if the sentence starts with 'really'
console.log(/^really/.test(StringToSearch)) // regex
console.log(stringToSearch.indexOf('really') === 0) // indexOf
console.log(stringToSearch.startsWith('really')) // startsWith

// see if the sentence ends with 'to-search'
console.log(/to-search$/.test(stringToSearch)) // regex
console.log(stringToSearch.indexOf('to-search') === stringToSearch.length - 'to-search'.length') // indexOf
console.log(stringToSearch.endsWith('to-search')) // endsWith

// see if the sentence includes the word 'long'
console.log(/long/i.test(stringToSearch)) // regex
console.log(stringToSearch.indexOf('long') > -1) // indexOf
console.log(stringToSearch.includes('long')) // includes
```

## Object property shorthand
In an object, if a property is defined but no value is provided, the property itself is used as value.


when the interpreter encounters a variable assignment without a property key, the variable name itself is used as property key.

```javascript
let data = { name, comments, rating }
```

## Set
https://teamtreehouse.com/library/set
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set
A Set is not an Array but it can behave like one. It’s a collection of unique values.

> The Set object lets you store _unique_ values of any type, whether primitive values or object references.

```javascript
let mySet = new Set()
```
Use cases: 

## Map

## Record


Links
---
- [Treehouse: Template Strings](https://teamtreehouse.com/library/template-strings)
- [MDN: Template Literals](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals)
- [MSDN: Template Strings (JavaScript)](https://msdn.microsoft.com/en-us/library/dn858580(v=vs.94).aspx)
- [Treehouse: Rest parameters and Spread operator](https://teamtreehouse.com/library/rest-parameters-and-spread-operator)
- [MDN: Destructuring assignment](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [ExploringJS: Destructuring](http://exploringjs.com/es6/ch_destructuring.html)
- [Treehouse: Destructuring](https://teamtreehouse.com/library/destructuring)