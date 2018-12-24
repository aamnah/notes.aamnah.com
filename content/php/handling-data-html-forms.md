---
title: Handling data from HTML forms
date: 2017-10-12
category: PHP
tag: basics
---

Here's an HTML form

```html
<!-- ./index.php -->
<form action="contact.php" method="post">
  <label for="contactName">Name </label>
  <input type="text" id="contactName" name="contactName" />
  <input type="submit" value="Submit">
</form>
```

- `action` attribute decides where the data goes, usually another file/page. (You can submit it to the same page as well if you're going to process it on the same page. In this case you won't be redirected to another page)
- `method` attribute decides the HTTP method/verb
- `name` attribute is what you'll use to access this data with `$_POST`
- the `id` of an inout is used with the `for` of a label to associate the two together

Here's the PHP page you'll send the data to

```php
<!-- ./contact.php -->
<?php
	$name = $_POST["contactName"];
	echo "Hello " . $name;
?>
```

- the posted data is accessed with a special variable called `$_POST`. You access posted values with their `name`.