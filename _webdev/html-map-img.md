---
layout: post
title: 'Define a clickable interactive map over an image with &lt;map&gt;'
subtitle: Make different clickable areas on an image that go to different links using only HTML
permalink: html-img-map-clickable-areas-coords-shape
ctime: 2017-03-15 11:15
---

tl;dr
---

```html
<map name="primary">
  <area shape="circle" coords="75,75,75" href="left.html">
  <area shape="circle" coords="275,75,75" href="right.html">
</map>
<img usemap="#primary" src="http://placehold.it/350x150" alt="350 x 150 pic">
```

- in an `<img>` tag, specify the `usemap` attribute and provide the name of whatever map you want to use, for example `#world-continents`
- define a map with the `<map>` tag. Each map takes an `<area>` tag with `shape`, `coords` and `href` attributes
- `shape` could be a `rect`, `circle` or `poly`. The amount of `coords` provided and their placement depends on the shape
- `rect` takes `x,y` positions of all four corners in a clockwise manner, starting from top-left
- `circle` takes `x,y` positions at the **the horizontal middle of circle** and `radius` (half the width of circle)
- `poly` can make pretty much any shape you want. It takes sets of `x,y` positions.

---

Notes
---
- You can use an image editing program with Rulers visible to find the  x and y coordinates in a picture. Photoshop, Sketch or even Microsoft Paint will do.
- Polygons are really easy to draw with [this **online tool**][tool]
- In **Sketch** it's really easy to pinpoint coords for rectangles, just look in the top right. For circles, get the x and y and add half of the size to each to get the exact coords
- Watch [this tutorial][photoshop-tutorial] to learn how to easily find positions with the Info panel (Window > Info (F8)) in **Photoshop**
- The image **maps are NOT responsive**. If an image gets shrinked due to less space or whatever reason, it messes up the coordinates (as they are fixed pixels, not percentages). To get responsive maps you'll need to use a plugin
- **Alternatively** you can use an **svg** instead of an image map, svg will be responsive as well. [example](http://stackoverflow.com/a/28277021/890814)

## Demo 1

Every continent links to a different corresponding article on Wikipedia

<img src="{{ site.baseurl }}/assets/img/world-continents.png" alt="World Continents" width="320" height="160" orgwidth="320" orgheight="160" usemap="#world-continents">

<map name="world-continents">
  <area title="North America" href="https://en.wikipedia.org/wiki/North_America" shape="poly" coords="48,89,67,69,77,49,140,0,68,0,6,10,4,31,16,69">
  <area title="South America" href="https://en.wikipedia.org/wiki/South_America" shape="poly" coords="48,88,61,74,119,99,95,160,66,159">
  <area title="Europe" href="https://en.wikipedia.org/wiki/Europe" shape="poly" coords="124,49,145,46,158,50,187,43,198,6,146,1,115,21">
  <area title="Africa" href="https://en.wikipedia.org/wiki/Africa" shape="poly" coords="121,53,140,47,169,51,186,77,196,80,188,137,156,136,138,97,118,86">
  <area title="Asia" href="https://en.wikipedia.org/wiki/Asia" shape="poly" coords="166,50,184,77,201,74,215,91,258,108,263,87,283,74,297,8,192,3,191,29,187,46,170,42">
  <area title="Australia" href="https://en.wikipedia.org/wiki/Australia_(continent)" shape="poly" coords="257,107,263,85,314,89,316,137,294,151,249,132,248,114">
</map>

```html
<img src="/images/world-continents.png" alt="World Continents" width="320" height="160" orgwidth="320" orgheight="160" usemap="#world-continents">

<map name="world-continents">
  <area title="North America" href="https://en.wikipedia.org/wiki/North_America" shape="poly" coords="48,89,67,69,77,49,140,0,68,0,6,10,4,31,16,69">
  <area title="South America" href="https://en.wikipedia.org/wiki/South_America" shape="poly" coords="48,88,61,74,119,99,95,160,66,159">
  <area title="Europe" href="https://en.wikipedia.org/wiki/Europe" shape="poly" coords="124,49,145,46,158,50,187,43,198,6,146,1,115,21">
  <area title="Africa" href="https://en.wikipedia.org/wiki/Africa" shape="poly" coords="121,53,140,47,169,51,186,77,196,80,188,137,156,136,138,97,118,86">
  <area title="Asia" href="https://en.wikipedia.org/wiki/Asia" shape="poly" coords="166,50,184,77,201,74,215,91,258,108,263,87,283,74,297,8,192,3,191,29,187,46,170,42">
  <area title="Australia" href="https://en.wikipedia.org/wiki/Australia_(continent)" shape="poly" coords="257,107,263,85,314,89,316,137,294,151,249,132,248,114">
</map>
```

## Demo 2

Every frame links somewhere different [codepen](http://codepen.io/aamnah/pen/PpKLrd?editors=1000)

<img src="{{ site.baseurl }}/assets/img/usemap-frames.png" alt="Usemap Example Frames" usemap="#Map" width="795" height="509" orgwidth="795" orgheight="509" />
<map name="Map" id="Map">
  <area title="Yellow area" href="#circle" shape="circle" coords="187,81,50" />
  <area title="Green area" href="#green" shape="poly" coords="383,46, 484,46, 485,192, 385,192" />
  <area title="Orange area" href="#orange" shape="poly" coords="549,67, 643,67, 643,162, 550,162" />
  <area title="Blue Rectangle" href="#blue" shape="poly" coords="502,222, 643,222, 644,287, 502,287" />
  <area title="Purple area" href="#purple" shape="poly" coords="545,432,610,307,692,431" />
  <area title="University badge" href="http://referrals.trhou.se/aamnah" target="_blank" shape="circle" coords="167,287,95" />
  <area title="JavaScript Badge" href="http://referrals.trhou.se/aamnah" target="_blank" shape="poly" coords="396,245,313,290,307,303,307,382,314,396,396,441,479,398,487,383,488,305,478,288" />
  <area title="Oval area" href="#oval" shape="poly" coords="266,138,274,110,286,89,297,80,308,76,318,81,327,88,333,98,338,111,344,124,346,138,347,158,346,177,344,196,338,214,330,228,321,242,306,246,296,243,286,234,276,220,268,190,266,167" />
</map>

```html
<img src="https://image.ibb.co/juLDmF/usemap_frames.png" alt="Usemap Example Frames" usemap="#Map" width="795" height="509" orgwidth="795" orgheight="509" />
<map name="Map" id="Map">
  <area title="Yellow area" href="#circle" shape="circle" coords="187,81,50" />
  <area title="Green area" href="#green" shape="poly" coords="383,46, 484,46, 485,192, 385,192" />
  <area title="Orange area" href="#orange" shape="poly" coords="549,67, 643,67, 643,162, 550,162" />
  <area title="Blue Rectangle" href="#blue" shape="poly" coords="502,222, 643,222, 644,287, 502,287" />
  <area title="Purple area" href="#purple" shape="poly" coords="545,432,610,307,692,431" />
  <area title="University badge" href="http://referrals.trhou.se/aamnah" target="_blank" shape="circle" coords="167,287,95" />
  <area title="JavaScript Badge" href="http://referrals.trhou.se/aamnah" target="_blank" shape="poly" coords="396,245,313,290,307,303,307,382,314,396,396,441,479,398,487,383,488,305,478,288" />
  <area title="Oval area" href="#oval" shape="poly" coords="266,138,274,110,286,89,297,80,308,76,318,81,327,88,333,98,338,111,344,124,346,138,347,158,346,177,344,196,338,214,330,228,321,242,306,246,296,243,286,234,276,220,268,190,266,167" />
</map>
```

### shape

There are three shapes you can draw, `rect`, `circle` and `poly`. How many `coords` you provide depends on the shape you want. a set of `x` and `y` define a point on the map, multiple sets means multiple meeting points.

- `rect` takes 4 sets of x an y (top-left, top-right, bottom-left, bottom-right)
- `circle` takes x, y and radius (along the horizontal middle of the circle)
- `poly` takes as many sets of x,y as you want

#### rect

```html
<!-- x,y (top-left), x,y (top-right), x,y (bottom-left), x,y (bottom-right) -->
coords='383,46, 484,46, 485,192, 385,192'
```

#### circle

```html
<!-- x, y, radius -->
coords='187, 81, 50'
```


#### poly
With `poly` you can make any shape you want.. a pyramid, octagon or even someone's head (see [Seth Godin's site](http://sethgodin.com/sg/), he wants you to click on his head to go to his blog..)

![An example of image map, Seth Godin's head to go to his blog]({{ site.baseurl }}/assets/img/seth-godin-head-blog-img-map.png)

The coords for poly are _sets_ of _x and y_ positions. 

```html
<!-- x,y, x,y, x,y, x,y, x,y, x,y, x,y -->
coords='257,107, 263,85, 314,89, 316,137, 294,151, 249,132, 248,114'
```

actually has 7 sets of x,y positions. You can write them with spaces for better legibility.



Links
---

- [YouTube: How to make an image map in HTML](https://www.youtube.com/watch?v=YkdWRBL2BsM)
- [MDN: &lt;area&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area)
- [MDN: &lt;map&gt;](https://developer.mozilla.org/en/docs/Web/HTML/Element/map)
- [StackOverflow: Responsive image map](http://stackoverflow.com/questions/7844399/responsive-image-map)

[tool]: http://imagemap-generator.dariodomi.de/
[photoshop-tutorial]: https://www.youtube.com/watch?v=YkdWRBL2BsM