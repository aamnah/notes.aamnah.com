---
title: 'Check browser support with `supports`'
date: 2019-10-24
---

- `@supports` let's you check for browser support for a particular declaration/property.
- The browser must support `@supports` in order for it to work.
- You can use `@supports` as well as `@supports not`

```css
@supports (display: grid) {
  div {
    display: grid;
  }
}
```

```css
@supports not (display: grid) {
  div {
    float: right;
  }
}
```



Links
---

-[MDN: @supports](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)