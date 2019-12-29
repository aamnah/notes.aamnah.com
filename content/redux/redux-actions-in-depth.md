---
title: Redux Actions in Depth
date: 2019-12-29
---

## Actions

> Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using `store.dispatch()`.

Objects containing information that are _dispatched_ to the reducers, which in turn update the store.

```js
// An example Action object
{
  type: 'ADD_TODO', // 'type' is required
}
```

```js
// An example Action object with a TYPE and PAYLOAD (i.e. data being sent to reducer, but we aren't calling it 'payload'. it'll still work..)
{
  type: 'ADD_TODO',
  text: 'Build my first Redux app'
}
```

```js
// An example Action object with a TYPE and PAYLOAD (i.e. data being sent to reducer)
{
  type: 'ADD_TODO',
  payload: {
    text: 'Build my first Redux app',
    status: 'In Progress'
  }
}
```

```js
// An example Action object with a TYPE (constant) and PAYLOAD (i.e. data being sent to reducer)
{
  type: ADD_TODO,
  payload: {
    text: 'Build my first Redux app',
    status: 'In Progress'
  }
}
```

### Dispatching Actions

```js
// Dispatch an Action (inline)
dispatch({
  type: "ADD_TODO",
  payload: {
    text: "Build my first Redux app",
    status: "In Progress"
  }
});
```

```js
// Dispatch an Action (saved as an Action Creator function)
dispatch(addTodo("Build my first Redux app"));
```


### Types and Payloads

- `type` is required. Every action must have a type. We use this type in our _reducers_ to determine what changes to make for what type of action.
- `payload` is optional. It is the information being sent to the reducer. Calling it _payload_ is convention, you can call it whatever you want and reference it in your reducer by that name, but sticking to convention is good.

## Action Type (String literal)

Every action must have a `type` property specifying what type of an action is being performed. The value should be a `String`.

```js
// An example Action object
{
  type: 'ADD_TODO',
}
```

## Action Type (Constant)

the action type strings saved as constants.

```js
// Action constants (saving strings as const to avoid typos)
const ADD_TODO = "ADD_TODO";
```

```js
// Combining action constants into one file and importing/exporting the relevant ones
import { ADD_TODO, REMOVE_TODO } from "../actionTypes";
```

```js
// An example Action object with a TYPE and PAYLOAD (i.e. data being sent to reducer)
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```

### Why?

to avoid typos, to gather them all in one place and to easily import/export them

## Action Creators

Functions generating action objects (instead of writing action objects directly in the code at the time of `dispatch`).

### Why?

Instead of creating the objects inline at the time of dispatch, you can save them before hand. The major benefit of doing that is that when you need to change an action object later, you'd only do it in one place instead of making inline changes where you dispatched that particular action

## createAction()

From the _recommended and opinionated_ `@redux/toolkit`, `createAction()` combines the process of creating an _action type_ (constant) and an _action creator_ (function) into a single step.

Funnily enough, both _action constants_ and _action creators_ are listed under _reducing boilerplate_, when in fact they are responsible for adding more lines of code and more files and folders.. The toolkit's `createAction()` is the one that actually _reduces_ code and complexity and makes _Ducks_ (actions, reducers for one feature in one file) possible.

`createAction()` takes an action type as string and creates an _action creator_ for that action type.

```js
import v4 from 'uuid/v4'

const addTodo = createAction("todos/add", function prepare(text) {
  return {
    payload: {
      text,
      id: v4(),
      createdAt: new Date().toISOString()
    }
  };
});
```

Notice that in this example we're also using `uuid` and `Date()` to add `id` and `createdAt` values to our payload. Following is the resulting Action object that will be created:

```js
console.log(addTodo('Write more docs'))
```

```js
{
  type: 'todos/add',
  payload: {
    text: 'Write more docs',
    id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
    createdAt: '2019-10-03T07:53:36.581Z'
  }
}
```


### Using information from Action objects in Reducer functions

A bit out of scope for this article, but i wanted to show _where and how_ the _type_ and _payload_ will be used:

This is the Action we are dispatching (basic form, foregoing action constants and action creators at the moment)

```js
// Dispatch an Action (inline)
dispatch({
  type: "ADD_TODO",
  payload: {
    text: "Build my first Redux app",
    status: "In Progress"
  }
});
```

And this is how we are using that dispatched information in the Reducer to update our Store

```js
// An example Reducer function responsible for updating state
function todoApp(state = [], action) {
  switch (action.type) { // applying changes based on action 'type'

    case ADD_TODO:
      return [...state, {
        text: action.payload.text, // using details from 'payload' that the action sent
        status: action.payload.status
      }]

    default:
      return state
  }
}
```

## Links

- [Redux: Actions](https://redux.js.org/basics/actions/)
- [Redux: Reducing Boilerplate](https://redux.js.org/recipes/reducing-boilerplate/)
- [Redux Toolkit: createAction()](https://redux-toolkit.js.org/api/createaction/)
