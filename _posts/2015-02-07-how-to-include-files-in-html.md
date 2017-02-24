---
layout: post
title: How to include files in HTML
tags: how-to
---

via JavaScript
---
**a.html**

    {% highlight html %}
	<html> 
      <body>
      <h1>Put here your HTML content before insertion of b.js.</h1>
          ...

      <script src="b.js"></script>

          ...

      <p>And here whatever content you want afterwards.</p>
      </body>
    </html>
    {% endhighlight %}
 
**b.js:**

    {% highlight javascript %}
    document.write('\
    \
        <h1>Add your HTML code here</h1>\
    \
         <p>Notice however, that you have to escape LF's with a '\', just like\
            demonstrated in this code listing.\
        </p>\
    \
    ');
    {% endhighlight %}
 
JavaScript is preferred since jQuery is that jQuery.js is ~90kb in size. Keep the amount of data to load as small as possible.

In order to insert the escape characters without much work, it is recommended to use a simple regular expression that matches whole lines (`^.*$`) and adds `\` at the end of each line. For example, you could use `sed` on the command line like this:

    {% highlight bash %}
	sed 's/^.*$/&\\/g;' b.html > escapedB.html
    {% endhighlight %}
 
via jQuery
---
**a.html:**

    {% highlight html %}
    <html> 
      <head> 
        <script src="jquery.js"></script> 
        <script> 
        $(function(){
          $("#includedContent").load("b.html"); 
        });
        </script> 
      </head> 

      <body> 
         <div id="includedContent"></div>
      </body> 
    </html>
    {% endhighlight %}
 
**b.html:**

    {% highlight html %}
	<p> This is my include file </p>
    {% endhighlight %}
 
[jQuery .load() Documentation](http://api.jquery.com/load/)

via Server Side Includes (SSI)
---
A simple server side include directive to include another file found in the same folder looks like this:

    {% highlight html %}
	<!-- #include virtual="a.html" --> 
    {% endhighlight %}
 
[configuring SSI for your server](http://httpd.apache.org/docs/2.4/howto/ssi.html#configuring)

---

[Source](http://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file)