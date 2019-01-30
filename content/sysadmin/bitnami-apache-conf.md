---
title: Making sense of Bitnami Apache confs
date: 2018-12-19
---

## Apache Conf
The main conf file for Apache is at `/opt/bitnami/apache2/conf/httpd.conf`

This file loads (sources) Bitnami specific conf files. Since these files are loaded at the end of the main Apache conf file, they'll override the settings in the main conf.

`/opt/bitnami/apache2/conf/httpd.conf` in turn loads these two respectively at the end

```apache
Include "/opt/bitnami/apache2/conf/bitnami/bitnami.conf"

Include "/opt/bitnami/apache2/conf/bitnami/httpd.conf"
```

## SSL Conf
There are 3 conf files that deal with Apache SSL inside the `/opt/bitnami/apache2/conf` folder

- `httpd.conf`
- `bitnami/bitnami.conf`
- `extra/httpd-ssl.conf`

If you are using the SSL configuration file `extra/httpd-ssl.conf`, this is where you'll add the WordPress `.htaccess` stuff for pretty permaliks and rewrite rules and add `AllowOverride All` and `Options FollowSymLinks` directives.

## .htaccess and WordPress

The file is this:

```
/opt/bitnami/apps/wordpress/conf/htaccess.conf
```
