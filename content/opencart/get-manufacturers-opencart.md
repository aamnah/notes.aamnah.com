---
title: How to get and show Manufacturers in OpenCart
date: 2017-11-01
---

Add the following code to `catalog/controller/common/header.php`


```php
// MANUFACTURERS
$this->load->model('catalog/manufacturer');

$data['manufacturers'] = $this->model_catalog_manufacturer->getManufacturers(0);
```

Now in your `catalog/view/common/header.tpl`, you can use a `foreach` loop to get all the manufacturers out of the array

```php
<?php if ($manufacturers) { 
  foreach($manufacturers as $manufacturer) { ?>
    <a href="index.php?route=product/manufacturer/info&manufacturer_id=<?php echo $manufacturer['manufacturer_id']; ?>"><img src="<?php echo $manufacturer['image']; ?>" alt="<?php echo $manufacturer['name']; ?>" /></a>
  <?php } ?>
<?php } ?>
```

The `getManufacturers()` method provides an array of arrays, with the following details

```php
0 => 
array (
  'manufacturer_id' => '8',
  'name' => 'Apple',
  'image' => 'catalog/demo/apple_logo.jpg',
  'sort_order' => '0',
  'store_id' => '0',
),
```

It then gets passed along to the template as part of `$data`


