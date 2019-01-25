---

title: Upgrade to Bash 4 on macOS
slug: bash-upgrade-3-4-macos
date: 2017-05-21

---

```bash
# install Homebrew
# /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# install Bash via Homebrew
brew update && brew install bash

# Add the new shell to the list of allowed (white-listed) shells
# sudo bash -c 'echo /usr/local/bin/bash >> /etc/shells'
echo "$(brew --prefix)/bin/bash" >> /etc/shells

# Change to the new shell
chsh -s $(brew --prefix)/bin/bash 
```

- `sudo -i` let's you switch to `root` user
- `brew --prefix` gives you the location of Homebrew install directory (`/usr/local` by default)
- `cat /etc/shells` gives you the list of allowed shells
