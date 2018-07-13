---
title: How to get and show Information pages in OpenCart
date: 2017-11-01
---

Add the following code to `catalog/controller/common/header.php`


```php
// INFORMATION LINKS
$this->load->model('catalog/information');

$informations = $this->model_catalog_information->getInformations();

foreach ($informations as $information) {

	$data['informations'][] = array(
		'title' => $information['title'],
		'link' => $this->url->link('information/information') . '&information_id=' . $information['information_id']
	);
}
```

Now in your `catalog/view/common/header.tpl`, you can use a `foreach` loop to get all the information pages out of the array

```php
<?php if ($informations) { 
  foreach($informations as $information) { ?>
    <a href="<?php echo $information['link']; ?>"><?php echo $information['title']; ?></a>
  <?php } ?>
<?php } ?>
```

The `getInformations()` method provides an array of arrays, with the following details

```php
array (
  0 => 
  array (
    'information_id' => '4',
    'bottom' => '1',
    'sort_order' => '1',
    'status' => '1',
    'language_id' => '1',
    'title' => 'About Us',
    'description' => '<p>About Us</p>',
    'meta_title' => 'About Us',
    'meta_description' => '',
    'meta_keyword' => '',
    'store_id' => '0',
  ),
)  
```

It then gets passed along to the template as part of `$data`


