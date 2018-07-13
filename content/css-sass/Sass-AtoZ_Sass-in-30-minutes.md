---
title: A to  Z Sass in 30 minutes
date: 2017-10-20
---

## Ampersand `&`
- `&` means the parent selector
- It is good for nested code and for BEM and SUIT naming methodologies for writing modular code
- Makes the code compact and easier to read without scrolling up and down the file

```scss
// Example SUIT-css style component
.MyComponent {
  &.is-animating {}
  &--modifier {}
  &-part {}
  &-anotherPart {}
}
```

```scss
// Example link states
a {
  color: gray;
  
  &:hover,
  &:active {
    color: black;
  }
}
```

```scss
// Example 'reverse' parent selector
.btn {
  background: #666;
  color: #fff;
  
  .theme-dark & {
    background: #333;
  }
  
  .theme-light & {
    background: #ccc;
    color: #333;
  }
}
```

```scss
// Sibling selectors

.button {
  & + & {
    // styles for .button + .button
    margin-left: 1em;
  }
}
```

- Sibling selectors are handy when you want to add styles to an element only if it is adjacent to another element. Consider a `ul` that contains buttons. You often end up removing padding for left for the first item `li:first-child` and padding from the right for the last item `li:last-child`. With sibling selectors, you can only add padding to one side between adjacent elements

## BEM and Other naming conventions
- BEM stands for **B**lock, **E**lement, **M**odifier
- The naming convention follows this pattern

```scss
.block {}
.block__element {}
.block--modifier {}
```
- There are a few downsides with using & with BEM though. The code becomes less searchable, and parent selector isn't always visible when you have lots of code. To make the code more searchable, you can add comments, which can then be searched for
- *Components* are things like buttons, registration forms, items in a grid, pagination, social icons etc.

## Color Functions
- Each function takes a base color and then modifies it by a certain amount

```scss
// function( $color, $amount )
lighten($color, 10%)
darken($color, 10%)
saturate($color, 10%)
desaturate($color, 10%)
invert($color)
grayscale($color)
complement($color) // opposite color on color wheel
transparentize($color, 0.5)
opacify($color, 0.5) // amount is in decimal numbers
```
- Gradients, borders and drop shadows are good use cases

- You can perform multiple color functions by putting them inside of one another

```scss
lighten( saturate(), 10% )
transparentize( desaturate(), 20% )
```

## Comments`//` and `/* */`
- `//` Comments are SCSS only, won't compile into CSS
- `/* */` are regular old CSS comments that will compile into source
- You can use either based on your needs. I prefer `//` for all comments that are supposed to be for my eyes only

```scss

// This is a Sass only comment

/*
This is a (public) CSS comment
*/
```

Links
---
- [SitePoint: AtoZ: Sass by Guy Routledge](https://www.sitepoint.com/premium/courses/atoz-sass-2977/)
- [CSS Wizardry: MindBEMding – getting your head ’round BEM syntax](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)