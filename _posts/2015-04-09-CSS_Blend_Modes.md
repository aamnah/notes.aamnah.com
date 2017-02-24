---
layout: post
title: CSS Blend Modes
permalink: css_blend_modes

---
    
CSS Blend Modes let you blend two or more layers together to create visual effects. You can use blend-modes on pretty much an HTML element including text, svg, images, and videos.

background-blend-mode
---
Default value is normal, meaning no blending. There are 16 values for [background-blend-mode](https://docs.webplatform.org/wiki/css/properties/background-blend-mode) including darken, lighten, multiply, overlay, screen,soft-light, color-burn and color-dodge. These blend modes are pretty much the same as what comes with Photoshop and Sketch.

Combining blend modes with gradients, you can create some cool Instagram-like retro filters.

    {% highlight css %}
    body {
        background: url('image.jpeg') no-repeat, radial-gradient(#6de590, #e67478);
        background-blend-mode: multiply;
    }
    {% endhighlight %}

[mix-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode)
---
Blends the content of any HTML or SVG element.