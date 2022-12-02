---
title: Creating WordPress shortcodes
date: 2020-03-27
---


```php
// function that runs when shortcode is called
function my_awesome_function() { 
 
  // Things that you want to do. 
  $message = 'Hello world!'; 
   
  // Output needs to be returned
  return $message;
}

// register shortcode
add_shortcode('my_awesome_shortcode', 'my_awesome_function'); 
```


Add a shortcode in WordPress theme files

```php
<?php echo do_shortcode("[your_shortcode]"); ?>
```


NOTES

- Prefixing the function names and shortcode names is a good idea. For example, consider the following function to load a stylesheet

```php
// Load the CSS file
function add_plugin_stylesheet()
{
  wp_enqueue_style( 'country-site-selector', plugins_url(
    'country-site-selector.css', __FILE__ ) );
}
add_action('wp_enqueue_scripts', 'add_plugin_stylesheet');
```

`add_plugin_stylesheet` has already been declared in another plugin i wrote. When i tried to use it in this plugin and activate it, it failed to do so because the function has already been used.. The function names need to be unique

### Adding HTML/JS from the plugin

```php
function country_site_selector() {
  ?>

  <!-- BONGA! - i added this from plugin -->

  <?php
}
add_action('wp_footer', 'country_site_selector');
```

is better than 

```php
function country_site_selector() {
  echo '<!-- BONGA! - i added this from plugin -->';
}
add_action('wp_footer', 'country_site_selector');
```

because when `echo`ing from within PHP you have to add HTML as strings and don't get any syntax highlighting.


### jQuery vs. $
You can not use the `$` shorthand when you enqueue in WordPress (for compatibility with other libraries)

```
var countrySelector = $( "#countrySelectionContainer" );

$(document).ready(function(){
  // code goes here
});
```

should be this

```
var countrySelector = jQuery( "#countrySelectionContainer" );

jQuery(document).ready(function(){
  // code goes here
});
```

### Referencing plugin directory



Links
---

- [Codex: The Shortcode API](https://codex.wordpress.org/Shortcode_API)
- [How to Add a Shortcode in WordPress? (Beginner’s Guide)](https://www.wpbeginner.com/wp-tutorials/how-to-add-a-shortcode-in-wordpress/)
- [The Beginner’s Guide to Writing Your Own Custom Shortcode](https://torquemag.io/2017/06/custom-shortcode/)