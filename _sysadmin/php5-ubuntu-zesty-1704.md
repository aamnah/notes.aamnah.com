---
layout: post
title: 'Install PHP5 on Ubuntu 17.04 Zesty Zapus'
subtitle: Install both version of PHP on Ubuntu 17.04 and switch between the two
permalink: install-php5-php7-ubuntu-zesty
ctime: 2017-07-06

---

(Theoretically) You can install both PHP5 and PHP7 and switch between them.. If you only want PHP5, add the repo, install the packages for PHP 5.6 and end it there.

<div class="Post-note Post-note--warn">
<strong>WARNING: </strong> <br />
<ul>
  <li>This leads to PhpMyAdmin not working if you install it afterwards.. 
  <li>Both versions working has not been tested in production.
  <li>If you check PHP version on system, <code>php --version</code>, it still shows <samp>PHP 7.0</samp>
</ul>
</div>

#### add repo

There are no PHP 5.x packages in Zesty repositories. Only in the PPA, so you need to add the repo

```bash
sudo add-apt-repository ppa:ondrej/php
sudo apt update
```

---
note: if you get 

```
sudo: add-apt-repository: command not found
```
then install the `software-properties-common` package. For my Ubuntu version (precise), I also had to install the python-software-properties package:

```bash
 sudo apt-get install software-properties-common -y
```
---

#### install packages

```bash
# PHP 5.6
apt-get install php5.6 libapache2-mod-php5.6 php5.6-cli php5.6-common php5.6-curl php5.6-dev php5.6-gd php5.6-intl php5.6-mcrypt php5.6-mysql  php5.6-recode php5.6-xsl php5.6-pspell php5.6-ps php5.6-imagick php-pear -y

# PHP 7
apt-get install php7.0 libapache2-mod-php7.0 php7.0-cli php7.0-common php7.0-curl php7.0-dev php7.0-gd php7.0-intl php7.0-mcrypt php7.0-mysql php7.0-pspell php7.0-recode php7.0-xsl php-imagick php-pear -y
```

#### Switch PHP version ( Apache ):

from php5.6 to php7.0:

```bash
sudo a2dismod php5.6 ; sudo a2enmod php7.0 ; sudo service apache2 restart
```
from php7.0 to php5.6:

```bash
sudo a2dismod php7.0 ; sudo a2enmod php5.6 ; sudo service apache2 restart
```

enable modules

```bash
a2enmod rewrite
# phpenmod -v 5.6 mcrypt # PHP5
phpenmod -v 7.0 mcrypt # PHP7
```


Links
---

- https://askubuntu.com/questions/756879/cant-install-php5-on-ubuntu-16-04
- [Ubuntu Missing add-apt-repository command](http://lifeonubuntu.com/ubuntu-missing-add-apt-repository-command/)