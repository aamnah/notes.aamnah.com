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

Another code snippet from the [virualmin install script](http://software.virtualmin.com/gpl/scripts/install.sh)

```bash
remove_virtualmin_release () {
  # shellcheck disable=SC2154
  case "$os_type" in
    "fedora" | "centos" | "rhel" | "amazon"	)
    run_ok "rpm -e virtualmin-release" "Removing virtualmin-release"
    ;;
    "debian" | "ubuntu" )
    grep -v "virtualmin" /etc/apt/sources.list > "$tempdir"/sources.list
    mv "$tempdir"/sources.list /etc/apt/sources.list
    ;;
  esac
}
```

## uname -s

`-s` prints the kernel name

```
Linux # Ubuntu
```