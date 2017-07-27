---
title: Install ionCube Loader on Ubuntu 16.04
ctime: 2016-02-13
mtime: 2017-08-25

---

```bash
wget https://downloads.ioncube.com/loader_downloads/ioncube_loaders_lin_x86-64.tar.gz # download
tar xzvf ioncube_loaders_lin_x86-64.tar.gz # extract
php -v # find out PHP version e.g. 7.2
php -i | grep extension_dir # find out PHP extensions directory

# copy closest matching ioncube module to your PHP extensions directory
sudo cp "ioncube/ioncube_loader_lin_7.0.so" /usr/lib/php/20160731/

# copy this line to top of php.ini /etc/php/7.2/apache2/php.ini
# OR copy this to a new configuration file `00-ioncube.ini` and load it (by moving to /etc/php/7.2/apache2/conf.d)
# zend_etxension = path/to/module/file
zend_extension = /usr/lib/php/20160731/ioncube_loader_lin_7.0.so
```

#### tl;dr

- find out PHP version and extensions directory (`7.2` and `/usr/lib/php/20160731`)
- copy closest matching ionCube module to PHP extensions directory (`ioncube/ioncube_loader_lin_7.0.so` and `/usr/lib/php/20160731`)
- copy one line of code to an .ini file and move it to additional .ini files directory (`00-ioncube.ini`, `zend_extension = /usr/lib/php5/20121212/ioncube_loader_lin_7.0.so` and `/etc/php/7.2/apache2/conf.d`)

---

ionCube Loader is a PHP Encoder used by companies like WHMCS to encode their software code. In order to use the software, you need to install ionCube.

> Using ionCube encoded and secured PHP files requires a file called the ionCube Loader to be installed on the web server and made available to PHP. PHP can use the Loader with one line added to a PHP configuration file (php.ini). 

#### Environment

- Ubuntu 17.04
- PHP Version `7.2`
- PHP Extension directory `/usr/lib/php/20160731`
- PHP mods-available directory `/etc/php/7.2/mods-available/`
- PHP additional configuration files directory `/etc/php/7.2/apache2/conf.d`

You can find out all these with `<?php phpinfo(); ?>`, `php -v` and `php -i`

### Download
Download ioncube loader (Linux 64 bit, since that's what i'm using)

```bash
wget https://downloads.ioncube.com/loader_downloads/ioncube_loaders_lin_x86-64.tar.gz
```

Extract it

```bash
tar xzvf ioncube_loaders_lin_x86-64.tar.gz
```

You'll see two kinds of module files in the extracted folder, `.so` and `_ts.so`. `_ts.so` are the _thread-safe_ versions. We're going to copy the `.so` file.

### Copy module

Find the PHP modules folder

```bash
php -i | grep extension_dir
# extension_dir => /usr/lib/php/20160731 => /usr/lib/php/20160731
```

Copy the ionCube module for the PHP version (closest match) you have installed, to your PHP extensions directory

```bash
sudo cp "ioncube/ioncube_loader_lin_7.0.so" /usr/lib/php/20160731
```

## Creating .ini configuration file

There are two places you can add configuration for PHP modules

- The system-wide `php.ini` file at `/etc/php/7.2/apache2/php.ini` (or `find / -name php.ini`)
- Individual files in the `conf.d` directory `/etc/php/7.2/apache2/conf.d` (or `php -i | grep "Scan this dir for additional .ini files"`)

In the conf file we're going to add

```bash
zend_extension = /usr/lib/php5/20121212/ioncube_loader_lin_7.0.so
```

which tells the path for the module to laod

While the simplest way to load the module is to just add the one line of code to the beginning of the `php.ini` file, the following way is more systematic and is how existing modules are loaded.

We're going to create a configuration file in the PHP `mods-available` directory, and then link to that file from `conf.d` so that it gets loaded.

```bash
touch /etc/php/7.2/mods-available/ioncube.ini
echo "zend_extension = /usr/lib/php/20160731/ioncube_loader_lin_7.0.so" > /etc/php/7.2/mods-available/ioncube.ini
ln -s /etc/php/7.2/mods-available/ 00-ioncube.ini
```

Restart Apache

```bash
service apache2 restart
```

### Test

To ensure that the module was correctly installed, create a file called `test.php` in `/var/www` with the following content:

```php
<?php
echo var_export(extension_loaded('ionCube Loader') ,true);
```

Once you have done that, navigate to http://your-droplets-ip-address/test.php. It should output "true".

Alternatively, run this from the command line

```bash
php -r "echo var_export(extension_loaded('ionCube Loader') ,true);"
```

```php
<?php phpinfo(); ?>
```

will also tell you if ioncube is enabled.

Links
---
- [bash scrit](https://github.com/aamnah/bash-scripts/blob/master/install_ioncube.sh)
- [HowtoForge](https://www.howtoforge.com/tutorial/how-to-install-ioncube-loader/)
- [DigitalOcean: How To Install ionCube on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-ioncube-on-ubuntu-16-04)

