---
title: '[Bash] Reload Bash Shell without quitting'
slug: bash-reload-shell-without-quitting
date: 2015-11-20
lastmod: 2017-03-13
tags:
- bash
---

You just have to enter the command:

```bash
source ~/.bashrc
```

or you can use the shorter version of the command:

```bash
. ~/.bashrc
```

or you could use;

```bash
exec bash
```

does the same thing. (and easier to remember, at least for me)

`exec` command replaces the shell with given program, in our example, it replaces our shell with bash (with the updated configuration files)

Links
---
- [StackOverflow: How do I reload .bashrc without logging out and back in?](http://stackoverflow.com/questions/2518127/how-do-i-reload-bashrc-without-logging-out-and-back-in)
