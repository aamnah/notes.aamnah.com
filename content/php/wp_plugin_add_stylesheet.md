---
title: Adding a stylesheet to a WordPress plugin
date: 2020-02-19
---

```php
function add_my_stylesheet()
{
    wp_enqueue_style( 'myCSS', plugins_url( '/css/myCSS.css', __FILE__ ) );
    wp_enqueue_style( 'myCSS1', plugins_url( '/css/myCSS1.css', __FILE__ ) );
    wp_enqueue_style( 'PopularUsers', plugins_url( 'PopularUsers.css', __FILE__ ) );
}

add_action('admin_print_styles', 'add_my_stylesheet'); // Plugin Admin
add_action( 'wp_enqueue_scripts', 'add_my_stylesheet' ); // Site CSS
```

Another example where i was adding a shortcode and wanted to add the styles for web pages from within the plugin

```php
// Load the CSS file
function plugin_popularUsers_stylesheet()
{
  wp_enqueue_style( 'PopularUsers', plugins_url(
    'PopularUsers.css', __FILE__ ) );
}
add_action('wp_enqueue_scripts', 'plugin_popularUsers_stylesheet');
```

You will use the following functions

- wp_enqueue_style
- plugins_url
- admin_print_styles (for adding stylesheet to PLugin's admin)


```php
// wp_enqueue_style( $handle, $src, $deps, $ver, $media );

wp_enqueue_style('slider', get_template_directory_uri() . '/css/slider.css', false,'0.2','all');
```

> if it is enqueued, then it will be printed out in an HTML `<link ...>` element in the `<head></head>` section in the same manner that WordPress loads it's own stylesheets.

- You just have to pass the filename for the CSS file (without the .css extension). For example _slider_ instead of _slider.css_.
- You can get the current plugin's dirtectory with `plugins_url()`. For example:

```php
// plugins_url( string $path = '', string $plugin = '' )

plugins_url( '/css/myCSS.css', __FILE__ )
```

this will get the `myCSS.css` file from inside the `css` folder in the current plugin's directory (relative path)

If you want to add stylesheet for Plugin's admin/settings area, you'd use `admin_enqueue_scripts`

```php
add_action( 'admin_enqueue_scripts', 'plugin_stylesheet_to_admin' );
```

Both `admin_enqueue_scripts` and `admin_print_styles` should work

Links
---

- [WP: Including CSS & JavaScript](https://developer.wordpress.org/themes/basics/including-css-javascript/#stylesheets)
- [WP Functions: wp_enqueue_style](https://developer.wordpress.org/reference/functions/wp_enqueue_style/)
- [WP Functions: plugins_url](https://developer.wordpress.org/reference/functions/plugins_url/)
- [WP: Combining Enqueue Functions](https://developer.wordpress.org/themes/basics/including-css-javascript/#combining-enqueue-functions)