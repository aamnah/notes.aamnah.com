---
title: CSS Positioning
subtitle: Change an element's default position (static) to move it in and out of the _normal flow_ and away from the borders using _offset properties_
date: 2017-04-16
 
---
tl;dr
---
- `relative` elements are positions with reference to their original position in normal flow, without affecting other elements. The offset is from it's normal position in the document
- `absolute` elements are positioned with reference to their containing elements (or the closest _positioned_ i.e. relative/absolute/fixed parent). The offset is from parent element.
- `fixed` elements are positioned with reference to the _viewport_ (it'll stay in place in the viewport when you scroll). The offset is from the viewport window

| Value | Description |
|--------|-----------------|
| static | A normal box laid out according to normal flow (because normal flow is the default positioning scheme, you will rarely have to specify this value). || relative | The box is positioned according to the rules of normal flow and is then offset **relative to the normal position** (any subsequent boxes are calculated as if the box were not offset). || absolute | The box’s position is determined using offsets from the top, left, bottom, or right of the **containing block**. These boxes are removed from normal flow, and while child elements will be positioned within this containing box, there is no impact on the layout of sibling elements. || fixed | The box’s position follows the same model as absolute positioning, but it will be fixed to some point within the page or screen, and will not move when the user scrolls the page. |
---


- CSS treats each HTML element as it's own box which is usually referred to as the **CSS Box Model**
- **Block-level** elements automatically start on a new line (think headings, paragraphs and divs)
- **Inline elements** sit within surrounding context (think images and spans)
- The default layout of elements in this way is called the **normal flow** of a document, but CSS offers the position property to override it.
- Setting a **position** (`relative`, `absolute`, `fixed`) allows you the use of offset properties (`top`, `bottom`, `left`, `right`). In other words, you need to set a position (other than default static) first in order to adjust it's position in the viewport using offset property values.
- **Offset properties** are `left`, `right`, `bottom` and `top`. They let you move the element **away** from it's normal position. Offset properties only work on positioned elements (non-static)
- Offset properties move the element _away_ from it's current position in normal flow. So if you do `left: 10px;`, it'll essentially move the item 10px to the right. Similarly `bottom: 25px;` will move the item 25px up.


### position
When an element is referred to as a **positioned element**, it means that its position has been changed from being static, to one of four available values: relative, absolute, fixed, sticky.

Once an element has been positioned (given a non-static value), its position on the page is determined using the _offset properties_: top, right, bottom, and left.

- static (default)
- relative
- absolute
- fixed
- sticky

| value | positioning | stays in normal flow | allows offset properties |
|-------|---|----------------------|----------------------------|
| static | default | yes | no |
| relative | relative to its current position, acts as an anchor point for absolutely positioned elements | yes | yes |
| absolute | locks the element in place relative to it's _positioned_ parent | no | yes |
| fixed | locks the element to the browser window (viewport) | no | yes |

### relative
- When the position of an element is set to `relative`, it allows you to specify how CSS should move it _relative to its current position_ in the normal flow of the page
- It pairs with CSS offset properties of `left` or `right`, and `top` or `bottom`
- Offset properties say how many pixels, percentages, or ems to move the item away from where it is normally positioned
- Acts as an anchor point for absolutely positioned elements

```css
p {
  position: relative;
  bottom: 10px;
}
```

### absolute
- Absolute locks the element in place relative to it's _positioned_ parent element
- If you forgot to add a `position: relative;` to it's intended parent, the browser will keep looking up the chain and ultimately default to the body tag
- Removes the element from normal flow (is no longer contained), so the surrounding elements ignore it
- Absolute elements are no longer block elements. The size of the element is determined by it's content. If you want it to be a certain size, you have to explicitly define the size

```html
<div style="position: relative; padding: 1em; background: plum">
  RELATIVE
</div>

<div style="position: absolute; padding: 1em; background: salmon">
  ABSOLUTE
</div>
```

- Absolutes (`absolute` and `fixed`) elements can not be contained. Since absolute elements move out of the normal flow, it'll look like the relative parent disowned the absolute child (For example, the padding for a parent `relative` element will not wrap around a child `absolute` element, the absolute element will not be _contained_ inside the relative) TIP: You can add height/width to the parent element to make it look like it is containing the child.

```html
<div style="position: relative; padding: 1em; background: rgba(0,255,255, .5);">
  <div style="position: absolute; padding: 1em; background: rgba(221,160,221, .5);">
    ABSOLUTE inside a relative parent element
  </div>
</div>

<div style="position: relative; padding: 1em; background: rgba(70, 130, 180, .5);">
  <div style="position: fixed; padding: 1em; background: rgba(102, 51, 153, .5);">
    FIXED inside a relative parent element
  </div>
</div>
```

### fixed

- Fixed is a type of absolute positioning that locks the element relative to the browser window
- Unlike absolute elements, fixed elements won't move when the user scrolls. Meaning, if you fixed something to the top, it'll always be in the top of viewport even if you scroll. (_click to top_ buttons are an example, they are usually fixed in bottom right)
- Other elements don't 'realize' where fixed items are positioned, which may require some layout adjustments elsewhere. Meaning, they won't move to give space to your fixed element. (For example, if you fixed a navbar to top, it'll cover the header, because the header didn't move. You'll have to adjust the header in order to move it away from the navbar)
- Fixed elements are no longer block elements. The size of the element is determined by it's content. If you want it to be a certain size, you have to explicitly define the size

| relative | absolute | fixed |
|----------|-----------|-------|
| acts as **anchor point** for absolutely positioned (both absolute and fixed) elements | positioned relative to the closest `relative` positioned parent element | positioned relative to the closest `relative` or `absolute` positioned parent element |
| | sticks to the **document** | sticks to the **viewport** |
| | **moves with the document** when you scroll | **stays in place** when you scroll |
| stays in the normal flow | breaks normal flow | breaks normal flow | 
| Block elements, take up full width of the containing element | size determined by content, unless explicitly defined | size determined by content, unless explicitly defined |


### absolute vs. fixed

- Absolute stays in place in the _document_, while fixed stays in place in the _viewport_
- Absolute is positioned relative to the nearest _relative_ parent element in the document, while Fixed is positioned relative to the nearest _positioned_ (either relative or absolute) parent element
- `absolute` and `fixed` are both absolutes. (fixed is a type of absolutely positioned elements). Absolutes (both absolute and fixed) are positioned relative to the closest parent `relative` element, while `fixed` are positioned relative to the closest _positioned_ (absolute or relative) parent element

When using offsets to move elements, it only moves the element you targeted, the rest stay in place. So even though elements are positioned relatively, they **don't move relatively**, they stay in their places in the document where they occurred.

Links
---
- [MDN: position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [cssreference.io - positioning](http://cssreference.io/positioning/)
- [Codrops CSS Reference - position](https://tympanus.net/codrops/css_reference/position/)
- [FCC - Applied Visual Design: Change an Element's Relative Position](http://beta.freecodecamp.com/en/challenges/applied-visual-design/change-an-elements-relative-position)
- [CSS-Tricks: Absolute, Relative, Fixed Positioning: How Do They Differ?](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/)
- [YouTube: Advanced CSS Tutorial - Tricky CSS Properties](https://www.youtube.com/watch?v=1haoknb4m6k)
