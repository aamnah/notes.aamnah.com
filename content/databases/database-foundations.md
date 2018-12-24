---
title: Database Foundations
slug: database-foundations
tags: ['basics', 'database', 'mysql', 'how-to']
category: Databases
status: published
date: 2015-02-20
---

Creating Database
---

```sql
CREATE DATABASE `shop` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
```

You can also use the keyword `SCHEMA` to create a database.

```sql
CREATE SCHEMA `shop`;
```

Once a database is cerated you can start using it with the following command

```sql
USE `shop`;
```

### Get info about the database

```sql
SHOW ENGINES
```

The default engine is InnoDB.

Creating Tables
---

```sql
CREATE TABLE actors (name VARCHAR(50));
```

`CREATE` is the command telling the database what to do. `TABLE` is telling the database what to create. **actors** is the name of that table. **name** is the column the table will have. The type of data it'll have is `VARCHAR`. `(50)` means we can store up to 50 characters.

```sql
CREATE TABLE movies (title VARCHAR(200), year INTEGER);
```

Same as above, but this time create two columns, one is called **title** and contains `VARCHAR` data up to **200** characters long and the other is **year** which contains `INTEGER`s (aka numbers).

Here is another example:

```sql
CREATE TABLE IF NOT EXISTS `products` (
`sku` int(11) DEFAULT NULL,
`name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
`img` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
`price` decimal(10,2) DEFAULT NULL,
`paypal` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
```

`NULL` and `NOT NULL` determine the default for values. By default it is NULL. But if you want to force the user to always enter a value, you can set it to `NOT NULL` so it must always be entered by the user. If you want a **required** field, set it's value to **NOT NULL** in the database.

### Temporary Tables

A temporary table is visible only to the current connection, and is dropped automatically when the connection is closed. 

CRUD (Create, Read, Update, Delete)
---

Each of these operations has a set of keywords associated with them.

| CRUD    |            |
|---------|------------|
| Create  | `INSERT`   |
| Read    | `SELECT`   |
| Update  | `UPDATE`   |
| Delete  | `DELETE`   |

Inserting Data
---

```sql
INSERT INTO movies VALUES("Avatar", 2009);
```

`INSERT INTO` tells what table to insert into, **movies** is the table's name and `VALUES` tells the list of values that we want to add to the table. 

Avatar has `" "` around it because it is a string, 2009 has no quotes because it's an integer.

The order of the values is important. It should be the same order as you have defined your columns. If you don't know/remember the ordering of the columns in the table, you can specify them in the command, like so:

```sql
INSERT INTO movies (title, year) VALUES("Avatar", 2009);
```  

Even in this case, the order of the columns specified should match the order of the values. If, in the command, you have mentioned the title column first, then the values should have the title value first.

You can add values to multiple rows separated by a comma in the same command. Like this:

```sql
INSERT INTO movies (title, year) VALUES("Avatar", 2009), ("The Godfather", NULL);
```  

If you don't know or don't want to enter a value, use **NULL**.

You can also insert data using the `SET` keyword

```sql
INSERT INTO movies SET title="Back to the Future", year = 1985;
``` 

Here is another example:

```sql
INSERT INTO `products` (`sku`, `name`, `img`, `price`, `paypal`) VALUES(109, 'Get Coding Shirt', 'Gray', 'img/shirt-coding.png', 25.00, '7BNDYJX65WD364')
```

The basic format of the command is

```sql
INSERT INTO `products` (column1, column2) VALUES(value1, value2)
```

Reading and Retrieving data
---

`SELECT` is the keyword for reading data 

```sql
SELECT * FROM movies;
```

`SELECT` is for reading data, `*` means all columns, `FROM` means from, and the table is **movies**. The above statement says 'read data from all columns in the movies table'.

You can also select which columns to show like this:

```sql
SELECT movies.title, movies.year FROM movies;
```

The order of the columns will be determined by the order in your query. Meaning, you can switch columns around. 

```sql
SELECT movies.year, movies.title FROM movies;
```

You can drop the table names from columns and it'll still work, like so:

```sql
SELECT title, year FROM movies;
```


### Querying Tables and Getting selective results

`WHERE` is the clause that limits the result set because you are constraining it to rows that meet a specified criteria. Using the WHERE clause you and add text or a condition to filter the results to only bring back rows fulfilling that condition.

| Operator | Meaning                   |
|----------|---------------------------|
|  `=`     | Equal                     |
|  `!=`    | Not Equal                 |
|  `>`     | Greater Than              |
|  `>=`    | Greater Than AND Equal to |
|  `<`     | Less Than                 |
|  `<=`    | Less Than AND Equal to    |

```sql
SELECT * FROM movies WHERE year = 1999;
```

`SELECT` all (`*`) rows `FROM` the **movies** table `WHERE` (the data in) the **year** (column) was `1999`.

```sql
SELECT * FROM movies WHERE year != 1999;
```

will select all movies where the years was not equal to 1999.

### Combining Multiple Conditions

| Keyword    | Meaning          |
|------------|------------------|
| `AND`      | And              |
| `OR`       | Or               |
| `BETWEEN`  | Between          |

```sql
SELECT * FROM movies WHERE year < 1999 AND title = "The Matrix";
```

`SELECT` all (`*`) rows `FROM` the **movies** table `WHERE` the **year** column value is greater than (`<`) `1999` `AND` the **title** column value is **The Matrix**. Since the title data type is string, we've wrapped what we are looking for in `" "`.

In other words, select all movies released after 1999 **AND** with the title The Matrix. 

```sql
SELECT * FROM movies WHERE year = 1998 OR year = 2000;
```

Show all movies released in 1998 **OR** 2000.

```sql
SELECT * FROM movies WHERE year BETWEEN 1988 AND 2000;
```

Show all movies released **BETWEEN** 1988 and 2000.

### Search on a string based on part of a string

| Keyword    | Meaning          |
|------------|------------------|
| `LIKE`     | Contains         |
| `NOT LIKE` | Does not contain |
| `%`        | Wildcard         |

For example, look for all movies that have the word _Godfather_ in the title.

```sql    
SHOW * FROM movies WHERE title LIKE "godfather"
```

`LIKE` is **case-insensitive**. 

Wildcards are used to determine if something starts, contains or ends with a particular string. If a search string doesn't yield anything, wrap the string in wildcards and try again.

```sql
SHOW * FROM movies WHERE title LIKE "%godfather%"
```

You can also look for something that does not contain a particular string

```sql
select * FROM runs WHERE info is null or info NOT LIKE '%wrong%';
```

### Ordering results `ORDER BY`

| Keyword    | Meaning                    |
|------------|----------------------------|
| `ORDER BY` | Order                      |
| `ASC`      | Ascending Order            |
| `DESC`     | Descending (reverse) Order |

```sql
SHOW * FROM movies ORDER BY year;
```

will show all movies in ascending order of the year column. If you want you can explicitly specify `ASC` for the order. But it is ascending by default (Low to High).

```sql
SHOW * FROM movies ORDER BY year DESC;
```

will show all movies in descending order of the year.

You can _chain_ ordering together by adding a comma `,` after each column and their ordering keyword.

```sql
SHOW * FROM movies ORDER BY year ASC, title DESC;
```

will show the movies by ascending order of the year and in every year the title would be in descending (reverse) order. 

The ordering of the chain matters. Whatever you want sorted first needs to be included first.

### Limiting the Result Set

| Keyword    | Meaning               |
|------------|-----------------------|
| `LIMIT`    | No. of result rows    |
| `OFFSET`   | Offset of result rows |

```sql
SELECT * FROM movies LIMIT 10 OFFSET 20;
```

is the same as 

```sql
SELECT * FROM movies LIMIT 20,10;
```

Keep in mind that the OFFSET of the initial row is 0, not 1. 

There is a **default LIMIT** of 1000 in some software (like MySQL Bench). Be aware of it when you are working with results in excess of 1000+. If you are working with a programming language (like PHP) this default limit won't be there.

### Dealing with NULL

| Keyword       | Meaning                    |
|---------------|----------------------------|
| `IS NULL`     | Has no value               |
| `IS NOT NULL` | Is not empty (Has a value) |

```sql
SELECT * FROM movies WHERE year IS NULL;
```

Select all movies with the "year" column that hasn't been populated yet. In other words, show all movies with no year given. 

Null affects your sort order as it'll always come at top.

```sql
SELECT * FROM movies WHERE year IS NOT NULL ORDER BY year;
```

will exclude the empty results. Select all movies that have data in the "year" column.

Updating Data
---

```sql
UPDATE movies SET year=2015;
```

The command above will change the year to 2015 for all rows in the **year** column. To specify which row to update the year for, specify title as well. Make the command target more specific:

```sql
UPDATE movies SET year=2015 WHERE title="Avatar 2";
```

### Update existing values

```sql
UPDATE movies SET year=2016, title="Avatar Reloaded" WHERE title="Avatar 2";
```

will update the existing Avatar 2 row to Avatar Reloaded and change the year to 2016.

Delete Data
---

```sql
DELETE FROM movies;
```

will delete everything in the movies table. Not a good idea to do unless that's what you really want. You can use `WHERE` to narrow down your target.

```sql
DELTE FROM moviews WHERE title = "Avatar Reloaded";
```

to be extra safe, mention as many values for the row as you know.

```sql
DELTE FROM moviews WHERE title = "Avatar Reloaded" AND year=2016;
```

---

NOTES
---

### Follow convention

```sql
update movies set year=2015;
```

is the same as

```sql
UPDATE movies SET year=2015;
```

both will get the job done.

You don't _have to_ uppercase all SQL keywords, but _you should_ because it is convention to do so. Also, it make your code more readable.



### Turn safe updates off

```sql
SET SQL_SAFE_UPDATES = 0;
```

To turn them back on, change the **0** to **1**. Safe mode lets you UPDATE and DELETE a little more safely.

Resources
---
- [Treehouse - Database Foundations](https://teamtreehouse.com/library/database-foundations)
- [MySQL Docs: SELECT Syntax](http://dev.mysql.com/doc/refman/5.6/en/select.html)
