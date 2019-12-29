---
title: Creating a ToDo app using Redux Toolkit and React Redux Hooks
date: 2019-12-29
category: 'Weekend Project'
---


Add todo item

```js
import { createAction } from '@reduxjs/toolkit'
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

```js
import { useDispatch } from 'react-redux'

useDispatch(addTodo('Write more docs'))
```

Links
---
- [Redux Toolkit (RTK)](https://redux-toolkit.js.org/tutorials/basic-tutorial)
- [React-Redux: Hooks](https://react-redux.js.org/next/api/hooks)