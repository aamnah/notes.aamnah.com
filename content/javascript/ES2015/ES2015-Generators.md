---
title: "[ES2015] Generators"
category: JavaScript
tags:
  - ES2015
  - Concepts
date: 2016-12-27
lastmod: 2019-12-09
---

# Generators

Generators are functions that can be paused and resumed later. A generator can contain multiple `yield` statements. At each `yield`, the generator will pause/resume (while also returning some value). At every restart, a value will be passed in.

Here's a brief intro to generator functions

> With ES6 generators, we have a different kind of function, which may be _paused_ in the middle, one or many times, and resumed _later_, allowing other code to run during these paused periods.

- They are denoted with a `*`, e.g. `function* foo() {}`

```js
function* foo () {
  // code goes here
}
```

- Both `function* foo() {}` and `function *foo() {}` are valid
- They let you *pause*the exection of a function. Normal functions can not be interrupted once they start running.. That blocks the thread. JS is single threaded, meaning only one function/command executing at any given time.
- You use _yield_ to pause/resume a function from within itself (can not be paused from outside..)
- A paused function can only be restarted from the _outside_.
- You get 2-way communication, you send messages out with every `yield`, and you send messages back in with every restart. Unlike regular function where you take in parameters at the beginning and give out messages once at the end with `return`

> _Web Workers_ are a mechanism where you can spin up a whole separate thread for a part of a JS program to run in, totally in parallel to your main JS program thread. The reason this doesn't introduce multi-threaded complications into our programs is that the two threads can only communicate with each other through normal async events, which always abide by the event-loop _one-at-a-time_ behavior required by run-to-completion.



Links
---

- [The Basics Of ES6 Generators](https://davidwalsh.name/es6-generators)