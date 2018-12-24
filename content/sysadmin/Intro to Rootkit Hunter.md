---
title: Intro to Rootkit Hunter
subtitle: Scan for Rootkits, backdoors and exploits
date: 2017-08-11
---

RKHunter downloads a list of known exploits and then checks your system against the database. It also alerts you if it detects unsafe settings in some common applications.

```bash
#!/bin/bash

apt update && apt upgrade -y

# Rootkit Hunter - Scan for Rootkits, backdoors and exploits

EMAIL='' # email for sending logs
SERVER='' # server name

rkhunter() {
	wget https://downloads.sourceforge.net/project/rkhunter/rkhunter/1.4.4/rkhunter-1.4.4.tar.gz
	tar xf rkhunter-1.4.4.tar.gz
	sudo rkhunter-1.4.4/installer.sh --install # by default it installs in /usr/local/bin (which is in $PATH)

	# confirm install by checking version
	sudo rkhunter --versioncheck

	# Pre-run Updates
	sudo rkhunter --update # update database
	sudo rkhunter --propupd # Before running RKH, fill the file properties database (set baseline file properties so that rkhunter can alert us if any of the essential configuration files it tracks are altered)

	# Scan
	sudo rkhunter --check # scan the entire file system


	# Cron
	touch /etc/cron.daily/rkhunter.sh
	echo -e "#!/bin/sh
(
/usr/local/bin/rkhunter --versioncheck
/usr/local/bin/rkhunter --update
/usr/local/bin/rkhunter --cronjob --report-warnings-only
) | /bin/mail -s 'rkhunter Daily Run (${SERVER})' ${EMAIL}
}" > /etc/cron.daily/rkhunter.sh
	chmod 755 /etc/cron.daily/rkhunter.sh
```

Links
---

- [The Rootkit Hunter project](http://rkhunter.sourceforge.net/)
- [The Rootkit Hunter project: README](http://rkhunter.cvs.sourceforge.net/viewvc/rkhunter/rkhunter/files/README)
- [How To Use RKHunter to Guard Against Rootkits on an Ubuntu VPS](https://www.digitalocean.com/community/tutorials/how-to-use-rkhunter-to-guard-against-rootkits-on-an-ubuntu-vps)
- [How to Scan for Rootkits, backdoors and Exploits Using ‘Rootkit Hunter’ in Linux](https://www.tecmint.com/install-rootkit-hunter-scan-for-rootkits-backdoors-in-linux/)
