---
layout: post
title: Sass Function to Auto-Convert Pixels to Ems
permalink: sass-function-convert-pixels-px-ems
category: css
ctime: 2015-01-17
---

### Function
Add this to your Sass (functions) file. It is recommended that you keep a separate **functions.scss** file and `@import 'functions';` at the top of your main/global css file. This way it keeps things organized. OR you could just add this function to the top of your main scss file.

    {% highlight scss %}
    @function pem($pixels) {
      @return #{$pixels/16.0}em
    }
    {% endhighlight %}

### Usage

Using scss syntax:

    {% highlight scss %}
    @media (min-width: pem(768)) {
      ...
    }
    {% endhighlight %}
    
When compiled to plain CSS and sent to the browser, we get:

    {% highlight scss %}
    @media (min-width: 48em) {
      ...
    }
    {% endhighlight %}



Sources:
- [55 Minutes Blog](http://blog.55minutes.com/2012/04/media-queries-and-browser-zoom/)
- [Extending CSS - Vijamis.com](http://viljamis.com/blog/2012/extending-css/)