---
title: Array.forEach()
category: JavaScript
tags:
  - Array Methods
date: 2016-12-25
---

# .forEach()

The `forEach()` array method accomplishes the same thing as regular `for` loops, but it does it _asynchronously_ and in a simpler/easier way.

We have a `stocks` array, from which we just want the stock symbols.

```javascript
let stocks = [
  { symbol: "APL", price: 693 },
  { symbol: "HUBC", price: 103 },
  { symbol: "POL", price: 413 }
]
```

Here's how you'd do it using a regular `for` loop.

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


Links
---
- [Egghead.io: Jafar Husain: The Array forEach method](https://egghead.io/lessons/javascript-the-array-foreach-method?course=mastering-asynchronous-programming-the-end-of-the-loop)
- [MDN: Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)