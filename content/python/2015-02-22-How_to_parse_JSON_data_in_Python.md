---
title: How to parse JSON data in Python
slug: how_to_parse_json_data_in_python
date: 2015-02-22
---

 ```python
import urllib2
import json

url = urllib2.urlopen("http://portfolio.us.reuters.com/us/api/PortfolioSpy.asp?symbol=APL.KA&format=json")

data = json.load(url)

print data
```

We need to do two steps:

1. Open the URL
2. Parse the JSON data

Open the URL
---
To open URLs in Python we need the `urllib2` module. Import the module in your script by adding `import urllib2`

With the `.urlopen` function we open the URL, which can be either a string or a `Request` object.



Parse the JSON data
---
To parse JSON data in Python we need the `json` module.

With the `.load` function we deserilaize fp (a .read()-supporting file-like object containing a JSON document) to a Python object using this conversion table.




Links
---
- [How to use urllib2 in Python](http://www.pythonforbeginners.com/python-on-the-web/how-to-use-urllib2-in-python/)
- [Python Docs: urllib2](https://docs.python.org/2/library/urllib2.html)
- [Python Docs: json](https://docs.python.org/3.3/library/json.html)
