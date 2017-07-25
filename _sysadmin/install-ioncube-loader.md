---
title: Install ionCube Loader on Ubuntu 16.04
ctime: 2016-02-13
mtime: 2017-08-25

---

```bash
wget https://downloads.ioncube.com/loader_downloads/ioncube_loaders_lin_x86-64.tar.gz # download
tar xzvf ioncube_loaders_lin_x86-64.tar.gz # extract
php -i | grep extension_dir # find out PHP extensions directory

# copy ioncube module to your PHP extensions directory
PHP_VERSION=$(php -r "echo PHP_MAJOR_VERSION.'.'.PHP_MINOR_VERSION;") 
sudo cp "ioncube/ioncube_loader_lin_${PHP_VERSION}.so" /usr/lib/php/20160731
```

---

ionCube Loader is a PHP Encoder used by companies like WHMCS to encode their software code. In order to use the software, you need to install ionCube.

> Using ionCube encoded and secured PHP files requires a file called the ionCube Loader to be installed on the web server and made available to PHP. PHP can use the Loader with one line added to a PHP configuration file (php.ini). 

Environment

- Ubuntu 17.04
- PHP 7.2

Download ioncube loader (Linux 64 bit, since that's what i'm using)

```bash
wget https://downloads.ioncube.com/loader_downloads/ioncube_loaders_lin_x86-64.tar.gz
```

Extract it

```bash
tar xzvf ioncube_loaders_lin_x86-64.tar.gz
```

Find the php modules folder

```bash
php -i | grep extension_dir
# extension_dir => /usr/lib/php/20160731 => /usr/lib/php/20160731
```

Copy the ioncube module for the PHP version you have installed to your php modules folder

```bash
PHP_VERSION=$(php -r "echo PHP_MAJOR_VERSION.'.'.PHP_MINOR_VERSION;")
sudo cp "ioncube/ioncube_loader_lin_${PHP_VERSION}.so" /usr/lib/php/20160731
```

NOTE: You may run into issues with ${PHP_VERSION} if ionCube hasn't provided the module for the PHP version you have installed. For example, module for PHP 7.2 is not available at the moment. In that case, manually copy the module for the closest matching PHP version

Configure PHP for IonCube by adding this to the start of your server-wide php.ini file (`/etc/php5/apache2/php.ini` or `find / -name php.ini`).

It may also be cleaner to add it to a separate file and load that instead of editing you php.ini

```bash
php -i | grep "Scan this dir for additional .ini files"
```

```bash
zend_extension = /usr/lib/php5/20121212/ioncube_loader_lin_5.5.so
```

Restart Apache

```bash
service apache2 restart
```

Test
To ensure that the module was correctly installed, create a file called `test.php` in `/var/www` with the following content:

```php
<?php
echo var_export(extension_loaded('ionCube Loader') ,true);
```

Once you have done that, navigate to http://your-droplets-ip-address/test.php. It should output "true".

```php
<?php phpinfo(); ?>
```

will also tell you if ioncube is enabled.


- [HowtoForge](https://www.howtoforge.com/tutorial/how-to-install-ioncube-loader/)
- [DigitalOcean: How To Install ionCube on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-ioncube-on-ubuntu-16-04)

