---

title: Reset MySQL root password on Linux
date: 2017-07-04

---

### tl;dr

```bash
sudo service mysql stop

# get rid of can't connect errors
# by creating socket file
sudo mkdir -p /var/run/mysqld
sudo chown mysql:mysql /var/run/mysqld
sudo touch /var/run/mysqld/mysqld.sock
sudo chmod 777 /var/run/mysqld/mysqld.sock

# run mysql in safe mode
sudo mysqld_safe --skip-grant-tables &

# connect
mysql -u root
```

```sql
-- MySQL commands
UPDATE mysql.user SET authentication_string=PASSWORD('1256fhsad12') WHERE user='root';
UPDATE mysql.user SET plugin="mysql_native_password" WHERE user='root';
FLUSH PRIVILEGES;
exit;
```

```sql
-- MySQL 8 commands
ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';
-- UPDATE mysql.user SET plugin="mysql_native_password" WHERE user='root';
FLUSH PRIVILEGES;
exit;
```

---

stop mysql

```bash
sudo service mysql stop
```

Start MySQL in safe mode

```bash
sudo mysqld_safe --skip-grant-tables
```

You may need to type **Enter** twice.

```
# mysqld_safe --skip-grant-tables
2017-07-25T07:39:45.596828Z mysqld_safe Logging to syslog.
2017-07-25T07:39:45.600267Z mysqld_safe Logging to '/var/log/mysql/error.log'.
2017-07-25T07:39:45.621303Z mysqld_safe Starting mysqld daemon with databases from /var/lib/mysql

```
If you see the above (and don't get the prompt back) it worked, just open a new termianl and log in. To avoid losing the prompt, you can run the previous command in the background by adding a `&` at the end, like: `sudo mysqld_safe --skip-grant-tables &`

Log into MySQL as root:

```bash
mysql -u root
```

The `mysql` database handles the settings for MySQL itself. Update the password for the root user

```sql
--UPDATE user SET PASSWORD=PASSWORD("the new password you want to use") WHERE USER='root';

-- MySQL 5.7 now uses `authentication_string` instead of `password`
UPDATE mysql.user SET authentication_string=PASSWORD('XXXX') WHERE user = 'root';
```

Refresh the MySQL user privileges:

```sql
FLUSH PRIVILEGES;
```

Exit MySQL:

```sql
exit
```

If this doesn't work, you can try force the application to quit by pressing `CTRL-C` on your keyboard.

You can also try resetting with the following command

```bash
sudo dpkg-reconfigure mysql-server-*
```

 where `*` is the version you have installed. You can find out the version with `mysql --version`

On macOS you can try the following:

```bash
# macOS
mysqld --skip-grant-tables  # this will run mysql 

mysql -u root
mysql> FLUSH PRIVILEDGES;
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'newpassword';
```

### Root user login and PhpMyAdmin

```sql
-- Create a new super user for phpMyAdmin
CREATE USER 'pmauser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'tyuY12HPEBsY04Y12HPEf3Sx';
GRANT ALL PRIVILEGES ON *.* TO 'pmauser'@'localhost';
FLUSH PRIVILEGES;
```


Troubleshooting
---

```
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock' (2)
root@localhost:~# 2017-08-16T06:46:15.453699Z mysqld_safe Logging to syslog.
2017-08-16T06:46:15.458042Z mysqld_safe Logging to '/var/log/mysql/error.log'.
2017-08-16T06:46:15.461782Z mysqld_safe Directory '/var/run/mysqld' for UNIX socket file don't exists.
```
To find all socket files on your system run:

```bash
sudo find / -type s
```

Check if the socket file exists

```bash
ls -al /var/run/mysqld/
```

if not, make one and set permissions

```bash
touch /var/run/mysqld/mysqld.sock
chmod 777 /var/run/mysqld/mysqld.sock
```

---
if you get while trying to start MySQL in safe mode

```
mysqld_safe Directory '/var/run/mysqld' for UNIX socket file don't exists.
```

then make the directory 

```bash
mkdir -p /var/run/mysqld
chown mysql:mysql /var/run/mysqld
```
and re-run the command to start MySQL in safe mode.

---

If you get the following error while setting the password

```
ERROR 1146 (42S02): Table 'mysql.USER' doesn't exist
```

See if you're not mixing title cases. It is `mysql.user`, not `mysql.USER`. The table names are case sensitive, don't mess with them. (You can find out with the `describe mysql.user;` command)

If alphabet case is not the issue, your database may be corrupt. See if `mysql.user` exits

```sql
USE mysql;
SELECT * FROM user;
```

If these are missing you can try recreating the tables by running

```bash
mysql_install_db
```

(I got this error because i had set a 100 character long generated password while installing MySQL, and it wasn't valid. The installation proceeded without giving an error. But checking the `mysql.user` table showed `*THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE`. Since mine was a fresh installation, i just removed and reinstalled MySQL `apt-get remove -y mysql-* && apt-get purge -y mysql-*`)

---

```
ERROR 1054 (42S22): Unknown column 'password' in 'field list'
```

In MySQL 5.7, the `password` field in `mysql.user` table field was removed, now the field name is `authentication_string`. The query will become

```sql
update user set authentication_string=password('XXXX') where user='root';
```

---

```
 #1524 - Plugin 'auth_socket' is not loaded
```

Load the `mysql_native_password` plugin when resetting the password

```sql
UPDATE mysql.user SET plugin="mysql_native_password" WHERE user='root';
```



Links
---
- [GoDaddy: Reset your root MySQL password - Linux](https://pk.godaddy.com/help/reset-your-root-mysql-password-linux-17548)
- [StackOverflow: mysqld_safe Directory '/var/run/mysqld' for UNIX socket file don't exists](https://stackoverflow.com/questions/42153059/mysqld-safe-directory-var-run-mysqld-for-unix-socket-file-dont-exists)
- [StackOverflow: Table 'mysql.user' doesn't exist:ERROR](https://stackoverflow.com/questions/17780630/table-mysql-user-doesnt-existerror)
- [Can’t log into phpMyAdmin: mysqli_real_connect(): (HY000/1698): Access denied for user ‘root’@’localhost’](https://devanswers.co/phpmyadmin-access-denied-for-user-root-localhost/)
