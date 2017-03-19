---
layout: post
title: Object copying in JavaScript
status: draft
permalink: object-copying-javascript
---

Object.assign, concat, filter, map, reduce are always going to return a brand new object.

- shallow copy
- deep copy (clone)
- freeze
- deepFreeze
- side effects

## Object copying
Shallow copy, deep copy (and others, e.g. lazy copy) are methods of copying an object.
> Copying is done mostly so the copy can be modified or moved, or the current value preserved. If either of these is unneeded, a reference to the original data is sufficient and more efficient, as no copying occurs.
https://en.wikipedia.org/wiki/Object_copying#Lazy_copy

### Shallow vs. Deep copy
> **Shallow copies duplicate as little as possible.** A shallow copy of a collection is a copy of the collection structure, not the elements. With a shallow copy, two collections now share the individual elements.

> **Deep copies duplicate everything**. A deep copy of a collection is two collections with all of the elements in the original collection duplicated. [stackoverflow](http://stackoverflow.com/a/184745/890814)


## Object.assign()
```javascript
const a = {name: "Will", age: 35}
const b = Object.assign({}, a, {name: "Fred"})
```

With `Object.assign()` you first created a brand new object `{}`, then passed everything in `a` to that new object, and then passed your changes `{name: "Fred"}` to that new object which was a copy of `a` (essentially creating a new copy first and then overwriting whatever you want in the new copy).
 
https://www.youtube.com/watch?v=9M-r8p9ey8U

JS only really has two types of data: `primitive` and `reference`.
Primitives are strings, booleans, numbers etc. You are storing values. Primitives are immutable.

> Strings in JavaScript are immutable. All methods in the String prototype perform either read operations or return new strings. [link](https://auth0.com/blog/intro-to-immutable-js/)

Reference are arrays and objects. You are storing _references_ to values. Reference data is mutable.

Links
---
- https://auth0.com/blog/intro-to-immutable-js/