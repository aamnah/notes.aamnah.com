---
title: Iterables and Iterators
date: 2019-12-09
---

## Iterators

The iterator _pattern_ is when you consume the values of a _data source_ (could be a database, could be an array) one by one.

- You get the next value by calling `.next()`
- Iterables must have a property with a `@@iterator` key, which is available with constant `Symbol.iterator`
- `[Symbol.iterator]` is a zero arguments function that returns an object conforming to the _iterator protocol_
- An iterator _result_ is an object with two properties on it: `value` and `done`. When the result becomes `{ value: undefined, done: true }`, you have iterated over every value in the iterable. There's nothing left to iterate over at this point.

## Iterables
- An iterable is something that can be iterated over
- Built-in iterables are: `String`, `Array`, `TypedArray`, `Map`, `Set` and array-like objects (`arguments` or `NodeList`). But NOT `Object`. But you can create your own _iterable_ object by implementing a `.next()` method for it

## for...of

the `for...of` statement creates a loop iterating over built-in and user-defined iterable objects.

```js
for (variable of iterable) {
  // do something
}
```

You can use declare the variable with either `var`, `let` or `const`

```js
const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31
```

## Creating custom iterators
The `Object` is not iterable, which is unfortunate because that's the one we use the most, we build our own objects.


```js
// Objects are not iterable..
var myObj = {
  a: 1,
  b: 2,
  c: 3
}

for (let i of myObj) {
  console.log(i) // TypeError: myObj is not iterable
}
```

But, we can _define our own iterators_ by implementing the iterator protocol, i.e. implementing a `next()` method that returns at least the following two properties: `value` and `done`

```js
var mySecondObj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function(){ // the @@iterator property saved as the constant [Symbol.iterator]
    let keys = Object.keys(this)
    let index = 0
    return {
      next: () => (index < keys.length) ? // defining our own 'next' function to implement 'iterator protocol'
      { done: false, value: this[keys[index++]]} :
      { done: true, value: undefined}
    }
  }
}
console.log([...mySecondObj]) // [ 1, 2, 3 ]
```


## Generators and Iterators

Links
---

- [MDN: for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [Repl.it Iterators](https://repl.it/@aamnah/Iterators)