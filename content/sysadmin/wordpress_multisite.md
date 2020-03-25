---
title: Setting up a WordPress Multisite Network
date: 2020-03-25
---

1. Enable multisite
2. Deactivate all installed plugins
3. Create network
4. Update config files

Keep in mind that creating sites in subdirectories doesn't actually _create_ any subdirectories on the file system, so you won't see any new folders. It is all done within the database except maybe a folder under `wp-content/uploads` for Media files..

### Enable multisite

Add the following to `wp-config.php` (before any `require` or `include` statements..)

```php

/**
 * Allow WordPress Multisite network
 */
define( 'WP_ALLOW_MULTISITE', true );
```

Once you have it enabled, go back to _Dashboard > Tools > Network Setup_ and confirm the settings. You'll then be asked to edit the `wp-config.php` and `.htaccess` files again

### Update configuration files

```php
// wp-config.php
/**
 * Allow WordPress Multisite network
 */
define( 'WP_ALLOW_MULTISITE', true );
define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', false); // Set this to true for subdomain sites
define('DOMAIN_CURRENT_SITE', 'mydomain.net');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);
```

Replace the existing WordPress related rules with the following

```conf
# .htaccess

# BEGIN WordPress
# The directives (lines) between `BEGIN WordPress` and `END WordPress` are
# dynamically generated, and should only be modified via WordPress filters.
# Any changes to the directives between these markers will be overwritten.
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]

# add a trailing slash to /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^(wp-(content|admin|includes).*) $1 [L]
RewriteRule ^(.*\.php)$ $1 [L]
RewriteRule . index.php [L]
</IfModule>
# END WordPress
```

### Subdomain or Paths (Subdirectories)

You can set the `SUBDOMAIN_INSTALL` option to `true` or `false` and that'll change the option you get when creating a new site. By default, it starts with installs in subdomains. I had to go in and change the value to `false` in order to create new sites in subdirectories

```php
define('SUBDOMAIN_INSTALL', false);
```

### Create sites

The above is all you need. You should now be able to go to https://mydomain.net/wp-admin/network/ and create new sites, update all plugins and update all themes etc.


### Management

- You should configure plugins like _JetPack_ from the Network Admin


## Troubleshooting

```
ERR_TOO_MANY_REDIRECTS
```

You get too many redirects when going to the Admin of the new site you just created

Maybe check file permissions or the config in `.htaccess`?

Links
---

- [Before You Create A Network](https://wordpress.org/support/article/before-you-create-a-network/)
- [Create A Network](https://wordpress.org/support/article/create-a-network/)