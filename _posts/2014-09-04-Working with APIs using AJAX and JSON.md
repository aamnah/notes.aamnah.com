---
layout: post
title: Working with APIs using AJAX and JSON
permalink: working-with-ajax-json-api
subtitle: Learn how to use AJAX and jQuery to get photos from Flickr's public image feed using the Flickr API
categories: 
- how-to
---

Code:
---
```javascript
$(document).ready(function() {

}); // end ready
```

Explanation:
---

```javascript
$(document).ready(function() {

});
```

tells the function to wait until the HTML for the page has completely loaded before running the JavaScript code placed inside it.


#### making an ajax request when a button is pushed
	
```javascript
$.getJSON(flickerAPI, flickrOptions, displayPhotos);
.getJSON(url, data, callback);
```
