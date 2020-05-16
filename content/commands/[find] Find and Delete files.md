---

title: '[find] Find files and folder by name, type, date etc. and take some action on them'
date: 2016-01-09
lastmod: 2020-05-16
---

Here are some examples:

Find all files called `assignment`

```bash
find -type f -name assignment
```

Find all directories called `homework`

```bash
find -type d -name homework
```

Find and delete files called `.DS_Store`

```bash
find . -type f -name .DS_Store -exec rm -rf {} \;
```

Find all folders called _cache_ and set their permissions to `777`

```bash
find . -type d -name cache -exec chmod 777 {} \;
```

### More about find

- By default is searches in the current directory, recursively.
- You can run a variety of _tests_

```
tests (N can be +N or -N or N): -amin N -anewer FILE -atime N -cmin N
      -cnewer FILE -ctime N -empty -false -fstype TYPE -gid N -group NAME
      -ilname PATTERN -iname PATTERN -inum N -iwholename PATTERN -iregex PATTERN
      -links N -lname PATTERN -mmin N -mtime N -name PATTERN -newer FILE
      -nouser -nogroup -path PATTERN -perm [-/]MODE -regex PATTERN
      -readable -writable -executable
      -wholename PATTERN -size N[bcwkMG] -true -type [bcdpflsD] -uid N
      -used N -user NAME -xtype [bcdpfls]      -context CONTEXT
```

- `-mtime` is for modification time, `-ctime` is for creation time, `atime` is for access time.
- `-type [bcdpflsD]`

```
-type c
      File is of type c:

      b      block (buffered) special

      c      character (unbuffered) special

      d      directory

      p      named pipe (FIFO)

      f      regular file

      l      symbolic link; this is never true if the -L option or the -follow option is in effect, unless the  symbolic
             link is broken.  If you want to search for symbolic links when -L is in effect, use -xtype.

      s      socket

      D      door (Solaris)

      To  search  for  more than one type at once, you can supply the combined list of type letters separated by a comma
      `,' (GNU extension).
```
