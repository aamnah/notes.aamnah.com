---
title: "[ES2015] Promises"
category: JavaScript
tags:
  - ES2015
  - Concepts
date: 2016-12-22
---

# Promises
Promises are like callback functions, but so much better. Promises are meant to save you from callback hell.

ES6 feature, started out as libraries. Natively supported in all modern browsers.

A promise is a pattern for handling asynchronous operations. The promise allows you to call a method called "then" that lets you specify the function(s) to use as the callbacks.

A promise is an eventual value. 

three states

- pending
- fulfilled or resolved
- rejected

Now of course the more levels of nesting we have, the harder the code is to read, debug, maintain, upgrade, and basically work with. This is generally known as _Pyramid of Doom_ or _Callback Hell_. Also, if we needed to handle errors, we need to possibly pass in another function to each xhrGET call to tell it what it needs to do in case of an error. If we wanted to have just one common error handler, that is not possible.


Notes
---
- Promises are objects
- Promises compose
- Instead of having separate callback functions to deal with resource loads, you can just deal with them all in Promises with `.all`, which takes an array of resources.



Links
---
- [YouTube: FunFunFunction - Promises](https://www.youtube.com/watch?v=2d7s3spWAzo)
- [SitePoint: An Overview of JavaScript Promises](https://www.sitepoint.com/overview-javascript-promises/)
- https://developers.google.com/web/fundamentals/getting-started/primers/promises#promisifying_xmlhttprequest
- http://stackoverflow.com/questions/3884281/what-does-the-function-then-mean-in-javascript
- http://spion.github.io/promise-nuggets/
- [Treehouse: Understanding Promises in JavaScript](https://teamtreehouse.com/library/understanding-promises-in-javascript)