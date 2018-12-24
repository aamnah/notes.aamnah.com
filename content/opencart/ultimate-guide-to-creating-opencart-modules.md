---
title: The Ultimate Guide to Creating OpenCart Modules
date: 2017-10-26
---

Compatibility: OpenCart 2.3x

This guide will make more sense to people who are familiar with PHP, OOP and MVC. To beginners, it should serve as a good starting point

### File structure and organization - MVC(L)
You have the MVC(L) structure. According to [someone on StackOverflow](https://stackoverflow.com/users/727208/tere%c5%a1ko) though 
> Well .. actually, OpenCart does not use MVC pattern. They have a bastardized version of Rails-like architecture. It doesn't have views (only dumb templates), it doesn't have model layer (only table gateways) and all of the logic is dumped in something they call "controllers".

> The *Models* store the database procedures, the *Views* hold the HTML code of pages and *Controllers* fetch the data using Models and use it to render Views
> In addition to this, OpenCart's main code is split in two separate parts (admin/ and catalog/, each containing an MVC structure) along with common files and libraries under system/.

If you don't know what MVC(L) is, it's 

  - Model (contains all code that interacts with the database)
  - View (the templates. OpenCart 2x used Smarty, OpenCart 3x now uses Twig)
  - Controller (this has all your logic. It takes data from the model, and passes it to your view)
  - Language (every module gets its own language file. The benefit of this is that you can easily translate the software by using different files for different languages)

```
OpenCart MVC(L) folders
.
├── admin
│   ├── controller
│   ├── language
│   ├── model
│   └── view
├── catalog
│   ├── controller
│   ├── language
│   ├── model
│   └── view
```

Here's what the folder structure for a module called `foo` will look like

```
Module Structure using MVC(L)
.
└── admin
    ├── controller
    │   └── extension
    │       └── module
    │           └── foo.php
    ├── language
    │   └── en-gb
    │       └── extension
    │           └── module
    │               └── foo.php
    └── view
        └── template
            └── extension
                └── module
                    └── foo.tpl
```

Here's a bash script to create all the files

```bash
#!/bin/bash

# RUN: bash script.sh moduleName

# The first argument provided will be takes as module name
## This will be the filename for all files created
moduleName=$1  

# Admin folders
## On the site these folders already exist
## But you'll create them again in order to upload your files
mkdir -p admin/controller/extension/module # Controller
mkdir -p admin/language/en-gb/extension/module # Language
mkdir -p admin/view/template/extension/module # View

# Admin files
touch admin/controller/extension/module/${moduleName}.php # Controller
touch admin/language/en-gb/extension/module/${moduleName}.php # Language
touch admin/view/template/extension/module/${moduleName}.tpl # View
```

### Libraries and Helper functions

### Routes

```php
?route=folder/file/method

?route=folder/subFolder/file/method

?route=folder/file
```

OpenCart uses the `route` in the query string parameter to determine what to load, and this is how you can find which files you need to edit for which page. If you know how the routes work, you will never have to ask the _which file do i edit to make changes to X_ question. (fyi: it's a very common question on OpenCart forums)

Usually you have only two parts for the route `?route=folder/file`. If no _method_ is specified, then it means you ran the `index()` function

- The _folder_ refers to a folder inside controller or template folders. 
- The _file_ refers to the filename (without the relevant .php or .tpl extension)
- The _method_ refers to the method that you just ran (fyi: a method is what they call a function inside a class, just a different term for the same thing). If no method is mentioned then it means you ran the `index()` method.
- FYI: You won't see any routes if SEO URLs are enabled

#### Finding out which files to edit
- Common files (Header, Footer, Column, Cart etc. All files that are common for every page on the site are in the `common` folders)
- Page routes
- Modules (Check out which layout you're on, find out which modules are enabled on that layout)
- AJAX Execution (Check the **Network** tab in the Developer Tools, it'll mention which AJAX calls were executed. If you can't determine which file is being loaded by the route, it may be a file that was executed via AJAX)
- Extensions (e.g. Totals, Shipping, Payments. Most of these extension don't have a controller file. If you have Admin access, you can edit that extension and figure out the path from URL. If you don't have the access, you can figure out the extension from the frontend by checking the `value` attribute of the radio input for that shipping/payment)
- SEO Routes (You won't see any routes if SEO URLs are enabled. In that case, check the classes on the `<body>` tag. For example, if you see a class `product-product-40` you are on `?route=product/product&product_id=40`)


### Language

- Language file contains the text values. To edit text for something, you'll edit the language files in `admin/language` or `catalog/language`
- The text in language file is reassigned to variables in your controller file. The controller then passes those variables to the template file
- The values in the global language file `english/english.php` (`en-gb/en-gb.php` in OpenCart 2.3x onwards) are automatically loaded and available to use without the `$this->language->load` method

The four lines of code that'll take care of the all that are as follows:

```php
// Define language text (language.php)
$_['heading_title']     = 'My Heading';

// Load language (controller.php)
$this->language->load('foo/bar');

// Assign language text to variables (controller.php)
$data['heading_title'] = $this->language->get('heading_title');

// $data is passed to the template via $this->response->setOutput()

// Use that variable in the template (template.tpl)
<h1><?php echo $heading_title; ?></h1>
```

---

Language folders

```
admin->language->en-gb->extension->module // OpenCart 2.3x and above
admin->language->en-gb->module // OpenCart 2.2x
admin->language->english->module // OpenCart 2.1x and below
```

--- 
Define language variables in your language file using a special variable `$_` which is an array of keys and text values. `$_` is the name of the array

```php
// admin/language/foo/bar.php

// We're assigning the languages to the indexes of an array. 
// $_ is the name of the array
$_['heading_title'] = 'My Heading';
```

Load the language file in the controller

```php
// admin/controller/foo/bar.php
// $this->language->load('foo/bar'); // OC 1.5x
$this->load->language('foo/bar'); // OC 2x and above
```

Once you have the language loaded, you can use the language library function `get` to retrieve specific language texts, and assign them to variables

```php
// admin/controller/foo/bar.php

// assign language texts to variables
$some_variable = $this->language->get('heading_title');
```

It's kind of redundant though. All those language values you have already defined in `language.php`, you have to assign them all AGAIN in `controller.php` in order to use them in `template.tpl`. This is so not DRY. One solution, [as recommended here](https://webkul.com/blog/optimize-your-opencart-code/), is as follows

```php
$data = $this->load->language('catalog/product');
```
This one line above automatically assigns every thing in the language file to the `$data` object.

Usually, all values are saved on the `$data` object, which is then passed on to the template via the `setOutput()` method

```php
// admin/controller/foo/bar.php
$data['heading_title'] = $this->language->get('heading_title');

$this->response->setOutput($this->load->view('foo/bar', $data)); // the $data object has everything that gets sent to the template
```

You can now use all the language variables you defined in controller and passed to template with their keys. e.g.

```php
// admin/catalog/foo/bar.php
<h1><?php echo $heading_title; ?></h1>
```

---


### Permissions
Permissions are only allowed in modules. To grant permissions by default (instead of going to User Groups and editing it manually), you need an `install()` function in your controller. Place the following code inside your `install()` method

```php
public function install() {  // this will be run when you install the module under EXTENSIONS > MODULES in the admin area
    $this->load->model('user/user_group');
    $this->model_user_user_group->addPermission($this->user->getId(), 'access', 'foo/bar');
    $this->model_user_user_group->addPermission($this->user->getId(), 'modify', 'foo/bar'); // you need the 'modify' permission in order to install/uninstall/modify the module
  }
}
```

Show an error if the user doesn't have permissions to edit your module

```php
// admin/controller/foo/bar.php
protected function validate() {
	if (!$this->user->hasPermission('modify', 'foo/bar')) {
		$this->error['warning'] = $this->language->get('error_permission');
	}

	return !$this->error;
}
```

### Settings
Generally, the settings for a module are saved in the `settings` (usually `oc_settings`) table in the database. The queries are defined in `admin/model/settings/settings.php`



### JavaScript and jQuery
- By default jQuery is already called in the header
- All the JavaScript for your frontend is saved in `catalog/view/javascript` folder
- The `catalog/view/javascript/common.js` has common code used in your frontend. This contains AJAX calls, event handlers etc.
- You can choose where to load the script files for your module, whether you want to load it in the header or footer. The location is passed as an optional argument.

```php
// Scripts
// addScript($href, $postion = 'header')
$this->document->addScript('catalog/view/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.js');
```

Links
---
- [StackOverflow: How to become an OpenCart guru?](https://stackoverflow.com/questions/13478995/how-to-become-an-opencart-guru)
- [StackOverflow: Opencart custom module permission](https://stackoverflow.com/questions/16816887/opencart-custom-module-permission?rq=1)
- [Create your first basic module in Opencart](https://webkul.com/blog/create-first-basic-module-opencart/)
- [Optimize your OpenCart code](https://webkul.com/blog/optimize-your-opencart-code/)
- [YouTube: OpenCart Coding urdu/hindi](https://www.youtube.com/playlist?list=PLze7SwHdW-pMIWc74oc1cFwS-yvkKhUdc)
- [OpenCart Docs: Developing Modules](http://docs.opencart.com/developer/module/)
- [How To Create An OpenCart Extension part 1](https://multimerch.com/blog/creating-opencart-extension-part-1/)