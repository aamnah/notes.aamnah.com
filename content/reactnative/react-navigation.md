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
`headerTitle` is a property that is specific to _stack navigator_. The alternative is `title`. `headerTitle` will default to `title` in other navigators.

or a callback function if you wanna use params (e.g. username in title)

```js
Home.navigationOptions = ({ navigation }) => {(
    title: navigation.getParam('otherParam', 'A Nested Details Screen'),
)}
```

Links
---

- [docs: navigationOptions](https://reactnavigation.org/docs/en/stack-navigator.html#navigationoptions-for-screens-inside-of-the-navigator)
- [Configuring the header bar](https://reactnavigation.org/docs/en/headers.html)
