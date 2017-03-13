---
layout: post
title: What to .gitignore
permalink: files-gitignore
---

Following are common files added to my .gitignore

    {% highlight bash %}
	# Mac OS X
	.DS_Store
    */.DS_Store
    
    # Opencart
    image/cache
    system/cache
    vqmod/vqcache
    
    # Webhost
    cgi-bin
    
    # Sass
    sass_cache
    .DS_Store
    {% endhighlight %}
