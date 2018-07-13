---
title: Routing
slug: routing
date: 2017-09-01
---

- Routing is all about handling routes, .i.e URL paths. What to do/present/show when someone goes to a route (aka a URL or a path)
- routes are URL handling code

```javascript
// Route definition structure
app.METHOD(PATH, HANDLER)
```
- The METHOD could be any `http` method (GET, POST, PUT, DELETE etc.). You can also use `all` as a catchall for any method supported in the `http` module (it'll execute the handler for the URL regardless of the method you are using) `app.all(PATH, HANDLER)`
- The HANDLER could be a callback function, or a file (module) that has the router defined (containing all the routes)

```javascript
// Routing in Express.js
// path: ./routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.send('Hey it works!');
})

module.exports = router;
```

```javascript
// path: ./app.js
const routes = require('./routes/index'); // import our routes

app.use('/', routes); // use the routes file whenever anyone goes to /anything
app.use('/admin', adminRoutes); // You can have multiple route handlers
```

### Callback / Handlers

```javascript
app.all('/secret', (request, response, next) => {
  response.send('ha!');
  next() // pass control to the next handler
});
```

In the `response` (it doesn't have to be called response, it's just a variable name you'll use inside the function, you can call it dodo for all that matters, but you'll most commonly see it defined as `res`), you can:

- `console.log()` things
- send back text `.send()`
- send back JSON data `.json()`
- if you send data twice (e.g. using both `.send()` and `.json()`), you're gonna get _headers are already sent_. So make sure you're never sending data more than once.
- `next` is for when you don't want to send any data back or want to pass it along to something else

```javascript
router.get('/', (req, res) => {
  let profile = { name: 'Aamnah', age: 100, cool: true };
  console.log('chal gya!');
  res.send('chal gya code');
  res.json(profile);
})
```

- `request.query()` access Query strings
- `request.params()` access URL Parameters
- `request.body()` access POSTed values

#### Query strings
From the `request` you can extract any data that was passed via the URL

For example: 


```
http://localhost:7777/?name=Aamnah&age=100
```

```javascript
router.get('/', (req, res) => {
  res.send(req.query); // {"name":"\"Aamnah\"","age":"100"}
  res.send(req.query.name); // Aamnah
  res.send(req.query.age);  // 100
})
```

`req.query` is an object full of all the query parameters

#### Parameters

- `:` specifies parameters


```javascript
router.get('/profile/:name', (req, res) => { // :name is a variable
})
```

Now it'll handle URLs in the structure of `/profile/whomever`, where _whomever_ is the value of the `name` parameter. You can access these parameters values like so:


```javascript
router.get('/profile/:name/:role', (req, res) => { // http://127.0.0.1:7777/profile/aamnah/admin
  res.send(`${req.params.name}'s role is ${req.params.role}`); // aamnah's role is admin
})
```

Here's some code to reverse any string sent to a URL endpoint

```javascript
router.get('/reverse/:string', (request, response) => { // localhost:port/reverse/aamnah is awesome
  let reverse = [...request.params.string].reverse().join(''); // using ES6 spread syntax here
  response.send(reverse); // emosewa si hanmaa
})
```


Links
---
- [Express Docs: Routing](https://expressjs.com/en/guide/routing.html)
- [Express Docs: Basic Routing](https://expressjs.com/en/starter/basic-routing.html)
- [MDN: Express Routing](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)
- [WesBos - Learn Node - Core Concept: Routing](https://courses.wesbos.com/account/access/599dbf62efdeb84f7b531274/view/214159919)
