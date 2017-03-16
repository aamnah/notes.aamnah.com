---
layout: post
title: 'Pipes |'
subtitle: Send (pipe) the output of one command to another
ctime: 2015-12-15
mtime: 2017-03-16
---

## Pipe `|`
Pipes the output of one command as the input of another.

Let's you put commands together

`grep` commands are very commonly used with piped input.

For example:

```bash
ls /etc/ | grep cron
```

![Screenshot - Pipe output]({{ site.baseurl }}/assets/img/pipe-output.png)

You can use multiple pipes

```bash
ls /ect/ | grep cron | grep daily
```
![Screenshot - Pipe multiple outputs]({{ site.baseurl }}/assets/img/pipe-multiple-outputs.png)

Another example is:

```bash
curl -s http://link.com | bash 
```

will pass in the output of the curl command as the input of the bash command, which basically means you can now run commands off of internet scripts/files.