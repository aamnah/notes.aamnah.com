# Aamnah's Dev Notes

[![Netlify Status](https://api.netlify.com/api/v1/badges/d8023249-34f0-4899-946c-82ebfa593754/deploy-status)](https://app.netlify.com/sites/notes-aamnah/deploys)

update 2024-06-06
new [Aamnah.com](https://aamnah.com) based on Hugo was launched yesterday. That site shows all the [up to date notes](https://aamnah.com/notes) and takes them from a separate [notes repo](https://github.com/aamnah/notes). This notes repo is longer updated. It is only here for archival reasons.

---

update 2020-04-30

- The domain is being changed from http://tldrdevnotes.com to http://notes.aamnah.com. Will eventually become aamnah.com/notes (for SEO reasons)
- The site maybe migrated from Hugo to WordPress or Gatsby

---

## Current State
In it's current state the site/project serves as my diary for all web development, system administration and web design notes. There may be some personal posts, but they are not meant to be public.

The site was originally built using Jekyll, but Jekyll turned into a slow hell when the posts turned into hundreds and the build times turned to 5-10mins. Hugo came to the rescue, super fast build times. But switching meant learning another syntax and setup, which slowed down the launch time. In the meantime, i kept adding notes, but they didn't show up online because the new site was never launched. Up until now.

Gatsby is another site generator that might be the next step for TLDRDevNotes.com

## Theme
The theme used is built from scratch, following this nice [Youtube series by Giraffe Academy]() and reading online documentation. 

The name of the theme being used is `tldr` and the path is `./themes/tldr`

## Static assets

- Images directory is `./static/img/`
- Use `/img/` before the file name when referencing the image in files.

## Developing the site

```bash
brew install hugo
hugo server -D --disableFastRender # -D, --buildDrafts, include content marked as draft
```

TODO
---

- [x] Transfer/import posts from Jekyll
- [x] Convert the site to use Hugo
- [x] Make the site look good
- [x] add 'Edit on Github' link
- [x] add Page/Post Titles
- [x] add _path_ to post meta to make it easeir to find the relevant file

#### Features
- [ ] Search
- [ ] Disqus comments


#### Design
- [x] Use Prism.js for syntax highlighting
- [x] Change `dateFormat`
- [x] List all sections/notebooks/categories in the sidebar
- [ ] Add an Urdu layout
- [ ] add styles for block quotes and quotes
- [x] add spacing to footer
- [ ] make the bullet point on home page lighter in color
- [x] add left padding to the sidebar/website
- [ ] Update Prism.css styles (styles for `<code>` tags)
- [x] make code wrap so it doesn't overflow off the page
- [x] add fontawesome (or some other svg icons)

#### Performance
- [ ] Optimize images
- [ ] Compress and minify CSS/JS

#### SEO and Visibility
- [ ] Generate a sitemap
- [ ] robots.txt
- [ ] add default meta info

### Changelog

Dec 25, 2018
- moved site from Bitbucket to Github
- added _file path_ (this makes my life easier when i have to find the file inside a folder in order to edit it)
- added _Edit on Github_ link (so if anyone wants to edit the page, it opens it up on Github)
- wrap code blocks using `white-space: pre-wrap;` in `prism.css`
- removed _all tags_ from the sidebar, they were unnecessary
- updated copyright to CC BY-SA 4.0 and ownership

Jul 13, 2018
- added metadata to posts (Redux, ReactJS)
- Renamed files (removed dates)
- Fixed syntax highlighting (removed pygments `{% highlight python %}` code)
- Fixed code indentation
- Fixed minor typos
- Added new posts
