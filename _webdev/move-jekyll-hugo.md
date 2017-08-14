---
title: Moving from Jekyll to Hugo
status: draft
ctime: 2017-08-14
---

### Why?

- Jekyll is SLOW. Takes about 25 secs to build this site right now, and this site is pretty small right now, less than 500 posts. There are no tags or categories or pagination yet and it's at 20 seconds already. I have to _wait_ for it to finish in order to see any changes, and i make changes often, so i end up waiting often. 
- Slow is pretty much my only complaint. While i haven't been able to put up pages with clickable tags, and dislike that in order to set a default post for a collection i have to create a new config block (i have about 20+ collections, which means 20+ code blocks in `config.yml` that just say `layout: post`), Jekyll has been working for this very simple site of mine.

### Hugo 
- Everything goes in the `content` folder where you can have subfolders. (No `_drafts`, `_posts` and no creating a lot of `_collection` folders in the root dir like in Jekyll)
- Pagination and redirects (`aliases`) works out of the box
- instead of having to place unfinished posts inside the `_draft` folder, you can put `draft: true` in the front matter of the post
- Built-in `livereload`, automatically refreshes your browsers when changes are made
- Templates use [Go](https://gohugo.io/templates/introduction/) instead of Liquid
- Hugo will accept TOML, YAML, or JSON (default is TOML) while Jekyll accepts only YAML. The front matter metadata at the top of each content file uses the same syntax as the config. 
- You can set up templates called **archetypes** that hold customized front matter for pages of different types (like if you have both a blog and a podcast on your website)

```bash
brew install hugo # install hugo
hugo version # verify your new install
hugo new site quickstart # create a new quickstart site
hugo new content/<page.md> # create new content page
hugo serve # serve and watch the site
hugo # build Hugo site
```


Links
---
- [Hugo vs. Jekyll: Comparing the leading static website generators](https://opensource.com/article/17/5/hugo-vs-jekyll)
- [Hugo vs. Jekyll: a showdown of static site generator](https://novelist.xyz/tech/hugo-vs-jekyll-static-site-generator/)