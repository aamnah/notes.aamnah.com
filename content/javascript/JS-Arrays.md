---
title: Quick Intro to Arrays in JavaScript
category: JavaScript
tags:
  - Array Methods
date: 2016-11-15
---

# Arrays

- get first item in an array: `array[0]`  
- get last item in an array: `array[array.length-1]`
- add item to end: `array.push(val)` can push multiple values
- add item to beginning: `array.unshift(val)` 
- remove item from end: `array.pop()` returns the last item from an array and removes it
- remove item from start: `array.shift()` returns the first item from an array and removes it
- Join elements in an array: `.join()`  
- Join two Arrays: `.concat()`  
- Search arrays: `indexOf()`  

## Loops for Arrays

```javascript
for( var i=0; i<arr.length; i += 1) {
	console.log(arr[i]);
}
```

Do note that using `for` loops are the ancient way of doing things. You should be using cool _higher order functions_ like `.map` and `.reduce`