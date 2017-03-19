# Pure Functions

- [Video: Pure Functions, Props, and Nesting React Components in React](https://online.reacttraining.com/courses/reactjsfundamentals/lectures/760335)
- [Master the JavaScript Interview: What is a Pure Function?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976#.bgkqjam90)

- Pure functions always return the same result given the same arguments. 
- Pure function's execution doesn't depend on the state of the application.
- Pure functions don't modify the variables outside of their scope.


## Examples
`.slice()` vs. `.splice()`

slice is a pure function. it doesn't modify the array, it returns a shallow copy of the modified array. splice on the other hand is an impure function. it modifies the original array and the result is the same everytime you run the function with the same args, because the array gets modfied each time. The _state_ changes.