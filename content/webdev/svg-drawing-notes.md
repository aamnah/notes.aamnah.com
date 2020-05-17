---
title: Drawing SVGs
date: 2019-07-23
lastmod: 2020-05-17
---

###  Notes on keeping SVGs crisp

- Keep stroke widths in even numbers (0, 2, 4, 6) to keep em sharp. Browsers draw lines in between pixels
- SVG coordinates are mapped to the _left_ of a pixel line and not in the middle. A single pixel line at (2, 1), your line will be drawn on half pixels resulting in blurred or anti aliased line. But if we offset it by 0.5 then it will be drawn in the middle, will fill the entire pixel and look sharp. Draw at (2.5, 1) instead.
- Draw on pixel boundries top keep it sharp, i.e. snap to pixel.
- You can use `shape-rendering=crispEdges` to disable browser anti-aliasing. 

### viewBox, height and width

Here's the simplest SVG, a box

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="lightseagreen"/>
</svg>
```

- Default `height` and `width` values are `auto` which is treated as `100%`. If you don't specifically give `height` and `width` values to the SVG, it'll assume 100%. This gives you a responsive SVG which will take up entire available space. 
- If there is no containing element for the SVG, it will take up the entire screen, even if the value is of the `viewBox` is `0 0 32 32`. If it's in a 64px container element, the SVG will be 64px.
- If height and width have fixed values, say 32px, the SVG will remain that size instead of taking up entire space, i.e. a non-responsive SVG
- `viewBox` value does not have to match the height/width value. they don't have to be the same SVG

```
viewBox = <min-x> <min-y> <width> <height>
```

```xml
<!-- RESPONSIVE SVG -->
<svg viewBox="0 0 460 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="lightseagreen"/>
  <rect x="120" width="100" height="100" rx="15" fill="salmon"/>
  <rect x="240" width="100" height="100" rx="15" fill="plum"/>
  <rect x="360" width="100" height="100" rx="15" fill="palevioletred"/>
</svg>
```

```xml
<!-- FIXED SIZE SVG -->
<svg viewBox="0 0 460 100" width="460" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="lightseagreen"/>
  <rect x="120" width="100" height="100" rx="15" fill="salmon"/>
  <rect x="240" width="100" height="100" rx="15" fill="plum"/>
  <rect x="360" width="100" height="100" rx="15" fill="palevioletred"/>
</svg>
```

- A responsive SVG will try to fit in the container's size, but if the container is too small SVG will overflow
- The containing element will determine the size of the SVG

```html
<!-- CONATINED SVG -->
<div style="width: 64px; height: 64px">
  <svg viewBox="0 0 460 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Simple rectangle -->
    <rect width="100" height="100" fill="lightseagreen"/>

    <!-- Rounded corner rectangle -->
    <rect x="120" width="100" height="100" rx="15" fill="salmon"/>

    <!-- Rounded corner rectangle -->
    <rect x="240" width="100" height="100" rx="15" fill="plum"/>

    <!-- Rounded corner rectangle -->
    <rect x="360" width="100" height="100" rx="15" fill="palevioletred"/>
  </svg>
</div>
```

Links
---
- [A Guide to Getting Sharp and Crisp SVG Images on Screen](https://vecta.io/blog/guide-to-getting-sharp-and-crisp-svg-images)
- [shape-rendering](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering)
- [SVG Viewport and viewBox (For Complete Beginners)](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844)