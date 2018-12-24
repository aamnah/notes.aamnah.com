---
title: Middleware
date: 2017-09-18
---

Middleware is the most powerful feature other than the routing. That's what Expressjs mostly is, the middleware and the routing.

Express uses middleware to modify and inspect the incoming requests. From parsing URLs to handling auth, middleware makes this easy. You can think of middleware as thirdy party _plugins_.

Express can also be a static web server. Makes it super simple.

---

Middleware is the backbone of Express. 

> A set of utility classes that let Express do the dirty work

Middleware is (just) a function with access to the **request** object, the **response** object and the `next()` function that when called will go to the next middleware. Middleware can run any code, change the response and request objects, end the request-response cycle, and call the next middleware in the stack. If a middleware does not call the `next()` function or end the cycle (send back a response or throw an error), the server will just hang.

Middleware can run any code (database call, call to another remote, response to client etc.)

```js
function (request, response, next) {
	//......
	// do something
	//......
	next()
}
```

Middleware is what you'd call a series of callbacks or a stack of functions, and it won't go to the next one until you tell it to.

Routes are also middleware, they have a `next()`, we just don't call it because a) we're responding (i.e. ending the request-response cycle), and b) there's (usually) no next in the middleware (app.use) chain

### Types of Middleware

5 types of middleware in Express 4x

1. 3rd party (body-parser)
2. Router level
3. Application level (app.use globals)
4. Error handling (morgan)
5. Built-in (express.static)



```js
// error handling middleware takes an additional error argument
// you have to put the fourth argument in place, so it becomes (err, req, res, next)
// if you don't, Express won't recognize you're making an error handler middleware
// you need to specify all four args for it to be recognized as an error handler
// if you provide three args, it'll consider it a normal middleware
app.use(function(error, request, response, next) {
	//...
	console.log('Oopsie. Here is an error!')
	console.log(error)
	next()
})
```

Let's test out an error handler. The order of the middleware stack matters.

```js
// let's make an error on a route (middleware) on purpose
app.get('/', function(req, res, next) {
	next(new Error('noooope'))
})

// add an error handler to the middleware stack
app.use(function(error, request, response, next) {
	//...
	console.log('Oopsie. Here is an error!')
	console.log(error)
	next()
})
```

- With error handling middleware you can handle errors for all your routes in one middleware, instead of doing `if (error) {}` blocks in every route function.
- Error handling should always go last in the (middleware) stack. You want to be able to reliably call `next()` in one of the router callbacks with an error and expect your error handler to pick it up.