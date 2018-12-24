---
title: Upgrade OpenCart Extensions from 2.1x to 2.3x/3x
date: 2017-07-31
---

### Language
- The default language folder is now called `en-gb` instead of `english`. Update your scripts to reflect the change
- It looks like it is no longer saving language variables in `controller` files. For example, this whole chunk is gone from `admin/controller/extension/shipping/pickup.php`

```php
$data['heading_title'] = $this->language->get('heading_title');

$data['text_edit'] = $this->language->get('text_edit');
$data['text_enabled'] = $this->language->get('text_enabled');
$data['text_disabled'] = $this->language->get('text_disabled');
$data['text_all_zones'] = $this->language->get('text_all_zones');
$data['text_none'] = $this->language->get('text_none');

$data['entry_geo_zone'] = $this->language->get('entry_geo_zone');
$data['entry_status'] = $this->language->get('entry_status');
$data['entry_sort_order'] = $this->language->get('entry_sort_order');

$data['button_save'] = $this->language->get('button_save');
$data['button_cancel'] = $this->language->get('button_cancel');
```

### Folder Structure
- The default folder structure has changed. All the extensions that were previously directly under the `model` and `controller` etc. are now under an `extensions` folder. So, `model/extensions/shipping/pickup.php` instead of `model/shipping/pickup.php`

### OCMOD

- OpenCart 3 no longer uses `.ocmod.xml` for modification files. If you try to upload an .ocmod.xml file, you'll get a _Invalid file type!_ error.
- For a OCMOD file to be uploaded the file extension must be `.ocmod.zip` [read more](https://github.com/opencart/opencart/wiki/Modification-System#ocmod-files)

Example file structure for OCMOD compressed files.

- upload
- install.xml

#### upload

All files under this directory will be uploaded to the to directory of your OpenCart installation.

#### install.xml

The XML modification file.
