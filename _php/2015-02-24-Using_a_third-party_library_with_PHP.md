---
layout: post
title: Using a third-party library with PHP
permalink: using_a_third-party_library_with_php
status: draft

---

### Downloading and Including files

For this example, we'll use [PHPMailer](https://github.com/PHPMailer/PHPMailer). Grab the latest stable release.

The main file we need is **class.phpmailer.php**

First we'll include the file using `require_once()`.

Require_once is similar to `include()`. The difference between the two is what happens when we encounter an error. If we use the include command and the file doesn't exist, PHP will throw a warning but it'll execute the rest of the code. On the other hand, if you use require and the file doesn't exist then PHP will error and will not execute any more code.

The other difference between them is how many times PHP will include the file. If you use include and require on a file multiple times, it'll load that file multiple times.

PHPMailer should be included once.

There are actually four commands we might use

- `include()`
- `include_once()`
- `require()`
- `require_once()`

### Composer

[Composer](https://getcomposer.org/) is a dependency manager for PHP, like npm is for node.js. The good thing about using Composer is that it makes copying your particular project setup fast and easy, all you need to do is include the `composer.json` file and anyone can then install the exact same versions of the libs you used on their systems.

Instead of copying all the bulk, (or uploading it to Github), they can just copy one file and re-install it on their computers without wasting bandwidth and time. Once you have the `composer.json` file, you can include the `vendors` folder (that is where  Composer installs stuff) in `.gitignore`

##### Install

Linux / Unix / Mac

```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

Confirm install with: `composer -V`

#### Getting started

In your project folder, create the `composer.json` file with the command

```bash
composer init
```
To add a package to the `composer.json` file

```bash
composer require
```
If you have an existing `composer.json` file, install dependencies with

```bash
composer install
```

##### Using the libraries composer installed in your project

To use the library you installed via composer in your project, all you need is a `require` statement in your script, like so:

```php
require 'vendor/autoload.php';
```
