---
layout: post
title: Using a third-party library with PHP
permalink: using_a_third-party_library_with_php
status: draft

---
    
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