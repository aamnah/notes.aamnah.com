---
layout: post
title: Backing up and Restoring Databases
permalink: backup-restore-databases

---
### Export

```bash
--host="host" --user="username" --password --port=3306 "db_name"
```

You can use the exported backup file to rename that database. What is the database called and what database to use is defined in the first two lines.

### Rename

```sql
CREATE DATABASE IF NOT EXISTS `database_wp`;
USE `database_wp`;
```

### Import

```bash
--host="host" --user="username" --password --port=3306 --database=db_name < "path/to/backup/file.sql"
```
