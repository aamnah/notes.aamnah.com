---
title: Find out MySQL Database sizes
date: 2019-03-06
lastmod: 2019-03-07
category: Databases
tags:
	- mysql

---

```sql
-- DB size in GB
SELECT TABLE_SCHEMA "DB Name", ROUND(SUM(DATA_LENGTH + INDEX_LENGTH) / 1024 / 1024 / 1024, 2) "DB Size in GB" FROM INFORMATION_SCHEMA.TABLES GROUP BY TABLE_SCHEMA;

-- DB size in MB
SELECT TABLE_SCHEMA "DB Name", ROUND(SUM(data_length + INDEX_LENGTH) / 1024 / 1024, 2) "DB Size in MB" FROM INFORMATION_SCHEMA.TABLES GROUP BY TABLE_SCHEMA; 
```

```
+--------------------+---------------+
| test               | DB Size in GB |
+--------------------+---------------+
| foo                |         36.56 |
| bar                |         20.62 |
| information_schema |          0.00 |
| mysql              |          0.00 |
| performance_schema |          0.00 |
+--------------------+---------------+
5 rows in set (56.61 sec)
```


Links
---

- [StackOverflow: How to get size of mysql database?](https://stackoverflow.com/a/1733523)