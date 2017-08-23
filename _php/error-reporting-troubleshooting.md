---
layout: post
title: Error Reporting and Troubleshooting
permalink: php-error-reporting-and-troubleshooting
ctime: 2016-08-09
---

### Enable error reporting

#### System level
Display errors could be turned off in the `php.ini` or your Apache config file.

#### User level

In your `index.php` (or whatever script you're running) file, add this:

```php
ini_set('display_startup_errors',1);
ini_set('display_errors',1);
error_reporting(-1);
// error_reporting(E_ALL);
```

OR add the following to your `php.ini` file

```
display_errors = 1;
error_reporting = E_ALL;
log_errors = 1;
```

### Check error logs

Errors and warnings usually appear in `....\logs\php_error.log` or `....\logs\apache_error.log` depending on your `php.ini` settings.

Also useful errors are often directed to the browser, but as they are not valid html they are not displayed.

So `tail -f` your log files and when you get a blank screen use IEs "view" -> "source" menu options to view the raw output.

http://stackoverflow.com/questions/1475297/phps-white-screen-of-death

### Run the script via command line

```php
php -f foo.php
```

- `-f` takes a file name.


Links
---

- [StackOverflow: PHP's white screen of death](http://stackoverflow.com/questions/1475297/phps-white-screen-of-death)
- [StackOverflow: Showing all errors and warnings](https://stackoverflow.com/questions/5438060/showing-all-errors-and-warnings)
