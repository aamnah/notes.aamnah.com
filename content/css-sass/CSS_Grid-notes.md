---
date: 2018-04-18
title: Notes on CSS Grid
---

```scss
display: grid;
grid-template-columns: repeat(12, 1fr); /* repeat this pattern 12 times, i.e. 12 columns of 1fr width */
grid-gap: 1rem;
```

- `grid-gap` has been renamed to `gap` in the spec

```scss
grid-template-columns: 10% 2fr 3fr; /* first column is 10%, second and third are 2fr and 3fr of the remaining width */
```

```scss
.col-4 {
  grid-column: span 4; /* span 4 columns of the grid */
}
```


You can set defaults for when your grid overflows, i.e. when there needs to be more rows than what you originally defined

```scss
.grid {
  grid-auto-rows: 200px; /* all extra rows should be 200px */
  grid-auto-columns: 100px; /* all extra columns should be 100px */
  
/* the values could be em, px, whatever as well as `min-content` and `max-content` */
}

```

Links
---
- [YouTube: CSS Grid: Moving From CSS Frameworks To CSS Grid (2018 and beyond)](https://www.youtube.com/watch?v=paMmgo4MhQ8)