---
title: Hands-on with CSS Grid Layout
date: 2017-09-28
---

- Defining a grid is as simple as adding `layout: grid` to an element.

```css
.wrapper {
  display: grid;
}
```

### Defining templates

Rows and columns

```css
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: auto 300px;
```

Areas

```css
grid-template-areas: 
  "a a a a"
  "b c d e"
  "b c d e"
  "f f f f";
```

or 

```css
grid-template-areas:
  "header header header header"
  "nav main main sidebar";
```

Shorthand [video](https://www.youtube.com/watch?v=aqLifuKpfHU)

```scss
grid-template: auto 300px / 1fr 1fr 1fr 1fr

grid-template: 
  "header header header header" auto // this is the first row, auto (size) is default, so it's okay if you don't mention it.
  "nav main main sidebar" 300px // second row, the size for which is going to be 300px
  / 1fr 1fr 1fr 1fr; // and the columns come at the end
```

### the `fr` unit
- **Using `fr` avoids margin and padding issues**. With `%` and `em` etc. it becomes a math equation when calculating `grid-gap`. If you used `fr` unit, it'll automatically calculate both column and gutter sizes and adjust the size of the columns accordingly,  plus there will be no bleeding gaps at the end either

<p data-height="300" data-theme-id="31402" data-slug-hash="LzyLvp" data-default-tab="css,result" data-user="aamnah" data-embed-version="2" data-pen-title="CSS Grid by example - 3A (fr vs. other units)" class="codepen">See the Pen <a href="https://codepen.io/aamnah/pen/LzyLvp/">CSS Grid by example - 3A (fr vs. other units)</a> by Aamnah Akram (<a href="https://codepen.io/aamnah">@aamnah</a>).</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


<p data-height="300" data-theme-id="31402" data-slug-hash="jGmwRp" data-default-tab="css,result" data-user="aamnah" data-embed-version="2" data-pen-title="CSS Grid by example - 3B (fr vs. other units)" class="codepen">See the Pen <a href="https://codepen.io/aamnah/pen/jGmwRp/">CSS Grid by example - 3B (fr vs. other units)</a> by Aamnah Akram (<a href="https://codepen.io/aamnah">@aamnah</a>).</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

- **`fr` is not truly responsive**.

<p data-height="436" data-theme-id="31402" data-slug-hash="XeRaKW" data-default-tab="css,result" data-user="aamnah" data-embed-version="2" data-pen-title="CSS Grid by example - 4A (12 column grid, fr units)" class="codepen">See the Pen <a href="https://codepen.io/aamnah/pen/XeRaKW/">CSS Grid by example - 4A (12 column grid, fr units)</a> by Aamnah Akram (<a href="https://codepen.io/aamnah">@aamnah</a>) .</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<p data-height="404" data-theme-id="31402" data-slug-hash="gGWxoz" data-default-tab="css,result" data-user="aamnah" data-embed-version="2" data-pen-title="CSS Grid by example - 4B (12 column grid, vw units)" class="codepen">See the Pen <a href="https://codepen.io/aamnah/pen/gGWxoz/">CSS Grid by example - 4B (12 column grid, vw units)</a> by Aamnah Akram (<a href="https://codepen.io/aamnah">@aamnah</a>).</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

- You can mix and match relative and absolute units

```css
grid-template-columns: 2fr 1fr 300px;
grid-gap: 1em;
```

### repeat

- **Use `repeat()` if you're using a pattern for columns**. For example: `grid-template-columns: repeat(12, 1fr)` will give you a 12 column grid with every column of the equal size. `grid-template-columns: repeat(3, 2fr 1fr);` will give you 3 columns where each column has 2 columns inside, the sizes of the inside columns being 2fr and 1fr respectively.

<p data-height="456" data-theme-id="31402" data-slug-hash="MEmvda" data-default-tab="css,result" data-user="aamnah" data-embed-version="2" data-pen-title="CSS Grid by example - using repeat()" class="codepen">See the Pen <a href="https://codepen.io/aamnah/pen/MEmvda/">CSS Grid by example - using repeat()</a> by Aamnah Akram (<a href="https://codepen.io/aamnah">@aamnah</a>).</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Check browser support with `@supports`

- Feature queries can determine if a CSS property is supported in the browser the site is ebing viewed in

```html
<p class="message">
  You need a browser that supports CSS Grid Layout to see this example properly!  
</p>
```

```css
@supports (display: grid) {
  .message {
    display: none;
  }
}
```

FYI, Safari (v10.0.3 on a fairly updated macOS Sierra v10.12.3 - the one i'm using right now: Sept 28, 2017) does not support `display: grid`. Support for Safari started v10.1 (released Mar 27, 2017) onwards.. High Sierra was just released yesterday and i haven't updated because the minor changes aren't that interesting to me [can i use](http://caniuse.com/#feat=css-grid)

<p data-height="461" data-theme-id="31402" data-slug-hash="yzbjBG" data-default-tab="css,result" data-user="aamnah" data-embed-version="2" data-pen-title="CSS Grid by example - check browser compatibility with @supports" class="codepen">See the Pen <a href="https://codepen.io/aamnah/pen/yzbjBG/">CSS Grid by example - check browser compatibility with @supports</a> by Aamnah Akram (<a href="https://codepen.io/aamnah">@aamnah</a>).</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Links
---
- [Game: Grid Garden](http://cssgridgarden.com/) from the creator of Flexbox Froggy
- [Youtube: CSS Grid Layout Crash Course](https://www.youtube.com/watch?v=jV8B24rSN5o)
- [Youtube: Grid by example - repeat](https://www.youtube.com/watch?v=XW-l6ysDZyM)
- [Youtube: Grid by example - Checking for Grid support using Feature Queries](https://www.youtube.com/watch?v=jXWxQN1RUE0)