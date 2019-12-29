---
title: Modern React Redux in 2020 with Hooks and Toolkit
date: 2019-12-27
---

If you're new to Redux, i highly suggest you start with using Redux Toolkit (`@reduxjs/toolkit`). This makes things simple and takes away a lot of boilerplate. If you then want to understand what is happening under the hood, or having difficulty understanding a particular Redux concept, only then go to the original Redux docs and figure out the details.


- Hooks: `useSelector()` and `useDispatch()` (`react-redux` v7.1.0+. Previously you had to wrap your components in `connect()`)
- Redux Toolkit: `createSlice()`, `createAction()`, `configureStore()`

> Redux Toolkit is just Redux with opinions and helper functions

No more `mapStateToProps`, `mapStateToProps` (both are _Redux only_, `react-redux` will give you `connect()` to handle both), action creators

`useDispatch` prevents us from using `mapDispatch` and `connect`

```js
useDispatch(fetchPokemonNames())

const {pokemonTeam, favoritePokemon} = useState(state => state.pokemonTeam) // get the pokemonTeam array and favoritePokemon array from state
```


Redux Toolkit comes with Redux DevTools built-in and pre-configured


```js
// basic Store without any middleware
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './root-reducer'

const store = () => configureStore({
  reducer: rootReducer
})

export default store
```

## Actions

With `createAction()` you no longer need action constants and action creators..

```js
const INCREMENT = 'counter/increment'

function increment(amount) {
  return {
    type: INCREMENT,
    payload: amount
  }
}
```

```js
const action = increment(3)
// { type: 'counter/increment', payload: 3 }
```

would become this

```js
const increment = createAction('counter/increment')
```

```js
let action = increment()
// { type: 'counter/increment' }
action = increment(3)
// returns { type: 'counter/increment', payload: 3 }
```