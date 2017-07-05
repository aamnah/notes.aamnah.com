---
layout: post
title: '[grep, sed] Find and Replace string in multiple files'
ctime: 2016-01-06
mtime: 2017-03-16
---

# `grep` and `sed`


I recently had to replace every occurrence of a certain word / string in a ton of files spanning multiple directories, and this is the quickest way I've found to do it. It uses grep to search for a certain word and if it find its it runs sed to replace the strings you want. Note: This will not work on windows systems

## Basic Format

```bash
grep -rl matchstring somedir/ | xargs sed -i 's/string1/string2/g'
```

Note: The forward slash `/` delimiter in the sed argument could also be a different delimiter (such as the pipe `|` character). The pipe delimiter might be useful when searching through a lot of html files if you didn't want to escape the forward slash, for instance.

_matchstring_ is the string you want to match, e.g., "football" string1 would ideally be the same string as matchstring, as the matchstring in the grep command will pipe only files with matchstring in them to sed. string2 is the string that replace string1. There may be times when you want to use grep to find only files that have some matchstring and then replace on a different string in the file than matchstring. For example, maybe you have a lot of files and only want to only replace on files that have the matchstring of 'phonenumber' in them, and then replace '555-5555' with '555-1337'. Not that great of an example (you could just search files for that phone number instead of the string 'phonenumber'), but your imagination is probably better than mine.

## Example

```bash
grep -rl 'windows' ./ | xargs sed -i 's/windows/linux/g'
```

This will search for the string 'windows' in all files relative to the current directory and replace 'windows' with 'linux' for each occurrence of the string in each file.

- `r` or `--recursive` is for recursive, so it searches subdirectories too
- `l` or `--files-with-matches` is for listing matched files

```
     -l, --files-with-matches
             Only the names of files containing selected lines are written to standard output.  grep will only search a file until a match has been found, mak-
             ing searches potentially less expensive.  Pathnames are listed once per file searched.  If the standard input is searched, the string ``(standard
             input)'' is written.

     -R, -r, --recursive
             Recursively search subdirectories listed.
```

Links
---

- [http://vasir.net/blog/ubuntu/replace_string_in_multiple_files](http://vasir.net/blog/ubuntu/replace_string_in_multiple_files)
