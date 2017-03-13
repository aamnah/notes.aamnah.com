---
layout: post
title: How to Install Git on CentOS
category: how-to
---

The Easy Way
---
	sudo yum install git
    
`git --version` to make sure it's installed.

Compiling from Source
---
Make sure you have sudo access.

### Install Compilation tools
	sudo yum groupinstall "Development Tools"

### Instll Dependencies
CentOS 6.x

	sudo yum install zlib-devel perl-ExtUtils-MakeMaker asciidoc xmlto openssl-devel

CentOS 7.x

	sudo yum install gettext-devel openssl-devel perl-CPAN perl-devel zlib-devel

### Fetch source files

	wget https://github.com/git/git/archive/v2.2.2.tar.gz -O git.tar.gz
    
Check [Github Release page](https://github.com/git/git/releases) for the latest stable version. Or install teh latest `-rc` (release candidate) version if you are feeling dangerous. Latest stable is recommended.

### Extract and go to folder

	tar -zxf git.tar.gz && cd git-*
    
### Compile

	make configure
	./configure --prefix=/usr/local

### Install

	sudo make install

### Check if working

	git --version

Set up Git
---

	git config --global user.name "Your Name"
	git config --global user.email "you@example.com"

To confirm that these configurations were added successfully, we can see all of the configuration items that have been set by typing:

	git config --list

```
user.name=Your Name
user.email=you@example.com 
```


Source
---
- [How to Install Git on CentOS 6.4 VPS](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-a-centos-6-4-vps)
- [How to Install Git on CentOS 7](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-centos-7)