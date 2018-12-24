---
title: Using urllib2 in Python to get content from web pages
date: 2014-08-26
---

First of all, you'd need to import urllib2. Add `import urllib2` at the beginning of your python file.

### Opening a URL

```python
import urllib2

myurl = urllib2.urlopen('http://aamnah.com')
```

The contents of the page http://aamnah.com are now stored in the variable 'myurl'.

At this point if you `print myurl` it'll output `<addinfourl at 4420156736 whose fp = <socket._fileobject object at 0x10759c7d0>>` which basically tells you that the content exists instead of outputting the content. It's a message from Python telling you taht you have an object stored in your variable.
	
```python
contents = myurl.readlines()
print contents
```

will actually 'read' the contents of the web page and output that.

How to Parse HTML
---

- how to turn a web page to text
- how to return only links from that text
