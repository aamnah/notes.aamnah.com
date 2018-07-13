---
title: Cracking responsive web typography
date: 2017-11-14
---

I have been meaning to create a responsive typography template that i could just plug in as a sass partial for my projects.

## NOTES
- Increase `font-size` and `line-height` for body copy as screen size increases
- _Vertical rhythm_ is the practice of using `line-height` of body copy as the base for a consistent vertical rhythm. You use multiples of line-hight for margins and paddings and multiples of base line-height for all text elements
- Keeping `line-height` unit-less (e.g. 1.4 instead of 26px) is best practice
- Use margins on either top or bottom, not both, to avoid collapsing margins. Pick one. I prefer setting `margin-top: 0` and then adding `margin-bottom` wherever i want white space



```css

html {
  margin-top: 0
  
font-family: Lato, Helvetica, Arial, sans-serif
}

h1, h2, h3, h4, h5, h6, p, ul, ol {
  margin-top: 0;
}
```

Good fonts

Body copy

- Source Sans Pro (top picked because easy to distinguish between the three different letters in _iIl_)
- Open Sans
- Lato 

Headings

- Ubuntu


Links
---
- [Everything I know about Responsive Web Typography](https://zellwk.com/blog/responsive-typography/)
- [The Lazy Person’s Guide to Responsive Typography](https://webdesign.tutsplus.com/tutorials/the-lazy-persons-guide-to-responsive-typography--cms-22822)