---
layout: post
title: Cheatsheet - MySQL Commands
permalink: cheatsheet_mysql_commands
tags: ['cheatsheet', 'mysql']
---
    
Connect to MySQL 
---

    {% highlight mysql %}
    mysql -u aamnah -p —h db.mysite.com -P 3306 db_name  
    {% endhighlight %}

OR

    {% highlight mysql %}
    mysql --user=username --password=password --host=host --port=3306 db_name
    {% endhighlight %}

| options              | values                    |
|----------------------|---------------------------|
| `-u` or `--user`     | username                  |
| `-p` or `--password` | password                  |
| `-h` or `--host`     | host (default: localhost) |
| `-P` or `--port`     | Port (default: 3306)      |

Replace _db_name_ with the name of the database you want to connect to.

CRUD Databases
---

#### Creating MySQL database

    {% highlight mysql %}
    mysql > CREATE DATABASE databasename ;
    {% endhighlight %}


Users &amp; Privileges
---

#### Creating MySQL User

    {% highlight mysql %}
    mysql> CREATE USER 'username'@'host' IDENTIFIED BY 'password' ;
    {% endhighlight %}

#### Allowing User to Connect
    
    {% highlight mysql %}
    # grant usage on server so the user can connect  
    mysql> GRANT USAGE ON *.* TO 'username'@'host' ;
    {% endhighlight %}

#### Granting Privileges

    {% highlight mysql %}
    mysql> GRANT ALL PRIVILEGES ON databasename.* TO 'username'@'host' ;
    {% endhighlight %}

#### CHECK if you can connect to the created database with the user you crteated

    {% highlight mysql %}
    mysql -uusername -p --host=db.mysite.com databasename 
    {% endhighlight %}

#### Deleting MySQL User

    {% highlight mysql %}
    mysql> DROP USER 'username'@'host' ;
    {% endhighlight %}

#### List all users

    {% highlight mysql %}
    SELECT User,Host FROM mysql.user;
    {% endhighlight %}

#### View Users and Permissions

    {% highlight mysql %}
    SELECT user, host, password, select_priv, insert_priv, shutdown_priv, grant_priv FROM mysql.user
    {% endhighlight %}

#### View User Permissions for individual Databases

    {% highlight mysql %}
    SELECT user, host, db, select_priv, insert_priv, grant_priv FROM mysql.db
    {% endhighlight %}

Backups
---

#### backup all databases in one file (eventually add the option --add-locks):

    {% highlight mysql %}
    mysqldump -u username -p -–all-databases > file.sql
    {% endhighlight %}

#### backup all databases in one gzipped file:

    {% highlight mysql %}
    mysqldump -u username -p -–all-databases | gzip > file.sql.gz
    {% endhighlight %}

Restores
---

#### restore all databases:

    {% highlight mysql %}
    mysql -u username -p < file.sql 
    {% endhighlight %}

#### Import SQL database

    {% highlight mysql %}
    mysql -u username -p password databasename < filename.sql
    {% endhighlight %}

#### Sample Command for creating a backup and restoring at remote server in one command: 

    {% highlight mysql %}
    mysqldump --user=root --password=password --host=mysql.mydomain.com db_1 | mysql --host=db.mysite.com --user=username --password=password db_1
    {% endhighlight %}



NOTES:
---

   * If not connecting, check if the port is open on the server you are connecting from. RDS uses 3306. On KH server it couldn’t connect because the port was closed.

   * If the connection is not getting through the error would be ‘could not connect’.

   * If login is incorrect the error would be ‘access denied’. *mysql_connect(): Access denied for user*.

   * The user you are connecting with needs to be created at RDS. It doesn’t matter if the server you are connecting from has it or not.


**Opening Ports**:
Ports should be opened in the firewall configuration. The default port for MySQL is 3306.

This can be accessed in WHM >> Plugins » ConfigServer Security & Firewall >> Firewall configuration >> Port settings.