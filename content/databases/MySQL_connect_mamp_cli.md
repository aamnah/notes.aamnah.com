---
title: Connect to MySQL installed by MAMP via Command Line (Terminal)
date: 2017-10-29
---
tl;dr: You have to mention the socket file. The socket file is usually at 

```
/Applications/MAMP/tmp/mysql/mysql.sock
```

Provide that socket file location in the command

```bash
# Connect to MySQL
mysql -uroot -proot --socket=/Applications/MAMP/tmp/mysql/mysql.sock
```

```bash
# Backup all databases
mysqldump -uroot -proot --socket=/Applications/MAMP/tmp/mysql/mysql.sock --all-databases > all_databases.sql
```


You can confirm the  connection details on MAMP's WebStart page: 
[http://localhost:8080/MAMP/?language=English](http://localhost:8080/MAMP/?language=English)