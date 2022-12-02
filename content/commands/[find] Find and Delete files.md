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

- Run `find --help` and `man find` to read help docs and find out the possibilities
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
- Common types you can pass with `-type` are 
      - `f` for regular files
      - `d` for directory
      - `l` for symbolic link
      - `s` for scoket file
- You can pass multiple types as a comma separated list, for example: `-type f,d,l`
