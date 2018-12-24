---
title: Backing up and Restoring Databases
slug: backup-restore-databases
date: 2015-02-20

---

### Export

```bash
# export a single database
--host="host" --user="username" --password --port=3306 "db_name"
```

```bash
# export all databases
mysqldump -u root -p --all-databases > database_backups.sql
```

### Rename

You can use the exported backup file to rename that database. What is the database called and what database to use is defined in the first two lines.

```sql
CREATE DATABASE IF NOT EXISTS `database_wp`;
USE `database_wp`;
```

### Import

```bash
--host="host" --user="username" --password --port=3306 --database=db_name < "path/to/backup/file.sql"
```


Links
---
- [How to Back Up and Restore a MySQL Database](http://webcheatsheet.com/sql/mysql_backup_restore.php)
