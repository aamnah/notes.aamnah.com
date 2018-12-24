---
title: jQuery vs. JavaScript
slug: jquery-vs-javascript
category: JavaScript
date: 2014-09-04
---

jquery = $

`jquery.load('text.html')` is the same as `$.load('text.html')`

### Selecting an element by id

Javascript:
	
```javascript
document.getElementById('#jumbo')
```

jQuery:

```javascript
$('#jumbo')
```


### Hiding an element

Javascript:

```javascript
document.getElementById('#load').style.display = 'none';
```

jQuery:

```javascript
$('#load').hide();
```

### Inserting HTML
Javascript:
	
```javascript
var text = "hello there!"
document.getElementById('#page').innerHTML = text;
```

jQuery:

```javascript
var text = "hello there!"
$('#page').html(text);
```

### Loops
Javascript:

```javascript
for (i = 0, i < items.length, i++) {};
```

jQuery:

```javascript
$.each(array, function(i, item)){};
```
    
### Making an AJAX request

Javascript:
	
```javascript
xhr = new XMLHttpRequest ();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
        document.getElementById('#ajax').innerHTML = xhr.responseText;
        }
    }
};
xhr.open('GET','sidebar.html');
xhr.send();
```

jQuery:

```javascript
$('#ajax').load('sidebar.html');
```
    
    
