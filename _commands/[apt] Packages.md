---
layout: post
title: '[apt] Packages'
command: apt
permalink: apt
manpage: http://manpages.ubuntu.com/manpages/zesty/man8/apt.8.html
ctime: 2015-11-27
mtime: 2015-12-03
---

To get a list of packages installed locally do this in your terminal:

```bash
dpkg --get-selections | grep -v deinstall
```

(The `-v` tag "inverts" grep to return non-matching lines)

To get a list of a specific package installed:

```bash
dpkg --get-selections | grep postgres
```

To save that list to a text file called packages on your desktop do this in your terminal:

```bash
dpkg --get-selections | grep -v deinstall > ~/Desktop/packages
```

Alternatively, simply use

```bash
dpkg -l
```