---
title: "[ES2015] Arrow Functions"
category: JavaScript
tags:
  - ES2015
  - Concepts
date: 2017-01-16
---

# Arrow Functions

Arrow functions are _anonymous function expressions_. They don't show up in stack traces.

## Pros
1. Shorter syntax. You get to remove `function`, `return` and some `{..}`
2. Shines with `this` keyword. The arrow function doesn't have it's own `this` so we automatically get a lexical `this` (bind to the outer context).  Skipping `.bind(this)`

## Cons
1. Show up as anonymous in stack trace, makes debugging/troubleshooting hard. Imagine minified code, error at line 1, character 32712.. and you'll have no idea what that is. Named functions are the way to go if you want names to show up in stack trace. _Name inferencing_ is the closest thing you get with arrow functions, which is when you assign the anonymous function to a named variable.
2. makes testing difficult because you can't `console.log` when using the concise arrow function syntax. You have to change the syntax first in order to `console.log()`.
3. Inconsistant syntax. Variations in syntax, too many ways to write an arrow function (definitely more than 6 syntactical ways)
4. No self-reference (arrow functions are anonymous funcs, remember?) Without self-reference you can't do cool things like recursion or have event handlers that needs to unbind itself once it's run
5. Not everyone knows the syntax, not very beginner friendly

### Syntax Variations

```javascript
=> 3 // or (var foo = => 3) headless syntax proposal
() => 3 // no params
(x) => 3
x => 3 // no parens, placeholder for params looks an awful lot like funcion invocation
(x,y) => 3 // parens
(...x) => 3 // parens

x => { try { 3 } catch(e) {} }
x => { return 3 }
x => ({ y: x}) // gotta wrap parens around the object body in order to return an object
```

### Name inferencing 

```javascript
var foo = x => 3
foo.name // "foo" the interpretor made a guess (inferred) that you want to reference the function with the name foo, based upon where the function expression got saved.
```

Name inferencing doesn't work when you pass an arrow function as a param to another function. They're gonna stay syntactically anonymous.

```javascript
foo( x => 3)
```

Notes
---
- without the `{}` it's an implied return. if you use `{}` you gotta use the return keyword inside as well. Or have curly brackets wrapped in parens `({ .. })`

![flowchart to help you decide if you need an arrow function](https://raw.githubusercontent.com/getify/You-Dont-Know-JS/master/es6%20%26%20beyond/fig1.png)

Links
---
- [You don't know JS - ES6 & Beyond: Arrow Functions](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20%26%20beyond/ch2.md#arrow-functions)
- [Frontend Masters - ES6: The Right Parts](https://frontendmasters.com/courses/es6-right-parts/#v=qc7w3t7dcw)