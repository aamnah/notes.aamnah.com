---
title: Drawing SVGs
date: 2019-07-23
---

NOTES:

- Keep stroke widths in even numbers (0, 2, 4, 6) to keep em sharp. Browsers draw lines in between pixels
- SVG coordinates are mapped to the _left_ of a pixel line and not in the middle. A single pixel line at (2, 1), your line will be drawn on half pixels resulting in blurred or anti aliased line. But if we offset it by 0.5 then it will be drawn in the middle, will fill the entire pixel and look sharp. Draw at (2.5, 1) instead.
- Draw on pixel boundries top keep it sharp, i.e. snap to pixel.
- You can use `shape-rendering=crispEdges` to disable browser anti-aliasing. 


Links
---
- [A Guide to Getting Sharp and Crisp SVG Images on Screen](https://vecta.io/blog/guide-to-getting-sharp-and-crisp-svg-images)
- [shape-rendering](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering)