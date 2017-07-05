---
layout: post
title: Fixing OpenCart Internal Server Error
ctime: 2017-07-04

---

#### Error 500 Internal Server Error after transferring web host
- Check Apache error logs (usually $HOME/logs/error_log)

- If you see

```
Option FollowSymlinks not allowed here
```

Chances are you're on Virtualmin. 
> Any Virtualmin site that uses FollowSymLinks can be exploited to allow that user to read all files in /home. That was creating a nightmare

Virtualmin adds some Options as part of a security fix that could otherwise cause all your websites to be compromised if one of them gets hacked. `FollowSymlinks` gets replaced with `SymLinksifOwnerMatch`

You'll need to edit the `.htaccess` file for your opencart store and replace 

```
Options +FollowSymlinks
```

with 

```
Options +SymLinksifOwnerMatch
```

You can update all .htaccess files for your sites with

```bash
find /home -name ".htaccess" -type f -exec sed -i 's/FollowSymLinks/SymLinksIfOwnerMatch/g' {} ";"
```

- If you get 

```
Invalid command 'RewriteEngine', perhaps misspelled or defined by a module not included in the server configuration
```

chances are that rewrite module for Apache is disabled. You can enable it with the following command

```
sudo a2enmod rewrite
sudo service apache2 restart
```

- If you see

```
 PHP Fatal error:  Uncaught Error: Call to undefined function mysql_connect() in /home/blah/public_html/system/database/mysql.php:6
```


You therefore need to update **BOTH config.php** (`config.php` and `admin/config.php`) files line to:

```php
define('DB_DRIVER', 'mysqli');
```
[link](https://forum.opencart.com/viewtopic.php?t=155393)

- if you get

```
PHP Fatal error:  Uncaught Error: Call to undefined method mysqli::escape()
```

make sure the MySQLi extension for PHP is installed and enabled [link](https://stackoverflow.com/questions/35424982/how-to-enable-mysqli-extension-in-php-7)

```bash
# sudo apt-get install php5-mysql # for PHP5, deprecated
sudo apt-get install php-mysql
```
By Default MySQLi extension is disable in PHP 7. To enable, edit `php.ini` (Apache2, PHP 7, Ubuntu environment)

```
nano /etc/php/7.0/apache2/php.ini
```
and add this line

```
extension=php_mysqli.so
```

- if you get 

```
mod_fcgid: stderr: PHP Parse error:  syntax error, unexpected 'else' (T_ELSE), expecting function (T_FUNCTION) in /home/blah/public_html/system/database/mysqli.php on line 54
```

then this means you're probably using OC 1.5.6x? The developer made some changes that broke mysqli. You can get newer versions (get the next closest version from your current install) of `system/database/mysqli.php` & `system/library/db.php` (get both, one depends on the other) and replace the old ones [link](https://forum.opencart.com/viewtopic.php?f=161&t=110746)

Check your opencart version by viewing the `index.php` file, you'll get something like

```
define('VERSION', '1.5.6');
```

Now download the files for the next release of OpenCart from the official site's downloads section (in this case got 1.5.6.1)

- If you get 

```
PHP Fatal error:  Uncaught Error: Call to undefined function mcrypt_create_iv()
```

Make sure `mcrypt` module is installed

```bash
sudo apt-get install mcrypt php7.0-mcrypt
```
Restart Apache afterwards

```
sudo service apache2 restart
```

- Clean vqcache

```
rm -rf /home/MYSITE/public_html/vqmod/vqcache/*
```

Links
---
[.htaccess: Option FollowSymLinks not allowed here](https://www.virtualmin.com/node/24753#comment-124082)