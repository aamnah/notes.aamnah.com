---
layout: post
title: Arguments
permalink: arguments
ctime: 2015-12-07
mtime: 2017-03-13
---

Arguments
---
Arguments are keywords that are passed in the command line when executing the bash script/command.

```bash
./script.sh foo bar
```

### $0, $1, $2 etc..
- `$0` is the name of the script
- `$1` is the first argument, `$2` is the second argument and so on. 

Arguments passed at the time of script execution and taking user input with `read` oth serve the same purpose. `read` is a bit more safe for noobs.