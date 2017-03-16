# Middleware

**middlewares** intercept actions, modify them, or cancel them by not calling any of the next middleware.

Basically, middleware happens between dispatching an action, and the moment it reaches the reducer.


```javascript
// Create a middleware
// Logger
const logger = store => next => action => {
  console.log('action fired', action)
  next(action)
}

// Apply middleware
const middleware = applyMiddleware(logger)

// create the store, pass it the middleware along with reducers and state
const store = createStore(reducer, 1, middleware)
```

You're probably never gonna create middleware, you'll just npm install them. For example, `redux-logger` gives you very nice console logs about state changes. `redux-thunk` is another one that let's you send multiple `dispatch()` functions asynchronously

## Async Functions with `redux-thunk`

```javascript
import thunk from `redux-thunk`

const middleware = applyMiddleware(thunk)
const store = createStore(reducer, 1, middleware)

store.subscribe(() => {
  console.log('store changed', store.getState())
})

store.dispatch((dispatch) => {
  dispatch({type: 'INC'})
  dispatch({type: 'FOO'})
  dispatch({type: 'BAR'})
  dispatch({type: 'DEC'})
  dispatch({type: 'BAZ'})
  dispatch({type: 'DEC'})
  dispatch({type: 'E'})
})
```

All the dispatch function above will be called async. Multiple actions are happening with one single action.

```javascript
// Send actions
store.dispatch({type: 'INC'})
store.dispatch({type: 'FOO'})
store.dispatch({type: 'BAR'})
store.dispatch({type: 'DEC'})
store.dispatch({type: 'BAZ'})
store.dispatch({type: 'DEC'})
store.dispatch({type: 'E'})
```

will become

```javascript
store.dispatch((dispatch) => {
  dispatch({type: 'INC'})
  dispatch({type: 'FOO'})
  dispatch({type: 'BAR'})
  dispatch({type: 'DEC'})
  dispatch({type: 'BAZ'})
  dispatch({type: 'DEC'})
  dispatch({type: 'E'})
})
```

Links
---
- [Docs: Middleware](http://redux.js.org/docs/advanced/Middleware.html)
- [YouTube: Redux Middleware Tutorial](https://www.youtube.com/watch?v=DJ8fR0mZM44)

