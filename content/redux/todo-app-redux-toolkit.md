---
title: Creating a ToDo app using Redux Toolkit and React Redux Hooks
date: 2019-12-29
category: 'Weekend Project'
---

## The APIs we're gonna use

`@reduxjs/toolkit` has these 4 functions to make your dev life easier

```js
configureStore() // wraps createStore() + DevTools + Middleware (redux-thunk)
createAction() // Creates an Action creator by taking an action type. Generated function takes a single argument that becomes action.payload
createReducer() //
createSlice()
```

And `react-redux` has these 2 _hooks_ that we'll use

```js
useSelector() // lets you extract data from the Redux store state, using a selector function
useDispatch() // lets you dispatch Actions
```

And in React we'll use hooks too

```js
useState() // handling 'local' component state
useEffect() // lifecycle events and side effects
```

## What Store (i.e. our app state) is going to look like

```js
// State tree
{
  todos : [
    {
      id: v4(), // import v4 from 'uuid/v4'
      createdAt: new Date().toISOString()
      title: 'Create a React todo list app'
      description: 'Use redux toolkit and react-redux hooks' // optional
      status: 'In Progress' // 3 Statuses total: Done, In Progress, Pending
      list: 'Dev'
    },
    {},
    {}
  ],
  lists: [
    {
      id: v4(),
      createdAt: new Date().toISOString()
      title: 'Dev'
      description: 'Code and development related tasks' // optional
    },
    {},
    {}
  ],
  filters: [ // ?
    {
      title: 'Done'
    }
  ]
}
```

```js
// Actions
todos/add
todos/update
todos/remove
```

Create reducers first, Actions next. With `createReducer()` you can actually pass the `createAction()` directly and make creating the reducer and action a single step.

## Redux

Add todo item

```js
import { createAction } from '@reduxjs/toolkit'
import v4 from 'uuid/v4'

const addTodo = createAction("todos/add", function prepare(title, description, status = 'Pending', list) {
  return {
    payload: {
      id: v4(),
      createdAt: new Date().toISOString()
      title,
      description,
      status, // unless you allow setting a status when creating a todo, this is going to be 'Pending' by default
      list
    }
  };
});
```

```js
import { useDispatch } from 'react-redux'

useDispatch(addTodo('Write more docs'))
```

Links
---
- [Redux Toolkit (RTK)](https://redux-toolkit.js.org/tutorials/basic-tutorial)
- [React-Redux: Hooks](https://react-redux.js.org/next/api/hooks)