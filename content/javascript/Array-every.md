---
title: Array.every()
category: JavaScript
tags:
  - Array Methods
date: 2016-12-25
---

# .every()
The `every()` method return true/false based on whether or not every element in the source array passes a certain condition or not

You'll exit on the first failure. If the condition returns false for something, it stop processing the array there and returns.

Examples
---

```javascript
// EXAMPLE 1
const items = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
const result = items.every(x => x < 10) // check every item is <10?
const result2 = items.every(x => x > 5) // check every item is >5?

console.info('result:', result) // result: true
console.info('result2:', result2) // result2: false
```

### Check if an array contains only strings

```javascript
// EXAMPLE 2
const items2 = [1, 4, 7, 'hello', 'blah']
const strings = items2.every(x => typeof x === 'string') // check if every items is a string?
console.info('strings:', strings) // strings: false
```

### Check if a form submission was valid

```javascript
// EXAMPLE 3
const fields = [
	{
		field: 'email',
		value: 'shane@email.com',
		errors: []
	},
	{
		field: 'name',
		value: '',
		errors: ['No name provided']
	}
]

const isValid = fields.every(x => x.errors.length === 0 ) // check if no errors?
console.info('isValid:', isValid) // isValid: false
```

### Check if a user has finished watching the course
```javascript
// EXAMPLE 4
const videos = [
	{
		title: 'Array methods in depth: concat',
		length: 310, // video length in secs
		viewed: 310	// amount of secs watched
	},
	{
		title: 'Array methods in depth: join',
		length: 420,
		viewed: 360
	}
]
const isComplete = videos.every(x => x.viewed === x.length)
console.info('isComplete:', isComplete) // isComplete: false

```

Links
---
- [Validate Data with the Every() Method](https://egghead.io/lessons/javascript-javascript-array-methods-in-depth-every)
- [MDN: Array.prototype.every()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every)