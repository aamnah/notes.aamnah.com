---
layout: post
title: Sass - Beginner to Advanced in 30 Minutes
subtitle: Notes for the Egghead.io course - Learn the Best and Most Useful Sass
permalink: notes-sass-overview
ctime: 2017-04-02
---

### node-sass

```bash
npm i -D node-sass
```

add a script to `package.json`

```json
"start": "node-sass -o css scss"
```

`-o` is for **o**utput folder, which in our case is `css`.

### partials

- prepend files with an underscore but import them without the underscore or the file extension
- CSS imports create additional resource requests, and they don't get compiled
- Sass imports get compiled into one file
- Import order matters

Partials let you compile multiple files into one and organize your code better.

Partials are created by prepending an underscore to the file name, for example `_variables.scss`

When importing a partial file into another file, you can just mention the file name, no need to mention the underscore or the file extension. For example

```scss
@import "variables";
```

The difference between Sass partial imports and normal CSS imports is that Sass partials get combined into one file, meaning only one call to the resource, where as normal CSS imports result in multiple files and multiple resource calls. For example, in your `main.scss` you have 

```scss
@import "reset";
@import "variables";
@import "colors";
@import "typography";
@import "layout";
```

They will all get **combined** into `main.css` and you still get only one file. The resulting file would have the _code_ from all the partial files (instead of just @import statements which _call_ other files).

```
.
├── css
│   └── main.css
└── scss
    ├── _colors.scss
    ├── _layout.scss
    ├── _reset.scss
    ├── _typography.scss
    ├── _variables.scss
    └── main.scss
```

If you were to do it in CSS, you'd have 6 different files total and 6 calls to resources and files will only load one by one.

You can of course do regular css imports in Sass too, if that is what you want.

Order matters when importing files, because **cascade**!

### Netsing and Parent selector

- `&` represents the parent selector, i.e. the **direct** parent. It's meaning changes based on where it is nested
- Pseudo-elements are like `&:hover` and `&::before`, they can be nested too
- `&` is great for naming conventions
- Don't go too deep, three or four levels is enough
- Don't be overly specific, too much specificity is brittle. Alternatively, you can use a class name to specify a relationship. For example, instead of `.menu li a`, do `.menu-link`

You can nest styles. For example

```scss
.menu {
  background: white;

  a {
    color: red;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
```

would compile to

```css
.menu {
  background: white; }
  .menu a {
    color: red;
    font-weight: bold;
    text-decoration: none; }
    .menu a:hover {
      text-decoration: underline; }
```

`&` is great for naming conventions. You can do a whole SUIT CSSS or BEM naming like so

```scss
.Tweet {
  &-header {}
  &-avatar {}
  &-bodyText {}
  &.is-expanded {}
}
```

will compile to

```css
.Tweet {}
  .Tweet .Tweet-header {}
  .Tweet .Tweet-avatar {}
  .Tweet .Tweet-bodyText {}
  .Tweet.is-expanded {}
```

### Variables
- Start with `$`, first letter after `$` can't be a number
- Variables have block scope (everything in a `{}` is a CSS declaration block)
- Variables **can be interpolated** `#{$variable}` (interpolation is fancy word for using variables as placeholders - which then get evaluated and replaced with their corresponding values, kinda like template literals in JavaScript). This allows us to re-use verbose text. For example

```scss
$wom: women-of-marvel-universe;

.#{$wom} {content: "#{$wom}"}
```

will compile to

```css
.women-of-marvel-universe {
  content: "women-of-marvel-universe"; }
```

Interpolation also helps with naming conventions

```scss
$wom: women-of-marvel-universe;

.#{$wom} { content: "#{$wom}"; }

.#{$wom}-text { color: #eee; }
.#{$wom}-cape { background: purple; }
```

will compile to

```css
.women-of-marvel-universe {
  content: "women-of-marvel-universe"; }

.women-of-marvel-universe-text {
  color: #eee; }

.women-of-marvel-universe-cape {
  background: purple; }
```

### Built-in Sass Functions

- `lighten()`
- `darken()`
- `mix()` mixes two colors. Takes an optional third argument, the percentage of the base color to mix, default is 50%. For example

```scss
color: mix($base-color, yellow, 25%)
```

Here it is going to mix `25%` of `$base-color` with yellow

```scss
color: mix(blue, green, 75%) // #006040
```

- `complement()` function returns the complimentary color - 180 degrees opposite on the color wheel.

```scss
$color1: complement(white); // white
$color2: complement(black); // black
$color3: complement(blue); // yellow
$color4: complement(red); // cyan
$color5: complement(green); // purple
$color6: complement(orange); // #005aff
$color7: complement(magenta); // lime
```

- `transparentize()` makes a color more transparent by decreasing the opacity. It'll take a color and convert it to `rgba` with the alpha channel (opacity) adjusted. For example

```scss
color: transparentize(mix(blue, yellow, 75%), .2) // rgba(0, 96, 64, 0.8)
```

- `scale-color()` fluidly scales one or more properties of a color

### mixins

Mixins are like functions. You can provide arguments, default argument values, use conditionals and more. You define a mixin with `@mixin foo` and use that mixin with `@include foo`

- You can use optional values by providing `null` as the default argument value. To use optional arguments, you need to use named arguments when including the mixin (named arguments just means that you provide the argument name as well as the value, like `$border: 1px solid red`)
- When using _named arguments_ order doesn't matter. Otherwise mixin arguments need to be included in the same order as the mixin definition
- You can have a _dynamic_ number of arguments. When number of arguments in not known, you can use variable arguments. For example `$transitions...` The elipses `...` means you have a variable number of arguments (kinda like rest parameters in ES6 JavaScript)

```scss
$color-brand: #f00;

@mixin box ($background: #eee, $color: $color-brand, $border: null) {
  width: 100px;
  padding: 1em;
  background: $background;
  color: $color;
  border: $border;
}
```

To use

```scss
.box {
	@include box($border: 1px solid blue);
}
```

will output

```css
.box {
  width: 100px;
  padding: 1em;
  background: #eee;
  color: #f00;
  border: 1px solid blue; }
```


- The `@content` directive let's you add custom styles when the mixin is included

### extends

`@extend` let's you share a set of CSS properties from one slector to another.

- `@extend` only extends one class, it will not extend the nested classes. It will however extend the pseudo elements (`::before`, `:hover` etc.) on the class you are extending
- You can of course extend one class multiple times..
- `%` lets you define a placeholder selector for a class

### extends vs. mixins
- mixins take arguments, extends don't. For example, mixins can be included in media queries
- mixins have the `@content` directive, extends don't. For example, mixins allow contents to be passed when included
- mixins are like functions, extends are like classes. Mixins are about logic while Extends are about inheritance
- mixins aren't DRY, they repeat code every time they are included
- extends are DRY, because they share inherited traits
- extends maintain relationships, mixins don't
- extends change the source order
- extends have issues with media queries, you can't extend something that's outside a media query. To be able to extend some code in a media query, it has to be inside the same media query (or another media query with the same selector values)

### functions
- Functions are defined with `@function` and used like any other sass function `foo()`
- Function take arguments, default argument values, variable arguments (...) and optional arguments (null)
- Functions must `@return` a value
- If you iterated the value, the returned value will be the final value of the iteration
- For example, determining the typographic scale is a good use for a function

```scss
// Function to detremine typographic scale
$ratio: 1.2;

@function font-scale ($exponent) {
  $value: 1;

  @for $i from 1 through $exponent {
    $value: $value * ratio;

    @debug value is $value; // print out values for each iteration in the console
  }

  @return $value; // functions must return a value
}

.stuff { font-size: font-scale(6); } // need to use the function somewhere to see debug in action
```

```
DEBUG: value is 1.2
DEBUG: value is 1.44
DEBUG: value is 1.728
DEBUG: value is 2.0736
DEBUG: value is 2.48832
DEBUG: value is 2.98598
```

### functions vs. mixins
- mixins return re-usable blocks of styles where functions return re-usable values

Links
---

- [Sass Guide](http://sass-lang.com/guide)
- [Egghead.io - Learn the Best and Most Useful SCSS](https://egghead.io/courses/learn-the-best-and-most-useful-scss)
- [Github: SassyEgghead](https://github.com/Pickra/SassyEgghead)
- [Sass: Functions](http://sass-lang.com/documentation/Sass/Script/Functions.html)
