---
title: Get Linux System Information
slug: get-linux-system-info
date: 2015-11-12
lastmod: 2018-11-18

---


tl;dr
---
- Use the `uname` command
- Use the `/etc/*-release` files
- Use a programming language (high-level approach) `python -mplatform`
- Use environment variables like `$OSTYPE`

---

`uname`, `hostname`, `machine`, `sw_vers` are all commands you can use.

## uname
`uname` prints operating system name.

- CentOS, Ubuntu: `Linux`
- Mac OS X: `Darwin`

CentOS
![Screenshot 2015-12-03 13.54.58.png](quiver-image-url/75D481500C00BFF4ECE7D743B07007E4.png)


### uname flags
- `uname` has a few flags (a,p,m) you can use.
	- `uname` : with no arguments will name the operating system.
	- `uname -a` : check kernel version and system architecture
	- `uname -m` : will give the "machine hardware name". Tells whether your system is 32-bit or 64-bit
	- `-n` : print the nodename (the nodename may be a name that the system is known by to a communications network).
	- `uname -p` : **processor type**, but is usually `unknown` on modern Unix platforms. prints the machine processor architecture name.
	- `uname -r` : print the operating system release.
	- `uname -s` : print the operating system name.
	- `unae -v` : print the operating system version.


## cat /etc/ files
 
- `cat /etc/issue` : check CentOS/Ubuntu version
- `cat /etc/os-release` : get distro name [2]
- `cat /etc/lsb-release` : 
- `cat /etc/redhat-release` :

`hostname` : check hostname
`/bin/arch/` : if it exists, will usually give the type of processor.
`echo $OSTYPE` : env variable that stores OS name
`python -mplatform` : 

### cat /etc/issue

    $ cat /etc/issue
    Ubuntu 14.04.3 LTS \n \l

### cat /etc/os-release [2]
Most major distros are moving towards a system where they use `/etc/os-release` to store this information. Most modern distributions also include the `lsb_release` tools but these are not always installed by default. 

Ubuntu

```bash
cat /etc/os-release
```

```
NAME="Ubuntu"
VERSION="14.04.3 LTS, Trusty Tahr"
ID=ubuntu
ID_LIKE=debian
PRETTY_NAME="Ubuntu 14.04.3 LTS"
VERSION_ID="14.04"
HOME_URL="http://www.ubuntu.com/"
SUPPORT_URL="http://help.ubuntu.com/"
BUG_REPORT_URL="http://bugs.launchpad.net/ubuntu/"
```
Doesn't work on CentOS or OSX it seems.

### cat /etc/lsb-release
Ubuntu

```bash
cat /etc/lsb-release
```

```
DISTRIB_ID=Ubuntu
DISTRIB_RELEASE=14.04
DISTRIB_CODENAME=trusty
DISTRIB_DESCRIPTION="Ubuntu 14.04.3 LTS"
```

### cat /etc/redhat-release
CentOS

```bash
cat /etc/redhat-release
```

```
CentOS release 6.7 (Final)
```

CentOS actually shows 3 _release_ file names. The other two `/etc/redhat-release` and `/etc/system-release` are symlinks to `/etc/centos-release`.

```bash
ls -alhs /etc/*-release
```

```
-rw-r--r-- 1 root root 27 Aug  3 12:12 /etc/centos-release
lrwxrwxrwx 1 root root 14 Aug  7 12:02 /etc/redhat-release -> centos-release
lrwxrwxrwx 1 root root 14 Aug  7 12:02 /etc/system-release -> centos-release
```

## Release files
Find and cat the release files. The following commands lists all `*-release` files in the `/etc/` folder.

```bash
ls -alhs /etc/*-release
```

- /etc/lsb-release (Ubuntu)
- /etc/os-release (Ubuntu)
- /etc/centos-release (CentOS)
- /etc/redhat-release -> centos-release (CentOS)
- /etc/system-release -> centos-release (CentOS)

## $OSTYPE [link]
The bash manpage says that the variable OSTYPE stores the name of the operation system:

> `OSTYPE` Automatically set to a string that describes the operating system on which bash is executing. The default is system- dependent.

- For OS X El Capitan 10.11.1 `$OSTYPE` is `darwin15`
- For Ubuntu 14.04.3 LTS `$OSTYPE` is `linux-gnu`

## python -mplatform

```bash
python -mplatform
```

```
# Ubuntu
Linux-3.13.0-68-generic-x86_64-with-Ubuntu-14.04-trusty

# CentOS
Linux-2.6.32-042stab108.6-i686-with-centos-6.7-Final

# Mac OS X
Darwin-15.0.0-x86_64-i386-64bit

# Armbian
Linux-3.4.113-sun8i-armv7l-with-Ubuntu-16.04-xenial
```


[link]: http://stackoverflow.com/questions/394230/detect-the-os-from-a-bash-script/394235#394235
[2]: http://askubuntu.com/questions/459402/how-to-know-if-the-running-platform-is-ubuntu-or-centos-with-help-of-a-bash-scri

