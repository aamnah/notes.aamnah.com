---
title: File Test Operators
subtitle: Check if a file exists, is empty, doesn't exist, is a directory and more
date: 2017-08-27
---

### File Test Operators

Returns true if

- `-e` and `-a` file exists
- `-s` file is not zero size i.e. not empty
- `-f` file is a _regular file_ i.e. not a directory
- `-d` file is a directory
- `-h` and `-L` file is a sympbolic link

# Check if a file exists

```bash
if (-e foo.txt ); then
    echo "foo.txt already exists!"
else
    // Do something
fi
```


Links
---
- [Advanced Bash-Scripting Guide:	7.2. File test operators](http://tldp.org/LDP/abs/html/fto.html)
