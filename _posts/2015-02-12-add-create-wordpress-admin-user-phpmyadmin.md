---
layout: post
title: How to add a WordPress Admin user via PhpMyAdmin
permalink: add-create-wordpress-admin-user-phpmyadmin
tags: how-to
---

#### Why?
Add support user for all hosting accounts that have wordpress installed, with one command via phpmyadmin and whm access.


    {% highlight mysql %}

    INSERT INTO `databasename`.`wp_users` (`ID`, `user_login`, `user_pass`, `user_nicename`, `user_email`, `user_url`, `user_registered`, `user_activation_key`, `user_status`, `display_name`) VALUES ('9191919', 'username', MD5('password'), 'Name', 'test@yourdomain.com', 'http://hostmarkaz.com/', '2015-02-11 00:00:00', '', '0', 'Your Name');

    INSERT INTO `databasename`.`wp_usermeta` (`umeta_id`, `user_id`, `meta_key`, `meta_value`) VALUES (NULL, '9191919', 'wp_capabilities', 'a:1:{s:13:"administrator";s:1:"1";}');

    INSERT INTO `databasename`.`wp_usermeta` (`umeta_id`, `user_id`, `meta_key`, `meta_value`) VALUES (NULL, '9191919', 'wp_user_level', '10');
    
    {% endhighlight %}

Fields to change:
---
Database = databasename
ID = 9191919
user_login = username
user_pass = password
user_nicename = Name
user_email = test@yourdomain.com
user_url = http://hostmarkaz.com
user_activation_key = 
user_status = 0
display_name = Your Name

Notes:
---
- Keep the **ID** number really high to avoid conflicts and errors. Some sites really have a lot of users because of affiliate or membership plugins.

[Source](http://www.wpbeginner.com/wp-tutorials/how-to-add-an-admin-user-to-the-wordpress-database-via-mysql/)