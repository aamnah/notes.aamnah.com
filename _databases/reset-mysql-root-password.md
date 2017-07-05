---
layout: post
title: Reset MySQL root password on Linux
ctime: 2017-07-04

---

1. stop mysql

```bash
sudo service mysql stop
```

2. Start MySQL in safe mode

```bash
sudo mysqld_safe --skip-grant-tables
```

You may need to type **Enter** twice.

3. Log into MySQL as root:

```bash
mysql -u root
```

4. Change to the mysql database, which handles the settings for MySQL itself:

```sql
use mysql;
```

5. Update the password for the root user:

update user set password=PASSWORD("CqgNoXMxOV8k") where User='root';

```sql
update user set password=PASSWORD("the new password you want to use") where User='root';
```

6. Refresh the MySQL user privileges:

```sql
flush privileges;
```
7. Exit MySQL:

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



Links
---
- [](https://pk.godaddy.com/help/reset-your-root-mysql-password-linux-17548)
- [](https://stackoverflow.com/questions/42153059/mysqld-safe-directory-var-run-mysqld-for-unix-socket-file-dont-exists)