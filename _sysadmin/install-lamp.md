---
title: Install a LAMP stack
subtitle: Install Apache, PHP, MySQL and PHPMyAdmin on a Linux machine
permalink: install-lamp
ctime: 2017-07-25

---

- This is for a debian/ubuntu environment
- We're going to install PHP at the end since it's the longest step and has more explanations

#### Setup details

- PHP version 7 or greater
- MySQL version 5.6 or greater
- HTTPS support

#### Getting ready

```bash
apt update && apt upgrade -y
```

## Apache

```bash
apt install apache2 apache2-utils
```

## MySQL

```bash
apt install mysql-server mysql-client -y
```

Secure the installation 

```bash
mysql_secure_installation
```

## PHPMyAdmin

```bash
apt install phpmyadmin -y
```

## PHP

#### add repo

add repo to get the latest version of PHP

```bash
sudo add-apt-repository ppa:ondrej/php
sudo apt update
```

if you get

```bash
sudo: add-apt-repository: command not found
```

then install the `software-properties-common` package. Depending on your Ubuntu version (Precise Pangolin, 12.04 LTS), you may also have to install the `python-software-properties` package:

```bash
sudo apt-get install software-properties-common -y
```

Now update the sources list so it gets packages from the repo we just added

```
apt update
```

#### install PHP and packages
at the time of this writing, the latest PHP version is 7.2

```bash
apt install php7.2 libapache2-mod-php7.2 php7.2-cli php7.2-common php-curl php7.2-curl php7.2-dev php7.2-gd php7.2-intl php7.2-mcrypt php7.2-mbstring php7.2-mysql php7.2-pspell php7.2-recode php7.2-xsl php-imagick php-pear php-gettext -y

```

- Most of the packages are installed as dependencies for other packages. For example: installing `php7.2` will also install `libapache2-mod-php7.2`, `php-common`, `php7.2-cli`, `php7.2-common`, `php7.2-json`, `php7.2-opcache`, `php7.2-readline`. But we're going to manually specify them just in case.

#### Enable stuff

- The `mod_rewrite` Apache module is required by WordPress and OpenCart. It is usually required by any software that uses pretty/SEO/custom URLs.

```bash
a2enmod rewrite
```

```bash
phpenmod -v 7.2 mcrypt
```

Links
---

- [bash script](https://github.com/aamnah/bash-scripts/blob/master/install_lamp_debian.sh)

- [System Requirements: WordPress](https://wordpress.org/about/requirements/)
- [System Requirements: OpenCart](http://docs.opencart.com/requirements/)
- [System Requirements: Magento](http://docs.magento.com/m1/ce/user_guide/magento/system-requirements.html)