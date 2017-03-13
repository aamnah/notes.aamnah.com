---
title: '[Bash] Bash PATH Environment Variable'
subtitle: 'Add, update and overwrite the environment variable $PATH'
permalink: bash-path-envirnoment-variable
ctime: 2015-11-20
mtime: 2017-03-13
tags:
- bash
---

# Ubuntu
The following command adds a path to your current path:

```bash
export PATH=$PATH:/my/custom/path
```

If you want your setup to execute this command every time, there are a number of places where you can put it. When you login, the following scripts will be executed in this order:

```bash
/etc/profile      (which starts by loading everything in /etc/profile.d)
~/.profile        (which starts by loading ~/.bashrc if you are running bash)
```

To **overwrite an existing PATH**, use the same export command without the $PATH included in the value. LIke so:

```bash
export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games
```

`:` is the seperator between different PATH locations.

To **find out if a command is in the path**, use `which`. For example:

```bash
which node
```

on a Mac will give you

```
/usr/local/bin/node
```

If you get nothing from the which node coomand, node's not in the path.

### Notes

- **~/.profile** is only loaded if **~/.bash_profile** or **~/.bash_login** DO NOT EXIST. Otherwise, at least bash, will load them instead. It is suggest to use .profile and not the bash specific scripts. So, if in these attempts you created **.bash_login**, _please delete it now_.

- ~/.bashrc is only loaded if you are running an interactive session. (something with a prompt where you can actually type something.

- ~/.bashrc is loaded again and again, _everytime you open up a new terminal_. So a new tab in gnome-terminal, a new virtual terminal, etc. So even if you don't login again, .bashrc is loaded (and thereby resets its environment) everytime you open a new shell.

- Something like byobu should really go into .profile, (otherwise it won't work ;-)

- Something like paths should go into .profile if you want it to work outside of the interactive sessions. (say when you press alt+f2 in gnome)

# Mac OS X
Check what current $PATH is:

```bash
echo "$PATH"
```

OR

```bash
printf "%s\n" $PATH
```

You can add path to any one of the following method:

- `$HOME/.bash_profile` file using export syntax. e.g. `export PATH=$PATH:/new/dir/location1`
- `/etc/paths.d` directory.


Links
---

- [AskUbuntu: How do I modify my PATH so that the changes are available in every Terminal session](http://askubuntu.com/questions/3744/how-do-i-modify-my-path-so-that-the-changes-are-available-in-every-terminal-sess)
- [nixCraft: Mac OS X: Set / Change $PATH Variable](http://www.cyberciti.biz/faq/appleosx-bash-unix-change-set-path-environment-variable/)