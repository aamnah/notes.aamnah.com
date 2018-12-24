---

title: Amazon RDS + MySQL
slug: cheatsheet-amazon-rds-commands-mysql
date: 2014-05-21 16:16:36.000000000 +05:00
type: post
published: true
status: publish
tags:
- amazon rds
- cheatsheet
- mysql
- commands
---

Connect to Amazon RDS<br />

```sql
mysql -uaamnah --password --host=mysql.hostmarkaz.com
```

Creating MySQL database<br />

```sql
mysql> CREATE DATABASE databasename ;
```

Creating MySQL User<br />

```sql
mysql> CREATE USER 'username'@'host' IDENTIFIED BY 'password' ;
```

Allowing User to Connect<br />
// grant usage on server so the user can connect<br />

```sql
mysql> GRANT USAGE ON *.* TO 'username'@'host' ;
```

Granting Privileges<br />

```sql
mysql> GRANT ALL PRIVILEGES ON databasename.* TO 'username'@'host' ;
```

CHECK if you can connect to the created database with the user you crteated<br />

```sql
mysql -uusername -p --host=mysql.hostmarkaz.com databasename
```

Deleting MySQL User<br />

```sql
mysql> DROP USER 'username'@'host' ;
```

Import SQL database<br />

```sql
mysql -u username -p password databasename &lt; filename.sql
```

List all users<br />

```sql
SELECT User,Host FROM mysql.user;
```

View Users and Permissions<br />

```sql
SELECT user, host, password, select_priv, insert_priv, shutdown_priv, grant_priv FROM mysql.user
```

View User Permissions for individual Databases<br />

```sql
SELECT user, host, db, select_priv, insert_priv, grant_priv FROM mysql.db
```

Sample Command:<br />

```sql
mysqldump --user=root --password=password --host=host.aamnah.com wpblog | mysql --host=host.hostmarkaz.com --user=aamnah --password=password wpblog
```

### NOTES

- If can not connect, check if the port is open on the server you are connecting from. RDS uses `3306` (default MySQL port). On KH server it couldn’t connect because the port was closed
- If the connection is not getting through the error would be `could not connect`
- If login is incorrect the error would be `‘access denied’. mysql_connect(): Access denied for user`
- The user you are connecting with needs to be created at RDS. It doesn’t matter if the server you are connecting from has it or not

### Opening Ports

Make sure ports are opened in the firewall configuration.

This can be accessed in _WHM >> Plugins » ConfigServer Security &amp; Firewall >> Firewall configuration >> Port settings_.
