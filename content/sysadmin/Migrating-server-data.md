---
title: Migrating server data and databases
date: 2017-02-02
---

# Migrating data from a barebones server to another barebones server

### Compress files
Let's say you have websites in `/var/www` folder that you want to transfer. Compressing them first will save bandwidth as well as transfer time.

```bash
# tar czf <filename> <source>
tar czf aamnah.tar.gz /var/www/aamnah.com
```
`c` - create
`z` - compress (gzip)
`f` - take a filename
`v` - verbose (optional, if you wanna see lines fly by on the termianl)


### Transfer files
SCP (Secure Copy) to the rescue

```bash
scp -P 1234 -i ~/.ssh/blah file1.tar.gz file2.tar.gz file3 file4.sql.gz user@server.domain.com:/location-on-new-server
```

- You can copy multiple files with one command
- You can specify the SSH port with `-P` for the target server
- You can pass in an SSH key with `-i`, saves you the password prompt. Key must already be authenticated with target server.

### Backup MySQL databases

```bash
# mysqldump -u <uname> -p<pass> <dbname> | gzip -9 > <backupfile.sql.gz>
mysqldump -u username -p --all-databases | gzip -9 > allDatabases.sql.gz
```

`--all-databases` will backup ALL databases, including `mysql`, `use`, `db`, `tables_priv`, and `columns_priv` etc. These tables include user accounts and global privilieges etc.

### Restore MySQL databases

To restore compressed backups

```bash
# gunzip < [backupfile.sql.gz] | mysql -u [uname] -p[pass] [dbname]
gunzip allDatabases.sql.gz
mysql -u username -p < allDatabases.sql
```
For the above to work, the databases need to exits or the backup script needs to have the `CREATE DATABASE` queries for the databases.

If you're importing into existing databases, use the `mysqlimport` command

```bash
mysqlimport -u [uname] -p[pass] [dbname] [backupfile.sql]
```

Links
---
- [How to Back Up and Restore a MySQL Database](http://webcheatsheet.com/sql/mysql_backup_restore.php)
- [StackOverflow: Backup MySQL users](http://stackoverflow.com/questions/597732/backup-mysql-users)
