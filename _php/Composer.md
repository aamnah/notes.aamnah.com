---
layout: post
title: Composer
permalink: php-composer
ctime: 2016-01-14

---

Install
---
Linux / Unix / Mac

```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

Confirm install with: `composer -V`

Composer is a dependency manager, like `npm`.

| npm | composer |
|-------|-------------|
| npm init | composer init |
| package.json | composer.json |
| npm install --save-dev | composer require |
| node_module | vendors |

What is the name of the **folder that composer puts all of the packages** in? Ans: `vendors`

**Versioning**: 1.2.3 = major.minor.patch

Getting started
---
In your project folder, create the `composer.json` file with the command

    composer init

To add a package to the composer.json file

    composer require
If you have an existing `composer.json` file, install dependencies with

    composer install


Using the libraries composer installed in your project
---
To use the library you installed via composer in your project, all you need is a require statement, like so:

    require 'vendor/autoload.php';

Everything you installed via composer is now available in your project with the `require` statement.


Namespacing
---

Since PHP 5.3 was released we now use a common practice of namespacing our libraries and code. Namespacing is a very powerful process to help us avoid conflicts within our project. In this video I will give you an simple metaphor for Namespacing as well as walk you through an example of how it is used in Monolog.

the idea is to avoid conflicts if same class names are present in different vendors. 
Use multiple vendors that may or may not have the same class names without conflicts.
Another function is to shorten really long class names (or locations of classes) by using an alias with name spacing

Namespacing code looks like this:

```php
namespace Monolog;

use Monolog\Handler\HandlerInterface;
use Monolog\Handler\StreamHandler;
use Psr\Log\LoggerInterface;
use Psr\Log\InvalidArgumentException;
```

Links
---
- [Composer Basic Usage](http://getcomposer.org/doc/01-basic-usage.md#basic-usage)
- [Packagist](https://packagist.org/packages/)