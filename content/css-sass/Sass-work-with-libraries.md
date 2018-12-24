---

title: 'Sass: Working with Libraries'
slug: /howto-sass-work-with-libraries
date: 2014-05-21 20:13:51.000000000 +05:00
type: post
published: true
status: publish
categories:
- CSS
tags:
- compass
- sass
---

By far the most popular Sass based UI framework is <a href="http://getbootstrap.com" target="_blank">Bootstrap</a>. Another one is <a href="http://foundation.zurb.com" target="_blank">Foundation</a>.

Sass libraries are more like a collection of mixins, funtcions and classes. The most common is <a href="http://compass-style.org/" target="_blank">Compass</a>. Then there is <a href="http://bourbon.io" target="_blank">Bourbon</a>.

Installing Bourbon
---
 
```bash
sudo gem install bourbon
```


Including Bourbon in a Project
---
just include the bourbon .scss file in the main stylesheet.
 
```sass
@import "bourbon_bourbon.scss";
```


Benefits
---

- You can use all the new CSS3 features without having to worry about backwards compatibility as Bourbon and Compass take care of adding vendor prefixes.
- Font families and their fall back families are defined as variables so you don't have to type your long list.
