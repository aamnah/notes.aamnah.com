---
title: Function Statements, Declarations and Expressions
date: 2018-07-11
category: javascript
---

### Function Declaration/Statement

```js
function whatDoYouDo (name, job) {
  // code goes here
}
```

### Function Expression

```js
let whatDoYouDo = function (name, job) {
  // code goes here
}
```

> A Function Expression defines a function as a part of a larger expression syntax (typically a variable assignment )


### Differences
- Function declaration/statements always have a function **name** whereas in function expressions the function is usually without a name i.e. anonymous. (named functions are easier to debug)
- Function declaration are **hoisted** to the top of the enclosing function or global scope (meaning you can use the function before you declared it). Function expression are NOT hoised.


Links
---
- [MDN: function expression](https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function)
- [MDN: function statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [Function Declarations vs. Function Expressions](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/)