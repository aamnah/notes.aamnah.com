---
title: The case for Redux 
date: 2019-12-03
---

Why Redux? In no particular order

1. Redux has [DevTools](https://github.com/zalmoxisus/redux-devtools-extension)
2. Redux has [react-native-debugger](https://github.com/jhen0409/react-native-debugger) for React Native
3. Redux has been around since 2015, has been stable, and is battle tested for heavy state
4. Redux is probably used in all _legacy_ applications (i.e. anything before 2018..) and you'll probably have to maintain that code
5. Redux is not _just React_. It works in other places too, like Angular..


Why not?

- Very verbose
- With _React Suspense_ and `useReducer` you can get the middleware functionality like making API calls and the actions and `dispatch()` inside React by default
- You can get DevTools for React's built-in state in a (hacky workaround) way