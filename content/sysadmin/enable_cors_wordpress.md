---
title: Enable CORS for WordPress API on Apache
date: 2019-10-31
---

### Try 1. Edit `.htaccess`

```bash
sudo a2enmod headers
sudo service apache2 reload
```

`.htaccess`

```
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
  Header set Access-Control-Allow-Methods: "POST, GET, OPTIONS, PUT, DELETE"
  Header set Access-Control-Allow-Credentials: true
  Header set Access-Control-Allow-Headers: X-Requested-With
</IfModule>
```

You can use `add` rather than `set`, but be aware that `add` can add the header multiple times, so it's generally safer to use set.

https://www.w3.org/wiki/CORS_Enabled


### Try 2. Edit `functions.php`

Put this in `functions.php`

```php
// Enable CORS for the API
// https://gist.github.com/miya0001/d6508b9ba52df5aedc78fca186ff6088
// https://github.com/ahmadawais/WP-REST-Allow-All-CORS/blob/master/plugin.php
function my_customize_rest_cors() {
  remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
  add_filter( 'rest_pre_serve_request', function( $value ) {
    header( 'Access-Control-Allow-Origin: *' );
    header( 'Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE' );
    header( 'Access-Control-Allow-Credentials: true' );
    header( 'Access-Control-Expose-Headers: Link', false );
    header( 'Access-Control-Allow-Headers: X-Requested-With' );
    return $value;
  } );
}
add_action( 'rest_api_init', 'my_customize_rest_cors', 15 );
```


### Try 3. Edit Appache virtual host `.conf` file

Add the header inside the `<Directory>` section in the Apache virtual host files for the domain. (You may have 2 of them, one for SSL and one non-SSL)

```
# Allow .htaccess and Rewrites
<Directory /var/www/mysite.com/public_html>
  Options FollowSymLinks
  AllowOverride All

  # Enable CORS
  Header set Access-Control-Allow-Origin "https://www.mysite.com"
</Directory>
```

The side benefit of editing the `.conf` file and not `.htaccess` is that i can be sure that i don't have to worry about the _order_ of my redirects and what section goes before what


---

In the end none of these worked for my user case because i was also setting up redirection for the domain. When you redirect a domain, the origin gets changed to `null` which is not an acceptable `Origin`