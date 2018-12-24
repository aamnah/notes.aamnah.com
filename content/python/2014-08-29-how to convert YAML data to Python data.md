---
title: How to convert yaml data to python data
slug: convert_yaml_to_python
date: 2014-08-29
---

This requires that you have [PyYAML](http://pyyaml.org/wiki/PyYAMLDocumentation) installed. 

```bash
sudo pip install pyyaml
```
    
### YAML file

Let's assume your YAML file is called `post.yml`. 

```yaml
---
author: aamnah
date: 28-08-2014
slug: sample-post
tags: sample, post, example
categories: code
```
    
### Code

Let's save our code in a file called `convertyaml.py`. 
	
```python
# Let's open the .yml file, read it and save it in a variable called data
data = open('post.yml').read()

# Load the YAML library and convert it
import yaml
myvars = yaml.load(data)

# Let's pretty print that data to screen
from pprint import pprint as pp
pp(myvars)
```

    
### Output

To run the script we just created we'll do `python convertyaml.py`.

```python
{'author': 'aamnah',
'categories': 'code',
'date': '28-08-2014',
'layout': 'post',
'slug': 'sample-post',
'tags': 'sample, post, example'}
```
    
Note that it lists the variables in alphabetical order.


Links
----

- [YAML](http://en.wikipedia.org/wiki/YAML)
