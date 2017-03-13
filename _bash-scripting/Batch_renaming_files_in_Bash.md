---
layout: post
title: Batch renaming files in Bash
permalink: batch-rename-files-bash
ctime: 2015-04-17
---
    
Use `rename`, which is a Perl script and maybe on your system already. You can use the rename command to quickly rename files using a regular expression pattern. For instance, if you wanted to rename all files containing foo to contain bar instead, you could use a command like this one:

```bash
rename –v 's/foo/bar/g' *    
```

## How to rename multiple files based on a pattern
[<i class="fa fa-link"></i>][1]

```bash
for f in * ; do cp "$f" 2014-08-26-"$f" ; done    
```

```bash
mv $f ${f#[0-9]*-}
```
Test

```bash
$ ls
23-a  aa23-a  hello
$ for f in *; do mv $f ${f#[0-9]*-}; done
$ ls
a  aa23-a  hello
```

## Batch rename files based on file type, remove space

Let's say you have image files named like this:

- a88d09 989_01.jpg
- a88d09 989_03.jpg
- a88d09 989_05.jpg
- a88d09 989_07.jpg

The following will rename all these .jpg files and **remove the space** in file name. 

```bash
IFS="\n"
for file in *.jpg;
do
    mv "$file" "${file//[[:space:]]}"
done    
```


## Change spaces into Underscores

```bash
rename "s/ /_/g" *    
```

OR, if you don't have `rename`

```bash
for f in *\ *; do mv "$f" "${f// /_}"; done
```

### Rename only files to change spaces into Underscores
    
```bash
find -name "* *" -type f | rename 's/ /_/g'
```

### Rename only dirs to change spaces into Underscores

```bash
find -name "* *" -type d | rename 's/ /_/g'
```

## Change spaces into underscores, recursively

```bash
find /tmp/ -depth -name "* *" -execdir rename 's/ /_/g' "{}" \;
```

`/tmp/` is the folder where you are looking for files, 

Links
---

[1]: http://stackoverflow.com/questions/15380205/rename-multiple-files-in-bash
- [Bash script to replace spaces in file names](http://stackoverflow.com/questions/2709458/bash-script-to-replace-spaces-in-file-names)
- [Detox - clean up file name](http://detox.sourceforge.net)