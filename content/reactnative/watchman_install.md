---
title: Install Watchman for React Native
date: 2019-12-26
---

Easier way is to just [download and use the Binary files](https://github.com/facebook/watchman/actions?query=is%3Asuccess+event%3Apush+branch%3Amaster).

### install from source 

This is for Ubuntu 18.04.2 LTS

```bash
# install dependencies 
sudo apt install -y  automake autoconf libssl-dev libtool python-dev

# use the latest stable release
git clone https://github.com/facebook/watchman.git --depth 1
cd watchman 
./autogen.sh
./configure
make
sudo make install
```

Links
---

- [Install Watchman from Source](https://facebook.github.io/watchman/docs/install.html#installing-from-source)