---
title: Array.filter()
category: JavaScript
tags:
  - Array Methods
date: 2016-12-25
---

# .filter()

gives a new array after filtering an array based on the truth/false of a condition

Examples
---
### 1. get expensive stocks
Here's an array of stocks. 

```javascript
let stocks = [
  { symbol: "APL", price: 693 },
  { symbol: "HUBC", price: 103 },
  { symbol: "POL", price: 413 }
]
```

We'll get the expensive stocks (let's say the ones which cost more than 150) out of it with `filter()`

```javascript
function stocksOver(stocks, minPrice) {
 return stocks.filter(stock => stock.price >= minPrice)
}

let expensiveStocks = stocksOver(stocks, 150)

console.log(expensiveStocks) // [ { symbol: 'APL', price: 693 }, { symbol: 'POL', price: 413 } ]
```

### 2. get a subset of an array
Here's a simpler example:

```javascript
let items = [ 1, 2, 3, 4, 5, 6 ]
let filtered = items.filter(x => x > 3)

console.info('filtered:', filtered) // filtered: [ 4, 5, 6 ]
```

### 3. filter based on object properties
```javascript
let people = [ 
	{name: 'Aamnah', pets: ['cat', 'dog']}, 
	{name: 'Ali', pets: ['dog']},
	{name: 'Simon', pets: ['horse']},
	{name: 'Ben', pets: []},
	{name: 'Max'}
]

let filter1 = people.filter(x => x.pets) // only get objects where the pets property exists
console.info('filter1:', filter1)

let filter2 = people.filter(x => x.pets.length) // only get objects where the pets property array has a value
console.info('filter2:', filter2)

let filter3 = people.filter(x => x.pets.indexOf('dog') > -1) // only get objects where the pets property contains a dog
console.info('filter3:', filter3)
```

`x.pets.length` and `x.pets.indexOf('dog')` will both give an error `TypeError: Cannot read property 'indexOf' of undefined` if the pets property does not exist. Use an `if` statement here to get your desired results

```javascript
let filter1 = people.filter(x => x.pets) // only get objects where the pets property exists
console.info('filter1:', filter1)

let filter2 = people.filter(x => {
	if (x.pets) {
		x.pets.length && console.info('pets:', x) 
		x.pets.indexOf('dog') > -1 && console.info('dog owners:', x)
	}
})
```

Links
---
- [Egghead.io: Jafar Husain: The Array filter method](https://egghead.io/lessons/javascript-the-array-filter-method)
- https://gist.github.com/aamnah/8e6e9245b6faa9bc01b261265ddcbc85