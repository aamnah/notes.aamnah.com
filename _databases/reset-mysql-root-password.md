---
layout: post
title: Reset MySQL root password on Linux
ctime: 2017-07-04

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

Change to the mysql database, which handles the settings for MySQL itself:

```sql
USE mysql;
```

Update the password for the root user:

```sql
UPDATE USER SET PASSWORD=PASSWORD("the new password you want to use") WHERE USER='root';
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

Troubleshooting
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

Your database may be corrupt. See if `mysql.user` exits

```sql
USE mysql;
SELECT * FROM user;
```

If these are missing you can try recreating the tables by running

```bash
mysql_install_db
```

(I got this error because i had set a 100 character long generated password while installing MySQL, and it wasn't valid. The installation proceeded without giving an error. But checking the `mysql.user` table showed `*THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE`. Since mine was a fresh installation, i just removed and reinstalled MySQL `apt-get remove -y mysql-* && apt-get purge -y mysql-*`)


Links
---
- [GoDaddy: Reset your root MySQL password - Linux](https://pk.godaddy.com/help/reset-your-root-mysql-password-linux-17548)
- [StackOverflow: mysqld_safe Directory '/var/run/mysqld' for UNIX socket file don't exists](https://stackoverflow.com/questions/42153059/mysqld-safe-directory-var-run-mysqld-for-unix-socket-file-dont-exists)
- [StackOverflow: Table 'mysql.user' doesn't exist:ERROR](https://stackoverflow.com/questions/17780630/table-mysql-user-doesnt-existerror)