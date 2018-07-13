---
title: Conditional Statements in SQL with CASE
date: 2017-11-29
category: Databases
---

- If you have ever wondered how to `IF` like conditional statements in SQL, `CASE` is your answer. 
- It's supported in all versions of SQL Server
- `CASE` can be added to both the `SELECT` portion of a `SELECT` statement as well as the `ORDER BY` portion
- `CASE` statements can be used inside other `CASE` statements

> With `CASE` you can easily group data into various ranges, you can beautify the results of a SQL query, and can allow for dynamic sorting of the query's results. `CASE` statements can also be used to give subtitles to `ROLLUP` and `CUBE` queries, and can be used in computed columns to boot.

```sql
SELECT 
  CASE <variable> 
    WHEN <value> THEN <returnvalue>
    WHEN <othervalue> THEN <returnthis>
  ELSE <returndefaultcase>
  END AS <newcolumnname>
FROM <table>
```

- `AS <newcolumnname>` after the `END` names the resulting column. Optional.

Links
---
- [The Power of SQL CASE Statements](http://www.4guysfromrolla.com/webtech/102704-1.shtml)
- [StackOverflow: How do I perform an IF…THEN in an SQL SELECT?](https://stackoverflow.com/questions/63447/how-do-i-perform-an-if-then-in-an-sql-select)