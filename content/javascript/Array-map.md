---
title: Array.map()
category: JavaScript
tags:
  - Array Methods
date: 2016-12-25
---

# .map()

transforms an array by performing a function on every item in the array, and returns a new array.

- async: can work on data that arrives async over time
- returns: A **new array** with each element being the result of the callback function.

We like working with `map()` because it works on data arriving asynchronously, unlike `for` loops where you can only work on synchronous data stored locally.


Here's an array of stocks. 

```javascript
let stocks = [
  { symbol: "APL", price: 693 },
  { symbol: "HUBC", price: 103 },
  { symbol: "POL", price: 413 }
]
```
We want to get a new array with only the stock symbols. Here's how we do it with `.map()`

```javascript
function getStockSymbols(stocks) {
  return stocks.map(stock => stock.symbol)
}

let symbols = getStockSymbols(stocks)

console.log(symbols) // [ 'APL', 'HUBC', 'POL' ]
```

Here's how we'd do it traditionally with regular `for` loops.

```javascript
function getStockSymbols(stocks) {
  let symbols = [],
      counter,
      stock
   
  // Regular for loop
  for (counter = 0; counter < stocks.length; counter++) {
    stock = stocks[counter]
    symbols.push(stock.symbol)
  }
  
  return symbols
}

let symbols = getStockSymbols(stocks)

console.log(symbols) // [ 'APL', 'HUBC', 'POL' ]
```

And here's how you'd do it with a `forEach` loop

```javascript
function getStockSymbols(stocks) {
  let symbols = []
  
  // forEach loop
  stocks.forEach(stock => symbols.push(stock.symbol))
  
  return symbols
}

let symbols = getStockSymbols(stocks)

console.log(symbols) // [ 'APL', 'HUBC', 'POL' ]
```

As you can see, `map` is superior to both `for` and `forEach`..  it's a _higher-order function_ (word-play intended).

Links
---
- [Egghead.io: Jafar Husain: The Array map method](https://egghead.io/lessons/javascript-the-array-map-method)
- [MDN: Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [YouTube: FunFunFunction: Map - Part 2 of Functional Programming in JavaScript](https://www.youtube.com/watch?v=bCqtb-Z5YGQ&t=89s)