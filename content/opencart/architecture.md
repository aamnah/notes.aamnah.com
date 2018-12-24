---

title: Opencart Architecture
date: 2015-04-04
slug: opencart_architecture

---

Libraries
---


Languages 
---
Languages are stored in `catalog/language/` and loaded in _Controllers_

### Define a language key
The Values that are used across many pages are stored is english.php. If you want to add a new value just follow the syntax below:

```php
$_['language_key']='This is test';
```

### Load a language
The languages based on special pages are located inside the folders. For example, for error page the language file can be found at:

```
catalog/language/english/error/not_found.php
```

Language file can be loaded into controller by using the syntax as below:

```php
$this->language->load('error/not_found');
```

### Fetch Language Value

```php
$this->language->get('language_key');
```

Loading and Using a language
---
    
```php
$this->language->load('route path of the language');
```

to get the specific language data use this syntax 

```php
$this->language->get('language file data keyword');
```



References
---
- [TutsPlus: From Beginner To Advanced in OpenCart: The Architecture](http://code.tutsplus.com/articles/from-beginner-to-advanced-in-opencart-the-architecture--cms-21482)
