---

title: Making a MySQL database connection with PHP
date: 2014-06-07 04:54:08.000000000 +05:00
type: post
published: true
status: publish
categories:
- Databases
- MySQL
tags: []
---
 
```php
<?php
mysql_connect("db_host","db_user","db_pass");
mysql_select_db("db_name");
?>
```

Where db_host, db_user, db_pass and db_name is the host, username, password and name for your database respectively.

General practice is to save the code in a separate file in the 'includes' folder and including it on the page where you need it.
 
```php
<?php include("database.php") ?>
```

