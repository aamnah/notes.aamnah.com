---

title: Common MySQL Errors
slug: fix-resolve-common-mysql-errors-linux-ubuntu
date: 2017-07-06

---


### Error: Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock' (2)

tl;dr

```bash
mkdir -p /var/run/mysqld
touch /var/run/mysqld/mysqld.sock
chmod 777 /var/run/mysqld/mysqld.sock
chown mysql:mysql /var/run/mysqld
service mysql restart
```

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

```sql
FLUSH PRIVILEGES;
exit
```

### mysqld_safe Directory '/var/run/mysqld' for UNIX socket file don't exists.

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

### ERROR 1146 (42S02): Table 'mysql.USER' doesn't exist

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


### ERROR 2003 (HY000): Can't connect to MySQL server on '123.123.123.123' (111)
See if the server you're trying to connect to allows connection. One common scenario is where your remote server is bound to localhost. You can find out with the following command (where 3306 is the default MySQL port) run this on the server you want to connect to

```bash
netstat -nat | grep :3306
```

```
tcp        0      0 127.0.0.1:3306          0.0.0.0:*               LISTEN
```

If you see a localhost (127.0.0.1 or 192.168.x.x etc.) than the server is binding to localhost and not allowing any remote connections. To resolve this, uncomment the following line in `/etc/mysql/mysql.conf.d/mysqld.cnf`

```bash
#bind-address = 127.0.0.1
``` 
Check `netstat` again, you should see `0.0.0.0` or just `:`

```
# netstat -nat | grep :3306
tcp6       0      0 :::3306                 :::*                    LISTEN
```

### ERROR 1819 (HY000): Your password does not satisfy the current policy requirements
The solution is to turn off password validation

```bash
mysql -h localhost -u root -p
```

```sql
uninstall plugin validate_password;
```

Or you could set the policy to LOW in the mysql conf file: `/etc/mysql/mysql.conf.d/mysqld.cnf`

```bash
# 0: LOW
# 1: MEDIUM
# 2: STRONG
validate_password_policy=LOW
```

Links
---

- [https://stackoverflow.com/questions/11990708/error-cant-connect-to-local-mysql-server-through-socket-var-run-mysqld-mysq](https://stackoverflow.com/questions/11990708/error-cant-connect-to-local-mysql-server-through-socket-var-run-mysqld-mysq)
- [StackOverflow: mysqld_safe Directory '/var/run/mysqld' for UNIX socket file don't exists](https://stackoverflow.com/questions/42153059/mysqld-safe-directory-var-run-mysqld-for-unix-socket-file-dont-exists)
- [StackOverflow: Table 'mysql.user' doesn't exist:ERROR](https://stackoverflow.com/questions/17780630/table-mysql-user-doesnt-existerror)
- [MySQL Docs: Password Validation Plugin Options and Variables](https://dev.mysql.com/doc/refman/5.6/en/validate-password-options-variables.html#sysvar_validate_password_policy)
