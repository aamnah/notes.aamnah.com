---
title: Inter-unit CSS calculations
date: 2019-01-01
---

`calc()` works for

- `px` and `rem`
- `%` and `px`
- `%` and `em`
- `vw` and `px`

```scss
// Convert Pixels to Ems
// (px / base-size) * 1em
// multipley by 1em is to cnvert unit to em

padding: (40px / 16px) * 1em
```

```css
.container {
  width: calc(100vw - 80px);
}

.container {
  width: calc(100% - 1em);
}

.container {
  width: calc(100% / 6);
}
``