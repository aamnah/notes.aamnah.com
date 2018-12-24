---
title: "[ES2015] Default values"
category: JavaScript
tags:
  - ES2015
date: 2017-01-23
---

# Default Values

Here's how we used to do default parameter values before.. Say we have a function that returns 42 is no parameter value is provided and if a value is passed, it returns the value.

```javascript
function foo (x) {
  x = x || 42 // Using the OR operand `||` to give 42 if x is false
  return x
}

foo(3) // 3
foo(99) // 99

foo(0) // 42  eh?
```

`0` equals falsy. So even if you did pass a value for `x`, it returned the default 42. Here's a better way to rewrite the function above

```javascript
function bar (x) {
  x = x !== undefined ? x : 42 // If x is provided, use x. If x is not provided (undefined), use 42
  return x
}

bar(99) // 99
bar(0) // 0
bar() // 42
bar(undefined) // 42
```

This is the _imperative_ form, we are telling JS how to compute the default value

And here's the ES6 way of doing it, using default variables

```javascript
function baz (x = 42) {
  return x
}

baz(99) // 99
baz(0) // 0
baz() // 42
baz(undefined) // 42
```

## Lazy Expressions
A lazy expression is an expression that is not evaluated untill or unless it's needed.

> holding on to an expression and only evaluating it when you need it. It pairs neatly with **memoization** - keeping the results of evaluated expressions in memory so that you don't have to evaluate them every time you need their result.

Default values can be ay kind of valid _expression_.

```javascript
function bar () {
  console.log('!')
}

function foo(x = bar()) {

}

foo(1) // undefined, bar() not called
foo() // "!", bar() called once
foo() // "!", bar() called twice
```

`bar()` above will not be called as long as it's not needed.

Here are two other examples, you can pass functions as default parameter values


```javascript
function required () {
  throw 'Parameter required'
}

function foo(id = required()) {
  return id
}

foo(872) // 872
foo('aamnah') // "aamnah"
foo() // Uncaught Parameter required
```

```javascript
var x = 1

function foo(x = 2, f = function() { return x }) {
  console.log( f() )
}

foo() // 2
```

Links
--- 
- [FrontendMasters: ES6 The Right Parts](https://frontendmasters.com/courses/es6-right-parts/)
- [Scotch.io: (Basic) Lazy Evaluation and Memoization in JavaScript](http://blog.gypsydave5.com/2015/03/21/lazy-eval-and-memo/)