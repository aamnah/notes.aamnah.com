---
title: Secure a Linux Ubuntu Server
subtitle: Initial steps to take for a new linux machine's security
date: 2017-08-11
status: draft
---

STATUS: Draft

```bash
#!/bin/bash

# SECURE / HARDEN A LINUX (UBUNTU) SERVER

apt update && apt upgrade -y

# Enable automatically installing security updates
# Rootkit Hunter - Scan for Rootkits, backdoors and exploits

rkhunter() {
	wget https://downloads.sourceforge.net/project/rkhunter/rkhunter/1.4.4/rkhunter-1.4.4.tar.gz
	tar xf rkhunter-1.4.4.tar.gz
	sudo rkhunter-1.4.4/installer.sh --layout default --install

	sudo rkhunter --versioncheck
	sudo rkhunter --update # update database
	sudo rkhunter --propupd # set baseline file properties (so that rkhunter can alert us if any of the essential configuration files it tracks are altered)

	rkhunter --check # scan the entire file system
}
```

RKHunter downloads a list of known exploits and then checks your system against the database. It also alerts you if it detects unsafe settings in some common applications.

Links
---

- [The Rootkit Hunter project](http://rkhunter.sourceforge.net/)
- [The Rootkit Hunter project: README](http://rkhunter.cvs.sourceforge.net/viewvc/rkhunter/rkhunter/files/README)
- [How To Use RKHunter to Guard Against Rootkits on an Ubuntu VPS](https://www.digitalocean.com/community/tutorials/how-to-use-rkhunter-to-guard-against-rootkits-on-an-ubuntu-vps)
