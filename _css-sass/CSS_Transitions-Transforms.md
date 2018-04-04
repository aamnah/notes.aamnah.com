---
layout: post
title: CSS Transitions and Transforms
description: Transitions allows property changes in CSS values to occur smoothly over a specified duration.
date: 2017-03-20
---

# Transitions

- Transitions allow you to _smoothly_ transition to a state change.
- The transition is applied to the parent, e.g. on `span` instead of `span:hover`
- The format is `transition: property duration timingFunction delay`
- Not all CSS properties are animatable. Here's a list of [CSS that you can animate](https://developer.mozilla.org/en-US/docs/CSS/CSS_animated_properties) 
- Timing functions define the _acceleration/speed of a transition_
- Timing functions are many `ease`, `ease-in`, `ease-out`, `ease-in-out`, `linear`, `step-start`, `step-end`. Then there are more advanced ones like `steps`, `cubic-bezier` and `frames`. You can specify multiple functions as a comma separated list

Shorthand

```css
/* transition: property duration timingFunction delay */
transition-delay: 0s
transition-duration: 0s
transition-property: all
transition-timing-function: ease
```

Example

```css
span {
  background: #444;
  display: block;
  width: 100px;
  height: 100px;
  margin: 4em auto;
  /* transition: property duration */
  transition: background .5s;
}
span:hover {
  background: red;
}
```

# Transforms
`transform` lets you modify the visual appearance (coordinate space) of css elements. Elements can be `translated`, `rotated`, `scaled`, and `skewed`

## Examples

### Scale (resizes elements)
Scale the `.box` by increasing it 20 times it's original size. Value is in **percentage**

```css
.box {
  width: 20px;
  height: 20px;
  transform: scale(20);
}
```
### Translate (moves elements)

### Skew

### Rotate

center an element

```scss
/* center the element */
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
```

Links
---
- [Codyhouse: Mastering CSS Transitions, Transforms & Animations](https://codyhouse.co/course/mastering-css-transitions-transformations-animations/)
- [MDN: Using CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [MDN: transform](https://developer.mozilla.org/en/docs/Web/CSS/transform)
- [Codrops: CSS Reference - Transitions](https://tympanus.net/codrops/css_reference/transition/)