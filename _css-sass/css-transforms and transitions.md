---
layout: post
title: CSS Transitions and Transforms
ctime: 2017-03-20
---

# Transforms
`transform` lets you modify the visual appearance (coordinate space) of css elements. Elements can be `translated`, `rotated`, `scaled`, and `skewed`

## Examples

### Scale (resizes elements)
Scale the `.box` by increasing it 20 times it's original size. Value is in **percentage**

```css
.box {
  width: 20px;
  height: 20px;
  transform: scale(20);
}
```
### Translate (moves elements)

### Skew

### Rotate

center an element

```scss
/* center the element */
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
```

Links
---

- [MDN: transform](https://developer.mozilla.org/en/docs/Web/CSS/transform)