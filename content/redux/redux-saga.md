---
title: Getting started with Redux Saga
date: 2019-12-09
lastmod: 2020-01-12
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

### Concepts

#### _Watcher_ and _worker_ sagas

```js
// Worker
function* getUsers() {
  try {

  } catch(e) {

  }
}

// Watcher
function* watchGetUsers() {
  yield takeEvery(users.actions.getUsers, getUsers) // when this action is dispatched, run this function
}
```

#### Blocking and non-blocking sagas


| Blocking | Non-blocking |
|-|-|
| takeEvery | |

#### Common _effects_
1. `call()`
makes a function call. Could be another generator, or an API call, or a helper function imported from another file. We can yield a Promise directly,

```js
const products = yield Api.fetch('/products')
```

but that makes unit testing difficult. So we use `call()` instead

```js
// call(fn, ...args)
const products = yield call(Api.fetch, '/products')
```