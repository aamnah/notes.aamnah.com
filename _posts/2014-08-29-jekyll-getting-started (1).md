---
layout: post
title: Getting Started with Jekyll 
permalink: jekyll-getting-started

---

### To start Jekyll
cd to the jekyll install folder.

    {% highlight bash %}
    serve jekyll --watch
    {% endhighlight %}
    
`--watch` is handy as it watches the folder for changes and automatically regenerates the site without you having to stop and start Jekyll again.

### Import from WordPress 

    {% highlight ruby %}
	ruby -rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"   => "blog_aamnah",
      "user"     => "aamnah",
      "password" => "passowrd",
      "host"     => "db.host.com",
      "socket"   => "",
      "table_prefix"   => "wp_",
      "clean_entities" => true,
      "comments"       => true,
      "categories"     => true,
      "tags"           => true,
      "more_excerpt"   => true,
      "more_anchor"    => true,
      "status"         => ["publish"]
    })'
    {% endhighlight %}



### Syntax Highlighting: 
generate syntax css file
    
    {% highlight bash %}
	pygmentize -S default -f html > assets/css/pygments/default.css
    {% endhighlight %}
   
Link to the generated file to your Jekyll template's head, usually `_includes/head.html`.

##### Sources:

[Using Jekyll](http://code.tutsplus.com/tutorials/using-jekyll--cms-20956)
[WordPress Importer](http://import.jekyllrb.com/docs/wordpress/)
[Configuration](http://jekyllrb.com/docs/configuration/)
[Highlight with Jekyll and pygments doesn't works](http://stackoverflow.com/questions/6761990/highlight-with-jekyll-and-pygments-doesnt-works)