---

title: Getting started with Express
slug: getting-started-express-node-js
tags:
- expressjs
- nodejs
- api
date: 2017-03-07
tags:
  - Getting Started
---

Initialize the project and install and save express to `package.json`

```bash
npm init -y
npm i -S express
```

Here's the code for a very basic server up and running

```javascript
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Bonjour la monde!')
})

const server = app.listen(3001, function () {
  console.info(`Server running at http://localhost:${server.address().port}`)
})
```

install `nodemon` and add npm scripts to `package.json`

```bash
npm i -D nodemon
```

```javascript
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

### Routes
```
app.METHOD(PATH, HANDLER)
```
For every route, you need a path and a **route handler function** (callback function) for that path

- Path could be a string (`'home'`), path pattern (`*.json`), regex, or an array.  
- Callback could be a middleware function, a series of middleware functions, and array of middleware functions or all of these combined.

```javascript
app.get('/yo',  function (req, res) {
  res.send('HEYO!')
})
```
whenever someone visits `/yo`, they'll get a _HEYO!_ in response.

You can pass in multiple handlers, like so

```javascript
// function verifyUser (req, res, next) { .. }

app.get('/:username', verifyUser, function (req, res) {
  let user = req.params.username
  rese.render('user', {
    user: user,
    address: user.location
  })
})
```

#### Response

Response `res` in our callback route handler is an object, it has it's own methods, like `.send()`, `.redirect()`, `.status()` etc. The [`res` object](https://expressjs.com/en/4x/api.html#res) is an enhanced version of Node’s own response object and supports all [built-in fields and methods](https://nodejs.org/api/http.html#http_class_http_serverresponse).

```javascript
// Some example responses

// send a very simple string response
res.send('Hello')

// send an 404
res.status(404).send(`No username ${req.params.username} found`)

// redirect to a page
res.redirect(`/error/${req.params.username}`)

// download a resource
app.get('*.json', function (req, res) {
  // whenever someone goes to a path ending in .json, download the corresponding file
  // e.g. i go to /mojojojo.json, i download the file at /users/mojojojo.json
  res.download(`./users/${req.path}`)
  // You can optionally provide a second param as file name
  // res.download('filePath', 'fileName')
  res.download(`/users/${req.path}`, 'virus.exe`) // buahahaa
})

// JSON, send data back as json, like an API server
res.json(foo)
```

#### Route parameters
The captured values are populated in the `req.params` object, with the name of the route parameter specified in the path as their respective keys.


```javascript
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})
```
```
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
```


Links
---
- [Express Docs: Basic routing](https://expressjs.com/en/starter/basic-routing.html)
- [Express Docs: Routing Guide](https://expressjs.com/en/guide/routing.html)
- [Express Docs: API 4.0](https://expressjs.com/en/4x/api.html)
- [Egghead.io: Getting Started with Express - Advanced Routing](https://egghead.io/lessons/node-js-getting-started-with-express-advanced-routing)
