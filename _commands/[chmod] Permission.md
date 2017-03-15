---
layout: post
title: '[chmod] Permissions'
permalink: chmod
command: chmod
ctime: 2015-11-19
mtime: 2015-11-20
---

## change permissions on all dirs

```bash
find . -type d -exec chmod 700 {} \;
```

## change permissions on all files

```bash
find . -type f -exec chmod 600 {} \;
```

## change permissions recursively
use the `-R` flag

```bash
chmod 755 -R var/
```

## make executable

```bash
chmod +x file
```

## copy permissions from another file

On GNU/Linux `chown` and `chmod` have a `--reference` option

```bash
chown --reference=otherfile thisfile
chmod --reference=otherfile thisfile
```

## Example from Magento 

Enter the following commands to set permissions:

```bash
find . -type f -exec chmod 400 {} \;
find . -type d -exec chmod 500 {} \; 
find var/ -type f -exec chmod 600 {} \; 
find media/ -type f -exec chmod 600 {} \;
find var/ -type d -exec chmod 700 {} \; 
find media/ -type d -exec chmod 700 {} \;
```


Links
---
- [After You Install Magento: Recommended File System Ownership and Privileges](http://devdocs.magento.com/guides/m1x/install/installer-privileges_after.html)
- [StackOverflow: Clone ownership and permissions from another file?](http://unix.stackexchange.com/questions/20645/clone-ownership-and-permissions-from-another-file)