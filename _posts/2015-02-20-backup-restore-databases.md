---
layout: post
title: Backing up and Restoring Databases
permalink: backup-restore-databases

---
### Export

    {% highlight bash %}
    --host="host" --user="username" --password --port=3306 "db_name"
    {% endhighlight %}

You can use the exported backup file to rename that database. What is the database called and what database to use is defined in the first two lines.

### Rename

    {% highlight mysql %}
    CREATE DATABASE IF NOT EXISTS `database_wp`;
    USE `database_wp`;
    {% endhighlight %}

### Import

    {% highlight bash %}
    --host="host" --user="username" --password --port=3306 --database=db_name < "path/to/backup/file.sql"
    {% endhighlight %}
