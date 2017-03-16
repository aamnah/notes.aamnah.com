---
layout: post
title: '[find] Find and Delete files'
ctime: 2016-01-09
mtime: 2017-03-16
---

Delete files found:

```bash
find . -type f -name FILENAME -exec rm -rf {} \;
```

For example

```bash
find . -type f -name .DS_Store -exec rm -rf {} \;
```