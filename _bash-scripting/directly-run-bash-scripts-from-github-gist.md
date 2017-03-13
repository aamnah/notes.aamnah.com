---
layout: post
title: Directly run bash scripts in Github Gists locally in Terminal.
permalink: run-bash-scripts-gists-github-locally
mtime: 2015-02-17
ctime: 2017-03-13
tags: 

---

This post is about running install scripts saved in Gists on Github locally from a Mac Terminal using curl. However, this should work for just about any script saved online and is not in any way limited to gists.

You need to have **Command Line Tools for Xocde** installed.

Run a script off a Github Gist
---

First things first, find a script that you want to install. [Here](https://gist.github.com/aamnah/aa48749844fffbd42633) is a bash script that i wrote for installing WordPress.

Get the **raw** version of it and copy the link. Now we are going to `curl` that link to get the content in the file and then pass that content to `bash`.

```bash
curl -L https://gist.githubusercontent.com/aamnah/aa48749844fffbd42633/raw/install-wp.sh | bash
```


The `-L` flag is for location. If the server reports that the requested page  has  moved  to  a  different  location, this option will make curl redo the request on the new place.

The pipe `|` links the two commands so that the output of the `curl` command becomes the input of the `bash` command.

Run any bash script off the internet
---

```bash
curl -L http://xrl.us/installperlosx | bash
```

The above command will use an install script for Perl off the internet and run it on your Mac. 

![Install Perl locally via an online install script]({{site.url}}assets/img/bash-install-perl.png)

Run a script from Gist and pass an argument
---
```bash
curl -sL http://script/location | bash /dev/stdin arg1 arg2
```

Bourne shell also supports `-s` to read from stdin.

```bash
curl -sL http://script/location | bash -s arg1 arg2
```

For example, the following command runs the [script to create a virtual host file](https://gist.github.com/aamnah/265f2433659b762b480c) while also passing it the argument 'mydomain.com' which is needed for the creation of _.conf_ file and _/var/www/_ directory.

```bash
curl -L https://gist.githubusercontent.com/aamnah/265f2433659b762b480c/raw/aacb8938f27e789812570bf2467816133c2bb9e2/vhost.sh | bash /dev/stdin mydomain.com
```
