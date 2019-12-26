---
title: Notes on React Hooks
date: 2019-12-17
---

> A Hook is a special function that lets you “hook into” React features. 

Basically, they are just functions with a fancy name that can do _React stuff_, like updating state..

- `useState()` does _NOT_ merge old and new state together (unlike `this.setState`). With the `useState` hook you basically overwrite the previous .
  - unlike `this.setState` in a class, updating a state variable always _replaces_ it instead of merging it.
- `useEffect()` is for side effects (data fetching, API calls, manually changing the DOM etc.)
   - By default `useEffect()` is run on every render (including first render)
   - You can change that by passing it an array as second argument, containing parts of state or props that you want to monitor, so that it only runs again if any of that state/prop change. For example `[count]`
   - If you pass an empty array `[]` as second argument, it'll only run once (on mount and unmount). This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.
   - Effects are declared inside the component so they have access to its props and state. Placing `useEffect` inside the component lets us access the _state_ variables (or any _props_) right from the effect because they're in _scope_. 
   - it combines `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in a single API (reducing code duplication as a result. previously you'd do the same thing in `componentDidMount` and `componentDidUpdate`)
   - There are two common kinds of side effects in React components: those that don’t require cleanup, and those that do.
   - If you _return a function_ inside your Effect, it'll be treated as _cleanup_ after the effect, i.e. equivalent of `componentWillUnmount`. For example, you may want to unsubscribe from something as part of the cleanup
   - it is important to clean up so that we don’t introduce a memory leak!
   - This function we pass to `useEffect` _is_ our effect.
   - It cleans up the previous effects before applying the next effects. 
- In the future, React Hooks are _not be intended for data fetching_ in React. Instead, a feature called *Suspense* will be in charge for it.

### Custom hooks

> If a function’s name starts with ”use” and it calls other Hooks, we say it is a custom Hook. 

It's just a function (with the `useSomething` naming convention) that calls other Hooks