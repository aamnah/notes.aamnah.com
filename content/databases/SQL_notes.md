---
title: Notes on SQL
date: 2019-03-12

---


- Schema is greek for _shape_. It's the shape or structure of your data

```bash
mysqladmin create 'DBNAME';
mysqladmin drop 'DBNAME';
```

```sql
-- getting data
SELECT * FROM Employee; -- bad idea, extra data coming through.
SELECT id, firstname, lastname FROM Employee -- good, less I/O. select your columns, returned in order of asking
```

```sql
-- quotes, double quotes, and backticks
SELECT Id FROM Employee -- stick to the first two preferred format to avoid inconsistencies
SELECT id FROM Employee -- table, column names are usually case-insensitive
SELECT 'id' FROM Employee -- single quotes for string literals, literal values and not columns!
SELECT "Id" FROM Employee -- double quotes for words that conflict with SQL keywords, or case-sensitivity desired
SELECT `Id` FROM Employee -- sames as double quotes, MySQL only
```

```sql
-- use AS keywords to alias a column
SELECT 
	p.productname AS title
FROM
	Product as p
```


Links
---

- [FrontendMasters: SQL Fundamentals](https://frontendmasters.com/courses/sql-fundamentals/)