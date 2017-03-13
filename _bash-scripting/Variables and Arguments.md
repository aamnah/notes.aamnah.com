---
layout: post
title: Variables and Arguments
permalink: variables-arguments
ctime: 2015-12-07
mtime: 2017-03-13
---

Variables
---

```bash
name="Aamnah"
$name="Aamnah"
```

There is _NO whitespace_ before or after `=`. `$name="Aamnah"` will work but the preferred syntax is not including $ sign when you are defining a variable. You should use the $ sign when you are calling the variable and _NOT_ when you're defining it.

### Referencing variables:

```bash
echo $name
echo ${name}
```

`${name}` is preferred syntax.


Arguments
---
Arguments are keywords that are passed in the command line when executing the bash script/command.

```bash
./script.sh foo bar
```

### $0, $1, $2 etc..
`$0` is the name of the script, `$1` is the first argument, `$2` is the second argument and so on. 