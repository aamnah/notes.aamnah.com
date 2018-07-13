---
title: How to use Redcarpet for syntax highlighting in Jekyll
slug: /howto-use-redcarpet-jekyll-syntax-highlighting-fenced-code
tags: ['jekyll']
status: publish
---

why?
- because i don't wanna use liquid tags. i want to keep my posts in pure markdown in case i need to switch platforms or use the _posts_ elsewhere
- because Github uses Redcarpet for rendering `.md` content
- because it supports fenced code blocks.
- because it makes working with imported/exported sites easy


### install

```bash
sudo gem install redcarpet
```

### configuration

In your `_config.yml` file, add the entry for `redcarpet` and update the value for `markdown`.

```yml
markdown: redcarpet

redcarpet:
  extension: [
    "no_intra_emphasis",
    "tables",
    "autolink",
    "strikethrough",
    "with_toc_data",
    "fenced_code_blocks", # ```javascript ```
    "highlight", # ==highlight==
    "superscript", # 2^(nd)
    "footnotes", # [^somesamplefootnote]

  ]
``` 


Links
---

- [Github: Redcarpet](https://github.com/vmg/redcarpet/)
- [Redcarpet Extensions](https://george-hawkins.github.io/basic-gfm-jekyll/redcarpet-extensions.html)
