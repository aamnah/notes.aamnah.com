---
title: Throwing errors in JavaScript
date: 2019-09-10
---

- Throwing **stops execution**
- Put the `throw` inside a `try .. catch` block
- Once execution stops, the control will be passed to the first `catch` block it finds. If no `catch` then the program will terminate
- You can _re-throw_ errors
- You can throw different _types_ of errors


```js
// throw Examples
throw 'Error2'; // generates an exception with a string value
throw 42;       // generates an exception with the value 42
throw true;     // generates an exception with the value true
throw new Error('Required');  // generates an error object with the message of Required
```

```js
// Errors and Exceptions
console.log(e) // ReferenceError: blah is not defined
console.log(e.stack) // tells you line number, not supported by some
console.log(e.name) // ReferenceError
console.log(e.message) // blah is not defined

```

### Example

```js
/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    // if (a === 0) { throw 'Zero Error'}
    // if (a < 0) { throw 'Negative Error'}
    // return 'YES'

    if (a >= 1) {
        return 'YES'
    } else if (a === 0) {
        // put throw inside a try/catch so the execution doesn't stop
        try {
            throw new Error('Zero Error')
        } catch (e) {
            // e will be whatever error/exception we throwed earlier
            return e.message // 'Zero Error'
        }
    } else {
        try {
            throw new Error('Negative Error')
        } catch (error) {
            return error.message
        }
    }
}
````


Links
---

- [MDN: throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [try, catch, finally, throw - error handling in JavaScript](https://www.youtube.com/watch?v=cFTFtuEQ-10)
- [JavaScript Try...Catch plus Throwing Errors and Exceptions](https://www.youtube.com/watch?v=_am9rKw4vWw)
