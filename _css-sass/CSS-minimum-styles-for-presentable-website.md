---
layout: post
title: Making a site presentable in 7 lines of code
permalink: minimal-css-for-presentable-website
ctime: 2017-02-25
categories:
- CSS
---

With just 7 CSS declarations you can make a site very presentable with easy to read typography. 

```css
body {
	margin: 40px auto;
	max-width: 650px;
	line-height: 1.6;
	font-size: 18px;
	color: #444;
	padding: 0 10px
}
h1, h2, h3 { 
  line-height:1.2
}
```

To go one step further, you can add media queries

```css
@media print {
  body {
    max-width: none
    }
}
```

Links
---
- http://bettermotherfuckingwebsite.com/