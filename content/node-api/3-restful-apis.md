---
title: Restful APIs
date: 2017-09-15
lastmod: 2017-09-18
---

REST is not a framework, it's not a standard (like HTTP), it's just a way that we came up with (a paradigm).

- start off with modelling your data. everything is built around how your data is modelled
- _resources_ means the actual data

- `GET` means i'm asking for something
- `POST` means i'm trying to give you something
- `PUT` means to update something
- `DELETE` is self-explanatory

- `GET`, `POST`, `PUT`, `DELETE` HTTP verbs= `CREATE`, `READ`, `UPDATE`, `DESTROY` (CRUD) operations

### Modelling your data

You can do this in JSON, determine what your actual resource looks like

```json
{
	"name": "Simba",
	"id": 1,
	"age": 3,
	"pride": "The Cool Cats",
	"gender": "male"
}
```

Next, design the routes to access your data, and CRUD operations based on HTTP verbs (because we are following REST)

Here's an API blueprint in JSON. Some people define their API is YAML, or even Markdown. It breaks down all the CRUD operations you can do on one resource

```json
{
	"GET /lions": {
		"desc": "returns all lions",
		"response": "200 application/json",
		"data": [{}, {}, {}]
	},

	"GET /lions/:id": {
		"desc": "returns one lion represented by its id",
		"response": "200 application/json",
		"data": {}
	},

	"POST /lions": {
		"desc": "create and return a new lion using the posted object as lion",
		"response": "201 application/json",
		"data": {}
	},

	"PUT /lions/:id": {
		"desc": "updates and returns the matching lion with the posted update object",
		"response": "200 application/json",
		"data": {}
	},

	"DELETE /lions/:id": {
		"desc": "Deletes and returns the matching lion",
		"response": "200 application/json",
		"data": {}

	}
}
```

- For `POST` requests, we want it to send back the object we just created. Think of todos, when you create a todo, you expect to see the new item in the list. How'd you update your UI if the server never responded with the new todo?
- `201` is the status code for successful creation