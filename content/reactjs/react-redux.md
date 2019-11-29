---
title: Using Redux with React
date: 2019-11-29
---

The plan:

- Create a race condition to justify the use of Redux and Redux Saga
- Learn Redux and React-Saga along the way

## NOTES:

1.

> You can not make API calls and routing transitions inside a `reducer`

This! This basically means **you are bound to use some third party library to handle updating state with data returned by the API calls**, hello `middleware`! You must use something like `redux-thunk` or `redux-saga`, there is no two ways about it. Beccause:

- i can't imagine a React app that doesn't make an API call. React is just the _View_. The data always comes in from somewhere else.
- we can't make API calls in reducers, and reducers update state..

2.

- State is an `{}`
- Action is an `{}`
- Reducer is a pure `()`

3.

- Redux will only give you _global_ state that is still _local_. It will not persist. You refresh the browser and the state is gone

### Redux with React

```bash
npm i redux react-redux @types/react-redux
```

This is all you need to do in order to get started

1. Create a `store`
2. Create a `reducer`
3. Wrap your App in a `<Provider>` component to be able to access the store from anywhere in the app

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const rootReducer = (state = {}, action: {}) => {
  return state
}

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

You need to do the following setup once in order to use Redux inside your react app

#### Create a global `store`

We need `createStore()` from `redux` in order to cerate a store.

```jsx
import { createStore } from 'redux`

const store = createStore(reducer)
```

#### Create a `reducer`. We need at least one to get started

```
(previousState, action) => newState
```

> The reducer is a pure function that takes the previous state and an action, and returns the next state.

```js
const reducer = (state = {}, action: {}) => {
  return state
}
```

#### Use the store inside the App

Then we'll use the `<Provider>` component and wrap our entire app inside it. This will make the entire app (i.e. wherever we want to use values from the store) be able to access the store. `<Provider>` will take a `store` property.

```jsx
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

### Actions

Actions are what tell you what to change in state. The `reducer` will then change the state based on whatever action was given. You can either write an `if` statement or a `switch`. Convention is to use switch cases.

```js
const rootReducer = (state = {}, action: {}) => {
  return state
}
```

will become

```js
const rootReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case 'INCREMENT':
      // do something
      return { count: state.count + 1 }
    case 'DECREMENT':
      // do something
      return { count: state.count - 1 }
    default:
      return state
  }
}
```

Action is just an object. `type` is by convention, you can call it whatever, and it doesn't necessarily have to be a string, but that's also convention.

### Use stuff from the store

Now comes the fun part, and the part that Redux has improved on, managing the state using _hooks_

- `useDispatch()` - dispatch an action
- `useSelector()` - selects relevant parts of the state object, takes a callback

```js
const count = useSelector((state: any) => state.counter) // this will give you just the `count` property from the state
const dispatch = useDispatch() // this will let you send actions

dispatch({ type: 'DECREMENT' })
```

Action is an object. So whenever you dispatch actions, you'd have to give `dispatch()` an action object (with the _type_ that we are expecting)

## Links

- [Instagram API](https://developers.facebook.com/products/instagram/)
- [Behance API](https://www.behance.net/dev/api/endpoints/)
- [Github API](https://developer.github.com/v3/)
- [Using Redux with TypeScript](https://redux.js.org/recipes/usage-with-typescript)
