# .concat()

`.concat()` takes an existing array, adds a value to it and returns a new array

it takes a copy of the original array, adds to it any parameters passed and returns a new array.

`.concat()` is the equivalent of `.push()`, but superior, because it does not edit the data in place, it gives a new array as a result.

- you can pass in multiple values
- you can pass in different types
- you can pass in other arrays as params. it gets every item in the array and adds it in the new array.
- you can use `concat()` to flatten arrays, but only one value deep


Examples
---
### adding items to arrays

```javascript
let nums = [1, 2]
let newNums = nums.concat(3)
console.info(newNums) // [ 1, 2, 3 ]

let moreNums = nums.concat(3, 4, 5)
console.info(moreNums) // [ 1, 2, 3, 4, 5 ]

let diverseNums = nums.concat(true, 'hello', undefined)
console.info(diverseNums) // [ 1, 2, true, 'hello', undefined ]

let addArr = nums.concat([ 3, 4 ], [ 5, [6, 7 ]])
console.info(addArr) // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
```
### log all names in 3 different arrays of objects

```javascript
let people = [{name: 'Aamnah'}, {name: 'Ali'}]
let people2 = [{name: 'Alex'}, {name: 'Benny'}]
let people3 = [{name: 'Himesh'}, {name: 'Shareese'}, {name: 'Yaacov'}, {name: 'Martin'}]

let names = people.concat(people2, people3).forEach(person => console.info(person.name))

/*
Aamnah
Ali
Alex
Benny
Himesh
Shareese
Yaacov
Martin
*/
```



Links
---
- [Egghead.io:  Use Concat to Add Values to an Array](https://egghead.io/lessons/javascript-javascript-array-methods-in-depth-concat?course=javascript-arrays-in-depth)