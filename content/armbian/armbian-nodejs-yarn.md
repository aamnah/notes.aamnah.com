---
title: Install Nodejs and Yarn on Armbian
date: 2018-08-06
lastmod: 2018-11-18
---

```bash
# Add repo and GPG key
#curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
#curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -


# install Node
sudo apt install -y nodejs

# install build tools for native addons (optional - gcc, g++, make etc.)
sudo apt install -y build-essential

# install Yarn package manager
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -

echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update && sudo apt install yarn
```

Links
---

- [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/)
- [NodeSource Node.js Binary Distributions](https://github.com/nodesource/distributions/blob/master/README.md#debinstall)
- [Package: build-essential (11.6ubuntu6)](https://packages.ubuntu.com/trusty/build-essential)
