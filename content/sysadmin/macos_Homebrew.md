---
title: Intro to Homebrew
subtitle: 'Get familiar with the `apt` equivalent of macOS'
slug: homebrew-intro
date: 2017-08-09
---

### Intro
Home brew is a package manager for macOS, just like `apt` is for Debian systems and `yum` is for CentOS systems. The main reason people love Homebrew is because it helps in bringing some Linux utilities to macOS, `wget` and `tree` for example. It also makes managing installed packages easier.

Where you'd normally do `apt install wget`, Homebrew let's you do `brew install wget`.

### Cellar
The _Cellar_ is a place that all your _kegs_ go. Homebrew installs packages to their own directory (in the Cellar) and then symlinks their files into `/usr/local/`.

It contains what homebrew installs. It then creates symlinks in the `/usr/local/bin` directory to the files in the Cellar. If you delete what is in the Cellar directory you'll no longer be able to use the stuff homebrew installed.

```bash
brew --cellar     # /usr/local/Cellar
```

### Formulae (install scripts)
The package manager builds software from source using _formulae_, Ruby scripts constructed with Homebrew's DSL (Domain Specific Language) for managing dependencies, downloading source files, and configuring and compiling software. 

### Bottles (binary packages)
Binary packages called _bottles_ provide pre-built formulae with default options.

Bottles are produced by installing a formula with `brew install --build-bottle <formula>` and then bottling it with `brew bottle <formula>`. This outputs the bottle DSL which should be inserted into the formula file.

### Taps (third party repos)
The tap command allows Homebrew to _tap_ into another repository of formulae. Once you've done this you've expanded your options of installable software.

```bash
brew tap                     # list tapped repositories
brew tap <tapname>           # add tap
brew untap <tapname>         # remove a tap
```

`brew tap` adds more repositories to the list of formulae that brew tracks, updates, and installs from. By default, `tap` assumes that the repositories come from GitHub, but the command isn’t limited to any one location.

### Homebrew Cask (installs GUI applications)
Homebrew Cask builds upon Homebrew and focuses on the installation of GUI applications. It has been made a part of Homebrew version `0.9.5` and higher.

```bash
brew cask install google-chrome
```

### Installation
The installation is fairly simple. You run a one-liner to install Homebrew, and then update your `$PATH` to include `/usr/local/bin`. The most annoying part is downloading and installing Xcode and it's Command Line Tools (if you don't have them installed already)

```bash
# sudo xcode-select --install

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
sudo chown -R $USER /usr/local/
export $PATH=/usr/local/bin:$PATH
```

- You need Command Line Tools (CLT) for Xcode installed
- DO NOT install with `sudo` [read this](https://github.com/Homebrew/legacy-homebrew/issues/9953)
- Change `/usr/local/` to be owned by `$USER`, not `root`, so you can have write permissions and not need sudo. `sudo chown -R $USER /usr/local/`
- The `$PATH` entry for `/usr/local/bin` should occur before `/usr/bin`

NOTE: I'm not entirely comfortable with `sudo chown -R $USER /usr/local/` because there are some firs in that path that are owned by `root:wheel`, like `remotedesktop`. Needs more research on how suitable this is.

Links
---

- [Homebrew](https://brew.sh/)
- [manpage: Homebrew](https://docs.brew.sh/Manpage.html)
- [Homebrew FAQ](https://docs.brew.sh/FAQ.html)
- [Homebrew-Cask](https://caskroom.github.io/)
- [Homebrew-Cask Usage](https://github.com/caskroom/homebrew-cask/blob/master/USAGE.md)
- [The path to Homebrew](https://rkulla.blogspot.com/2014/03/the-path-to-homebrew.html)
