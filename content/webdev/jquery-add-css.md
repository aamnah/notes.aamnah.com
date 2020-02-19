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

If you want hover styles, you'll combine `.css()` with `.hover()`

```js
$("div.myclass").hover(function() {
  $(this).css("background-color","red")
});
```

```js
$(".myclass, .myclass2").hover(function(e) {
    $(this).css("background-color",e.type === "mouseenter"?"red":"transparent")
})
```

Links
---
- [jQuery: .css()](https://api.jquery.com/css/)
- [StackOverflow: How to define the css :hover state in a jQuery selector?](https://stackoverflow.com/a/21051467)