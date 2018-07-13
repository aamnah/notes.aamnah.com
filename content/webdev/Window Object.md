---

title: Window object
slug: window-object-browser-api
status: draft
date: 2017-03-21
---

- Window is the browser window
- `alert('hello')` is the same as `window.alert('hello')`
- When we refer to variable or function, it looks in the local scope first. If it is not found there, it moves up the chain until it reaches the Window object, at which point it is global
- All global variables are part of the Window object. They can be referenced as `window.foo`
- You can overwrite global (Window object) functions by redeclaring them with the same name
- Window object is in the global namespace

```javascript
let greeting = 'Bonjour!'
window.alert(window.greeting)
```


Links
---

- [Udemy: The Window Object](https://www.udemy.com/html5-apis-for-javascript-a-course-for-web-developers/learn/v4/t/lecture/178025?start=0)
