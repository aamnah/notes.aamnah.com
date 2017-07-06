---
layout: post
title: MySQL Commands
permalink: cheatsheet_mysql_commands
ctime: 2015-04-10
mtime: 2017-07-06
tags: 
- cheatsheet
- mysql
---
 
Connect to MySQL
---

```sql
mysql -u aamnah -p —h db.mysite.com -P 3306 db_name  
```

OR

```sql
mysql --user=username --password=password --host=host --port=3306 db_name
```

| options              | values                    |
|----------------------|---------------------------|
| `-u` or `--user`     | username                  |
| `-p` or `--password` | password                  |
| `-h` or `--host`     | host (default: localhost) |
| `-P` or `--port`     | Port (default: 3306)      |

Replace _db_name_ with the name of the database you want to connect to.

CRUD Databases
---

##### Create MySQL database

```sql
mysql > CREATE DATABASE foo ;
```


Users and Privileges
---

##### Creating MySQL User

```sql
mysql> CREATE USER 'username'@'host' IDENTIFIED BY 'password' ;
```

- Syntax for account names is 'userName'@'hostName'.

- An account name consisting only of a user name is equivalent to 'userName'@'%'. For example, 'me' is equivalent to 'me'@'%'.

##### Change user password

```sql
SET PASSWORD FOR
'jeffrey'@'localhost' = PASSWORD('mypass');
```

If you are changing your own password and not of another user, you can omit the `FOR` clause

```sql
SET PASSWORD = PASSWORD('mypass');
```

##### Allowing User to Connect
    
```sql
# grant usage on server so the user can connect  
mysql> GRANT USAGE ON *.* TO 'username'@'host' ;
```

##### Granting Privileges

```sql
mysql> GRANT ALL PRIVILEGES ON databasename.* TO 'username'@'host' ;
```

##### CHECK if you can connect to the created database with the user you crteated

```sql
mysql -uusername -p --host=db.mysite.com databasename 
```

##### Deleting MySQL User

```sql
mysql> DROP USER 'username'@'host' ;
```

##### List all users

```sql
SELECT User,Host FROM mysql.user;
```

##### View Users and Permissions

```sql
SELECT user, host, password, select_priv, insert_priv, shutdown_priv, grant_priv FROM mysql.user
```

##### View User Permissions for individual Databases

```sql
SELECT user, host, db, select_priv, insert_priv, grant_priv FROM mysql.db
```

Backups
---

##### backup all databases in one file (eventually add the option --add-locks):

```sql
mysqldump -u username -p -–all-databases > file.sql
```

##### backup all databases in one gzipped file:

```sql
mysqldump -u username -p -–all-databases | gzip > file.sql.gz
```

##### backup selected databases

```sql
mysqldump -u username -p -–databases db1 db2 db3 | gzip > dbs.sql.gz
```

Restores
---

##### restore all databases:

```sql
mysql -u username -p < file.sql 
```

##### restore compressed backup file

```sql
gunzip < [backupfile.sql.gz] | mysql -u [uname] -p[pass] [dbname]
```

##### Import SQL database

```sql
mysql -u username -p password databasename < filename.sql
```

##### Sample Command for creating a backup and restoring at remote server in one command: 

```sql
mysqldump --user=root --password=password --host=mysql.mydomain.com db_1 | mysql --host=db.mysite.com --user=username --password=password db_1
```



Troubleshooting
---

* If not connecting, check if the port is open on the server you are connecting from. Default MySQL port is 3306. On KH server it couldn’t connect because the port was closed. Also, see if the allow remote login option is enabled/disabled.

* If the connection is not getting through the error would be ‘could not connect’.

* If login is incorrect the error would be ‘access denied’. *mysql_connect(): Access denied for user*.

* The user you are connecting with needs to be created at RDS. It doesn’t matter if the server you are connecting from has it or not.


**Opening Ports**:
Ports should be opened in the firewall configuration. The default port for MySQL is 3306.

This can be accessed in WHM >> Plugins » ConfigServer Security & Firewall >> Firewall configuration >> Port settings.

Links
---

- [MySQL Docs: Specifying Account Names](https://dev.mysql.com/doc/refman/5.1/en/account-names.html)
- [How to Back Up and Restore a MySQL Database](http://webcheatsheet.com/sql/mysql_backup_restore.php)