---
date: 2018-04-20
title: Hugo Snippets
tags: 
- Hugo
- snippets
---

#### Include a partial template

```go
partial {{ "foo.html" . }}
partial {{ "foo" . }}
```

- you use the `partial` function
- the partial directory is `layouts > partials`, this is where your partial templates will go
- templates are always `.html` files
- you don't have to specify the file extension when including a partial template, Hugo knows it's an html file
- `{{ . }}` represents the current context. `{{ . }}` always refers to the *current context*, meaning the data changes based on where it was used. It's the JS equivalent of `this` in Go.
- `.` passes contextual variables explicitly


#### Show recent posts

```go
{{ range first 5 .Site.Pages }}
  <!-- code goes here -->
  <a href="{{ .Permalink }}">{{ .Title }}</a><br>
{{ end }}
```

- `.Site.Pages` is an array of all content ordered by Date with the newest first
- `first 5` gets the latest 5 posts. You can change this number as you like

#### Show all Sections

```go
{{ range .Site.Sections }}
  <a href="{{ .Permalink }}">{{ .Title }}</a><br>
{{ end }}
```

- `.Site.Sections` has all the top-level directories of the site

#### Show pages from a specific Section

```go
<h1>{{ with .Site.GetPage "section" "blog" }}{{ .Title }}{{ end }}</h1>
```

#### List all Sections


```go
<section>
  {{ range .Site.Sections }}
      <li><a href="{{ .Permalink }}">
        {{ if .Name }}{{ .Name}}
        {{ else }}{{ .Dir }}
        {{ end }}</a></li>
  {{ end }}
</section>
```

- Won't render anything if there are no content pages in the section.
- Won't list sub-sections

#### Render Site Menu

```go
  {{ if .Site.Menus.main }}
    {{ range .Site.Menus.main }}
      <a href="{{ .URL }}">{{ .Name }}</a>
    {{ end }}
  {{ end }}
```

- the above is when you don't have any submenus
- a site can have multiple menus,`main` is the menu you're rendering here


#### Format Dates
You can use the `Format` function and provide a custom date format string, like so:

```go
{{ .Date.Format "2018, January 02"}}
```

Alternatively, you can save the format as a variable in your config file and reference it from the templates, like so:

```yaml
# config.yaml
dateString: "2018, January 02"
```

```go
<!-- Template file -->
{{ .Date.Format .Site.Params.dateString }}
```

#### Get Tag URLs
[reference link](https://gohugo.io/templates/taxonomy-templates/#example-list-tags-in-a-single-page-template)

```go
<ul id="tags">
  {{ range .Params.tags }}
    <li><a href="{{ "/tags/" | relLangURL }}{{ . | urlize }}">{{ . }}</a> </li>
  {{ end }}
</ul>
```

- `relLandURL` is `relURL` with language prefix
- [`relURL`](https://gohugo.io/functions/relurl/) gives a relative URL according to a page's position in directory structure
- since `{{ . }}` is the current context, it'll give you the tag name
- `urlize` is a function that takes a string, sanitizes it for usage in URLs, and converts spaces to hyphens

```go
{{ "tags/" | absLangURL }} → "https://example.com/hugo/en/tags/"
{{ "tags/" | relLangURL }} → "/hugo/en/tags/"
{{ "tags/" | relLangURL }}{{ . }} → "/hugo/en/tags/foo"
{{ "tags/" | relLangURL }}{{ . | urlize }} → "/hugo/en/tags/foo"
```

- `{{ "/tags/" | relLangURL }}` will basically give you the relative URL for the `tags` page
- `{{ "/tags/" | relLangURL }}{{ . }}` will give you the tags link and append the tag name to it
- `{{ "/tags/" | relLangURL }}{{ . | urlize }}` will give you a sanitized URL direct to the specific tag page


#### Group content by Section
[reference link](https://gohugo.io/templates/lists/)

```go
<!-- Group content by Section -->

{{ range .Site.Pages.GroupBy "Section" }}
<h3>{{ .Key }}</h3> <!-- .Key = the Section Title -->
<ul>
  {{ range .Pages }}
    <li><a href="{{ .Permalink }}">{{ .Title }}</a></li>
  {{ end }}
</ul>
{{ end }}
```

#### List all Sections and their Pages

[reference link](https://discourse.gohugo.io/t/adding-weights-to-sections-to-order-on-the-homepage/856/3?u=aamnah)

```go
<!-- List sections with all their posts -->
<section>
  {{ range $section := .Site.Sections }}
    <h3>{{ $section.Title }}</h3>
    {{ range $section.Pages }}
      <a href="{{ .Permalink }}">{{ .Title }}</a><br>
    {{ end }}
  {{ end }}
</section>
```

#### Get all site Pages

```go
<!-- .Site.Pages
  array of all content ordered by Date with the newest first -->

<h2>Archive</h2>
<ul>
  {{ range .Site.Pages }}
    <li>
      <span class="date">{{ .Date.Format .Site.Params.dateFormat }}</span>
      <a href="{{ .Permalink }}">{{ .Title }}</a><br>
    </li>
  {{ end }}
</ul>
```

- `.Site.Pages` gets all the pages in the site
- `.Data.Pages` gets all the pages for the _given node_ (sections, taxonomies)

#### Get most popular tags
[reference link](https://discourse.gohugo.io/t/adding-latest-post-and-most-popular-tags-to-the-sidebar/246/7)

```go
<ul>
  {{ range first 10 .Site.Taxonomies.tags.ByCount }}
    <li><a href="{{ "/tags/" | relLangURL }}{{ .Name | urlize }}">{{ .Name }} <small>({{ .Count }} posts)</small></a></li>
  {{ end }}
</ul>
```

- You can change `10` to a different number to change the number of tags shown
- `{{ "/tags/" | relLangURL }}{{ .Name | urlize }}` will generate a link to the listing page for the specific tag

#### List all site Tags

```go
  <!-- https://gohugo.io/templates/taxonomy-templates/#example-list-all-site-tags -->
  <h6>Tags</h6>
  <section>
    {{ range $name, $taxonomy := .Site.Taxonomies.tags }}
    <a href="{{"/tags/" | relLangURL }}{{ $name | urlize}}">{{ $name }}</a>, 
    {{ end }}
  </section>
```


Links
--
- [Template Debugging](https://gohugo.io/templates/template-debugging/)