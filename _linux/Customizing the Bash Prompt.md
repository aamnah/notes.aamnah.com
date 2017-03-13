---
title: '[Bash] Customizing the Bash Prompt'
permalink: bash-customize-prompt-ps1
ctime: 2015-11-22
mtime: 2017-03-13
tags:
- bash
---

Customizing your terminal
---

```bash
PS1="[\u @ \h] \w > "
```

in the bash profile will output this:

```
[aamnah @ Serenity] ~/Sandbox/aamnah.com >
```

- `\u` is your username which in my case is **aamnah**;
- `\h` is the hostname (the name of your machine) which is **Serenity** 
- `\w` is the working directory which in my case is **~/Sandbox/aamnah.com**

You can add or remove variables to customize what it shows in the terminal. For example, i don't want to see the username and hostname, because i already know what they are on my machine.

If i were to ever wonder which user it is i can always use the `whoami` command to show which user it is. If i were to wonder about the hostname i can easily view that by typing `hostname`.

So i only show the working path which is the most important. Like this:

```bash
PS1="\w > "
```

which displays like this:

```
~/Sandbox/aamnah.com > 
```

To reload the bash profile without quiting and re-opening the terminal run `source ~/.bash_profile`, or a simpler `exec bash` command.