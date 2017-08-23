---
title: Install a LAMP stack
subtitle: Install Apache, PHP, MySQL and PHPMyAdmin on Debian machine
permalink: install-lamp-debian-ubuntu
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
sudo apt update && sudo apt upgrade -y
```

## Apache

```bash
sudo apt install apache2 apache2-utils ssl-cert -y
```

## MySQL

```bash
sudo apt install mysql-server mysql-client -y
```

Secure the installation 

```bash
mysql_secure_installation
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
sudo apt update
```

#### install PHP and packages
at the time of this writing, the latest PHP version is 7.2

```bash
sudo apt install php7.2 libapache2-mod-php7.2 php7.2-cli php7.2-common php-curl php7.2-curl php7.2-dev php7.2-gd php7.2-intl php7.2-mcrypt php7.2-mbstring php7.2-mysql php7.2-pspell php7.2-recode php7.2-xml php-imagick php-pear php-gettext php7.2-zip -y

```

- Most of the packages are installed as dependencies for other packages. For example: installing `php7.2` will also install `libapache2-mod-php7.2`, `php-common`, `php7.2-cli`, `php7.2-common`, `php7.2-json`, `php7.2-opcache`, `php7.2-readline`. But we're going to manually specify them just in case.

| Packages    | Software that requires them |
|-------------|-----------------------------|
| curl | OpenCart, Magento |
| gd | OpenCart, Magento, WordPress |
| gettext | phpmyadmin |
| intl | Magento |
| mbstring | OpenCart, Magento |
| mcrypt | OpenCart, Magento |
| openssl | Magento |
| xml | OpenCart |
| xsl | Magento |
| zip | OpenCart, Magento |


###### Magento extensions

```bash
sudo apt-get update
sudo apt-get install php7.0-gd php7.0-mcrypt php7.0-curl php7.0-intl php7.0-xsl php7.0-mbstring php7.0-openssl php7.0-zip
sudo service apache2 restart
```

#### Enable stuff

- The `mod_rewrite` Apache module is required by WordPress and OpenCart. It is usually required by any software that uses pretty/SEO/custom URLs.

```bash
a2enmod rewrite
```

```bash
phpenmod -v 7.2 mcrypt
```

## PHPMyAdmin

```bash
sudo apt install phpmyadmin -y
```

Links
---

- [bash script](https://github.com/aamnah/bash-scripts/blob/master/install_lamp_debian.sh)

- [System Requirements: WordPress](https://wordpress.org/about/requirements/)
- [System Requirements: OpenCart](http://docs.opencart.com/requirements/)
- [System Requirements: Magento](http://docs.magento.com/m1/ce/user_guide/magento/system-requirements.html)