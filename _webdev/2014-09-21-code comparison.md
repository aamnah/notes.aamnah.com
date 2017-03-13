---
layout: post
title: Code comparison
subtitle: see how the same code is written in different languages
description:
---

I'm one of those folks who are learning multiple programming languages at the same time. I occassionally wonder how the same program would be written in another language. It so happens that i'm also at the same time learning multiple human languages (French and Arabic) and i do the same thing with them. I wonder how the same sentence would be writtten in another language. It's good for my learning and it's fun to look up things i already know and find a new meaning. For this reason most of my grocery lists these days are written in French. Anyway, this post is about programming languages. Here's how you'd write the same basic example code in different languages:

## Example 1
### Python
	
    {% highlight python %}
    
    sister_age = 15
    brother_age = 12
    if sister_age > brother_age:
    	print "sister is older"
    elif sister_age == brother_age:
    	print "same age!"
    else:
    	print "brother is older"
    
    {% endhighlight %}

Another example

    {% highlight python %}
    
    temperature = 70
    if temperature > 60 and temperature < 75:
    	print "just Right!"
    else:
    	print "Too extreme"
    
    {% endhighlight %}
        
### JavaScript
	
    {% highlight javascript %}
    
	var sister_age = 15;
    var brother_age = 12;
    
    {% endhighlight %}
    
### PHP