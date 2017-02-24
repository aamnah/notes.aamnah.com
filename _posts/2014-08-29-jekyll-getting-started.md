---
layout: post
---
#Jekyll




WordPress Import
---


	ruby -rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"   => "blog_aamnah",
      "user"     => "aamnah",
      "password" => "merc1lagod00m",
      "host"     => "rds.hostmarkaz.com",
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


### To start Jekyll
cd to the jekyll install folder.

	serve jekyll --watch
    
`--watch` is handy as it watches the folder for changes and automatically regenerates the site without you having to stop and start Jekyll again.

### Syntax Highlighting: 
generate syntax css file

	pygmentize -S default -f html > assets/css/pygments/default.css
    
Link to the generated file to your Jekyll template's head, usually `_includes/head.html`.

#####Sources:

[Using Jekyll](http://code.tutsplus.com/tutorials/using-jekyll--cms-20956)
[WordPress Importer](http://import.jekyllrb.com/docs/wordpress/)
[Configuration](http://jekyllrb.com/docs/configuration/)
[Highlight with Jekyll and pygments doesn't works](http://stackoverflow.com/questions/6761990/highlight-with-jekyll-and-pygments-doesnt-works)