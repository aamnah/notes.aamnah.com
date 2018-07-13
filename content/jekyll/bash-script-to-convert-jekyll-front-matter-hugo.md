
---
title: Bash Script to Convert Jekyll Front matter to Hugo
date: 2017-04-09
tags:
- Hugo
---

Changes
---

- `slug` is now `slug`
- `date` (creation time) is now `date`
- `lastmod` (modification time) is now `lastmod`
- rename all collection folders to remove the underscore (`_commands` should now be `commands`)
- update filenames to remove date + add that date to post metadata
- remove `layout:post` from front matter (post metadata)


#### Find and update existing meta tags

```bash
# Find and replace metadata tags
grep -rl --null mtime . | xargs -0 sed -i '' 's/mtime/lastmod/g'
grep -rl --null ctime . | xargs -0 sed -i '' 's/ctime/date/g'
grep -rl --null slug . | xargs -0 sed -i '' 's/slug/slug/g'
```

#### Rename collection folders

Renaming folders on macOS was a simple double-click and _Rename ** items_. Use the _Replace Text_ option from the dropdown, Find `_` and replace with nothing. Click _Rename_ and you're done

![Batch rename folders on macOS](/img/rename-jekyll-collection-folders-remove-underscore.png)

#### Remove `layout: post` from post
Because it was having issues with the Hugo theme, and because adding the same layout to every post is redundant and non-productive. In Hugo, you can set a default layout for all sections via config, unlike Jekyll where I had to add default layout _per collection_ in the config, meaning in order to set default layout for 10 collections, i had to add 10 config blocks.. It didn't matter if they all used the same layout..


```bash
# find all files containing 'layout: post'
# and replace 'layout: post' with an empty line 
grep -irl --null "layout\: post" . | xargs -0 sed -i '' 's/layout\: post//g'

```

#### Update filenames and add date to post metadata
For posts, i want to remove the date from the title and add it inside the file as post metadata

```bash
# find files based on pattern (date at the beginning)
# open them files one by one and update metadata
# rename files
```

Links
---

- [[grep, sed] Find and Replace string in multiple files](http://tldrdevnotes.com/commands/%5Bgrep,%20sed%5D%20Find%20and%20Replace%20string%20in%20multiple%20files.html)
- https://www.cyberciti.biz/faq/how-to-delete-files-containing-character-numberdigit/
x