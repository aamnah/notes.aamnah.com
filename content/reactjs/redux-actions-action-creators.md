---
title: Actions and Action creators in Redux
date: 2019-11-29
---

Action is an object. So whenever you dispatch actions, you'd have to give `dispatch()` an action object (with the _type_ that we are expecting), like so:

```js
dispatch({ type: 'DECREMENT' })
```

If you don't save it like so

```js
const DECREMENT = 'DECREMENT'
```

you are 

- prone to typos and spelling errors
- you wouldn't know which _types_ exist because they haven't been saved before hand (and so it wouldn't autocomplete either)
- the next time you want to change an action type, you'd have to change it in place everywhere it's used. If you save it as a contant, then you only update the constant in one place