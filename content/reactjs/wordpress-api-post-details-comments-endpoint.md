---
title: WordPress API - send post details with comments data
date: 2019-07-12
---

Why?

I need the post title and slug in the comments endpoint so that i don't have to make another call to get that data to build the post title link.

```
Username commented on Post title
```

There are two ways you can do this:

- Add a new field with `register_rest_field`
- Edit the response that is sent using the `rest_prepare_comment` filter

### register_rest_field()

- The `rest_api_init` action fires when preparing to serve an API request
- The `register_rest_field()` registers a new field on an existing WordPress object type (post, comment etc.)

```php
//
// Add post slug to the /comments/ endpoint
// so that we don't have to make another call to get the post title and slug to build the URLs
//
add_action('rest_api_init', function () {
	// register_rest_field( $object_type, $attribute, $args)
	register_rest_field('comment', 'post_slsug', array(
		'get_callback' => function ($comment) {
												$post = get_post($comment['post']);
												return $post->post_name;
											}
	));
});
```

The same can be written like so:

```php
//
// Add post title to the /comments/ endpoint
// so that we don't have to make another call to get the post title and slug to build the URLs
//
add_action('rest_api_init', function () {
	// register_rest_field( $object_type, $attribute, $args)
	register_rest_field('comment', 'post_title', array(
		'get_callback' => send_post_title_with_comments
	));
});


// get_callback()
// this is the data we'll send when somebody calls the endpoint
function send_post_title_with_comments ($comment_array) {
	$comment_object = get_comment($comment_array['id']);

	return $comment_object -> post_title; // send back post_title
}
```

## rest_prepare_comment()

The `rest_prepare_comment()` hook lets you modify the comment right before it is returned.

```php
function send_post_details ($response, $comment, $request) {
	$parent_post = get_post($response -> data['post']);
	$title = $parent_post -> post_title;
	$slug = $parent_post -> post_name;

	$response -> data['post_title'] = $title;
	$response -> data['post_slug'] = $slug;

	return $response;
};
// https://developer.wordpress.org/reference/hooks/rest_prepare_comment/
add_filter( 'rest_prepare_comment', 'send_post_details', 10, 3);
```

## Links

- [REST API Handbook: Modifying Responses](https://developer.wordpress.org/rest-api/extending-the-rest-api/modifying-responses/)
- [Code Reference: register_rest_field()](https://developer.wordpress.org/reference/functions/register_rest_field/)
- [Code Reference: rest_api_init](https://developer.wordpress.org/reference/hooks/rest_api_init/)
- [Code Reference: rest_prepare_comment](https://developer.wordpress.org/reference/hooks/rest_prepare_comment/)
- [Code Reference: get_post()](https://developer.wordpress.org/reference/functions/get_post/)
