# Intro to Immutable.js

**TIP**: When using `console.log` while debugging Immutable.js objects, you'll see weird Map structures and it doesn't help very much in terms of figurring out object structure. For easier debugging, you can perform `.toJS()` on an Immutable object and console.log that to see the object structure in plain JS.

```javascript
console.log(myMap) // console shows weird Immutable.js object
console.log(myMap.toJS()) // console shows plain JS object
```

```javascript
const Immutable = require('immutable')

// Maps are like JS Objects

var map1 = Immutable.Map({ a: 1, b: 2, c: 3 })

console.info('map1', map1) // map1 Map { "a": 1, "b": 2, "c": 3 }

map1
  .set()
  .get()

// To set values, you always create a new instance of whatever you're editing
var map2 = map1.set('b', 50);
console.info('map2', map2)
```


Values in Immutable.js data structures can't be mutated, so with all the setter methods, you can't just do 

```javascript
map1.set('a': 100)
```

it'd do nothing, because you can't directly set (i.e. change) the map. You have to set the value on a new instance.

```javascript
var map1 = map1.set('a': 100)
```



Links
---
- [YouTube: TechTalk: Introduction to Immutable.js](https://www.youtube.com/watch?v=1AITIyArG78)
- [Immutable.js Cheatsheet](http://ricostacruz.com/cheatsheets/immutable-js.html)
