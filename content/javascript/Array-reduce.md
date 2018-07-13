---
title: Array.reduce() 
category: JavaScript
tags:
  - Array Methods
date: 2016-12-25
---

# .reduce()

> The `reduce()` method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value. [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

- The reduce() method reduces the array to a single value.
- The reduce() method executes a provided function for each value of the array (from left-to-right).
- The return value of the function is stored in an accumulator (result/total).
- Note: reduce() does not execute the function for array elements without values.


use the reduce function on javascript arrays to transform a list of values into something else.

You need two things for `.reduce()`

- a reducing function (reducer)
- an accumulating value (accumulator)
- an initial value (optional)

A reducer function takes an accumulator and return a new accumulator, by running every item in the array against the accumulator. 

`.reduce()` always returns the final value of the accumulator. Remember, reducer function _returns_ the accumulator. (i.e. Use the `return` in your functions)

In other words, the reducer function fires once for every item in the array and keeps accumulating the value to give a new value.

## Examples

### sum all the numbers
Here's an example:

```javascript
const data = [3, 98, 16, 36, 13, 22, 46]

let reducer = (accumulator, item) => accumulator + item

let initialValue = 0

let total = data.reduce(reducer, initialValue)

console.info('total:', total) // total: 234
```

In the example above, we reduced an array to a final value (final accumulator), by adding the numbers in the `data` array, one by one to the accumulating value. 

We started with an initial value (0), added it to the accumulator (3, first item of the data array) to get a new accumulator (0+3 = 3), then got to the next value (98), added that to the previous accumulator (3) to get a new accumulator (98+3 = 101), then got to the next value (16), added that to the previous accumulator (now 101) to get a new accumulator (16+101 = 117) and so on... till all items in the array were done and we ended with a final accumulator value of 234.


### convert an array into an object

```javascript
let votes = [
  'angular',
  'angular',
  'react',
  'ember',
  'react',
  'react',
  'vanilla'
]

let initialValue = {}

let reducer = (tally, vote) => { // tally is initialValue, vote is first item in votes array
  if (!tally[vote]) { // if a key value doesn't exist
    tally[vote] = 1
  } else {
    tally[vote] = tally[vote] + 1 // if a key value exists, increment it
  }
  return tally
}

let result = votes.reduce(reducer, initialValue)
console.info(result) // { angular: 2, react: 3, ember: 1, vanilla: 1 }
```

### reduce() vs. map() and filter()
`.map()` is a reducer function. So is `.filter()`. And they can be easily chained to create complex functions. ~~But using `reduce()` can be faster than mapping and filtering when you have a lot of data.~~ [^footnote] Here's an example of the time difference between using map+filter vs. reduce

We're going to get an array containing a million items, get all the even numbers in it, multiply them by two and get the resulting array.

```javascript
let bigData = []
for (let i = 0; i < 1000000; i++) { 
  bigData[i] = i // get an array containing a million numbers
}
```

```javascript
console.time('bigData')

let filterMappedData = bigData.filter(val => {
   val % 2 === 0 
 }).map(val => val*2)
  
console.timeEnd('bigData') // bigData: 44.423ms
```

```javascript
console.time('bigDataReduced')

let reducedData = bigData.reduce((acc, val) => {
  if (val % 2 === 0) {
    acc.push(val *2)
  }
  return acc
}, [])

console.timeEnd('bigDataReduced') // bigDataReduced: 68.954ms
```

i ran the example which accompanied the claim in the video 8 times, and reduce always took longer than map+filter

```bash
~/Sandbox $ node example.js
bigData: 44.423ms
bigDataReduced: 68.954ms
~/Sandbox $ node example.js
bigData: 44.178ms
bigDataReduced: 77.308ms
~/Sandbox $ node example.js
bigData: 34.717ms
bigDataReduced: 48.441ms
~/Sandbox $ node example.js
bigData: 43.447ms
bigDataReduced: 61.104ms
~/Sandbox $ node example.js
bigData: 37.742ms
bigDataReduced: 51.461ms
~/Sandbox $ node example.js
bigData: 34.192ms
bigDataReduced: 46.665ms
~/Sandbox $ node example.js
bigData: 42.159ms
bigDataReduced: 46.572ms
~/Sandbox $ node example.js
bigData: 31.489ms
bigDataReduced: 51.182ms
```

Links
---
- [Egghead.io: Introducing Reduce: Transforming Arrays Functionally](https://egghead.io/lessons/javascript-introducing-reduce-transforming-arrays-functionally?course=reduce-data-with-javascript)
- [Egghead.io: Introducing Reduce: Reducing an Array into an Object](https://egghead.io/lessons/javascript-introducing-reduce-reducing-an-array-into-an-object)
- [Egghead.io: Introducing Reduce: Common Patterns](https://egghead.io/lessons/javascript-introducing-reduce-common-patterns)
- [MDN: Array.prototype.reduce()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)