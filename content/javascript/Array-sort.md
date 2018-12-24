
---
title: Array.sort() - Sorting Arrays in JavaScript
category: JavaScript
tags:
  - Array Methods
date: 2017-01-19
---

The method for sorting arrays is called.. `sort`!. 

Examples
---

Default sort

```javascript 
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

var scores = [1, 10, 21, 2]; 
scores.sort(); // [1, 10, 2, 21]
// Watch out that 10 comes before 2,
// because '10' comes before '2' in Unicode code point order.

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// In Unicode, numbers come before upper case letters,
// which come before lower case letters.
``` 


Notes
---
- Sorts elements _in place_
- The default sort order is according to _string Unicode code points_
- You can use `sort` to sort _both objects and arrays_ (because: arrays are objects..)
- If you are passing object properties as parameters to your (separately defined) sort function, use bracket notation to access the parameter (variable). `obj[param]` instead of `obj.param` or `obj['param']`.

Links
---
- [JS Bin](https://jsbin.com/sebezu/61/edit?js,console)
- [MDN: Array.prototype.sort()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Sorting an array of objects](http://www.javascriptkit.com/javatutors/arraysort2.shtml)