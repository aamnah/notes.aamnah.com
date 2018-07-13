---
title: "Hugo vs Jekyll First Thoughts"
date: 2017-09-03T12:42:25+05:00
draft: true
tags:
- Hugo
---

Hugo wins because:

- Super fast
- Live reloads the browser
- Picks up changes in config files, no need to restart the server
- 3 config file formats supported (.toml|.yaml|.json), config files are loaded in sequence, so you can have multiple configs in multiple files (for sepration of concerns sake) and they'll all load

```bash
# start the server with Drafts enabled
hugo server -D
```

### themes

```yaml
# define the theme to use in your config file
theme: mytheme
```

```bash
# create a theme scaffolding
hugo new theme mytheme

# change a theme on runtime with `-t`
hugo -t mytheme # build
hugo serve -t mytheme # serve
```

You can override your themes. Anything you put in `site/layouts` will override `site/themes/layout`. Must have the same file name in order to do so.


### Archetypes

- contain preconfigured _front matter_ for your website’s _content types_.
- They're like templates (written in Go) that you can use when you're creating a content post
- Kinda like Collections in Jekyll
- files are saved in the `archetypes` dir

```bash
# hugo new <content-section>/<file-name.md>
hugo new posts/my-first-post.md

```

Troubleshooting
---

- If you set up a new site, installed a theme and for some reason it shows up all broken, just restart Hugo. Restarting will pick up your theme change and sync the themes files and folders with the sites files and folders