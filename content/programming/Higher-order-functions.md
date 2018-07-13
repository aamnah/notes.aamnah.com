---

title: Higher Order Functions
slug: higher-order-functions
tags: ['programming', 'fundamentals', 'concepts']
status: publish
date: 2016-12-03
---

# Higher-order Functions

<div class='tldr'>
- Any complicated function that was composed by combining simple functions is a higher order function.
- Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. - Eloquent JavaScript
- A higher-order function is a function that takes other functions as arguments and/or returns a function as it's result. - Wikipedia
</div>

Notes
---
- Functions are values. We can assign functions to variables, and we can pass functions to other functions as values
- _Composition_ is putting functions inside other functions, composing smaller functions in bigger functions.
- Functions you send to other functions are _callback_ functions.
- Writing code in smaller functions makes them composable and re-usable throughout your code
- _Abstractions_ hide details and give us the ability to talk about problems at a higher (or more abstract) level. `forEach()` is an abstraction for _For each element in the array, do something_. They makes code shorter, cleaner and easier to interpret

Examples
---
- `.map()` is a higher-order function. It takes as arguments a function f and a list of elements, and as the result, returns a new list with f applied to each element from the list.
- Another very common kind of higher-order function in those languages which support them are **sorting functions** which take a comparison function as a parameter, allowing the programmer to separate the sorting algorithm from the comparisons of the items being sorted.
- Arrays provide a number of useful higher-order methods — `forEach` to do something with each element in an array, [`filter`](link to the .filter tldrdevnote) to build a new array with some elements filtered out, `map` to build a new array where each element has been put through a function, and `reduce` to combine all an array’s elements into a single value.
- Functions have an `apply` method that can be used to call them with an array specifying their arguments. They also have a `bind` method, which is used to create a partially applied version of the function.

here's a traditional self-contained function

```javascript
var total = 0, count = 1
while (count <= 10) {
  total += count
  count += 1
}
console.log(total) // 55
```
here's the same as a higher order function relying on two external functions

```javascript
console.log(sum(range(1, 10))) // 55
```

### from functiobnal-javascript workshopper

A higher-order function is a function that does at least one of the following:

  * Take one or more functions as an input
  * Output a function

All other functions are first order functions. [1]

Unlike many other languages with imperative features, JavaScript allows you to utilize higher-order functions because it has "first-class functions". This means functions can be treated just like any other value in JavaScript: just like Strings or Numbers, Function values can be stored as variables, properties on objects or passed to other functions as arguments. Function values are actually Objects (inheriting from Function.prototype) so you can even add properties and store values on them, just like any regular Object.

The key difference between Functions and other value types in JavaScript is the call syntax: if a reference to a function is followed by parenthesis and some optional comma-separated values: someFunctionValue(arg1, arg2, etc), then the function body will be executed with the supplied arguments (if any).

Links
---
- [Eloquent JavaScript: Chapter 5 - Higher-Order Functions](http://eloquentjavascript.net/05_higher_order.html)
- [YouTube: FunFunFunction - Higher-order functions](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=1)
- [Wikipedia: Higher-order function](https://en.wikipedia.org/wiki/Higher-order_function)
- [Wikipedia: Function Composition](https://en.wikipedia.org/wiki/Function_composition_(computer_science))
