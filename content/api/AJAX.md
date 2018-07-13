---
title: AJAX
date: 2016-11-24
lastmod: 2016-12-03
---

## AJAX `XMLHttpRequest()`

```javascript
const xhr = new XMLHttpRequest();

xhr.open('GET', url);
xhr.onload = function() {
  if(xhr.status === 200) {
    console.log(xhr.response)
  }
};
xhr.onerror = function() {};
xhr.send();
```

`onReadyStateChange` has been around since original spec. In v2, `onload`, `onprogress` and `onerror` were introduced, which are basically different states. Instead of defining a function that looks for `onReadyStateChange === 4`, you can use the `onload` function, which is more to the point and less typing.s

- `onReadyStateChange === 4` is the same as `onload`
- `onReadyStateChange === 3` is the same as `onprogress`

## CORS
When CORS is not supported, you'll pull your hair. One solution is adding `http://crossorigin.me/` at the beginning of your resource URL. But this only works for images, for JSON objects, it converts them to plain text. [CrossOrigin.me]

**jQuery works out of the box with jsonp enabled endpoints**. I tried working with `XMLHttpRequest` in vanilla JS but because of CORS disabled, had to fall back to jQuery.

## jQuery and JSONP

```javascript
$.ajax({
  url: "http://api.forismatic.com/api/1.0/",
  dataType: "jsonp",
  jsonp: "jsonp", // this was required by Forismatic
  data: {
    method: "getQuote",
    lang: "en",
    format: "jsonp"
  },
  success: function(response) {
    console.log(response);
  }
});
```

## React and AJAX
React has [_complimentary libraries_][1] that handle HTTP requests really well. The most common one being [Axios](https://github.com/mzabriskie/axios). Axios doesn't handle JSONP though. [reqwest](https://github.com/request/request) does.

## Fetch API
> The [Fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) provides an interface for fetching resources (including across the network).

does not support JSONP


## npm JSONP
[JSONP](https://github.com/webmodules/jsonp) is a node package. 

```javascript
npm install jsonp --save
```

```javascript
var jsonp = require('jsonp');

jsonp('http://www.example.com/foo', null, function (err, data) {
  if (err) {
    console.error(err.message);
  } else {
    console.log(data);
  }
});
```


Read more
---
- http://blog.garstasio.com/you-dont-need-jquery/ajax/#jsonp
- [CrossOrigin.me]: https://blog.codepen.io/2015/07/10/crossorigin-me/
- [jQuery: Working with JSONP](https://learn.jquery.com/ajax/working-with-jsonp/)
- [1]: https://github.com/facebook/react/wiki/Complementary-Tools#data-fetching
- [A Comparison of JavaScript HTTP Libraries for the Browser](https://www.sitepoint.com/comparison-javascript-http-libraries/)
- [Google Developers: Intro to fetch()](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)