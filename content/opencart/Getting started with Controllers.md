---
title: Getting started with Controllers
date: 2017-10-26
---
Compatibility: OpenCart 2.x

- Controllers are loaded based on the route
- Every new controller must `extend` the `Controller` class
- Controller names are based on the routes, and are written in PascalCase (aka UpperCamelCase), e.g. `ControllerAccountRegister` (ControllerFolderSubfolderFile)
- Classnames don't take any values from the subfolder and file name other than letters and numbers. Underscores are removed.

> Within the class are the methods. Methods in the class declared `public` are accessible to be run via the route - `private` are not. By default, with a standard two part route (`folder/file`), a default `index()` method is called. If the third part of a route (`folder/file/method`) is used, this method will be run instead. For example, `account/return/insert` will load the `/catalog/controller/account/return.php` file and class, and try to call the `insert` method

#### $this->foo->method()
You can view what you can do with this by looking into `library/` files

```php
// e.g. $this->user (loaded from system/librarycart/user.php)

$this->user->login($username, $password)
$this->user->logout()
$this->user->hasPermission($key, $value)
$this->user->isLogged()
$this->user->getId()
$this->user->getUserName()
$this->user->getGroupId()
```

#### Sample Controller.php

```php
<?php
class ControllerAccountRegister extends Controller { // ContollerDirectorySubdirectory
	private $error = array();

	public function index() { // index() function is required
		if ($this->customer->isLogged()) { // check if the customer is logged in
			$this->response->redirect($this->url->link('account/account', '', true)); // if not redirect to login page
		}

		// LOAD LANGUAGE FILE
		$this->load->language('account/register');

		// SET PAGE TITLE <title>
		$this->document->setTitle($this->language->get('heading_title'));

		// ADD SCRIPTS & STYLESHEETS
		// These will be loaded in header.tpl as a foreach loop
		$this->document->addScript('catalog/view/javascript/jquery/datetimepicker/moment.js');
		$this->document->addScript('catalog/view/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.js');
		$this->document->addStyle('catalog/view/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.css');

		// LOAD MODEL
		// When we load a model, we can use the methods defined in it
		$this->load->model('account/customer');

		// Check if any data was POSTED
		// e.g. if login details were sent
		if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validate()) {
			$customer_id = $this->model_account_customer->addCustomer($this->request->post);

			$this->customer->login($this->request->post['email'], $this->request->post['password']);

			unset($this->session->data['guest']);

			$this->response->redirect($this->url->link('account/success'));
		}

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
		
		/* 
		SET LANGUAGE VARIABLES

		These will be used in the template.tpl (e.g. <?php echo $heading_title ?>)
		*/
		$data['heading_title'] = $this->language->get('heading_title');

		$data['button_continue'] = $this->language->get('button_continue');
		$data['button_upload'] = $this->language->get('button_upload');


		// See if there are any warning
		if (isset($this->error['warning'])) {
			$data['error_warning'] = $this->error['warning'];
		} else {
			$data['error_warning'] = '';
		}
		
		/* 
		URL saved as a variable which will be used in the template. 
		e.g. <form action="<?php $action; ?>">
		$this->url->link($route, $args = '', $secure = false)
		*/
		$data['action'] = $this->url->link('account/register', '', true); // the true at the end means load it over HTTPS

		$data['customer_groups'] = array();
		
		
		if (isset($this->request->post['firstname'])) {
			$data['firstname'] = $this->request->post['firstname'];
		} else {
			$data['firstname'] = '';
		}	


		// LOAD OTHER CONTROLLERS
		$data['column_left'] = $this->load->controller('common/column_left');
		$data['column_right'] = $this->load->controller('common/column_right');
		$data['content_top'] = $this->load->controller('common/content_top');
		$data['content_bottom'] = $this->load->controller('common/content_bottom');
		$data['footer'] = $this->load->controller('common/footer');
		$data['header'] = $this->load->controller('common/header');

		// LOAD A TEMPLATE.tpl file and pass it $data (i.e. everything you defined above with $data['key'])
		$this->response->setOutput($this->load->view('account/register', $data));
	}

	// Sample function to send back a JSON response
	public function sendData() {
		// 1. Define an array
		$json = array();
			//
			// code goes here
			//

		// 2. add data to that array
		foreach ($custom_fields as $custom_field) {
			$json[] = array(
				'custom_field_id' => $custom_field['custom_field_id'],
				'required'        => $custom_field['required']
			);
		}

		// 3. send the array as a response
		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}
}
```