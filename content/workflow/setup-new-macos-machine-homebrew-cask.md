---
title: Set up a new macOS machine with Homebrew-Cask
subtitle: Install multiple software in one go, or use a script to install everything in one go
slug: install-setup-software-homebrew-cask-macos
date: 2017-08-09
---

Cask let's you install commonly used software, stuff that you would drag and drop to install, via the Terminal or a script. For example,

```bash
brew cask install google-chrome
```

will install Google Chrome. While Homebrew let's you install command line utilities, Cask let's you install macOS desktop (GUI) software.

If you're a developer, you can use cask to install your preferred browsers, code editors, tools and such with a simple script.

- `search` — searches all known Casks
- `info` — gets details about a particular Cask
- `install` — installs the given Cask
- `uninstall` — uninstalls the given Cask
- `brew cask uninstall --force` - uninstall all versions of a Cask

Homebrew-Cask is a part of Hombrew version `0.9.5` and higher. It implemented as a subcommand of Homebrew. All Homebrew-Cask commands begin with `brew cask`

_Caskroom_ is the equivalent of _Cellar_. It stores all the Casks installed. 


```bash

installCLT() {
	# Install Command Line Tools (CLT) for Xcode
	echo -e "/n Installing Command Line Tools (CLT) for Xcode"
	sudo xcode-select --install
}

installHomebrew() {
	echo -e "/n Installing Homebrew"

	# install Homebrew
	/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
	# update perms on /usr/local/ to avoid: Warning: /usr/local is not writable, sudo is needed
	sudo chown -R $USER /usr/local/
	# add /usr/local/bin (the path where Cellar is) to your $PATH
	export $PATH=/usr/local/bin:$PATH

	brew update
}

installKegs() {
	# List all your Kegs/Formulae/Taps here
	# These will be installed in: /usr/local/Cellar/

	echo -e "/n Installing Kegs (Command Line Utilities)"
	# Programming
	brew install node mongodb sqlite

	# Tools
	brew install wget tree coreutils

	# Install tab-completion for brew casks
	brew install brew-cask-completion
}

installCasks() {
	# List all your Casks here
	# These will be installed in: /usr/local/Caskroom/
	# More: https://github.com/caskroom/homebrew-cask/tree/master/Casks

	echo -e "/n Installing Casks (GUI Software)"
	# Browsers
	brew cask install google-chrome opera

	# Code Editors
	brew cask install visual-studio-code sublime-text brackets

	# Graphics
	brew cask install sketch

	# Tools
	brew cask install alfred appcleaner caffeine dash discord evernote filezilla gitkraken gitter iterm2 postman shuttle skype teamviewer the-unarchiver vlc webtorrent
}

installCLT
installHomebrew
installKegs
installCasks

echo -e "/n DONE!"
```

Links
---

- [Homebrew](https://brew.sh/)
- [manpage: Homebrew](https://docs.brew.sh/Manpage.html)
- [Homebrew-Cask](https://caskroom.github.io/)
- [Homebrew-Cask Usage](https://github.com/caskroom/homebrew-cask/blob/master/USAGE.md)
