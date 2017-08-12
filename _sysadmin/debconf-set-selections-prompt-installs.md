---
title: Taking care of prompt imputs from a script with Debconf
subtitle: Pre-load debconf values for an easy non-interactive install
permalink: debconf-set-selections-prompt-installs
ctime: 2017-08-12
---

```bash
sudo apt install debconf-utils -y
```

see what possible selections a package may have


```bash
sudo debconf-get-selections | grep mysql
```

```bash
mysql-server-5.7	mysql-server/root_password	password
mysql-server-5.7	mysql-server/root_password_again	password
mysql-server-5.7	mysql-server/no_upgrade_when_using_ndb	error
mysql-server-5.7	mysql-server/password_mismatch	error
mysql-server-5.7	mysql-server-5.7/start_on_boot	boolean	true
mysql-server-5.7	mysql-server-5.7/postrm_remove_databases	boolean	false
mysql-server-5.7	mysql-server-5.7/nis_warning	note
mysql-server-5.7	mysql-server-5.7/really_downgrade	boolean	false
```


set those selections

```bash
MYSQL_PASS='your_password'

sudo debconf-set-selections <<< "mysql-server mysql-server/root_password password ${MYSQL_PASS}"
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password_again password ${MYSQL_PASS}"
```

Links
---
- [Installing MySQL (with Debconf)](https://serversforhackers.com/c/installing-mysql-with-debconf)
- [Pre-loading debconf values for easy installation](http://blog.delgurth.com/2009/01/19/pre-loading-debconf-values-for-easy-installation/)