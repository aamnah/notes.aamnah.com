---
title: How to import a WordPress blog in Jekyll (MacOS)
slug: /howto-import-wordpress-jekyll-macos
---

install `jekyll-import` and it's dependencies

```bash
# install homebrew if not already installed
# /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew install mysql
sudo gem install unidecode sequel mysql2 htmlentities hpricot open_uri_redirections 
sudo gem install jekyll-import
```

Export your WordPress site content (Dashboard > Tools > Export). Now import the downloaded file using the following command: 

```ruby
ruby -rubygems -e 'require "jekyll-import"; 
  JekyllImport::Importers::WordpressDotCom.run({ 
    "source"    => "/Users/aamnah/tldrdevnotes.wordpress.2017-02-23.xml",
  })'
```
Make sure to update the source, it should have the location of your downloaded wordpress export file. You should something like below:

```
Downloading images for Sass: Creating a Color Palette
  http://mysite.com/wp-content/uploads/2014/05/Screen-Shot-2014-05-22-at-0.23.21-300x220.jpeg
    OK!
Imported 6 attachments
Imported 18 nav_menu_items
Imported 1 custom_csss
Imported 1 pages
Imported 73 posts
```
