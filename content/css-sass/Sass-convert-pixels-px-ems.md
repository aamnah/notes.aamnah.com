---
title: Sass Function to Auto-Convert Pixels to Ems
slug: sass-function-convert-pixels-px-ems
category: css
date: 2015-01-17
---

### Function
Add this to your Sass (functions) file. It is recommended that you keep a separate **functions.scss** file and `@import 'functions';` at the top of your main/global css file. This way it keeps things organized. OR you could just add this function to the top of your main scss file.

```scss
@function pem($pixels) {
  @return #{$pixels/16.0}em
}
```

### Usage

Using scss syntax:

```scss
@media (min-width: pem(768)) {
  ...
}
```
    
When compiled to plain CSS and sent to the browser, we get:

```scss
@media (min-width: 48em) {
  ...
}
```



Links
---

- [55 Minutes Blog](http://blog.55minutes.com/2012/04/media-queries-and-browser-zoom/)
- [Extending CSS - Vijamis.com](http://viljamis.com/blog/2012/extending-css/)
