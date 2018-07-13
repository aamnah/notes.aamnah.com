---
title: Allowing remote access to MySQL
date: 2018-04-27
---

Allow remote access

```sql
GRANT PRIVILEGES ON *.*
TO 'user'@'host'
IDENTIFIED BY 'password'
WITH GRANT OPTION;
```

- `*.*` means you're granting access to all tables of all databases. This could be `databaseName.*` meaning you're granting access to all tables of _databaseName_. Or you could further fine grain which specific tables of what database you want to give access to, like `databaseName.tableName`
- _host_ could be a wildcard `%` allowing access from all hosts with that user/pass combination, or it could be an IP or an FQDN


Links
---
- [MySQL Docs: 13.7.1.4 GRANT Syntax](https://dev.mysql.com/doc/refman/5.7/en/grant.html)
- [How to Grant All Privileges on a Database in MySQL](https://chartio.com/resources/tutorials/how-to-grant-all-privileges-on-a-database-in-mysql/)


# Importing ALL Gzipped databases

```sql
mysql -uroot -pecare2@ < alldatabases.sql
```

For this command the databases need to exist or the alldatabases.sql script needs to contain the CREATE DATABASE queries for the databases. In order to have the 
CREATE DATABASE queries, you gotta dump the databases with the `--add-drop-database` option, like so:

```sql
mysqldump --user=${OLD_DB_USER} --password=${OLD_DB_PASS} --add-drop-database --all-databases | gzip -9 > ${DB_DUMP_FILENAME}.sql.gz
```

> `--add-drop-database`

> Add a DROP DATABASE statement before each CREATE DATABASE statement. This option is typically used in conjunction with the --all-databases or --databases option because no CREATE DATABASE statements are written unless one of those options is specified.

Alternatively, you have to provide the database names of all the databases you dumped in that one compressed file

```sql
gunzip < [backupfile.sql.gz] | mysql -u [uname] -p[pass] [dbname]
```

If you didn't dump the database with the `--add-drop-database` option and didn't provide individual database names, you'll get an error that looks like this when improting a file that contains more than one database

```
ERROR 1064 (42000) at line 1: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'Usage: mysqldump [OPTIONS] database [tables]
OR     mysqldump [OPTIONS] --databa' at line 1
```

- [How to restore mysqldump --all-databases backup](https://www.linuxquestions.org/questions/linux-server-73/how-to-restore-mysqldump-all-databases-backup-892922/)
- [StackOverflow: mysqldump with create database line](https://stackoverflow.com/questions/16452523/mysqldump-with-create-database-line)

# Scripting

When scripting, use `--user` and `--password` instead of `-u` and `-p` to avoid errors

# Update root password
This is when you already know the current root password and want to update it

```sql
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('MyNewPass'); 
```

# Get all MySQL users 

```sql
SELECT User FROM mysql.user; -- Get only usernames
SELECT user, host FROM mysql.user; -- Get usernames and the host they are allowed to connect from
SELECT DISTINCT user FROM mysql.user; -- Get only usernames with no repetitions of different hosts
SELECT * FROM mysql.user; -- Get the entire mysql.users table
```

# Delete a user

```
DROP USER 'blah'
```

# See Privileges and Grants

```sql
SHOW GRANTS; -- See grants for the current user
SHOW GRANTS FOR foo -- See grants for a user called foo
```