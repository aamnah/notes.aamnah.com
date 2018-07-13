---
title: Hugo Templates in 15 Minutes
date: 2018-05-06
tags:
- Hugo
---

### Index page

### List and Single Pages

### Menus
- Menus are defined in `config.toml` and used in template files
- You can define multiple different menus
- `.Site.Menus` let's you access any menu by name

```toml
# config.toml
# Site Menus
[menu]
  # Main Menu
  [[menu.main]]
    name = "Home"
    url = "/"
  [[menu.main]]
    name = "About"
    identifier = "about"
    url = "/about"
  [[menu.main]]
    name = "Getting Started"
    identifier = "getting_started"
    url = "/getting_started"
  [[menu.main]]
    name = "FAQs"
    url = "/faq"
```

```go
<!-- Template -->
{{ if .Site.Menus.main }}
  {{ range .Site.Menus.main }}
    <a href="{{ .URL }}">{{ .Name }}</a>
  {{ end }}
{{ end }}
```
### Partials

### Blocks and Base Templates

- the base code goes in `layouts/_default/baseof.html`
- it's the template for our entire Hugo site
- Blocks avoid copy/paste code. Instead of including the `<header>` and `<footer>` partials in every template, you can just define the new code as _blocks_ and use the rest of the code as defined in the base template.
- `index.html` and `404.html` don't use the `baseof.html` template
- Blocks serve as defaults, you can overwrite them in other templates, something you can't do with partials. For example, if you defined a code block called `footer` in the base template, you can override that block from any other template by defining the `footer` in that template

```go
<!-- baseof.html -->

{{ block "main" . }}
  <!-- Code goes here -->
{{ end }}
```

```go
<!-- single.html -->

{{ define "main" }}
  <!-- Code goes here -->
{{ end }}
```