---
layout: post
title: Find, install and upgrade Linux software
permalink: install-upgrade-search-find-software-packages-linux
status: publish
tags:
- system management
- sysadmin
- linux
- debian
- ubuntu
---

- Update packages list: `sudo apt update`
- See packages that can be upgraded: `apt list --upgradable`
- See all packages that can be upgraded: `apt list --upgradable -a`
- Upgrade packages: `apt upgrade`
- Upgrade packages without asking me yes/no: `apt upgrade -y`
- Search for packages: `apt-cache search foo` OR `apt search foo`
- Get details about a specific package: `apt-cache show foo` OR `apt show foo`



#### `apt-cache`
The `apt-cache` command can display much of the information stored in APT's internal database. This information is a sort of cache since it is gathered from the different sources listed in the `sources.list` file. This happens during the `apt update` operation.


Links
---
- [The Debian Administrator's Handbook: 6.3. The `apt-cache` Command](https://debian-handbook.info/browse/stable/sect.apt-cache.html)