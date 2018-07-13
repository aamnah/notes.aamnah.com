---
title: Show/Hide hidden files in Finder
date: 2017-11-12
---

## tl;dr

```bash
defaults write com.apple.finder AppleShowAllFiles NO # don't show hidden files
defaults write com.apple.finder AppleShowAllFiles YES # show hidden files

killall Finder /System/Library/CoreServices/Finder.app # restart Finder

# aliases (showFiles & hideFiles)
echo "alias showFiles='defaults write com.apple.finder AppleShowAllFiles YES && killall Finder /System/Library/CoreServices/Finder.app'" >> ~/.aliases
echo "alias hideFiles='defaults write com.apple.finder AppleShowAllFiles NO && killall Finder /System/Library/CoreServices/Finder.app'" >> ~/.aliases
```

Aliases go into where you save them. This could be `~/.bash_profile` if you have no idea what aliases are, `~/.zshrc` if you're using Zshell, or `~/.aliases` if you're keeping them in a separate file like me.