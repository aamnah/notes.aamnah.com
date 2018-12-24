---
title: "[ES2015] var, let and const"
category: JavaScript
tags:
  - ES2015
date: 2016-12-22
---

# var, let and const
- using `var` is an issue because `var` is _hoisted_. 
- `var` is function scope, `let` is block scope. 
- `let` is the new `var`.
- `const` is a constant. it is for something that is only going to be defined once. You _can not_ redefine `const`.
- `const` is not exactly _immutable_, the values in `const` can sometimes be changed, for example if it's an object and you want to chaneg property values inside, you can. But you can reassign that whole object again.
- `const` will _never be reassigned_, but it _can change_. (e.g. Arrays and Objects)
- You should always use `const` if you do not really need to change the variable. You should **minimize mutable state**
- There is comfort in knowing that something will never change.
- the problem with `var` is the scope. `let` aims to resolve that with local scope.
- using `var` is not recommended because of it's scoping issues.

Links
---
- [YouTube: FunFunFunction](https://www.youtube.com/watch?v=sjyJBL5fkp8)
- [Treehouse](https://teamtreehouse.com/library/declaring-variables-in-javascript)