---
title: Compressing and Minifying Scripts in WordPress
date: 2015-01-26
status: draft
---

DRAFT

In this article, you'll learn how to:

- If debug mode is enables, use uncompressed (deflated) version of files. If debug mode is disabled, use minified files.
- Enable compression of scripts in wp-includes
- Optimize wp-config.php to enable compession and concatenation
- (Optional) Loading Page specific CSS <a href="https://wordpress.org/support/topic/different-css-on-one-page"><i class="fa fa-link"></i></a>

### Compress Scripts
Add this to functions.php

```php
add_action('wp_enqueue_scripts', 'lyza_force_compress');
function lyza_force_compress()
{
    global $compress_scripts, $concatenate_scripts;
    $compress_scripts = 1;
    $concatenate_scripts = 1;
    define('ENFORCE_GZIP', true);

    /* enqueue your scripts here */
}
```
    
Example enqueued scripts

```php
wp_enqueue_script('jquery');
wp_enqueue_script('thickbox');
wp_enqueue_script('scriptaculous');
wp_enqueue_script('editor');
```
    
### Load Page-specific CSS
Only load a css file if viewing a certain page. This goes in the header.

```php
<?php if ( is_page('special-page') ) { ?>
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/style2.css" type="text/css" media="screen" />
<?php } else { ?>
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
<?php } ?>
```    
    
WordPress Plugins
---
- [Better WordPress (BWP) Minify](https://wordpress.org/plugins/bwp-minify/)
	- minifies files, moves them to header or footer
- [MinQueue](https://wordpress.org/plugins/minqueue/)
	- minifies files and combines them

Sources
---
- [JavaScript GZIP Compression in WordPress: What’s Possible and what Hurts](http://blog.cloudfour.com/javascript-gzip-compression-in-wordpress-whats-possible-and-what-hurts/)