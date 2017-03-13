---
title: Getting started with Jekyll
permalink: /getting-started-jekyll
tags: ['getting started', 'guides', 'jekyll']
status: draft
---

### installation

```bash
sudo gem install jekyll
jekyll new my-awesome-site
cd my-awesome-site
jekyll serve # watches for changes by default
# => Now browse to http://localhost:4000
```

`jekyll serve` _watches_ for changes by default. It serves the site locally on port 4000. To build the site for production, you can use the build command.

```bash
jekyll build --watch
```

### configuration

Links
---
- https://jekyllrb.com/
- https://jekyllrb.com/docs/configuration/