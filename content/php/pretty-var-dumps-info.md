---
title: Pretty var_dump()
date: 2017-11-01
---

- Wrap your code in `<pre>` tags
- Use `var_export()` instead of `var_dump()`


DO THIS

```php
<pre><?php var_export($manufacturers); ?></pre>
```

and you'll get this

```
array(1) {
  [0]=>
  array(1) {
    [0]=>
    array(5) {
      ["manufacturer_id"]=>
      string(1) "8"
      ["name"]=>
      string(5) "Apple"
      ["image"]=>
      string(27) "catalog/demo/apple_logo.jpg"
      ["sort_order"]=>
      string(1) "0"
      ["store_id"]=>
      string(1) "0"
    }
  }
```

Instead of doing this

```php
<?php var_dump($manufacturers); ?>
```

and getting this

```
array(1) { [0]=> array(1) { [0]=> array(5) { ["manufacturer_id"]=> string(1) "8" ["name"]=> string(5) "Apple" ["image"]=> string(27) "catalog/demo/apple_logo.jpg" ["sort_order"]=> string(1) "0" ["store_id"]=> string(1) "0" } } 
```


Link
---

- [StackOverflow: Make var_dump look pretty](https://stackoverflow.com/a/19816742/890814)



