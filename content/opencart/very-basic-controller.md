---
title: How to create a very basic OpenCart Module in less than 5 minutes
date: 2017-11-02
---

Let's create a module called DEMO. For any module, you need three files

- Language `catalog/language/en-gb/extension/module/demo.php`
- Controller `catalog/controller/extension/module/demo.php`
- Template `catalog/view/theme/default/template/extension/module/demo.tpl`

Optionally, you could also have a _Model_ file, if your module needs to pass some new queries to the database that aren't defined anywhere else.

### Language

The language file gets the all the static text. The idea behind keeping it in a separate file is so that it could be easily translated. The same module can work in different languages by using different language files.

```php
<?php
// Language
// path: catalog/language/en-gb/extension/module/demo.php

$_['title'] = 'Demo!';
```

### Controller
A Controller needs to do three things in order to work

- have an `index()` function. this is the default function that runs when you view the module
- some data to pass to the view. usually it's in a variable called `$data`
- set which template to load and pass it the data

```php
// Controller
// path: catalog/controller/extension/module/demo.php
<?php
class ControllerProductDemo extends Controller {
	public function index() {
		$this->load->language('product/demo');

		$data['title'] = $this->language->get('title');
		
		$this->response->setOutput($this->load->view('product/demo', $data));
	}
}
```

### View
In your View file, you can reference any value that was passed as part of the `$data` object

```php
// View
// path: catalog/view/theme/default/template/extension/module/demo.tpl
<h1><?php echo $title; ?></h1>
```

That's it. At this point you have created a basic module and accomplished passing data between the Language, Controller and View files. 

You can now view your module by going to 

```
site.com/index.php?route=extension/module/demo
```

### Routes and Naming

The route is based on the folder structure and file name. If you called your module `demo` and placed it in the `catalog/product` folder, the `route` will become `product/demo` and the URL where you can view the module will become `site.com/index.php?route=product/demo`. 

The files generally have the same name for all files, only the extension is different. Controller and Language files are `.php` while the View file is `.tpl`

The Controller class that you're going to create in your custom module is also going to be named based on the folder structure. The class name for a controller file in `catalog/product` folder called`demo.php` will become `ControllerProductDemo` (It follows the `ControllerFolderFile` pattern..)

### Adding more data to the controller ad accessing it from the View

The module above, while fully functional, does very little and only has the very basics. If you view the module in the browser, you'll only see a heading saying _Demo!_

You can add more stuff to the controller to make it more useful. For example, let's add our header and footer templates (which are defined in their own Controller files) to our Demo controller. Once they're available in the controller and added to `$data`, we'll be able to use them in the View

```php
<?php
class ControllerProductDemo extends Controller {
	public function index() {
		// Load our language file
		$this->load->language('product/demo');


		// Get a value from the language file we just loaded, assign it to a 'key' on an object we're going to call 'data'
		// Through the rest of this controller, we'll keep tagging stuff to this $data we just defined
		// fyi: it doesn't have to be called 'data', call it whatever you want, calling it data is just common practice
		// $data['key'] = whatever;
		$data['title'] = $this->language->get('title');

		// Let's use the 'title' we just defined to set the module page's HTML <title> tag
		$this->document->setTitle($data['title']);


		// Add the Header and Footer Controllers to $data (which we're going to pass to the View)
		$data['header'] = $this->load->controller('common/header');
		$data['footer'] = $this->load->controller('common/footer');

		// Set our View template, and pass it the entire $data object
		// In our View, we'll be able to access stuff from $data with their 'key' names
		$this->response->setOutput($this->load->view('product/demo', $data));
	}

}
```

And in our View, we can now use these header and footer templates

```php
<?php echo $header; ?>
<h1><?php echo $title; ?></h1>
<?php echo $footer; ?>
```

If you view the module now, you'll see a page with the site's header and the site's footer and the Demo text in the middle where content usually goes. 

In the same way, you can also add `column_left` and `column_right` if you want to show them on your module page

### Getting and Setting Stuff by Using Pre-defined Methods

Throughout our module we'll be calling different **methods** that have already been defined in OpenCart to accomplish various things. For example, here are a few methods and what they do. 

```php
$this->response->setOutput($output) // sets the output
$this->load->view($route, $data = array()) // loads a Template to View
$this->load->controller($route, $data = array()) // loads a controller
$this->load->language($route) // loads a Language file
$this->language->get($key) // gets a value from the language file using it's key name
$this->document->setTitle($title) // sets the '<title>' for the HTML page
```

These methods are defined in the files in the `system/library` and `system/engine` folders. Figuring out what these methods do is usually pretty straight forward based on their naming. How many guesses do you need to figure out what `$this->cart->getProducts()` will do? It'll get the products that are in a customer's cart, obviously.

### Showing (Other) Modules on Your Modules Page
You need to 

- Create a new layout, and give it the route of your module.
- Add modules to that layout and save
- Add the Controllers for the layout _positions_ in your module's Controller
- Edit the module's View template to show those positions

The modules that are added to the Layouts via _Admin > Design > Layouts_ show up in the four pre-defined positions `content_top`, `content_bottom`, `column_left` and `column_right`.

In order to show any modules added to these positions, you need to add their Controllers to your Modules's Controller

```php
<?php
// CONTROLLER

class ControllerProductDemo extends Controller {
	public function index() {
		$this->load->language('product/demo');
		
		$data['title'] = $this->language->get('title');
		
		$this->document->setTitle($data['title']);

		$data['header'] = $this->load->controller('common/header');
		$data['footer'] = $this->load->controller('common/footer');
		
		// Add the Controllers for the Layout positions
		$data['column_left'] = $this->load->controller('common/column_left');
		$data['column_right'] = $this->load->controller('common/column_right');
		$data['content_top'] = $this->load->controller('common/content_top');
		$data['content_bottom'] = $this->load->controller('common/content_bottom');

		$this->response->setOutput($this->load->view('product/demo', $data));
	}
}
```

```php
<!-- VIEW -->
<?php echo $header; ?>

<div class="container">
  <h1><?php echo $title; ?></h1>  

  <?php echo $column_left; ?>
  <?php echo $content_top; ?>
  <?php echo $content_bottom; ?>
  <?php echo $column_right; ?>
</div>

<?php echo $footer; ?>
```

At this point, you can use the module as a Layout page, where you can add any module you want (e.g. Latest, Featured, Bestsellers etc.)
