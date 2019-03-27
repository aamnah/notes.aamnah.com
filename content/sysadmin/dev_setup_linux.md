---
title: Setting up a frontend dev environment (Debian/Ubuntu)
date: 2018-11-20
---

### Node

```bash
# install Node
wget -qO- https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install -y nodejs build-essential

# install Yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
```

- The install script does `apt update` so no need to do it separately.
- `build-essential` includes `gcc`, `g++` and `make` as well as other packages.
- If `yarn global` packages are not working, add Yarn to the `$PATH`. 

```bash
echo -e "

## PATH - Yarn
export PATH=$PATH:`yarn global bin`" >> ~/.bashrc
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

### Others
- [Visual Studio Code](https://code.visualstudio.com/download)