---
layout: post
title: Fixing OpenCart Internal Server Error
permalink: fix-opencart-internal-server-error-500
ctime: 2017-07-04

---

#### Error 500 Internal Server Error after transferring web host
- Check Apache error logs (usually $HOME/logs/error_log)

#### 1. Option FollowSymlinks not allowed here

```
Option FollowSymlinks not allowed here
```

Chances are you're on Virtualmin. 

> Any Virtualmin site that uses FollowSymLinks can be exploited to allow that user to read all files in /home. That was creating a nightmare

Virtualmin adds some Options as part of a security fix that could otherwise cause all your websites to be compromised if one of them gets hacked. `FollowSymlinks` gets replaced with `SymLinksifOwnerMatch`

You'll need to edit the `.htaccess` file for your opencart store and replace 

```apacheconf
Options +FollowSymlinks
```

with 

```apacheconf
Options +SymLinksifOwnerMatch
```

You can update all .htaccess files for your sites with

```bash
find /home -name ".htaccess" -type f -exec sed -i 's/FollowSymLinks/SymLinksIfOwnerMatch/g' {} ";"
```

#### 2. Invalid command 'RewriteEngine', perhaps misspelled or defined by a module not included in the server configuration 

```
Invalid command 'RewriteEngine', perhaps misspelled or defined by a module not included in the server configuration
```

chances are that rewrite module for Apache is disabled. You can enable it with the following command

```bash
sudo a2enmod rewrite
sudo service apache2 restart
```

#### 3. PHP Fatal error:  Uncaught Error: Call to undefined function mysql_connect()

```
 PHP Fatal error:  Uncaught Error: Call to undefined function mysql_connect() in /home/blah/public_html/system/database/mysql.php:6
```

`mysql_connect()` is deprecated now. Older versions of OpenCart used it (1.5.6), but it was updated later on. `mysqli_connect()` is the replacement. You need to use a driver other than MySQL driver (PDO, MySQLi) to get rid of the error 

Update **BOTH config.php** (`config.php` and `admin/config.php`) files line to:

```php
define('DB_DRIVER', 'mysqli');
```
[link](https://forum.opencart.com/viewtopic.php?t=155393)

#### 4. PHP Fatal error:  Uncaught Error: Call to undefined method mysqli::escape()

```
PHP Fatal error:  Uncaught Error: Call to undefined method mysqli::escape()
```

make sure the MySQLi extension for PHP is installed and enabled [link](https://stackoverflow.com/questions/35424982/how-to-enable-mysqli-extension-in-php-7)

```bash
# sudo apt-get install php5-mysql # for PHP5, deprecated
sudo apt-get install php-mysql
```
By Default MySQLi extension is disable in PHP 7. To enable, edit `php.ini` (Apache2, PHP 7, Ubuntu environment)

```bash
nano /etc/php/7.0/apache2/php.ini
```
and add this line

```apacheconf
extension=php_mysqli.so
```

#### 5. mod_fcgid: stderr: PHP Parse error:  syntax error, unexpected 'else' (T_ELSE), expecting function (T_FUNCTION)

```
mod_fcgid: stderr: PHP Parse error:  syntax error, unexpected 'else' (T_ELSE), expecting function (T_FUNCTION) in /home/blah/public_html/system/database/mysqli.php on line 54
```

then this means you're probably using OC 1.5.6x? The developer made some changes that broke mysqli. You can get newer versions (get the next closest version from your current install) of `system/database/mysqli.php` & `system/library/db.php` (get both, one depends on the other) and replace the old ones [link](https://forum.opencart.com/viewtopic.php?f=161&t=110746)

Check your opencart version by viewing the `index.php` file, you'll get something like

```php
define('VERSION', '1.5.6');
```

Now download the files for the next release of OpenCart from the official site's downloads section (in this case got 1.5.6.1)

#### 6. PHP Fatal error:  Uncaught Error: Call to undefined function mcrypt_create_iv()

```
PHP Fatal error:  Uncaught Error: Call to undefined function mcrypt_create_iv()
```

Make sure `mcrypt` module is installed

```bash
sudo apt-get install mcrypt php7.0-mcrypt
```
Restart Apache afterwards

```bash
sudo service apache2 restart
```


#### 7. PHP Fatal error:  require_once(): Failed opening required 

```
PHP Fatal error:  require_once(): Failed opening required '/system/startup.php' (include_path='.:/usr/share/php:/usr/share/pear') in index.php on line 23
```

Check your server paths in `config.php` and `admin/config.php`. 

This error can happen after you have transferred your opencart site and the paths may have changed (for example, when moving from cpanel `/home/user/site` to barebones/webmin based server `/var/www/site`)

#### 8. fopen(), fwrite() and fclose() warning

```
PHP Warning:  fopen(system/logs/error.txt): failed to open stream: Permission denied in system/library/log.php on line 12

PHP Warning:  fwrite() expects parameter 1 to be resource, boolean given in system/library/log.php on line 14

PHP Warning:  fclose() expects parameter 1 to be resource, boolean given in system/library/log.php on line 16
```

Your log and cache folders are not writable anymore. [source](https://stackoverflow.com/questions/32275649/opencart-errors) Double check your permissions

```bash
# chown -R www-data:www-data /var/www
chmod 777 system/logs/ -R
chmod 777 system/cache/ -R
```

Different opencart versions have different opencart folder structure

#### Clean vqcache

```bash
rm -rf /home/MYSITE/public_html/vqmod/vqcache/*
```


Links
---
[.htaccess: Option FollowSymLinks not allowed here](https://www.virtualmin.com/node/24753#comment-124082)