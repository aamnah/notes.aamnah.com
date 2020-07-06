---
title: OSTYPE in Shell
date: 2020-07-03
slug: ostype-shell
---

## OSTYPE

`OSTYPE` variable stores the value of the operating system type. 

```bash
echo $OSTYPE
```

```
linux-gnu # Ubuntu
```

`zsh` and `bash` values differ a bit. 


### bash

```
$ echo $OSTYPE
  darwin18
```
### zsh

```
% echo $OSTYPE
  darwin18.0
```

You can use a glob to account for the inconsistency

```conf
if [[ $OSTYPE == darwin* ]]; then
alias flushdns='sudo dscacheutil -flushcache'
fi
```

## uname -s

`-s` prints the kernel name

```
Linux # Ubuntu
```