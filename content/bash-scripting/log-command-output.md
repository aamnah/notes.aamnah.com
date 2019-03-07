---
title: Log Bash Command Output to a File
date: 2019-03-07
---

**tl;dr**: Use redirection, `>` and `>>` etc.

```bash
command > file.xt # redirect stdout
command 2> file.txt # redirect stderr
command &> file.txt # redirect both stdout and stderr
```


Links
---
- [askUbuntu: How do I save terminal output to a file?](https://askubuntu.com/a/731237/897311)