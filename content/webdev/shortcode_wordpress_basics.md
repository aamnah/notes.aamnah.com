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



Links
---

- [Codex: The Shortcode API](https://codex.wordpress.org/Shortcode_API)
- [How to Add a Shortcode in WordPress? (Beginner’s Guide)](https://www.wpbeginner.com/wp-tutorials/how-to-add-a-shortcode-in-wordpress/)