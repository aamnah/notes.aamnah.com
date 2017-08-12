---
title: Select files with multiple different file extensions
subtitle: Select all HTML files and PHP Scripts and XML files? Yep.
ctime: 2017-08-12
---

---

## tl;dr

```bash
# *.{a,b,c,d}
ls -alh *.{md,json,html,xml} # list all files ending in given extensions
find . -type f *.{html,xml,php} # find all files ending in given extensions
find . -type f *.{html,xml,php} -exec rm -rf {} \; # find and delete all files ending in given extensions
```
---

## Find/List files

```bash
find . -type f *.{html,xml,php}
```

will `find` all (`*`) _files_ (`-type f`) in the _current directory_ (`.`) ending in `.html`, `.xml` or `.php`. You can add as many comma seperated values as you want, no spaces in between.

One case scenario when this has been useful is when i had to delete hacked files from a WordPress `wp-content/uploads` directory. It contained files with executable PHP code, spam pages ending in .html, XML scripts and the like left behind by the hacker. (Usually, the WordPress uploads directory only contains images or uploaded files - PDFs and such, but not scripts. Some plugins may use the Uploads directory, but that's not our concern right now, moving on..).

```bash
ls -alh *.{md,json,html,xml}
```

```bash
-rw-r--r--  1 aamnah  staff   247B Feb 23 09:18 README.md
-rw-r--r--  1 aamnah  staff   1.2K Feb 24 15:19 about.md
-rw-r--r--  1 aamnah  staff   1.3K Feb 23 09:21 feed.xml
-rw-------  1 aamnah  staff   908B Mar 13 20:55 index.html
-rw-r--r--@ 1 aamnah  staff   6.5K Mar 22 08:41 progress.md
-rw-r--r--  1 aamnah  staff   202B Mar 13 14:14 quotes.md
-rw-r--r--  1 aamnah  staff   547B Mar 13 15:05 resources.md
-rw-r--r--  1 aamnah  staff   308B Mar  2 10:46 search.json
```

`find` works recursively while `ls` will only list files in the current directory (and not it's sub-dirs)

### Delete files

```bash
find . -type f *.{html,xml,php} -exec rm -rf {} \;
```