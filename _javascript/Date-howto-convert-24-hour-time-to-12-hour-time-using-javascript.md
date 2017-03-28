---
layout: post
title: Converting 24 hour time to 12 hour time using Javascript
permalink: /howto-convert-24-hour-time-to-12-hour-time-using-javascript
date: 2014-06-03 13:21:52.000000000 +05:00
type: post
published: true
status: publish
categories:
- JavaScript
tags:
- date
- format
---

```javascript
// convert hours to 12-hour format
hours = ((hours + 11) % 12 + 1);
```

Links
---

- [StackOverflow: Convert date to another timezone in JavaScript](http://stackoverflow.com/questions/10087819/convert-date-to-another-timezone-in-javascript)
