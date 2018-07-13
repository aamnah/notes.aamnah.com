---
title: Expressjs
description: What is ExpressJS, why it is needed, a brief comparison with other frameworks and code examples
category: Node
tags:
  - nodejs
  - API
date: 2017-09-15
---

- Node has a builtin `http` module, which allows us to create an HTTP server on a TCP connection
- The issue with the builtin module is that it requires a lot of code and configuration to setup something basic, and can be difficult and overwhelming
- You're forced to learn about stuff (like Networking), but it is also error-prone
- Express is literally just a routing library with middleware
- It allows you to set up _verbs_ with _routes_ and then run the functions you tell it to run when those routes and verbs are hit by a request

<div class="Post-info">
FUN FACT: One of the HTTP status codes is <strong>418: I'm a teapot</strong>. It's part of a 1998 April's Fool joke, <a href="https://tools.ietf.org/html/rfc2324">RFC 2324</a> introduced the <a href="https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol">Hyper Text Coffee Pot Control Protocol</a> or (HTCPCP/1.0). 
You can see all HTTP Status Codes with <code>node > console.log(http.STATUS_CODES)</code>
</div>

### Express

> Fast, unopinionated, minimalist web framework for Node.js

- Express is a framework that abstracts that difficulty away and makes the process easier. It sits on top of node and uses the `http` module to make building servers not so hard.

#### Express vs. Others
- Other alternatives include [koa](http://koajs.com/), [hapi](https://hapijs.com/) and [sails](http://sailsjs.com/) to name a few. Express is by far the most popular one
- Express is a framework that sits on top of `http` and there are other frameworks that sit on top of Express (e.g. [Kraken](http://krakenjs.com/), Sails, LoopBack), so there's a lot of abstraction. Express is a good common ground to start
- A lot of the really good frameworks are built on top of Express. So if you start with Express, you'll have a real solid foundation and good understanding of conventions used by frameworks built on top of Express

#### Express vs. Restify
- Express is meant to be a web server (you can have a website serving static assets as well as an API). [Restify](http://restify.com/) is only aimed at building a RESTful API
- Express is very well maintained, better than maintained than Restify
- Restify is a good one as far as API design is concerned in general

### Using Express

Here's how the code looks for a basic server in Express. With three lines of code you can have a server with two routes

```js
// setup a server with Express
const express = require('express')
const app = express()

// on GET request to the URL
app.get('/todos', (request, response) => {
	// for any GET requests to /todos, run this code
})

// on POST request to the same URL 
app.post('/todos', (request, response) => {
	// for any POST requests to /todos, run this code
})

// start server on port 3000
app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
})
```

Here's how it would've looked with Node's `http` module
```js
// setup a server with Node's builtin http module
const http = require('http')  
const port = 3000

const requestHandler = (request, response) => {  
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
```

#### Request and Response objects
- `req` and `res` are short for request and response. They're just objects in teh callback that we have access to, and the callback that gives us so much flexibility and so much power
- On the **request** we have all the information about what is trying to access our server
- The **response** gives us all types of ways to respond back to the client
- Most of any API is modifying and manipulating these request and response objects to send back appropriate responses for appropriate requests

Here's an example TODOs API

```js
let todos = [
  'Finish this course',
  'Make some coffee',
  'Feed the fish',
  'Wash the car'
]

app.get('/', (req, res) => {
  res.send('Hello there, this is my todos app. Go to /todos to get all todo items')
})

app.get('/todos', (request, response) => {
  // send back a JSON response
  response.json(todos)
})

app.post('/todos', (req, res) => {
  let todo = req.body.todo

  todos.push(todos)
  // res.send() will convert to JSON as well
  // but req.json will convert things like null and undefined to JSON too although it's not valid
  res.send(todo)
})

// get the response from the route
app.get('/todos/:id', (req, res) => {
  let todo = _.find(todos, {id: req.params.id})

  res.json(todo)
})
```

##### res.json() vs. res.send()

- `res.json()` will convert to JSON everything, including `null` and `undefined`, which are not exactly valid values..