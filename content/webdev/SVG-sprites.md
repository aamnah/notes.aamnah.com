---
date: 2018-04-18
title: SVG Sprites
---

- `<symbol>` allows you to embed the SVG code as well as have it's own `viewBox` attribute
- Elements defined inside the `<symbol>` element can only be rendered to the browser when referenced by the `<use>` element.
- Each symbol will have it's own `id` which we will use to reference it
- Each symbol will have it's own `viewBox` property too. The first two values will almost always be "0 0", the second two will be equal to the size of the icon you have exported
- You can also use `viewBox` in `<use>` instead of sprites. Add that to media queries and you can display only symbol instead a full logo without an extra sprite for that.
- `<symbol>` is a [better wrapper](https://css-tricks.com/svg-symbol-good-choice-icons/) as compared to `<g>`. Because a) you can define the `viewBox` directly on the `<symbol>` and then not need one when you `<use>` it later in an `<svg>`, and b) `<symbol>` can have it's own `<title>` and `<desc>` tags. 
- `<symbol>` will have an `id` for your icon and have all the `<path>` values

#### creating a sprite

```html
<svg style="display:none;"> <!-- hide it by default so it doesn't render empty space -->
  
  <!-- Icons go here, each icon will be warpped as a `symbol` -->
  
  <symbol id="aircraft" viewBox="0 0 62 51">
    <path fill="#000000" d="M38.9872..."></path>
  </symbol>
  
  <symbol id="brush" viewBox="0 0 62 62">
    <path fill="#000000" d="M7.8416..."></path>
  </symbol>
    
</svg>
```

#### referncing an icon

```html
<svg>
  <use xlink:href="#aircraft"></use>
<svg>
```

#### referencing an icon from an external svg file
you can use the svg's from an external svg sprite as well
by prefixing the identifier by the path to the file something like this:

```html
<svg>
  <use xlink:href="path/to/icons.svg#aircraft"></use>
</svg>
```

#### use the same `<path>` in different sizes
You can use the same path in different sizes and control the sizes by CSS. Just be careful when setting the `viewPort` attributes within your SVG file.


```html
<svg>
	<title>small icon</title>
	<use class="small" xlink:href="#aircraft"></use>
</svg>
<svg>
	<title>big icon</title>
	<use class="big" xlink:href="#aircraft"></use>
</svg>
```

```css
.small { width: /*small size*/ }
.big { width: /*big size*/ }
```

Links
--
- [](https://24ways.org/2014/an-overview-of-svg-sprite-creation-techniques/)
- [How to create and manage SVG sprites](https://www.webdesignerdepot.com/2017/05/how-to-create-and-manage-svg-sprites/)
- https://betravis.github.io/icon-methods/svg-sprite-sheets.html