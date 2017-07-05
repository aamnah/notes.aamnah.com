---
layout: post
title: jQuery and AJAX
permalink: jquery-ajax-shorthand-examples
status: draft
ctime: 2015-11-04

---

### the difference between jQuery's `.load()` AJAX method and jQuery's other shorthand AJAX methods?
The `.load()` method must be chained onto a jQuery selection. For example, 

    {% highlight javascript %}
	$('#element').load('page.html');
    {% endhighlight %}
    
.get()
---

    {% highlight javascript %}
	$.get(url, data, callback);
    {% endhighlight %}
