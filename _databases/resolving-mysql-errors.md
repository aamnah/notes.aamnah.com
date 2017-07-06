---
layout: post
title: Common MySQL Errors
permalink: fix-resolve-common-mysql-errors-linux-ubuntu
ctime: 2017-07-06

---


### Error: Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock' (2)

See if a socket file exists. To find all socket files on your system run:

```bash
sudo find / -type s
```

Mysql server is usually open at `/var/lib/mysql/mysql.sock`

The MySQl configuration file is usually at `/etc/mysql/my.cnf` (Ubuntu 17.04)

stop MySQL

```bash
sudo service mysqld stop
```

Look for a `.pid` file and delete it if found

```bash
ls -alh /var/run/mysqld/
```

create a new `.sock` file and chmod it

```bash
touch /var/run/mysqld/mysqld.sock
chmod 777 /var/run/mysqld/mysqld.sock
```

also set `mysql` as the owner of `/var/run/mysqld`

```bash
chown mysql:mysql /var/run/mysqld
```

start MySQL again

```bash
sudo service mysql restart
```

### Failed! Error: The MySQL server is running with the --skip-grant-tables option so it cannot execute this statement

Login to MySQL

```bash
mysql
```
execute

```mysql
FLUSH PRIVILEGES;
exit
```

Links
---

- https://stackoverflow.com/questions/11990708/error-cant-connect-to-local-mysql-server-through-socket-var-run-mysqld-mysq