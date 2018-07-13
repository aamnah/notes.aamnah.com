---

title: CSS Style Notes
slug: notes-css-styles
date: 2017-02-25
---

## Typography

### Responsive Typography
[x](https://developer.mozilla.org/en/docs/Web/CSS/length)

Use `calc` and `vw` to your advantage. `calc` let's you easily calculate values based on unknown variables like percentages and ems and `vw` is the width of the viewport at any given time. One viewport unit is 1% (1/100th) of the viewport size.

```css
body {
  font-size: calc(14px + .3vw);
}
```

Here 14px is going to be the smallest font size and it's going to increase with the width of the viewport (screen).

To achieve responsive typography, you should only have to adjust the font size of the `:root`. All other font sizes should adjust based on the root size (i.e. use `rem` units). 

### Line height

`1.6` is usually a good starting point.

### Font stacks

```css
body {
  font-family: "Open Sans", Tahoma, sans-serif;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

h1, h2, h3, h4, h5, h6 {

  /* 
    Merriweather,
    are all good fonts for headings
  */
}

code, pre {
  font-family: "Consolas", Monaco, Lucida Console, monospace;
  /* 
  'Source Code Pro' is also a good font
  'Menlo' is the one used by Visual Code
  */
}
```



## Using `rem` units
[x](https://snook.ca/archives/html_and_css/font-size-with-rem)

```css
html { font-size: 62.5%; } 
body { font-size: 1.4rem; } /* =14px */
h1   { font-size: 2.4rem; } /* =24px */
```
By defining a base font-size of `62.5%`, you have the convenience of sizing rems in a way that is similar to using px, i.e. 2.4rem for 24px, 1.8rem for 18px etc.


## Sticky footer
[x](https://css-tricks.com/couple-takes-sticky-footer/)

```css
html {
  height: 100%
}

body {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
 .content {
   flex: 1
 }
```

## Media Queries using Sass
[x](http://thesassway.com/intermediate/responsive-web-design-in-sass-using-media-queries-in-sass-32)

## Favicon and Site Icons

```html
<!-- Favicon -->
<link href="/favicon.ico" rel="shortcut icon">

<!-- Apple Touch Icons -->
<link href="/apple-touch-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" type="image/png">
<link href="/apple-touch-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" type="image/png">
<link href="/apple-touch-icon-114x114.png" rel="apple-touch-icon" sizes="114x114" type="image/png">
<link href="/apple-touch-icon-144x144.png" rel="apple-touch-icon" sizes="144x144" type="image/png">
```
