---
title: strict mode
date: 2018-12-05
---

### What does `use strict` do?
Strict mode allows you to run the program in a **strict operating context**. It makes debugging easier. Code errors that would have otherwise been ignored or would have failed _silently_ would now throw errors or exceptions.

Strict mode throws more errors and disables some features in an effort to make yor code better.

```js
// It is a string
// goes on top of the file
"use strict"
```

It is a string value, newer browsers that supported it made a strnig value insetead of `use` keyword to let older browsers not fail and just ignore it as a string if they don't support it.

```js 
// strict mode can also be used in parts of your code  
// instead of the entire file 
function myCode() {
	"use strict"
	// Strict mode is ON..
} 
```

Examples:

- Using a variable before it is defined will cause errors. Assigning a value to an undeclared variable will give an error.

```js
let number = 10
numbr = 11 // silly typo
console.info(number)
```

```js
// srict mode (REFERENCE error)
ReferenceError: numbr is not defined
```


```js
// not strict mode (SYNTAX error)
SyntaxError: Identifier 'number' has already been declared
```

- Stops you from using keywords _reserved_ for future version of JavaScript (used to error out on `let` when ES2017 wasn't supported)
- You can't `delete` functions or variables or arguments to functions in strict mode
- It disables features that are confusing or poorly thought out
- It catches some common coding bloopers, throwing exceptions.
- It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object).
- In strict mode you can't assign values to variables that haven't been previously declared

Links
---

- [ECMAScript 5 Strict Mode, JSON, and More](https://johnresig.com/blog/ecmascript-5-strict-mode-json-and-more/)