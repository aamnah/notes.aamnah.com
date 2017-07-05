---
layout: post
title: Upgrading OpenCart Extensions
ctime: 2017-06-30

---

### Coding standards
- Removed the PHP ending tag `?>` from php files

### Load the Language File
In 1.5.x, you would use the following snippet to load the corresponding module language file.

```php
$this->language->load('account/account');
```

On the other hand, you need to use a slightly different version in the case of OpenCart 2.x.x, as shown in the following snippet.

```php
$this->load->language('account/account');
```

### Controller
#### 1. Assigning template variables  

 most of the time you'll end up assigning your variables so that you can access them in the view template files
 
OpenCart 1.5:

```php
$this->data['foo'] = $foo;

$this->data['heading_title'] = $this->language->get('heading_title');
```

OpenCart 2.0:

```php
$data['foo'] = $foo;

$data['heading_title'] = $this->language->get('heading_title');
```

#### 2. Assigning a template
OpenCart 1.5:

```php
$this->template = 'module/module.tpl';

$this->response->setOutput($this->render()); // OC 1.5.6.x
```

OpenCart 2.0:

```php
$this->response->setOutput($this->load->view('module/module', $data));

$this->response->setOutput($this->load->view('default/template/account/account.tpl', $data)); // OC 2.1.0.2

$this->response->setOutput($this->load->view('extension/total/total', $data)); // OC 2.3.0.2+ (no .tpl at the end)
```
In the earlier version of OpenCart, you would have used the following code to assign the template file and render it.

```php
if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/template/account/account.tpl')) {
  $this->template = $this->config->get('config_template') . '/template/account/account.tpl';
} else {
  $this->template = 'default/template/account/account.tpl';
}
$this->response->setOutput($this->render());
```

In the recent version, you'll need to use a slightly different and shorter way to handle it.

```php
if (file_exists(DIR_TEMPLATE . $this->config->get('config_template') . '/template/account/account.tpl')) {
  $this->response->setOutput($this->load->view($this->config->get('config_template') . '/template/account/account.tpl', $data));
} else {
  $this->response->setOutput($this->load->view('default/template/account/account.tpl', $data));
}
```
As you can see, in the recent version we're using the view method of the Loader class.

#### 3. Children Template Assignment
In 1.5.x, you needed to provide an array to assign all the children templates like `header`, `footer`,  `column_left`, etc.

```php
$this->children = array(
  'common/column_left',
  'common/column_right',
  'common/content_top',
  'common/content_bottom',
  'common/footer',
  'common/header'       
);
```

In the case of the 2.x.x version, you'll use the controller method of the Loader class. (You can load controllers now)

```php
$data['column_left'] = $this->load->controller('common/column_left');
$data['column_right'] = $this->load->controller('common/column_right');
$data['content_top'] = $this->load->controller('common/content_top');
$data['content_bottom'] = $this->load->controller('common/content_bottom');
$data['footer'] = $this->load->controller('common/footer');
$data['header'] = $this->load->controller('common/header');
```


#### 4. URL Redirection

OpenCart 1.5:  
In the older version, the `redirect` method was part of the abstract `Controller` class, so you could call that directly using the `$this` object.

```php
$this->redirect($this->url->link('extension/module', 'token=' . $this->session->data['token'], 'SSL'));
```

OpenCart 2.0:  
 In the recent version, the `redirect` method belongs to the `Response` class and is thus accessed via that object.

```php
$this->response->redirect($this->url->link('extension/module', 'token=' . $this->session->data['token'], 'SSL'));
```


#### 5. Breadcrumb
In the recent version, you don't need to provide a "separator" as an array key as opposed to the earlier version.

Here's the snippet from the 1.5.x version:

```php
$this->data['breadcrumbs'][] = array(
  'text'      => $this->language->get('text_home'),
  'href'      => $this->url->link('common/home'),
  'separator' => false
);
```

A similar result can be achieved by using the following code:

```php
$data['breadcrumbs'][] = array(
  'text' => $this->language->get('text_home'),
  'href' => $this->url->link('common/home')
);
```

#### 6. Status field is mandatory for the module now

```php
if (isset($this->request->post['moduleName_status'])) {
	$data['moduleName_status'] = $this->request->post['moduleName_status'];
} else {
	$data['moduleName_status'] = $this->config->get('moduleName_status')
}
```

Links
---
- [Upgrading modules from OpenCart 1.5.x to OpenCart 2.0.x or changes in the OpenCart 2.0.x](http://sv2109.com/en/article/upgrading-modules-opencart-15x-opencart-20x-or-changes-opencart-20x)
- [TutsPlus: Convert OpenCart Modules From 1.5.x to 2.x.x](https://code.tutsplus.com/tutorials/convert-opencart-modules-from-15x-to-2xx--cms-25051)
- [TutsPlus: From Beginner to Advanced in OpenCart: Module Development](https://code.tutsplus.com/tutorials/from-beginner-to-advanced-in-opencart-module-development--cms-21873)