---
layout: post
title: Create a Color Palette in Sass
permalink: howto-sass-create-a-color-palette
date: 2014-05-21 19:26:53.000000000 +05:00
type: post
published: true
status: publish
categories:
- CSS
tags:
- compass
- sass
---

````sass
$background: #f3f3f3;
$text_color: #888;
$link_color: #;
$primary_color: mix(#ff0000, #fefefe);
$secondary_color: complement($primary_color);
$highlighted_text_color: darken($text_color, 30%);
````

### Light and Dark shades

#### Get a darker shade

```sass
color: darken($text_color, 20%);
``` 

OR 
```sass
color: darken(#888, 20%)
```
will give you a 20% darker shade of $text_color or #888. If you use a variable, it'll change the colors dynamically, meaning the light/dark shade will vary with the base color variable used.

#### Get a lighter shade

```sass
color: lighten($text_color, 20%);
```

OR

```sass
color: lighten(#888, 20%)
```

#### Save the light/dark shades as variables

```sass
$highlighted_text_color: darken($text_color, 30%);
```

### Complementary Colors
complimentary colors are at the opposite ends on the color wheel.

```sass
$text_color: complement($background_color);
```

![complimentary colors - color wheel]({{site.url}}/assets/complimentary-colors.jpeg)

### Desaturate a Color

```sass
$background: desaturate(#187, 30%)
```

### Mix colors

```sass
$primary_color: mix(#ff0000, #fefefe);
```

And this is not all, there are other functions such as hue and opacity that you can also use in Sass for making you color palette.