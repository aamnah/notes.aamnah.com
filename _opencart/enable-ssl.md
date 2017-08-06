---
title: Enable SSL in OpenCart
permalink: opencart-enable-ssl
ctime: 2017-08-06
---

- Install SSL
- Enable SSL in Admin
- Edit config.php files

### Install SSL

On an Apache (Ubuntu) system where you have SSH access, you can run the following commands to install an SSL (Let's Encrypt)

```bash
sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:certbot/certbot # add certbot repo
sudo apt-get update
sudo apt-get install python-certbot-apache # install certbot
sudo certbot --apache # run certbot
```

Don't forget to add `certbot renew` to cron

```bash
sudo crontab -e
# @daily certbot renew # Check SSL certificates for renewal
```

### Enable SSL in Admin

Admin > System > Settings (Edit) > Server > Use SSL (Yes) > Save

### Edit config files

Edit `config.php`

```php
// HTTPS
define('HTTPS_SERVER', 'https://yourdomain.com/');
```

Edit `admin/config.php`

```php
// HTTPS
define('HTTPS_SERVER', 'https://yourdomain.com/admin/');
define('HTTPS_CATALOG', 'https://yourdomain.com/');
```

Troubleshooting
---

If you forgot to edit the system settings, and are now unable to login at the Admin login page, you'll have to edit the setting in the database via PHPMyAdmin

Open your OpenCart database (find out from config.php if you're not sure which one it is) and go to the `oc_settings` table, run the following SQL query

```sql
UPDATE `oc_setting` SET `value` = '1' WHERE `key`='config_secure'
```
