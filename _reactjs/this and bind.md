# `this`, `.bind()` Binding

- Implicit Binding
- Explicit Binding (call, apply, bind)
- new Binding
- window Binding

## Explicit Binding

`.apply()` is the same as `.call()`, the only difference being you can pass an array of args instead of passing args one by one.

`.bind()` is like `.call()`, but it let's you create a new function and invoke it later.
`.call()` and `.apply()` are called/invoked immediately.


## new Binding
What's used in constructor functions..

```javascript
let Animal() {
    // this = {}
    this.color = color;
    this.name = name;
    this.type = type
}

let zebra = new Animal('black and white', 'Zorro, 'Zebra');
```



## window Binding
```javascript
var sayAge() {
    console.log(this.age);
}

var me = {
    age: 25
};

sayAge();
```

If there is no binding for `this`, it binds it to the `window` object. `'use strict';` is usually good when you want this to error out instead of defaulting to `window` object

Links
---
- [React Training](https://online.reacttraining.com/courses/reactjsfundamentals/lectures/806507)
