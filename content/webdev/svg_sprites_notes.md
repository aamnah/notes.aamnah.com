---
title: Notes on SVG Sprites
date: 2018-10-23
---

> It should just be an `<svg>` tag, with a `<defs>` tag (which just means you are defining stuff to use later), and then a bunch of `<symbol>` (group) tags. Each `<symbol>` tag will have a unique ID, and will wrap all the paths and whatnot for each icon.

You need:

- an svg file that has the `defs`

```xml
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <defs>
    <symbol id="icon-facebook">
    	<!-- paths go here -->
    </symbol>
    <symbol id="icon-youtube"></symbol>
    <symbol id="icon-linkedin"></symbol>
    <symbol id="icon-mail"></symbol>
    <symbol id="icon-whatsapp"></symbol>
  </defs>
</svg>
```

```html
<svg class="icon"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  
  <use xlink:href="#facebook"></use>
</svg>
```

```css
/* Do whatever makes sense here.
   Just know that the svg will be an 
   enormous 100% wide if you don't 
   reign in the width. */

.icon {
  display: inline-block;
  width: 32px;
  height: 32px;
}
```

- the `display: none;` is there so the svg doesn't render large amounts of empty space when the icons aren't being rendered. by default svg renders a big empty space on the page een when it's contents are not rendered.
- The elements defined inside `<symbol>` will only be rendered when they are referenced by the `<use>` element.

- When building the site with Parcel, you'll get the following error and the build will fail..

```
Error in parsing SVG: Unbound namespace prefix: "xlink"
```

This is fixed by adding an `xmlns:xlink` value to the `<svg>`

```xml
xmlns:xlink="http://www.w3.org/1999/xlink"
```

# Targetting the particular icons

have viewbox for the entire document and then specify viewbox for each icon using individual viewboxes

```
viewBox="x y width height"
```

Let's say you have an svg file that has 5 icons (60x60 each) in a single column, with no spacing in between the icons. Your svg would become something like this

```xml
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;" viewBox="0 0 60 300"> <!-- viewBox="x y width height" -->
  <defs>
    <symbol id="icon-facebook" viewBox="0 0 60 60"> 
    	<!-- paths go here -->
    </symbol>
    <symbol id="icon-youtube" viewBox="0 60 60 60"></symbol>
    <symbol id="icon-linkedin" viewBox="0 120 60 60"></symbol>
    <symbol id="icon-mail" viewBox="0 180 60 60"></symbol>
    <symbol id="icon-whatsapp" viewBox="0 240 60 60"></symbol>
  </defs>
</svg>
```

Since there is only one column and all the icons are right-aligned, the `x` value for all icons will become `0`. The `y` value is easy to calculate since all icons are of an equal height, i.e. 60px. So the first icon will begin at `y="0"` and the since the second starts right after the first ends with no spacing in between, the second icon will start at `y="60"`, i.e. it's position in the file.

https://css-tricks.com/svg-fragment-identifiers-work/
https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox


### Referncing an external SVG sprite

```html
<svg class="twitter-icon">
  <use xlink:href="path/to/icons.svg#twitter-icon"></use>
</svg>
```

This `xlink:href` [**does not work**](https://stackoverflow.com/a/50153048) in Webkit browsers..

> IE9-Edge12, Safari 5.1-6, and UCWeb 11 do not support referencing external files via <use xlink:href>. [Polyfills](https://github.com/jonathantneal/svg4everybody) are available [caniuse](https://caniuse.com/#search=svg)

- `svg4everybody` also didn't work for me on Chromium 69.0.3497.81, got `svg4everybody is not defined`, failed to do anything.

- `xlink:href` has been deprecated in favor of `href` in SVG 2. However, `href` is not supported in Safari 11. It's safe to use both for now, until SVG2 is supported by all browsers.

```
<svg class="twitter-icon">
  <use href="path/to/icons.svg#twitter-icon" xlink:href="path/to/icons.svg#twitter-icon"></use>
</svg>
```


### Fragment identifiers
- You can use the svg's `viewBox` property to crop the svg to the specific area you want. That area is what is called a _fragment_. A _fragment identifier_ looks like this:

```
#svgView(viewBox(64 0 32 32))
```

```
<img src="uiIcons.svg#svgView(viewBox(64 0 32 32))">
```
- Getting the `viewBox` values is easy if you're using any graphic software. For example, Sketch shows the position and size values right in the top hand corner. 

