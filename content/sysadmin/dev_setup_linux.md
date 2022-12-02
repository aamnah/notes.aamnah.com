---
title: Setting up a frontend dev environment (Debian/Ubuntu)
date: 2018-11-20
---

tl;dr: TO DO: i have [written a script here]() that will take care of the entire thing

### Packages

```bash
sudo apt update && sudo apt upgrade -y

sudo apt install -y curl build-essential file git
```

- `build-essential` includes `gcc`, `g++` and `make` as well as other packages.

### Node & Yarn

```bash
# install Node
# https://github.com/nodesource/distributions/blob/master/README.md
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

# install Yarn
# curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
# echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
# sudo apt update && sudo apt install yarn

# Install Yarn 2
npm install -g yarn
```

- If `yarn global` packages are not working, add Yarn to the `$PATH`.

```bash
echo -e "

## PATH - Yarn
export PATH=$PATH:`yarn global bin`" >> ~/.bashrc
```

### Homebrew


```bash
# Homebrew
# https://docs.brew.sh/Homebrew-on-Linux
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Now confirm instal and update `$PATH`

```bash
test -d ~/.linuxbrew && eval $(~/.linuxbrew/bin/brew shellenv)
test -d /home/linuxbrew/.linuxbrew && eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)
test -r ~/.bash_profile && echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.bash_profile
echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.profile
```

#### Setting npm global defaults

```bash
# check the entire config
npm config ls -l

# check init related defaults
npm config ls -l | grep init
```

```
init-author-email = ""
init-author-name = ""
init-author-url = ""
init-license = "ISC"
init-module = "/home/aamnah/.npm-init.js"
init-version = "1.0.0"
```

```bash
# npm config set <key> <value> -g
npm config set init-author-name 'Aamnah' -g
npm config set init-author-url 'https://aamnah.com' -g
npm config set init-author-email 'hello@aamnah.com' -g
npm config set init-license 'CC BY-SA 4.0' -g
npm config set init-version '0.0.1' -g

# yarn config set <key> <value> [-g|--global]
yarn config set -g init-license 'CC BY-SA 4.0'
yarn config set -g init-version '0.0.1'
```

### Git

```bash
sudo apt install -y git

git config --global user.name 'Aamnah'
git config --global user.email 'hello@aamnah.com'
```

### Sublime Text

```bash
# 1. Install the GPG key:
wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -

# 2. Ensure apt is set up to work with https sources:
sudo apt-get install apt-transport-https

# 3. Select the channel to use:
## Stable
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list

## Dev
# echo "deb https://download.sublimetext.com/ apt/dev/" | sudo tee /etc/apt/sources.list.d/sublime-text.list

# 4. Update apt sources and install Sublime Text
sudo apt update && sudo apt install sublime-text
```

### Frontend tooling

```bash
yarn global add parcel-bundler
```

### Snaps

`--classic` is needed if you want the app to be able to access external mount drives

```bash
sudo snap install chromium
sudo snap install firefox
sudo snap install opera --classic
sudo snap install youtube-dl
sudo snap install vlc
sudo snap install insomnia
sudo snap install postman
sudo snap install ngrok
sudo snap install node --classic --channel=edge # 8, 10 are other channel options
sudo snap install slack --classic
sudo snap install android-studio --classic
sudo snap install sublime-text --classic
sudo snap install code --classic

sudo snap install winds
```

### Devops

```bash
# Netlify
# https://docs.netlify.com/cli/get-started/
npm install netlify-cli -g

# Firebase
#https://firebase.google.com/docs/cli#install-cli-mac-linux
curl -sL https://firebase.tools | bash
```

### Others

- [Visual Studio Code](https://code.visualstudio.com/download)
- [Nodejs](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Parcel](https://parceljs.org/getting_started.html)
- [Homebrew](https://docs.brew.sh/Homebrew-on-Linux)