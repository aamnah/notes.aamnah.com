---
title: Intro to debconf
ctime: 2017-08-12
---

---

## tl;dr

- `debcnof` is a configuration management tool
- all the questions you get during installing `.deb` packages are stored in `debconf`
- You can preload answers to those questions to get non-interactive/slient installations
- needs `sudo`

```bash
sudo apt install debconf-utils

# get configurable values for a package
sudo debconf-get-selections | grep mysql

# set values 
echo "set mysql-server/root_password YOURPASSWORD" | debconf-communicate
# sudo debconf-set-selections <<< "mysql-server mysql-server/root_password password YOURPASSWORD"
# echo 'mysql-server mysql-server/root_password password YOURPASSWORD' | debconf-set-selections

# show the list of debconf values configured for a package
debconf-show phpmyadmin

```
---

`debconf` is a configuration management tool for Debain. It let's you pre-load configurations, meaning you set configuration options before instaling a package. The major benefit of this is during scripting, you can pre-configure the values via `debconf-set-selections` and avoid entering values in the prompt, getting a non-interactive install.

> Debconf keeps all answers to questions packages can ask during installation, both the ones you gave yourself and the implied or low-priority ones chosen by the packager.

> When using .deb-packages you’re used to getting asked about licenses, values, locations, downloads etc. All these are stored in debconf. You can preload those answers before so they won’t get asked during installation (a silent, scriptable, install) or to “steer” the package into your desired config-direction.

The only issue is figuring out what the `selections` mean. For example, if you have gone through the install process of PHPMyAdmin a few times, you might be able to figure out what the five different password selections correspond to.

```bash
# install debconf-utils to get `debconf-get-selections`
sudo apt install debconf-utils
```

# Find out what values can be configured

```bash
sudo debconf-get-selections | grep mysql
```

```bash
phpmyadmin	phpmyadmin/mysql/app-pass	password
mysql-server-5.7	mysql-server/root_password_again	password
dbconfig-common	dbconfig-common/mysql/admin-pass	password
dbconfig-common	dbconfig-common/mysql/app-pass	password
phpmyadmin	phpmyadmin/mysql/admin-pass	password
mysql-server-5.7	mysql-server/root_password	password
mysql-server-5.7	mysql-server-5.7/really_downgrade	boolean	false
phpmyadmin	phpmyadmin/mysql/method	select	Unix socket
dbconfig-common	dbconfig-common/mysql/admin-user	string
dbconfig-common	dbconfig-common/mysql/method	select	Unix socket
phpmyadmin	phpmyadmin/database-type	select	mysql
mysql-server-5.7	mysql-server/password_mismatch	error
mysql-server-5.7	mysql-server/no_upgrade_when_using_ndb	error
phpmyadmin	phpmyadmin/mysql/admin-user	string	debian-sys-maint
mysql-server-5.7	mysql-server-5.7/nis_warning	note
mysql-server-5.7	mysql-server-5.7/postrm_remove_databases	boolean	false
mysql-server-5.7	mysql-server-5.7/start_on_boot	boolean	true
```

# Set/Confgiure values

```bash
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password password YOURPASSWORD"
# OR
echo 'mysql-server mysql-server/root_password password YOURPASSWORD' | debconf-set-selections
# OR
echo "set mysql-server/root_password YOURPASSWORD" | debconf-communicate
```

# Get details about an already configured package

Show the list of debconf values that a package has stored

```bash
# debconf-show packagename
debconf-show phpmyadmin
```

```bash
  phpmyadmin/password-confirm: (password omitted)
  phpmyadmin/app-password-confirm: (password omitted)
  phpmyadmin/setup-password: (password omitted)
  phpmyadmin/mysql/app-pass: (password omitted)
  phpmyadmin/mysql/admin-pass: (password omitted)
  phpmyadmin/remote/host: localhost
  phpmyadmin/upgrade-backup: true
  phpmyadmin/dbconfig-upgrade: true
  phpmyadmin/dbconfig-reinstall: false
  phpmyadmin/db/dbname: phpmyadmin
  phpmyadmin/passwords-do-not-match:
* phpmyadmin/mysql/admin-user: debian-sys-maint
  phpmyadmin/internal/reconfiguring: false
  phpmyadmin/database-type: mysql
  phpmyadmin/setup-username: admin
  phpmyadmin/missing-db-package-error: abort
  phpmyadmin/remove-error: abort
  phpmyadmin/upgrade-error: abort
  phpmyadmin/install-error: abort
  phpmyadmin/dbconfig-remove: true
  phpmyadmin/remote/port:
  phpmyadmin/purge: false
* phpmyadmin/reconfigure-webserver: apache2
  phpmyadmin/db/app-user: phpmyadmin
  phpmyadmin/internal/skip-preseed: false
  phpmyadmin/mysql/method: Unix socket
* phpmyadmin/dbconfig-install: true
  phpmyadmin/remote/newhost:
```

to query the current value of an option in the debconf database

```bash
echo "get packagename/pgsql/app-pass" | debconf-communicate
```

and to change that value

```bash
echo "set packagename/pgsql/app-pass password1" | debconf-communicate
```

### Getting and setting values with a file

```bash
debconf-get-selections | grep application > file
# and edit the file, then use

debconf-set-selections < file
# to load the changed settings.
```

### Backup debconf configurations

```bash
debconf-get-selections > debconf-selections-backup-`date +%Y%m%d`
```

Links
---
- [Manipulating debconf settings on the command line](https://feeding.cloud.geek.nz/posts/manipulating-debconf-settings-on/)
- [Pre-loading debconf values for easy installation](http://blog.delgurth.com/2009/01/19/pre-loading-debconf-values-for-easy-installation/)