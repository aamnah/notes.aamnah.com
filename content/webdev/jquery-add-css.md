---
title: Adding CSS using jQuery
date: 2020-02-18
---

You can add a style using `.css()`

```js
jQuery("#popularUsersContainer").css("max-height", "360px")
```

You can also pass it a styles object (like a React Native stylesheet object) if you want to add multiple values

```js
let containerStyles = {
  maxHeight: `${containerHeight}px`,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  overflow: 'hidden'
};

jQuery("#popularUsersContainer").css(containerStyles)
```