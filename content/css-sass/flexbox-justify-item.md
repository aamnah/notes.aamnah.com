---
title: Justifying items to the right in Flexbox
date: 2019-07-25
---

- There appears to be no way of justifying a single flex-item to the right
- There is `justify-content`, which juystifies _all_ flex items inside a container
- There is a CSS property called `justify-self` which can take values such as `start` and `end`, but it is ignored in flexbox and table cell layouts
- You can't `float` inside a flex container because the property does not apply to flex boxes
- If two flex items are on the same level, you can use `justify-content: space-between` to move one to the left and the other to the right
- `justify-content: space-between` only works if there is enough space to move around items, meaning if it is not working for you, check the width of the parent container

Links
---

- [MDN: Box alignment in Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox)
- [MDN: justify-self](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)
