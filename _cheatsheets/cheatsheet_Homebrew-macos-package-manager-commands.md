---
layout: post
title: Homebrew Commands
permalink: homebrew-macos-package-manager-commands-cheatsheet
ctime: 2017-03-05
status: publish
tags:
- macos
- cheatsheet
- commands
---
Homebrew is a package manager for MacOS, very much like `apt` is a package manager for Ubuntu/Debian Linux.

It lets you install, update, upgrade and uninstall programs via the command line. It also let's you install some Linux programs for your Mac, like `wget` for example.

Homebrew also let's you add programs to `launchd` so that they automatically start and restart with login. For example `brew services start mongodb`

install Homebrew with this command:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```


### Commands

| Command           | Description |
|---------------------|---------------|
| `brew install foo` | Install package |
| `brew upgrade foo` | Upgrade package |
| `brew unlink foo` | Unlink (removes symlinks, e.g. before upgrades) |
| `brew link foo` | Link |
| `brew switch foo 2.5.0` |	Change versions |
| `brew list --versions foo` | See what versions you have |
| `brew info foo` | Get info about package, List versions, caveats, etc |
| `brew cleanup foo` | Remove old versions |
| `brew edit foo` | Edit this formula |
| `brew home foo` | Open homepage |
| `brew update` |	Update brew and cask |
| `brew list` |	List installed |
| `brew outdated` |	What’s due for upgrades? |

Upgrade a package:

`brew unlink foo` and then `brew upgrade foo`

Links
---
- [Homebrew cheatsheet by Rico Sta. Cruz.](http://ricostacruz.com/cheatsheets/homebrew.html)
- [Homebrew FAQs](http://docs.brew.sh/FAQ.html)