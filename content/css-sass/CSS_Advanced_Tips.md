---
title: Advanced CSS Tips
date: 2019-07-25
---

- You can target empty elemets with `:empty` pseudo-class. Not empty elements can targeted with `:not(:empty)`
- `calc()` and viewport units can give you a fully responsive deisgn in about 10 lines
- You can reset values with `unset`. For example, `background: unset` and it'll unset that style. Not supported in IE11 though

### `*-of-type` pseudo-class

```css
p:first-of-type {} /* first paragraph element */
img:last-of-type {} /* last image element */
blockquote:only-of-type {} /* first blockquote element */
article p:nth-of-type(odd) {} /* every odd element (1st, 3rd, 5th ..)*/
article p:nth-of-type(3n) {} /* every 3rd pargraph element */
article p:nth-of-type(4n+3) {} /* every 4th paragraph element starting at the third para*/
```

### `columns`

```css
nav {
	/*
	column-count: 4;
	column-wdith: 150px;
	*/
	columns: 4 150px; /* render up to 4 columns that are at least 150px wide */
	coumn-gap: 3rem /* gutter */
	column-rule: 1px dashed #ccc; /* the border between columns */
}

nav h2 {
	column-span: all /* take up all of the column width, break after */
}
```
- `column-span` isn't supported in Firefox for Android
- `column-fill: auto` beaks responsive design as it requires setting a fixed height


Links
---

- [MDN: columns](https://developer.mozilla.org/en-US/docs/Web/CSS/columns)
- [caniuse: CSS3 Multiple column layout](https://caniuse.com/#feat=multicolumn)