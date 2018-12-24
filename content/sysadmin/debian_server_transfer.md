---
title: Tranfer between Debian Apache based setups
date: 2018-04-27
tags: 
- backups
---

# Transfer server from DigitalOcean to Vultr
Transfering between Debian Apache based setups

This is my current setup

- Apache, MySQL, PHP, phpMyAdmin on Ubuntu
- Domains added via vhost conf files
- Let's Encrypt SSL certificates


1. Transfer databases
2. Transfer all `vhost.conf` files in `/var/etc/site_enabled`
3. Transfer all sites in `/var/www`
4. Transfer SSL certs for all domains


### Transfer Domain Conf files
This involves

- Locating where the conf files are
- Copying them to new server

The conf files are usually in the `/etc/apache2/sites-available` folder and symlinked into the `/etc/apache2/sites-enabled` folder

### Transfer SSL Certificates
This involves

1. **Locating** where the SSL certificate, private key, and any intermediate certificates are on your Apache server. Their exact location will be specified in your Apache configuration file if they are currently being used. `/etc/ssl`
2. **Copying those files to the new server**.
3. **Editing** your Apache configuration file to use the new files on the new server. 

#### Let's Encrypt SSL certs
If your SSL certs have been installed with Let's Encrypt SSL, then you need to 

- copy the `/etc/letsencrypt` dir to new server
- reinstall Let's encrypt
- recreate any cron jobs
- make sure everything is working `certbot renew --dry-run` and `certbot renew`

Links
---

- [Move or copy an SSL certificate from an Apache server to another Apache server](https://www.sslshopper.com/move-or-copy-an-ssl-certificate-from-an-apache-server-to-another-apache-server.html)
- [Migrating to a new server - need to move letsencrypt](https://community.letsencrypt.org/t/migrating-to-a-new-server-need-to-move-letsencrypt/19553)