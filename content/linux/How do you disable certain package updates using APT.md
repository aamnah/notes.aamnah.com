---
title: How do you disable certain package updates using APT?
slug: disable-update-packages-apt-dpkg
date: 2016-01-17
lastmod: 2017-03-13
---

How do you disable, lock or blacklist certain package updates using apt tool in debian and ubuntu distributions.

To `hold` a package

```bash
sudo apt-mark hold apache2
```

To `unhold` a package

```bash
sudo apt-mark unhold apache2
```

Links
---
- [Tecmint: How to Disable/Lock or Blacklist Package Updates using Apt Tool](http://www.tecmint.com/disable-lock-blacklist-package-updates-ubuntu-debian-apt/)
