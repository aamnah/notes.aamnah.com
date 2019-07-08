---
title: Customizing WordPress API data
date: 2019-07-08
---

What i want:

- remove unnecessary data from the response (e.g. `_links`)
- add data from multiple endpoints to one response so that i don't have to call multiple endpoints (e.g. featured image size URLs)
- customize the data that is sent back (e.g. excerpts)

Notes:

- The complete REST response is filtered through `rest_prepare_post` filter. It allows modification of the post type data right before it is returned.
- Action hooks look like this: `do_action( "hook_name" )`
- Filter hooks look like this: `apply_filters( "hook_name", "what_to_filter" )`.

### add_filter

Hooks a function or method to a specific filter action.

```php
// add_filter parameter
add_filter( string $tag, callable $function_to_add, int $priority = 10, int $accepted_args = 1 )
```

## Examples

### Add featured image URLs

```php
// Add Featured Image source URLs to the `/posts/` endpoint response

function add_featured_image_url ($data, $post, $context) {
	$featured_image_id = $data -> data['featured_media']; // get featured image ID from $data
	$featured_image_url = wp_get_attachment_image_src( $featured_image_id, 'original' ); // get URL of original size
	$featured_image_url_thumbnail = image_get_intermediate_size( $featured_image_id, 'thumbnail' ); // get URL of thumbnail size
	$featured_image_url_medium = image_get_intermediate_size( $featured_image_id, 'medium' ); // get URL of medium size

	if ( $featured_image_url_thumbnail ) {
		$data -> data['featured_image_url']['thumbnail'] = $featured_image_url_thumbnail['url'];
	}

	if ( $featured_image_url_medium ) {
		$data -> data['featured_image_url']['medium'] = $featured_image_url_medium['url'];
	}

	if ( $featured_image_url ) {
		$data -> data['featured_image_url']['full'] = $featured_image_url[0];
	}

	return $data;
}

add_filter( 'rest_prepare_post', 'add_featured_image_url', 10, 3); // 10 is priority and 3 is accepted_args. Both are optional
```

this will give us the following in the `/posts/` endpoint results

```json
featured_image_url: {
	thumbnail: "https://news.mydomain.net/wp-content/uploads/images/myimage-150x150.jpg",
	medium: "https://news.mydomain.net/wp-content/uploads/images/myimage-300x200.jpg",
	full: "https://news.mydomain.net/wp-content/uploads/images/myimage.jpg"
},
```

- `$data` here is the entire default JSON response
- the `wp_get_attachment_image_src` function gets the URL of any attachment image by taking its ID. Accepts any valid image size (e.g. 'original', 'thumbnail' 150x150, 'medium' 300x200, 'full' etc.). The first item in the returned array is the URL of the attachment image src..
- `image_get_intermediate_size` gets the image source URL by taking the attachment ID and the image size.
- Standard image sizes are: `thumbnail`, `medium`, `medium_large`, `large`.

### Add Comment count

```php
// Add comment count to the API response
function add_comment_count($data, $post, $context) {
	$args = array(
		'post_id' => $post -> ID, // Limit results affiliated with this post ID. Default 0.
		'count' => true, // return only the count, not an array of comment objects
		'status' => 'approve'
	);
	$comments = get_comments( $args );

	$data -> data['comment_count'] = $comments;

	return $data;
}

add_filter( 'rest_prepare_post', 'add_comment_count', 10, 3);
```

- `$data` is the entire array of posts returned (default: 10)
- `$post` is the individual post in that array

```json
ID: 3347,
post_author: "1",
post_date: "2019-05-24 15:29:47",
post_date_gmt: "2019-05-24 15:29:47",
post_content: "This is post content. Blah blah blah",
post_excerpt: "This is the post excerpt. More blah.. ",
post_status: "publish",
comment_status: "open",
ping_status: "closed",
post_password: "",
post_name: "this-be-the-post-slug",
to_ping: "",
pinged: "",
post_modified: "2019-06-18 07:21:50",
post_modified_gmt: "2019-06-18 07:21:50",
post_content_filtered: "",
post_parent: 0,
guid: "https://news.mydomain.net/p=?3347",
menu_order: 0,
post_type: "post",
post_mime_type: "",
comment_count: "8",
filter: "raw"
```

### Customize the excerpt

Precisely, remove the read more link as it goes to the wrong URL. Remove the continue reading link from auto generated excerpts by defining our own custom excerpt if one hasn't been added by user

```php
// Custom Excerpt
// Remove the continue reading link from auto generated excerpts by defining our own custom excerpt if one hasn't been added by user
function custom_excerpt ($data, $post, $context) {

	// unset( $data -> data['excerpt'] ); // remove the excerpt field (if you want to overwrite the default 'excerpt' response sent by the API)

	$content = $post -> post_content;
	$more = ' ... ';

	if ( ! has_excerpt($post -> ID)) {
		// This post does not has a user defined excerpt
		$data -> data['excerpt']['raw'] = wp_trim_words( $content, 55 , $more );
	}
	return $data;
}

add_filter( 'rest_prepare_post', 'custom_excerpt', 10, 3);
```

- `has_excerpt()` takes a post ID and returns true/false depending on whether a custom user-defined excerpt was added for the post.

### Troubleshooting

See values in \$post

```php
function whothis ($data, $post, $context) {
	$whothis = $post;
	$data -> data['whothis'] = $whothis;
	return $data;
}
add_filter( 'rest_prepare_post', 'whothis', 10, 3);
```

## Links

- [REST API Handbook: Modifying ResponsesREST API Handbook: ](https://developer.wordpress.org/rest-api/extending-the-rest-api/modifying-responses/)
- [WP REST API: MODIFYING THE JSON RESPONSE](https://www.haselt.com/blog/wp-rest-api-modifying-the-json-response)
- [Adding Fields To The JSON Response Of The WP REST API](https://1fix.io/blog/2015/06/26/adding-fields-wp-rest-api/)
- [Code Reference: `add_filter]()`(https://developer.wordpress.org/reference/functions/add_filter/)
- [Code Reference: `wp_get_attachment_image_src()`](https://developer.wordpress.org/reference/functions/wp_get_attachment_image_src/)
- [Code Reference: `get_intermediate_image_sizes()`](https://developer.wordpress.org/reference/functions/get_intermediate_image_sizes/)
- [Code Reference: `get_comments()`](https://developer.wordpress.org/reference/functions/get_comments/)
- [Blog Post Excerpt in REST API call](https://wordpress.org/support/topic/wordpress-com-forums-support-blog-post-excerpt-in-rest-api-call/)
- [WordPress Hooks Database](https://adambrown.info/p/wp_hooks)
- [rest_prepare_post](https://adambrown.info/p/wp_hooks/hook/rest_prepare_post_type?version=5.1&file=wp-includes/rest-api/endpoints/class-wp-rest-post-types-controller.php)
- [WP REST API format response](https://wordpress.stackexchange.com/questions/222307/wp-rest-api-format-response)
