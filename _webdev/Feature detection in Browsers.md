---
layout: post
title: Feature Detection in Browsers, Shims and Polyfills
permalink: browser-feature-detection-polyfills-shims
status: draft
ctime: 2017-03-21
---

Shims vs. Polyfills

Call it shims if you want to keep the directory generic. A polyfill is a type of shim that retrofits legacy browsers with modern HTML5/CSS3 features usually using Javascript or Flash. A shim, on the other hand, refers to any piece of code that performs interception of an API call and provides a layer of abstraction. It isn't necessarily restricted to a web application or HTML5/CSS3.

http://stackoverflow.com/a/6671015/890814

## Browser (user agent) sniffing
Detect browser capabilities and features instead of detecting the browser itself. Feature detection is better than browser sniffing.

https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
https://www.udemy.com/html5-apis-for-javascript-a-course-for-web-developers/learn/v4/t/lecture/178024?start=0
https://developer.mozilla.org/en-US/docs/Using_Web_Standards_in_your_Web_Pages/Developing_cross-browser_and_cross-platform_pages

```javascript
let xhr

if (window.XMLHttpRequest) { // If AJAX is supported
  xhr = new XMLHttpRequest();
} else {
  xhr = new ActiveXObject('Microsoft.XMLHTTP'); // older IE had their own ActiveX identical to AJAX
}

xhr.open('GET', 'mywebservice.php', true);
xhr.send(null)
```

the same can also be written as 

```javascript
let xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
```

Detect if Geolocation API is supported

```javascript
if ("geolocation" in navigator) {
  /* geolocation is available */
} else {
  /* geolocation IS NOT available */
}
```

Modernizer

Different implementations of the same API by different browsers