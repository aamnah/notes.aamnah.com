---
title: Install Nodejs 10 on Armbian
date: 2018-08-06
---

```bash
# Add repo and GPG key
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

# install Node
sudo apt-get install -y nodejs

# install build tools for native addons (optional - gcc, g++, make etc.)
sudo apt-get install -y build-essential

# install Yarn package manager
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -

echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update && sudo apt-get install yarn
```

Links
---

- [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/)
- [Package: build-essential (11.6ubuntu6)](https://packages.ubuntu.com/trusty/build-essential)
