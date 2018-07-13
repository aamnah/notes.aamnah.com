
---
title: Dynamically adding Scripts, Stylesheets, and Links to a Template
date: 2017-10-26
---

Compatibility: OpenCart 2.x

- the benefit of dynamically loading it in templates is that it'll only load when that template is being viewed. For example, the datetime picker only gets loaded when needed 

---
In your controller (e.g. `controller/account/register.php`), inside the `index()` function

```php
// $this->document->setTitle($this->language->get('heading_title'));

// Scripts
// addScript($href, $postion = 'header')
$this->document->addScript('catalog/view/javascript/jquery/datetimepicker/moment.js');
$this->document->addScript('catalog/view/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.js');

// Styles
// addStyle($href, $rel = 'stylesheet', $media = 'screen')
$this->document->addStyle('catalog/view/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.css');

// Links 
// addLink($href, $rel)
addLink($href, $rel)
```

In your template `template/common/header.tpl`

```php
// Load Scripts
<?php foreach ($scripts as $script) { ?>
<script src="<?php echo $script; ?>" type="text/javascript"></script>
<?php } ?>

// Load Styles
<?php foreach ($styles as $style) { ?>
<link href="<?php echo $style['href']; ?>" type="text/css" rel="<?php echo $style['rel']; ?>" media="<?php echo $style['media']; ?>" />
<?php } ?>

// Load Links
<?php foreach ($links as $link) { ?>
<link href="<?php echo $link['href']; ?>" rel="<?php echo $link['rel']; ?>" />
<?php } ?>
```