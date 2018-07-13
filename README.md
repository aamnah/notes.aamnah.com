# TLDR Dev Notes

## Current State
In it's current state the site/project serves as my diary for all web development, system administration and web design notes. There may be some personal posts, but they are not meant to be public.


## Committing Code

- `git add -A` to add all files
- `git commit -a -m 'update messgae'` to commit all files
- `git push -u tldrbucket master` to push changes to the repo on bitbucket
- `git remote` to show remotes, in case i forget the name of the remote repo

The site was originally built using Jekyll, but Jekyll turned into a slow hell when the posts turned into hundreds and the build times turned to 5-10mins. Hugo came to the rescue, super fast build times. But switching meant learning another syntax and setup, which slowed down the launch time. In the meantime, i kept adding notes, but they didn't show up online because the new site was never launched. Up until now.

Gatsby is another site generator that might be the next step for TLDRDevNotes.com

## Theme
The theme used is built from scratch, following this nice [Youtube series by Giraffe Academy]() and reading online documentation. 

The name of the theme being used is `tldr` and the path is `./themes/tldr`

TODO
---

- [x] Transfer/import posts from Jekyll
- [x] Convert the site to use Hugo
- [ ] Make the site look good
- [ ] add 'Edit on Github' link
- [ ] add Page/Post Titles

#### Features
- [ ] Search
- [ ] Disqus comments


#### Design
- [x] Use Prism.js for syntax highlighting
- [x] Change `dateFormat`
- [x] List all sections/notebooks/categories in the sidebar
- [ ] Add an Urdu layout
- [ ] add styles for block quotes and quotes
- [ ] add spacing to footer
- [ ] make the bullet point on home page lighter in color
- [ ] add left padding to the sidebar/website
- [ ] Update Prism.css styles (styles for `<code>` tags)

#### Performance
- [ ] Optimize images
- [ ] Compress and minify CSS/JS

### Git changelog
- added metadata to posts (Redux, ReactJS)
- Renamed files (removed dates)
- Fixed syntax highlighting (removed pygments `{% highlight python %}` code)
- Fixed code indentation
- Fixed minor typos
- Added new posts