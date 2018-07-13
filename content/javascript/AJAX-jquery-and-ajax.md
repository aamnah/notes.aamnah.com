---
title: jQuery and AJAX
slug: jquery-ajax-shorthand-examples
category: JavaScript
date: 2015-11-04
---

### the difference between jQuery's `.load()` AJAX method and jQuery's other shorthand AJAX methods?
The `.load()` method must be chained onto a jQuery selection. For example, 

```javascript
$('#element').load('page.html');
```

.get()
---

```javascript
$.get(url, data, callback);
```
