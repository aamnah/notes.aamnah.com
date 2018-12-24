---
title: Redux Intro
categories: 
  - Redux
date: 2016-11-29
lastmod: 2016-12-04
---

# Redux
- Single state tree
- Actions describe updates
- Reducers apply updates

1. _Everything_ that happens in your app is an **action**. These can be caused by users, browser events, or server events. Doesn’t matter. Everything that changes something in your app does it via an “action”.

2. You have one giant state object that represents _all_ the state in your app. These are not special Models, or Collections, it’s just friggin’ objects, arrays, and primitives. No magic.

3. You write **reducers** for everything that changes state. Are you familiar with the `[].reduce()` method of an array? If not, go read this. But a `reduce` function gets a starting state, the current value and returns the new state. That’s exactly what we want to do in response to actions. We get the starting state, the current action, and we return the new state.

## Why redux?
http://stackoverflow.com/questions/38283507/redux-actions-reducers-vs-directly-setting-state

Links
---
- [YouTube: Dan Abramov - The Redux Journey at react-europe 2016](https://www.youtube.com/watch?v=uvAXVMwHJXU)
- [What the Flux? Let's Redux](https://blog.andyet.com/2015/08/06/what-the-flux-lets-redux/)