---
title: Modern React Redux in 2020 with Hooks and Toolkit
date: 2019-12-27
---

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