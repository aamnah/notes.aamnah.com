---
title: Using PHP with MySQL
slug: using_php_with_mysql
category: Databases
date: 2015-02-24
---
    
### Connecting to Database using PDO
The format is like this

```php
<?php 
    $db = new PDO("db_engine:db_details", "db_username", "db_user_passowrd");
?>
```

Here is an example with values

```php
<?php 
    $db = new PDO("mysql:host=189.876.567.123;dbname=shop;port=5678", "developer", "8972g9gh^^%&");
?>
```

In database details `mysql:` tells what database engine to use.

### Handling Exceptions
Exceptions happen when something goes wrong. Any code connecting to an external system needs to handle exceptions.

To handle exceptions in PHP we use `try` and `catch`

```php
<?php 
    try {
        $db = new PDO("mysql:host=189.876.567.123;dbname=shop;port=5678", "developer", "8972g9gh^^%&");
    } catch (Exception, $e) {
        // If there is an exception, 
        // the code inside these curly braces will get executed
        echo "Could not connect to the database."
        // Stop any more code from executing using the exit command
        exit;
    }
    echo "Woo-hoo!"
?>
```

Exception is actually an object instantiating PHP's native exception class. The variable `$e` will contain the details of the exception. After the exception, stop any more code from executing using the `exit` command.

It's a good idea to use a separate `try` block for each point of interaction.

### Querying the Database

To call a method on an object, you first specify the object name followed by a single arrow `->`. After that you specify the method name.

```php
<?php 
    $db->exec("SET NAMES 'utf8'");
?>
```

`exec` is short for execute SQL command. This method is used to run a sql command on the database. Methods are like functions, they receive arguments. `SET NAMES` defines the character set, in this case **utf8**

#### Handling Exception with PDO

```php
<?php 
    $db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
?>
```  

The command above will throw an exception when there is an error in the query.

```php
<?php 
try {
    $db = new PDO("mysql:host=123.456.789.987;dbname=shop;port=9876", "db_user", "passowrd");
    $db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    $db->exec("SET NAMES 'utf8'");
} catch (Exception $e) {
    echo "Could not connect to the database";
    exit;
}

try {
    $results = $db->query("SELECT name, price FROM products ORDER BY sku ASC");
    echo "Our query ran successfully";
} catch (Exception $e) {
    echo "Data could not be retrieved from the database";
    exit;
}
?>
```
