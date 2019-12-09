---
title: Getting started with Redux Saga
date: 2019-12-09
---

You can not make API calls (or any other _side effects_) inside the reducers. For that you must use middleware. Redux Saga is one such middleware, which is good for

- async things like data fetching
- impure things like accessing browser cache

### Generator functions
Redux Saga uses _Generator functions_, an ES6 feature. 

> With ES6 generators, we have a different kind of function, which may be _paused_ in the middle, one or many times, and resumed _later_, allowing other code to run during these paused periods.

- They are denoted with a `*`, e.g. `function* foo() {}`
- We pause function with the `yield` keyword, from inside the function
- We restart the function from the _outside_, can not be restarted from within the function once it's paused

```js
function* foo () {
  // code goes here
}
```