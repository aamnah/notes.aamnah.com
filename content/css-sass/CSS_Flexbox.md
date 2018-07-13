---
title: Getting started with CSS Flexbox
date: 2017-11-04
---

tl;dr
---
- The widths and heights of flexboxes vary to adapt to the display space
- The display order of flex boxes is independant of their order in the source code
- Margins of adjacent flex items do not collapse
- Main axis = vertical = columns
- Cross axis = horizontal = rows
- All flex items on a line are equal height by default (the default for axis properties like `justify-content`, `align-content` and `align-items` etc. is `stretch`), and take the width of the content inside
- All flex items stay on the same line by default until unless you define `flex-wrap: wrap`. Without it, it'll overflow, but not wrap

### Why Flexbox
Why not percentages? Percentages are explicit dimensions, you're telling the browser one fix percentage. The button is always going to be 10%, no matter how big your TV is. Flexbox sizes elements by the size of their content. So the button will be the size of it's text. You can decide an initial size and then you can decide whether it should _grow_ (`flex: auto`) or _shrink_ (`flex: none`)
- Flexbox is great for aligning stuff. When you align items with `float`s, they wrap with their respective floats, what was floated to the right will wrap and still stay on the right of the next line, with all this empty space on it's left. It looks a bit weird. Consider meta info section of an article, you wan't everything right aligned on smaller screens but split on the same line when there is enough space. If you achieve the splitting part with floats, you get the wonky wrap issue. Flex is perfect here. `flex-wrap` wraps in the same direction of `flex-direction`. [example](https://youtu.be/_98SE8WUvLk?t=20m14s)
- You can add flex styles to existing layouts and they'll work. Flex will just take over and the old ones will become fallback


```scss
// AXIS
<-> justify-content
<-> flex-direction
^ align-items
^ align-self

// LINES
flex-wrap

// DIRECTIONS
order
flex-flow: flex-direction flex-wrap

// DIMENSIONS
min-width
min-height
flex: flex-grow flex-shrink flex-basis
```


Make an element a Flex container

```css
.container {
  display: flex; /* block-level container */
  display: inline-flex; /* inline-level container */
}
```

Every element inside a flex container automatically becomes a flex item.

## Direction

You determine direction with either the `order` or the `flex-direction` properties. Changing the direction moves the flex items **independent of their HTML source order**. 

```css
flex-direction: row (default) / row-reverse / column / column-reverse
order: 0 (default)
```

- Your **main axis** changes when you change direction. This is important to keep in mind when you are confused it didn't apply `justif-content` or `align-content`, you probably have the direction changed and the main axis has changed as a result
- `order` can also take negative values, e.g. `-3`
- changing the order/direction only changes the items visually. If you try to copy or highlight it (e.g. some text), it'll do it in the order the HTML source is, regardless of what order you have it showing in your flex layout

## Axis


`flex` determines the dimensions.

```css
flex: flex-grow flex-shrink flex-basis
flex: 1; /* all flex items will take one equal part */
```

If there isn't enough space, the size will be determined by the content inside.

- `flex-grow` = how much flex items will grow relative to other items if extra space is available (proportion of extra space that it gets)
- `flex-shrink` = how much item will shrink relative to others if there is not enough space (proportion of overflow that gets shaved off)
- `flex-basis` = the initial starting point before space is distributed (any standard width/height  value including `auto`)

```css
input {
  flex: 1 0 40%; 
  /*
  flex-basis: 40%; start field at 40% wide
  flex-shrink: 0; don't shrink smaller than starting value
  flex-grow: 1; give it 1 (equal) share of any available extra width on it's line
}
```

## `align-items` vs. `align-content`
`align-content` sets how multiple lines are spaced apart.

`align-content` determines the spacing between lines, while `align-items` determines how the items as a whole are aligned within the container. When there is only one line, `align-content` has no effect

- `align-items` interferes with flex items in a row while `align-content` interferes with rows themselves. `align-content` comes into play when you have `flex-wrap: wrap` defined and your items are _wrapped_ (i.e. are on multiple rows)
- `align-content` is for multi-line flex containers, it has no effect when flex items are on the same line. 
- `align-items` (cross-axis) is the opposite of `justify-content` (main-axis), it aligns flex items inside a flex container


## Examples

#### make all flex-items the same width

Give it a `flex` value. `flex` can take three values:  `flex-grow`, `flex-shrink`, `flex-basis`


```css
.el {
  flex: 1; /* Three values: flex-grow (number) | flex-shrink (number) | flex-basis (width/height)*/
}
```

- Flexbox form (that is two fields wide on bigger screen but 1 field wide on smaller ones, should take about 5 lines of CSS code)
- First link flush left, last link flush right, equal space in between (a regular nav bar). Easy peasy with flex

Links
---
- [Game: Flexbox Froggy](http://flexboxfroggy.com/) from the creator of Grid Garden
- [MDN: Using CSS Flexible Boxes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
- [YouTube: Flexbox CSS In 20 Minutes](https://www.youtube.com/watch?v=JJSoEo8JSnc) to-the-point and well explained, without confusing you with un-necessary details
- [YouTube: What the Flexbox!](https://www.youtube.com/watch?v=Vj7NZ6FiQvo&list=PLu8EoSxDXHP7xj_y6NIAhy0wuCd4uVdid) over-explained, the whole course could have been done in 30 mins max instead of a 20-part series.
- [MDN: CSS Flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
- [YouTube: CSS-Tricks Screencast #131: Tinkering With Flexbox](https://www.youtube.com/watch?v=tge9YQDAasc)
- [YouTube: CSSconf 2015 | Zoe M. Gillenwater: Enhancing Responsiveness With Flexbox](https://www.youtube.com/watch?v=_98SE8WUvLk) Plenty of well-explained examples
- [StackOverflow: What's the difference between align-content and align-items?](https://stackoverflow.com/questions/27539262/whats-the-difference-between-align-content-and-align-items)
- [Codepen: Flexbox Visuals](https://codepen.io/aamnah/pen/eegyQP)