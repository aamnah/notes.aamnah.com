---
title: Plain JavaScript vs. jQuery
description: Learn about different JavaScript methods and their jQuery method counterparts
date: 2017-10-13
---

### Accessing elements

```js
// JavaScript
// .querySelector() works for classes, ids and tags
document.querySelector('.link') // by class
document.querySelector('#menu') // by ID
document.querySelector('body') // by tag

// other methods
document.getElementById('#el')
document.getElementByClassname('.el')

```

```js
// jQuery
$('.link') // by class
$('#menu') // by ID
$('body') // tag
```

### Event handlers

```js
// JavaScript
$el.addEvenetListener('click', function() { })

```

```js
// jQuery
// .on() is the event handler for all kinds of events
$el.on('click', function() { })

// you also have functions to directly target specific events
$el.click(function() { })
$el.blur(function() { })
$el.change(function() { })
$el.dblclick(function() { })
```

### Adding/Removing/Toggling CSS classes

```js
// JavaScript
$el.classList.toggleClass('class')
$el.classList.addClass('class', 'anotherClass')
$el.classList.removeClass('class', 'anotherClass')

```

```js
// jQuery
$el.toggleClass('class')
$el.addClass('class anotherClass')
$el.removeClass('class anotherClass')
```