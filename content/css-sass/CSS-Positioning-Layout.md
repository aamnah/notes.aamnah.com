---
title: CSS Layout Models
date: 2017-10-22
---

- The _Box Model_ treats every element as if it were in a box. You can _position_ these boxes on the page

- A `float` (also referred to as a *floated* or *floating box*) is a box that is taken out of normal flow and moved to the *far left or right* of the containing box, yet still allows content to flow alongside it (although you can prevent text from flowing alongside it using the `clear` property).
- You *must* specify the `width` for a floating box; otherwise, it will automatically take up the full width of the containing box.
- Vertically, the floated box is aligned with the top of the containing box or the current line box
- Sometimes you will want to float an element to the left or right, but not have any text wrap around the floated item.  You can prevent anything from appearing next to a floated box using the `clear` property.
- This property is used on any box that appears after the floated element, and indicates **which sides may not touch the floated box**. For example, giving the box following a float a clear property whose value is left means that the box cannot touch the left-hand side of the floated element

## Box Model

- Everything is a box.
- There is `content-box` which is default and there is `border-box`. [video: how the box gets it's size](https://youtu.be/1haoknb4m6k?t=3m45s) 
- Content box accounts for the content. The size is determined by the content, and margins, paddings and borders would extrude out of that size
- Border box calculates the set size as a sum of content+padding+border, and the margin than extrudes out. 

- In `border-box`, the `border` sets the size. Everything inside the border is going to be the space it takes, plus any margins


```
content-box = content
border-box = content + padding + border
``` 

```css
/* Content Box */
.box {
  width: 100px;
  padding: 20px;
  border: 1px solid black;
  margin: 5px;
  /* The actual size this box will take will not be 100px as you set the width to,
  it'll be 152px (width + padding + border + margin)*/
}
```

```css
/* Border Box */
.box {
  box-sizing: border-box;
  width: 100px;
  padding: 20px;
  border: 1px solid black;
  margin: 5px;
  /* The actual size this box will take will not be 100px as you set the width to,
  it'll be 110px (width + margin) */
}
```


Links
---
- [Accessible XHTML and CSS Web Sites by Jon Dockett]()
- [YouTube: Advanced CSS Tutorial - Tricky CSS Properties](https://www.youtube.com/watch?v=1haoknb4m6k)