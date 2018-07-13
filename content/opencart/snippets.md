---
title: Misc. OpenCart Snippets
date: 2017-10-26
---


### Controller
See if a user is logged in

```php
$this->customer->isLogged() // returns true/false
```

Load a language in a controller.php file

```php
$this->load->language('account/register');
```

Set language variables (in controller.php) to be used to template.tpl files

```php
$data['heading_title'] = $this->language->get('heading_title');
```

Reference URLs

```php
$this->url->link('account/logout') // URL for logout

// URL saved as a variable which will be used in the template. e.g. <form action="<?php $action; ?>">
$data['action'] = $this->url->link('account/register', '', true); 
```

Get a config value

```php
$this->config->get('config_account_id')
```

Load a model

```php
$this->load->model('catalog/information');
``` 

Load other controllers

```php
// LOAD OTHER CONTROLLERS
$data['column_left'] = $this->load->controller('common/column_left');
$data['column_right'] = $this->load->controller('common/column_right');
$data['content_top'] = $this->load->controller('common/content_top');
$data['content_bottom'] = $this->load->controller('common/content_bottom');
$data['footer'] = $this->load->controller('common/footer');
$data['header'] = $this->load->controller('common/header');
```

Load a template and send it data

```php
public function index() {
  // Code goes here
   
  $this->response->setOutput($this->load->view('account/register', $data));
}
```

Sending responses from controller.php with `$this->response`

```php
$this->response->redirect($this->url->link('account/success'));
$this->response->setOutput($this->load->view('account/register', $data));
$this->response->addHeader('Content-Type: application/json');
$this->response->setOutput(json_encode($json));
```

Sending back JSON data

```php
// Define an array
$json = array();

// add data to that array
foreach ($custom_fields as $custom_field) {
  $json[] = array( 
    'custom_field_id' => $custom_field['custom_field_id'],
    'required'        => $custom_field['required']
    );
  }

// send the array as a response
$this->response->addHeader('Content-Type: application/json');
$this->response->setOutput(json_encode($json)); 
```

Breadcrumbs 

```php
// BREADCRUMBS
$data['breadcrumbs'] = array();

$data['breadcrumbs'][] = array(
	'text' => $this->language->get('text_home'),
	'href' => $this->url->link('common/home')
);

$data['breadcrumbs'][] = array(
	'text' => $this->language->get('text_account'),
	'href' => $this->url->link('account/account', '', true)
);

$data['breadcrumbs'][] = array(
	'text' => $this->language->get('text_register'),
	'href' => $this->url->link('account/register', '', true)
);
```