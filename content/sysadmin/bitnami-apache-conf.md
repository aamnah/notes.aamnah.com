---
title: Making sense of Bitnami Apache confs
date: 2018-12-19
status: draft
---

## Apache Conf
The main conf file for Apache is at `/opt/bitnami/apache2/conf/http.conf`

This file loads (sources) Bitnami specific conf files. Since these files are loaded at the end of the main Apache conf file, they'll override the settings in the main conf.

- `/opt/bitnami/apache2/conf/bitnami/bitnami.conf`
- `/opt/bitnami/apache2/conf/bitnami/httpd.conf`


## SSL Conf
There are 3 conf files that deal with Apache SSL inside the `/opt/bitnami/apache2/conf` folder

- `httpd.conf`
- `bitnami/bitnami.conf`
- `extra/httpd-ssl.conf`

## .htaccess and WordPress

`"/opt/bitnami/apps/wordpress/conf/htaccess.conf`


```apache
# PRETTY PERMALINKS

RewriteEngine On
#RewriteBase /wordpress/
RewriteBase /
RewriteRule ^index\.php$ - [S=1]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . index.php [L]
```