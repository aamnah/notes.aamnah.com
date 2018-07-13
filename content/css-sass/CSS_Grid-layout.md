---
title: Introduction to CSS Grid Layout
date: 2017-09-27
category: CSS and SASS
---

> A true grid is two-dimensional. The two dimensions are rows and columns, and with grid layout you can control both at once.
> With flexbox, you choose whether to lay the items out as a row or a column, one or the other and not both.

### Why CSS Grid?
- With CSS Grids you can not only hide/show things or adjust sizes or move items along one direction, you can actually **change the order of HTML elements**. You can move elements in both directions, PLUS do whatever you are able to do before with `@media` and `flex` in terms of responsive design.

- You can define and change `grid-template-areas` based on screen sizes (with media queries)
- You can also **change the number of columns and rows based on the screen size** two (the cleaner and simpler equivalent of Bootstrap's `col-xs-8 col-sm-6 col-md-4 col-lg-3` .. )

---
tl;dr

- You can change the order of HTML elements using only CSS. Move something on the top to the right, move location info that was in footer to the sidebar etc. Instead of  moving the div from `<footer>` to `<aside>`, you can just change it's placement with `grid-area`
- You can easily have a 12-column grid with one line of CSS. `grid-template-columns: repeat(12, 1fr)`

---


Layouts today are
> Floating and clearing and nesting and nesting and nesting

- CSS Grids takes the extra cruft away, leaving you with just semantic markup, letting you solve the layout problems in CSS, in a clean and simple way.

[6:14](https://youtu.be/7kVeCqQCxlk?t=6m16s)

- To put things next to each other we used floats. One item to the left, one to the right, and the box that surrounds them collapses - because floating pulls stuff out of the structure of the document.

- Flexbox works in only one direction, either horizontal or vertical. It can not do things like place two items next to one another and then one piece not. flexbox will treat all three as the same item (flex-item).

- So what you do is put them inside another flex box and deal with them separately

> Float and Flex force us to put extra content inside our HTML for the sole purpose of layout

- Nested elements inside elements inside elements. Take Bootstrap for example:

```html
<div class="row">
	<div class="col-sm-9">
		Level 1: .col-sm-9
		<div class="row">
			<div class="col-xs-8 col-sm-6">
				Level 2: .col-xs-8 .col-sm-6
			</div>
			<div class="col-xs-4 col-sm-6">
				Level 2: .col-xs-8 .col-sm-6		
			</div>
		</div>
	</div>
</div>
```

CSS Grids are two dimensional, you can move things both horizontally and vertically.

### Grid vs. Flexbox
Flex is one-dimensional - either horizontal or vertical, while Grid is two-dimensional, you can move elements in both horizontal and vertical planes

![grid vs. flexbox](/img/grid-vs-flexbox.svg)

> with grid layout we don’t need to add anything to the grid item to make the layout. Everything is being set on the container. In a flex layout you have to target the flex item to set the properties of `flex-grow`, `flex-shrink` and `flex-basis`

### CSS Grid Terminology

- **container** (any container that let's you contain a grid inside `display: grid`. you can do this to as many items on the page as your want)
- **item** (any direct descendant of a grid container)
- line
- cell
- track
- area
- gap


#### container
any container that let's you contain a grid inside `display: grid`. you can do this to as many items on the page as your want

```html
<div class="site"> <!--Grid container-->

</div>
```

```scss
.site {
  display: grid; // Element containing a grid
}
```

#### item
- any direct descendant of a grid automatically becomes a grid item

```html
<div class="site"> <!--Grid container-->
	<header class="masthead"></header> <!--Grid item-->
	<h1 class="page-title"></h1> <!--Grid item-->
	<main class="main-content"></main> <!--Grid item-->
	<aside class="sidebar"></aside> <!--Grid item-->
	<footer class="footer"></footer> <!--Grid item-->
</div>
```

```scss
.site {
  display: grid; // Element containing a grid
}
```

#### line
- Horizontal (row) or vertical (column) line separating the grid into sections
- Grid lines are referenced by numbers, starting and ending with the outer borders of the grid. First edge of the grid (on the left) either vertical or horizontal is number one
 
- `grid-template-columns` and `grid-template-rows`
- For example:`grid-template-columns: 2fr 1fr 1fr` (takes list of length values: em, px, %, fr etc. denoting the distance between each line)
- `fr` (fraction) is a newly introduced unit for grids

![grid lines](/img/grid-lines.png)

#### cell
- A space in the grid between four intersecting grid lines
- smallest unit in a CSS grid

![grid cell](/img/grid-cell.png)

#### area
- rectangular area made up of one or more grid cells
- rectangular area between any four specified grid lines
- Grid areas *must be rectangular* in nature; it is not possible to create, for example, a T- or L-shaped grid area.

![grid area](/img/grid-area.png)

- You define the start and end grid lines for grid items with: `grid-column` and `grid-row` (shorthand properties for `grid-column-start`, `grid-column-end` and `grid-row-start`, `grid-row-end`)

```scss
// grid-column: start/end
grid-column: 2/4
grid-row: 2/3
```

- The thing with `grid-column` and `grid-row` though is the maths! You have to remember and/or calculate line numbers?! Err..

- `grid-template-areas` to the rescue! These basically let you define areas, give them a name, and let you reference areas by name. Here's an example:

```css
grid-area: [area-name]
```

```scss
.site {
  display: grid;
  grid-template-areas: // applied to grid container
	"head head" // you're assigning cells to areas by giving the cells an area name
	"nav  main" // how many values kinda depends on how many cells you have in the grid
	"nav  foot";
}

.site > header {
  grid-area: head;
}

.site > nav {
  grid-area: nav;
}

.site > main {
	grid-area: main;
}

.site > footer {
	grid-area: foot;
}
```


![grid template areas](/img/grid-template-areas.png)
![grid template areas 2](/img/grid-template-areas2.png)

#### track
- a grid track is a row or a column
- the space between two or more adjacent grid lines
- Row track is horizontal
- Column track is vertical

![grid track](/img/grid-track.png)

#### gap
- empty space between grid tracks, (aka gutters)
- `grid-gap` is shorthand for `grid-column-gap` and `grid-row-gap`. e.g. `grid-gap: 1em` will set a gap of 1em after every cell

![grid gap](/img/grid-gap-gutter.png)


### Working with a grid

- Define a grid (`display: grid`)
- Draw grid lines (`grid-template-columns` and `grid-template-rows`)
- Grid items automatically populate grid from top-left to bottom-right, based on HTML source order

```css
grid-template-columns: 2fr 1fr 1fr;
```

![grid-template-columns](/img/grid-template-columns.png)

```css
grid-template-rows: auto 1fr 3fr;
```

![grid-template-rows](/img/grid-template-rows.png)

![automatic grid items population](/img/grid-items-population.png)


### Changing the order of elements based on screen size

Let's say you want to move the footer to the bottom on small screens and to the right on bigger screens and there's a bunch of other HTML elements in between (i.e. the elements are not adjacent).

The simple solution is to change the `grid-template-areas` based on the screen size. You can also **change the number of columns and rows based on the screen size** too (the cleaner and simpler equivalent of Bootstrap's `col-xs-8 col-sm-6 col-md-4 col-lg-3` .. )

```css
.site {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title title"
    "main header"
    "main sidebar"
}

@media screen and (min-width: 34em) {
  .site {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      "title title title"
      "main header header"
      "main sidebar footer"
  }
}
```

![different grid layouts for different screen sizes](/img/grid-template-areas-media-queries.png)

### BUT Support Backwards compatibility?
- CSS Grids are [supported](http://caniuse.com/#feat=css-grid) by all major browsers
- There is now a thing called a _feature query_ `@support`. Use feature queries to test for grid support in the current browser

```css
@supports (display: grid) { ... }
```

- If CSS Grid not supported, recommended is to serve the _mobile_ site to all browsers

### CSS Grid: A practical approach for today
1. Build accessible, mobile-first layout without grid (this is your baseline). Make sure it works in all browsers in all sizes
2. Use the mobile first layout as fallback for all browsers
3. Use `@support` to detect grid support
4. At the appropriate breakpoint, create layout with grid and grid-areas
5. Explore new layouts as viewport widens

- Use Firefox, Firefox has a Grid inspector

### Examples

<p data-height="868" data-theme-id="31402" data-slug-hash="xXdqLE" data-default-tab="result" data-user="aamnah" data-embed-version="2" data-pen-title="CSS Grid by example - 1 (super basic, 2 lines of code)" class="codepen">See the Pen <a href="https://codepen.io/aamnah/pen/xXdqLE/">CSS Grid by example - 1</a> by Aamnah Akram (<a href="https://codepen.io/aamnah">@aamnah</a>).</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<p data-height="374" data-theme-id="31402" data-slug-hash="RLVVoE" data-default-tab="css,result" data-user="aamnah" data-embed-version="2" data-pen-title="CSS Grid by example - 2 (grid areas + grid gap)" class="codepen">See the Pen <a href="https://codepen.io/aamnah/pen/RLVVoE/">CSS Grid by example - 2 (grid areas + grid gap)</a> by Aamnah Akram (<a href="https://codepen.io/aamnah">@aamnah</a>).</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Links
---

- [Game: Grid Garden](http://cssgridgarden.com/) from the creator of Flexbox Froggy
- [Youtube: CSS Grid Changes EVERYTHING - Amazing Presentation by Mor10](https://www.youtube.com/watch?v=7kVeCqQCxlk)
- [SLIDES for CSS Grid Changes EVERYTHING](https://www.slideshare.net/mor10/css-grid-changes-everything-about-web-layouts-wordcamp-europe-2017)
- [Firefox: Grid inspector](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)
- [Grid by example, by Rachel Andrews](https://gridbyexample.com/)
- [MDN: CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Github: Kuhn theme by Mor10](https://github.com/mor10/kuhn)
- [Building Production-Ready CSS Grid Layouts Today](https://www.smashingmagazine.com/2017/06/building-production-ready-css-grid-layout/)
- [Youtube: CSS Grid Layout Crash Course](https://www.youtube.com/watch?v=jV8B24rSN5o)
- [Smashing Magazine: CSS Grid Gotchas And Stumbling Blocks, by Rachel Andrews](https://www.smashingmagazine.com/2017/09/css-grid-gotchas-stumbling-blocks/)