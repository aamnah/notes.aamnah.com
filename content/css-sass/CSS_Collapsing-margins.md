---
title: CSS Margins Collapsing and how to deal with them
date: 2017-10-22
---

tl;dr
---
- Vertical margins between adjacent boxes (elements) collapse. The bigger value of the two margins is applied

---

> Collapsing margins happen when two vertical margins come in contact with one another. If one margin is greater than the other, then that margin overrides the other, leaving one margin.

.

> The `top` and `bottom` margins of blocks are sometimes combined (collapsed) into a single margin whose size is the largest of the individual margins (or just one of them, if they are equal), a behavior known as margin collapsing. Note that the margins of floating and absolutely positioned elements never collapse.

Solution is simple: apply margins in only one direction. Personally i use `margin-bottom` because it makes more sense to me

```
h1, h2, h3, h4, h5, h6, p {
  margin-top: 0;
  margin-bottom: 1em;
}
```


Links
---
- [MDN: Mastering margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- [CSS-Tricks: What You Should Know About Collapsing Margins](https://css-tricks.com/what-you-should-know-about-collapsing-margins/)