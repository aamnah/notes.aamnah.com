---
title: Creating a WordPress Shortcode
date: 2020-02-18
---

```php
function my_function() {
  // code goes here
}

add_shortcode('my_shortcode', 'my_function');
```

`my_shortcode` is now the name of your shortcode, and `my_function` is the PHP function that it will run

Making a plugin out of it is simple, add a _Header_ comment to the top of the file

```php
<?php
/**
 * @package My_Plugin
 * @version 0.0.1
 */
/*
Plugin Name: My Awesome Plugin
Plugin URI: https://github.com/aamnah/wordpress-shortcode-starter
Description: This is a starting point for a basic plugin that adds a shortcode you can use
Author: Aamnah Akram
Version: 0.0.1
Author URI: https://aamnah.com/
*/
```

Now you can Activate or Deactivate the plugin from the WordPress Dashboard

As a JavaScript developer, i don't know much PHP. I cheated by adding `<script>` and `jQuery`

```php
function popular_users() {
	?>
	<script>
		let avatarSize = 240 // getting double size to account for retina screens
		let userCount = 56
		let containerHeight = (avatarSize / 2) * 4

		// Only get enough users based on user's device (dont get 56 users on mobile if we only have the space to show 15)
		// we only get results in odd numbers
		if (window.innerWidth > 1440) {
			userCount = 84
		} else if (window.innerWidth < 769) {
			userCount = 36
			avatarSize = 160 // will be 80px when displayed (retina adjustment)
			containerHeight = (avatarSize / 2) * 4
		} else if (window.innerWidth < 1025 ) {
			userCount = 48
			avatarSize = 160
			containerHeight = (avatarSize / 2) * 4
		}

		// TODO: fix the above values, something is of, it's getting more than required users
		// TODO: decrease avatar size on mobile devices so that we can show more users (85px seems to fit 5 users in a row)

		let endpoint = `https://www.mydomain.com/Snapshot/landing-grid-mobile?count=${userCount}`

		// Fetch Users
		async function getPopularUsers(url) {
		  let response = await fetch(url)
		  return await response.json()
		}

		// Add the container for showing the users in
		// adding this here so the styles needed to show the users are contained here and not in Divi's Advanced CSS tab (future proofing)
// 		jQuery("#popularUsersContainer").append(`<div id="popularUsers" style="max-height: ${containerHeight}px; display: flex; flex-wrap: wrap; overflow: hidden; justify-content: center;></div>`)
// 		jQuery('<div/>', {
//     id: 'popularUsers'
// }).appendTo('#popularUsersContainer');


		users = document.createElement('div');
		users.setAttribute("id", "users");
		let htmlData;
		// Populate webpage
		getPopularUsers(endpoint).then(data => {
			console.info(data);
			htmlData = data.map(user => {
				let { Id, Username, Filename, CropX1, CropY1, CropWidth, CropHeight, Rotation } = user
				let xOffset = CropX1 + CropWidth;
				let yOffset = CropY1 + CropHeight;
				let crop = `${CropX1},${CropY1},${xOffset},${yOffset}`
				let avatar = `https://images.mydomain.com/${Filename}?width=${avatarSize}&autorotate=true&crop=${crop}&rotate=${Rotation}&mode=max`

				return `<img class="popularUsers-user" src="${avatar}" alt="${Username}" style="width: ${avatarSize/2}px; height: ${avatarSize /2}px"/>`
			})
		})

		<?php echo htmlData; ?>

	</script>

<?php
}

add_shortcode('popularUsers', 'popular_users');
```

But then because it's a `<script>`, it just adds the code (all of it including comments) to the HTML