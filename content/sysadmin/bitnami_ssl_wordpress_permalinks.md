---
title: Enabling pretty permalinks in Bitnami WordPress with SSL 
date: 2019-01-30
---

### tl;dr

Edit the `/opt/bitnami/apache2/conf/extra/httpd-ssl.conf` file and add the directives there. You need to wrap your `.htaccess` stuff in a `<Directory>` directive and that will be in turn inside the `<VirtualHost>` directive.

```apache
<VirtualHost _default_:443>

#   General setup for the virtual host
DocumentRoot "/opt/bitnami/apps/wordpress/htdocs"
ServerName www.blah.com:443
ServerAdmin admin@blah.com
ErrorLog "/opt/bitnami/apache2/logs/error_log"
TransferLog "/opt/bitnami/apache2/logs/access_log"

<Directory "/opt/bitnami/apps/wordpress/htdocs">
  AllowOverride All
  Options FollowSymLinks

  # BEGIN WordPress
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.php$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.php [L]
  # END WordPress
</Directory>

</VirtualHost>
```

Restart Apache afterwards

```bash
sudo /opt/bitnami/ctlscript.sh restart apache
```

Bitnami has rewrite module `mod_rewrite` enabled by default on all their stacks so you don't really need the usual `<IfModule>` check.

---

### Troubleshooting

1. Check that `mod_rewrite` is enabled by making sure it's loaded in Apache conf file

Bitnami includes rewrite module for Apache in all their applications by default.

```bash
cat /opt/bitnami/apache2/conf/httpd.conf | grep 'mod_rewrite'
```

```
LoadModule rewrite_module modules/mod_rewrite.so
```

If the line has a `#` at the beginning then it means it is commented out and the module is not being loaded. Edit the file with `nano` adn remove the # at the beginning of the line.

2. Make sure that the `AllowOverride All` and `Options FollowSymLinks` directives are there. They are required for pretty permalinks to work.


3. Make sure you have restarted Apache

```bash
sudo /opt/bitnami/ctlscript.sh restart apache
```


Links
---

- [WP Codex: htaccess](https://codex.wordpress.org/htaccess)
- [Wordpress Permalinks 404 under SSL](https://www.digitalocean.com/community/questions/wordpress-permalinks-404-under-ssl)