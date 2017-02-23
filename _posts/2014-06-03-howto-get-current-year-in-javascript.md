---
layout: post
title: Get Current Year in JavaScript
permalink: /howto-get-current-year-in-javascript
date: 2014-06-03 13:48:57.000000000 +05:00
type: post
published: true
status: publish
categories:
- JavaScript
tags:
- date

---

Local Time (machine)
-----
 
```javascript
var d = new Date();
var yr = d.getYear           //Returns the two digit year e.g. 14 
var year = d.getFullYear     //Returns the four digit year e.g. 2014
``` 


Universal Time (UTC)
-----
 
```javascript
var d = new Date();
var yrUTC = d.getUTCYear          //Returns the two digit year
var yearUTC = d.getUTCFullYear    //Returns the full year
``` 

**Note:** Knowing the difference between local machine time and time according to UTC matters. Let's say you want to greet a user on New Year's Day at 12:01 am. If you don't account for timezone difference you can not correctly greet the user at the right time as they might be in a different time zone (say UCT-7) where the new year hasn't started yet.  

Links
---

- [MDN: Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
