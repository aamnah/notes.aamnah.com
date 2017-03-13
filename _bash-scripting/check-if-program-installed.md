---
layout: post
title: Check if a program is installed
permalink: check-if-program-installed
ctime: 2015-11-30
mtime: 2017-03-13
---

They key is in using `hash` or `type` to see if a command is available. For example, the output of 

```bash
hash nano
```

will change based on whether `nano` is installed or not. If nano is installed, you'll get nothing. If `nano` is _not_ installed, you'll get an error.

So, we check for an error to see if something is not installed.

```bash
command -v foo >/dev/null 2>&1 || { echo >&2 "I require foo but it's not installed.  Aborting."; exit 1; }
```

OR

```bash
type foo >/dev/null 2>&1 || { echo >&2 "I require foo but it's not installed.  Aborting."; exit 1; }
```

OR

```bash
hash foo 2>/dev/null || { echo >&2 "I require foo but it's not installed.  Aborting."; exit 1; }
```

Where `bash` is your shell/hashbang, consistently use `hash` (for commands) or `type` (to consider built-ins & keywords).

When writing a POSIX script, use `command -v`.

We can also use this in a function, like so:

```bash
gnudate() {
    if hash gdate 2>/dev/null; then
        gdate "$@"
    else
        date "$@"
    fi
}
```


Links
---

- [StackOverflow: Check if a program exists from a Bash script](http://stackoverflow.com/questions/592620/check-if-a-program-exists-from-a-bash-script)