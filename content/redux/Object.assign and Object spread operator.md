---
title: Object.assign() vs Object spread operator
categories: 
  - Redux
date: 2016-12-06
---

# Object.assign() vs Object spread operator

You can use `...state, action` instead of `Object.assign({}, state, action)`

Will need a separate Babel plugin to work. 

```bash
npm i -D babel-plugin-syntax-object-rest-spread babel-plugin-transform-object-rest-spread
```
once installed, add the plugins to `.babelrc`

```javascript
"plugins": [
	"syntax-object-rest-spread",
  	"transform-object-rest-spread"
  ]
```


Links
---
- [Redux Docs: ](http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html)