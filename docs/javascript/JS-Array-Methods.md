.map = iterate over arrays
.reduce = Condense arrays
.filter
.sort
.reverse
.concat
.split >> STRING method
.join
.slice() = slices array by taking indices
.splice() = slice(), but modifies the original array
.substr()
.substring()

### .forEach()
`forEach()` is an _async_ method (while normal `for` loops aren't).

### .map()
iterates over every element of the array, creating a new array with values that have been modified by the callback function , and returns. It _does not modify_ the original array.

```javascript
var newArray = oldArray.map(function(val){
  return val + 3;
});
```

#### .map() vs .forEach()
short answer: `.forEach` modifies original array, `.map` doesn't.

> It’s this simple: `.map` returns a new array, whereas `.forEach` doesn’t return anything. Basically, if you want to obtain a modified form of the previous array, you use `.map`, if you don’t want that, you use `.forEach` - [stackoverflow](http://stackoverflow.com/questions/34426458/js-lerning-difference-between-foreach-and-map#comment56594315_34426458)

`foreach` iterates over a list and applies some operation with side effects to each list member (such as saving each one to the database for example)

`map` iterates over a list, transforms each member of that list, and returns another list of the same size with the transformed members (such as converting a list of strings to uppercase)
[link](http://stackoverflow.com/a/354915/890814)

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Favor `map()` over `forEach()` when you can. Avoid side-effects.<a href="https://twitter.com/hashtag/functional?src=hash">#functional</a> <a href="https://twitter.com/hashtag/JavaScript?src=hash">#JavaScript</a></p>&mdash; Eric Elliott (@_ericelliott) <a href="https://twitter.com/_ericelliott/status/655530013631107072">October 17, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


#### chaining
`.forEach()` doesn't return an array. In other words, `.forEach()` terminates chains, while `.map()` allows you to chain even more calls.
[link](https://ryanpcmcquen.org/javascript/2015/10/25/map-vs-foreach-vs-for.html)

```javascript
var arr = [1, 3, 2];

console.log(
  // This one works:
  arr
  .map(function (i) {
    return i + i;
  })
  // Chaining!
  .sort()
);
// => [ 2, 4, 6 ]

console.log(
  // This one does not:
  arr
  .forEach(function (i) {
    return i + i;
  })
  // This is where forEach breaks:
  .sort()
);
// => TypeError: Cannot read property 'sort' of undefined
```

### .reduce()
iterates through the array elements and condenses them into _one value_. e.g: arr = [4,5,6,7,8] will become 30 if you use `.reduce` and add all the values.

```javascript
var array = [4,5,6,7,8];
var singleVal = 0;

singleVal = array.reduce(function(previousVal, currentVal){
  return previousVal + currentVal;
}, 0);
```


### .filter()
iterates through an array and filters out elements when a condition is _not true_. Any array element for which the callback returns true will be kept and elements that return false will be filtered out. e.g:

```javascript
array = array.filter(function(val) {
  return val !== 5
})
```
will give all values that are not 5.

### .sort()
sorts array elemnets _alphabetically_ or _numericaly_. `.sort()` sorts array elements **in place** and returns the sorted array.

If _no callback_, it converts values to strings and sorts alphabetically

sort can be passed a compare function as a callback. The compare function should return a negative number if `a` should be before `b`, a positive number if `a` should be after `b`, or `0` if they are equal.

- a-b = ascending
- b-a = descending


```javascript
var array = [1, 12, 21, 2]
array.sort(function(a, b) {
  return a - b
})
```

### .concat()
merges the contents of two arrays into one. takes an array as arg and returns a _new array_ with the contents of this array added _to the end_

```javascript
newArray = oldArray.concat(concatMe)
```

### .slice()
takes an index value and chops the array at that index value from the beginning of array. if you give a negative value, it'll slice from the end. 

Takes a begin value and an (optional) end value. If begin is undefined, slice begins from index 0.


### .split()
splits a string into an array. takes an arg and splits the array at the points where it is found. e.g: 

```javascript
array = string.split(' ')
``` 
will split a sentence into words by breaking at the spaces.
`str.split('');` commas without any spaces will break down individual letters/characters


### .join()
operates the same way as `.split()` achieves the opposite. e.g: Your array has days of the weeks, you can use `.join()` to get them all in one sentence, like so: 

```javascript
arr.join(', ')
```


### `.substr()` vs `.substring()`	vs. `slice()`
The difference is in the second argument. The second argument to substring is the index to stop at (but not include), but the second argument to substr is the maximum length to return. You can remember substring takes indices, as does yet another string extraction method, slice.

### `.indexOf()`
Searches an array for elements. If not found, returns `-1`. If found, returns the element's index position. When writing conditionals, you can see if the returned value is `> 1` to check if it exits.



### `String.indexOf` vs. `Array.indexOf`
The string method looks for a substring and the array method for an element.