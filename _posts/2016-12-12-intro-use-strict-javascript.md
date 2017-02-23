---
title: Strict mode in JavaScript with `use strict`
tags: ['javascript']
---

### tl;dr

- Runs the JS interpreter in a strict mode, meaning it fails loudly for bad practices in JS
- Strict mode also eliminates _silent errors_. When something pretty major is going wrong, you won't have to hunt for it.
- If you're writing good code, `'use strict'` shouldn't cause you any problems
- Part of ES5/ES2015, official JS standard
- Goes on top your code, must be the _first line_ in your file. Must be a _string_ `'use strict'`
- Keep in mind concatenation. It must be the first line and not concatenated somewhere in the middle, or it won't work.
- It can also be used inside your functions
- If you get an error, it'll stop executing the rest of the file
- does webpack-dev-server run/compile in strict mode?

Examples
---

- if you define variable without using the `var` (or `let` or `const`) keyword, it'll throw an error (because you didn't define a scope, `var`/`let`/`const`define the scope of the variable)

this is bad

```javascript
badVariable = 35
```

it's bad because you didn't use the `var` (or `let` or `const`) keyword, which are needed to **define the scope** of the variable. You have cluttered the global name space by creating a global variable. 

Now this bad code will still run normally, but if you `use strict`, it'll fail and give you an error

```javascript
'use strict';
badVariable = 35
console.info(badVariable) // Uncaught ReferenceError: badVariable is not defined(…)
```

- If you write to an object that is **non-writable**, it'll throw an error in strict mode

```javascript
NaN.foobar = true; // Uncaught TypeError: Cannot create property 'foo' on number 'NaN'(…)
```

`NaN` is just an object used as example here, you wouldn't actually write the above code.

- if you try to delete (Object) properties that **can't be deleted**

```javascript
delete Object.prototype //Uncaught TypeError: Cannot delete property 'prototype' of function Object() { [native code] }(…)
```
- it used to throw an error for duplicate keys in an object but it doesn't anymore in ES6. 
- **Octal number syntax** (leading zeros with numbers, like 020) will throw a syntax error

```javascript
let someOctal = 500 + 090;
console.info(someOctal) // Uncaught SyntaxError: Octal literals are not allowed in strict mode.
```
- `delete` can not be used to **delete variables or plain objects**  (you can only Object properties)

```javascript
let cutie = 'i am cute'
delete cutie // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
```

Links
---
- [Treehouse: The JavaScript 'use strict' Statement](https://teamtreehouse.com/library/the-javascript-use-strict-statement-2)
- [MDN: Strict mode](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Strict_mode)
- [StackOverflow: “use strict”; now allows duplicated properties?](http://stackoverflow.com/questions/29936845/use-strict-now-allows-duplicated-properties)