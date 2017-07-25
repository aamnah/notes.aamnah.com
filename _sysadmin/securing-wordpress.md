---
title: Securing Wordpress
ctime: 2017-07-05

---

####  File Permissions


The default permission scheme should be:

- Folders `755`
- Files `644`

**Avoid** having any file or directory set to 777. `777` means global access. Usually only cache files have this permission.

Via command line you can run the following commands to change permissions recursively:

```bash
# For Directories:
find /path/to/your/wordpress/install/ -type d -exec chmod 755 {} \;

# For Files:
find /path/to/your/wordpress/install/ -type f -exec chmod 644 {} \;
```


##### Secured File Permissions for specific files

You should set these permissions

```
600 -rw-------  /home/user/wp-config.php
604 -rw----r--  /home/user/cgi-bin/.htaccess
600 -rw-------  /home/user/cgi-bin/php.ini
711 -rwx--x--x  /home/user/cgi-bin/php.cgi
100 ---x------  /home/user/cgi-bin/php5.cgi
```

Run these commands to set them. Might have to re-check the paths for php/cgi files...

```bash
chmod 604 .htaccess; 
chmod 600 wp-config.php;
chmod 600 php.ini cgi-bin/php.ini; 
chmod 711 cgi-bin/php.cgi;
chmod 100 cgi-bin/php5.cgi;

```

#### Limiting file access rights

Add the following to `.htaccess`

```apache
# SECURING wp-config.php
# http://codex.wordpress.org/Hardening_WordPress#Securing_wp-config.php
<files wp-config.php>
order allow,deny
deny from all
</files>

# SECURING wp-includes
# http://codex.wordpress.org/Hardening_WordPress#Securing_wp-includes
# Block the include-only files.
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^wp-admin/includes/ - [F,L]
RewriteRule !^wp-includes/ - [S=3]
RewriteRule ^wp-includes/[^/]+\.php$ - [F,L]
RewriteRule ^wp-includes/js/tinymce/langs/.+\.php - [F,L]
RewriteRule ^wp-includes/theme-compat/ - [F,L]
</IfModule>

# SECURING xmlrpc.php
# https://blog.sucuri.net/2015/10/brute-force-amplification-attacks-against-wordpress-xmlrpc.html
# Prevent Brute forcing via xmlrpc.php by allowing ONLY localhost access xmlrpc.php 
# (some other plugin using xmlrpc e.g. Yoast might have an issue, check the log files, read up)
<files xmlrpc.php="">
Order Deny,Allow
Deny from all
Allow from 192.0.64.0/18
Satisfy All
ErrorDocument 403 http://127.0.0.1/
</files>
```


Links
---

- [WordPress Codex: Hardening WordPress](https://codex.wordpress.org/Hardening_WordPress)
- [WordPress Codex: Changing File Permissions](https://codex.wordpress.org/Changing_File_Permissions#.htaccess_permissions)
- [Sucuri: Brute Force Amplification Attacks Against WordPress XMLRPC](https://blog.sucuri.net/2015/10/brute-force-amplification-attacks-against-wordpress-xmlrpc.html)
- [How to Find a Backdoor in a Hacked WordPress Site and Fix It](http://www.wpbeginner.com/wp-tutorials/how-to-find-a-backdoor-in-a-hacked-wordpress-site-and-fix-it/)