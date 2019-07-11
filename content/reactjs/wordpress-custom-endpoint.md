---
title: Adding a Custom Endpoint to WordPress
date: 2019-07-08
---

```php
add_action( 'rest_api_init', function () {
	register_rest_route( 'fpp/v1', 'news', array(
		'methods' => 'GET',
		'callback' => 'get_news_listing'
	));
});

function get_news_listing ( $data ) {
	$post_args = array(
		'numberposts' => 10,
		'post_type' => 'post'
	);

	$posts = get_posts($args);

	if ( empty( $posts ) ) {
		return null;
	}

	foreach($posts as $key => $value) {
	  $posts[$key] = $value;
	}

	// Add thumbnail to each post object
	// https://www.php.net/manual/en/function.array-walk.php

	// https://www.php.net/manual/en/control-structures.foreach.php

	return $posts;

}
```