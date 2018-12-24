---
title: "[ES2015] Map object"
category: JavaScript
tags:
  - ES2015
  - Concepts
date: 2016-12-22
---

# Map
> The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value.

You `set` and `get` values to/from a Map.

```javascript 
'use strict';

let classroom = new Map();

let stevenJ = { name: 'Steven', age: 22 },
    sarah = { name: 'Sarah', age: 23 },
    stevenS = { name: 'Steven', age: 22 };

classroom.set('stevenJ', stevenJ)
classroom.set('sarah', sarah)
classroom.set('stevenS', stevenS)

console.info('classroom size: ', classroom.size) // classroom size: 3

if (classroom.has('stevenJ')) console.log('stevenJ is in the classroom') // stevenJ is in the classroom

console.log('sarah', classroom.get('sarah')) // sarah: { name: 'Sarah', age: 23 } 
classroom.delete('sarah')
console.log('sarah:', classroom.get('sarah')) // sarah: undefined

for (let student of classroom) {
  console.log(`${student[0]}: ${student[1].name} is ${student[1].age} years old`)
}
// stevenJ: Steven is 22 years old            
// stevenS: Steven is 22 years old

console.info('classroom size: ', classroom.size) // classroom size: 2
classroom.clear()
console.info('classroom size: ', classroom.size) // classroom size: 0

```

To empty a Set or Map object of all stored values, you can use the `clear()` method.

## Map vs. Set
Maps can include Sets.
Links
---
- [Treehouse: Map](https://teamtreehouse.com/library/map)
- [MDN: Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)