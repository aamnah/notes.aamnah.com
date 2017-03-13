---
layout: post
title: Redirection in Linux
date: 2014-07-17 22:34:46.000000000 +05:00
type: post
published: true
status: publish
categories:
tags:
- Bash
- Linux
---

In Linux, everything is a file. Redirection comes in very handy because you can move data from a file to another file, from the resulting output of a command to a file. You can also redirect the output of one command and feed it as an input to  another command.

Output >
----
The `>` symbol is used for redirecting output of one command to a new file or another command.

For example:
<pre class="lang:sh decode:true " >ls -al &gt; listing.txt</pre> 

or 

<pre class="lang:sh decode:true " >echo 'hello, this is some info' &gt; hello.txt</pre> 


`>` **writes** the output. Meaning, if there is anything already in that file, or if there is an existing file with the same name, it'll be overwritten. To **append** the redirected output at the end of a file, use `>>`.

For example:
<pre class="lang:sh decode:true " >echo 'my name is Aamnah, add this at the end' &gt;&gt; hello.txt</pre> 

Notes:
-----
- `>&` redirects the outputs of one file to another while `<` is the input redirection operator.  
- You can use error using its corresponding File Descriptor 2.
- `&>` redirects stdout as well as stderr

Links
---

- [[Video] More about Redirection, Input, Output, Error Redirection and FD (File Descriptor)](https://www.youtube.com/watch?v=Bzd7XfApxLI)