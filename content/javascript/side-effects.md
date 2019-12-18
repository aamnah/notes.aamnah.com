---
title: Side effects and Pure functions in JS functions
date: 2019-12-09
---

### Side effects

Side effects, is when a function is effecting things outside of itself. When any of the inputs or any of the outputs are _indirect_.

- Indirect input, i.e. was not part of the parameters 
- Indirect output i.e. was not returned from the function

A function without any side effects can not access anything from outside itself and it can not assign to anything from outside of itself. In functional programming, you don't want any side effects.

```js
function shippingRate() {
  rate = ((size + 1) * weight) + speed
}

var rate
var size = 12
var weight = 4
var speed = 5
shippingRate()
rate // 57

size = 8
speed = 6
shippingRate()
rate // 42
```

Notice how in the above example, the `shippingRate()` had no parameteres passed in (i.e. no direct input), and the function didn't `return` anything, i.e. no direct output. Yet it still changed the value of the `rate` variable. The following example is the fixed, _functional_ way of writing that function

```js
function shippingRate(size, weight, speed) { // parameters = direct input
  return ((size + 1) * weight) + speed // return = direct output
}

shippingRate(12, 4, 5) // 57
shippingRate(8, 4, 6) // 42
```

Some examples of side effects are:

- Accessing and changing variables outside the function call
- I/O (console, files, etc.)
- Network Calls
- Manipulating the DOM
- Timestamps
- Generating random numbers
- Any function that's blocking the execution of another function

Some side effects are impossible to avoid. The goal is to _minimize_ side effects. And make them _obvious_ when we must have them.

### Pure functions

A function with its inputs direct, its outputs direct and without any side effects is a pure function.

```js
// pure
function addTwo(x,y) { // direct input
  return X + y // direct output
}

//impure
function addAnother(x,y) {
  return addTwo(x,y) + z // where'd that z come from?
}
```

However, if you are accessing _constant_ values that will _not be reassigned_ inside your function, than that'd also be functional programming (according to Kyle Simpson). The fact that it is a constant should be obvious to the reader of your code.

```js
const z = 1

// pure
function addTwo(x,y) { // direct input
  return X + y // direct output
}

//impure
function addAnother(x,y) {
  return addTwo(x,y) + z // z is a constant value in the function's scope
}

addAnother(20,21) // 42
```


Links
---
- [FEM: Side Effects ](https://frontendmasters.com/courses/functional-javascript-v3/side-effects/)
- [FEM: Pure Functions and Constants](https://frontendmasters.com/courses/functional-javascript-v3/pure-functions-constants/)