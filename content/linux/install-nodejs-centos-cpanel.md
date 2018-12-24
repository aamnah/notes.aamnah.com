---
title: How to install Node.js on CentOS/cPanel
slug: install-nodejs-centos-cpanel
category: Linux
date: 2015-01-19
---

Run as root on RHEL, CentOS or Fedora:
    
```bash
curl -sL https://rpm.nodesource.com/setup | bash -
```

Then install, as root:

```bash
yum install -y nodejs
```

The `-y` flag will automatically answer "yes" to every confirmation question, so leave it out if you want to be able to say no to something.

**Optional**: install build tools

To compile and install native addons from npm you may also need to install build tools:

```bash
yum install gcc-c++ make
```
	
OR

```bash
yum groupinstall 'Development Tools'
```

This command will pull a "Development Tools" group with the applications needed to compile node.js.

To test an installation, run:

```bash
curl -sL https://deb.nodesource.com/test | bash -
```

If you get an error saying '**-bash: npm: command not found**', try the alternative method of installing Node.js by compiling from source.

### Alternative: Compiling from Source
   
```bash
su - 
# install dev tools
yum install gcc-c++ openssl-devel
cd /usr/local/src
# fetch latest node.js tarball
wget http://nodejs.org/dist/node-latest.tar.gz
# extract tarball
tar zxvf node-latest.tar.gz
# (cd into extracted folder: ex "cd node-v0.10.3")
cd node-v*
# execute the configure script
./configure
# make is probably the longest task here, it will take a while
make
# make it available system wide
make install
```


Note that this requires Python 2.6+ to use **./configure** above. Otherwise, you'll get an error like this: 


```bash
File "./configure", line 452
    fpu = 'vfpv3' if armv7 else 'vfpv2'
                    ^
SyntaxError: invalid syntax
```

To avoid that, run `python2.7 ./configure`

Links
---

- [Installing Node.js via package manager](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager)
- [How do you install Node.JS on CentOS?](http://serverfault.com/questions/299288/how-do-you-install-node-js-on-centos)
- [How To Install And Run A Node.js App On Centos 6.4 64bit](https://www.digitalocean.com/community/tutorials/how-to-install-and-run-a-node-js-app-on-centos-6-4-64bit)
- [node.js configure file syntax error](http://stackoverflow.com/questions/14989164/node-js-configure-file-syntax-error-line-433)
- [How do I check what version of Python is running my script?](http://stackoverflow.com/questions/1093322/how-do-i-check-what-version-of-python-is-running-my-script)
