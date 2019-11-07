---
title: React Navigation in Functional Components
date: 2019-11-07

---


Set header title in stack navigator

```js
Component.navigationOptions = {
  headerTitle: 'Conversations'
}
```

or a callback function if you wanna use props

```js
Home.navigationOptions = () => {(
    title:'Home'
)}
```
Links
---

- [docs: navigationOptions](https://reactnavigation.org/docs/en/stack-navigator.html#navigationoptions-for-screens-inside-of-the-navigator)
- [Configuring the header bar](https://reactnavigation.org/docs/en/headers.html)