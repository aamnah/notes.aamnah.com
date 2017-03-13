---
layout: post
title: how to redirect a URL in JavaScript
permalink: /howto-redirect-url-javascript
date: 2014-07-07 09:02:44.000000000 +05:00
type: post
published: true
status: publish
categories:
tags:
- javascript

---
<p>Here's how you redirect a URL in JavaScript. Just set the value of <code>window.location.replace</code> to the URL you want.</p>
<pre class="lang:js decode:true ">&lt;script type="text/javascript"&gt;
window.location.href = "http://www.url.com"
&lt;/script&gt;</pre>
<p>When redirecting, <code>window.location.replace</code> is preferred over <code>window.location.href</code>.</p>
<pre class="lang:js decode:true ">// similar behavior as an HTTP redirect
window.location.replace("http://stackoverflow.com");

// similar behavior as clicking on a link
window.location.href = "http://stackoverflow.com";</pre>

Links
---
- [StackOverflow: How do I redirect to another page in JavaScript/jQuery?](http://stackoverflow.com/questions/503093/how-can-i-make-a-redirect-page-in-jquery-javascript)
- [how to do a time delay redirect in JavaScript](http://www.tizag.com/javascriptT/javascriptredirect.php)
