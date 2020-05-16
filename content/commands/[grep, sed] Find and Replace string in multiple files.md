---

title: '[grep, sed] Find and Replace string in multiple files'
date: 2016-01-06
lastmod: 2020-05-16
---

```bash
# replace all htttp://link to https://link in all files
grep -rl 'http://' ./ | xargs sed -i 's|http://|https://|g'
```

```bash
grep -rl --null mangoes/ . | xargs -0 sed -i '' 's/mangoes/oranges/g'
```

## why?

Here's the scenario, i exported some files for this blog from a software that used a different image folder structure. Lots of new files with different links. So i needed a way to 

- find all the files spanning multiple directories containing a specific string
- edit (in place) all them files found in multiple directories and replace it with new string

Basically, what i needed to do was change the path for images directory from `resources/file.png` to `/assets/img/file.png`. But i didn't know which files had the new link structure and which files had the old one. We're talking about 500+ files, in 25+ directories, so i can't just go open them one by one and find stuff..

### Basic Format

```bash
grep -rl matchstring somedir/ | xargs sed -i 's/string1/string2/g'
```

<div class="Post-note">
Note: sed takes whatever follows the `s` as the separator.  The forward slash `/` delimiter in the sed argument could also be a different delimiter (such as the pipe `|` character). The pipe delimiter might be useful when searching through a lot of html files if you didn't want to escape the forward slash, for instance.
</div>

- *matchstring* is the string you want to match, e.g., "football" 
- *string1* would ideally be the same string as matchstring, as the matchstring in the grep command will pipe only files with matchstring in them to sed. 
- *string2* is the string that replace string1. 

There may be times when you want to use grep to find only files that have some matchstring and then replace on a different string in the file than matchstring. For example, maybe you have a lot of files and only want to only replace on files that have the matchstring of 'phonenumber' in them, and then replace '555-5555' with '555-1337'. Not that great of an example (you could just search files for that phone number instead of the string 'phonenumber'), but your imagination is probably better than mine.

#### Example

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

### File names with spaces, blanks or newlines

On macOS, you may run into issues if your file names have blanks, empty spaces or newlines in them. We are using [`xargs`](https://en.wikipedia.org/wiki/Xargs) to take the output of `grep` as our input and build the command on that. The default `xargs` behaviour is to delimit input with blanks and newlines. The default `grep` output separates filenames by newlines. See the issue?

If your file is named `blah blah blah.txt`, and you found it via `grep`, you'll get the following error when passing it to `sed` via `xargs`

```
sed: ./blah : No such file or directory
```

> `xargs` reads items from the standard input, _delimited by blanks (which can be protected with double or single quotes or a backslash) or newlines_, and executes the command (default is /bin/echo) one or more times with any initial-arguments followed by items read from standard input. _Blank lines on the standard input are ignored_.

> Because Unix filenames can contain blanks and newlines, this default behaviour is often problematic; _filenames containing blanks and/or newlines are incorrectly processed by `xargs`_ 

> In these situations it is better to use the `-0` option, which prevents such problems. When using this option you will need to ensure that the program which produces the input for `xargs` also uses a null character as a separator. If that program is GNU `find` for example, the `-print0` option does this for you.

We're using `grep` to find our files and `grep` comes with a `--null` option to print a zero-byte after the file name, essentially getting rid of the newline. And to `xargs` we'll pass the `-0` option which changes `xargs` to expect NULL characters as separators, instead of spaces and newlines.

```bash
grep -rl --null resources/ . | xargs -0 sed -i '' 's|resources/|/assets/img/|g'
```


Links
---
- [StackOverflow: Recursive search and replace in text files on Mac and Linux](https://stackoverflow.com/questions/9704020/recursive-search-and-replace-in-text-files-on-mac-and-linux)
- [http://vasir.net/blog/ubuntu/replace_string_in_multiple_files](http://vasir.net/blog/ubuntu/replace_string_in_multiple_files)
- [manual: xargs](https://linux.die.net/man/1/xargs)
- [manual: grep](https://www.gnu.org/software/grep/manual/grep.html)
- [Using different delimiters in sed](http://backreference.org/2010/02/20/using-different-delimiters-in-sed/)
- [sed, replace in linux http://cdn1 with https://cdn1](https://serverfault.com/a/625834)
