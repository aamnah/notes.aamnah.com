---
title: SQL basics
category: Databases
date: 2017-11-17
---

- `SQL` is a programming language that talks with the database
- Every `sql` statement myst end with a semi-colon `;`
- Uppercase for `sql` keywords like `SELECT`, `FROM` is a convention, recommended but not required.
- We search columns first and tables next
- `*` means all
- `WHERE` let's you specify conditions to filter data. You use conditional operators to build your conditions
- `AND` and `OR` let you specify multiple conditions. `AND` means all conditions must be met, `OR` means any condition can be met
- `ORDER BY` is for sorting data in `ASC` (default) or `DESC` order
- When adding and deleting data, make sure to provide a `WHERE` clause, or it'll mess with the entire table or columns.

## Getting and filtering existing data 
- Keywords: `SELECT`, `FROM`, `WHERE`, `AND`, `OR`, `ORDER BY`
- Operators: `=`, `>`, `<`, `<=`, `>=`, `<>`

### Retrieving data

We retrieve data using `SELECT`

```sql
# SELECT ___ FROM ___;
# SELECT columnName FROM tableName;

# select the `title` column from the `movies` table
SELECT title FROM movies;

# select data from multiple columns
SELECT id, title, genre, duration FROM movies;

# select all columns
SELECT * FROM movies;
```

### Filtering data
- To filter data we use the `WHERE` clause (within a `SELECT` statement)
- The sql command isn't done when it finds the particular item, it continues till it's done with all entries (e.g. If you're looking for a movie title with an id of 2, it'll find 2, and continue through the rest 3,4,5 and so on until it has gone through all entries, to make sure there was only one cell with id of 2)

```sql
# SELECT ___ FROM ___ WHERE ___;
# SELECT columnName FROM tableName WHERE condition;

SELECT title FROM movies WHERE id = 2; # numbers
SELECT * FROM movies WHERE title = 'The Kid'; # strings (match exact sequence)
```

### Sorting data

#### Sort by Order
- `ORDER BY` clause is used to sort data in ascending `ASC` or descending `DESC` order
- `ASC` is default

```sql
# SELECT ___ FROM ___ ORDER BY ____  ASC|DESC;

SELECT title
FROM movies
ORDER by duration; # get movie titles in (default) ascending order of duration (shortest first)

SELECT title
FROM movies
ORDER by duration DESC; # get movie titles in descending order of duration (longest first)
```

#### Sort by Range
- We can specify a range using comparison operators `>`, `<`, `=`, `<=`, `>=`, `<>`
- `<>` is same as `!=`, it means _not equal to_

```sql
# SELECT ___ FROM ___ WHERE ____ > ____;

SELECT * FROM movies WHERE duration > 100;
SELECT * FROM movies WHERE duration < 100;
SELECT * FROM movies WHERE duration >= 94;
```

#### Sort by multiple conditions

- `AND` and `OR` operators let's you add multiple conditions
- When you use `AND` to combine multiple conditions, the _all conditions must be met_ to get any results
- `OR` gives you results if any of the multiple conditions is met

```sql
SELECT title
FROM movies
WHERE id = 1
AND genre = 'Comedy'; # with AND, both conditions must be met


SELECT title
FROM movies
WHERE id = 1
OR genre = 'Comedy'; # will get results if either condition is met
```


## Managing data

### Adding data
- `INSERT` is the keyword for adding data. 
- The values must be in the respective order of column names you mention. The first column you mention will get the first value you specify. If you're not specifying any column names, the order of values must match the order of columns in the table
- If you are inserting data into all the columns of the table, mentioning every column name is not necessary
- The order of the columns/values is very important whether you mention the column names or not.
- `NULL` is the data type for when there's no value in the cell (empty cell, missing data). `NULL` is  a placeholder for unknown data

```sql
# INSERT INTO ___ (___, ___) VALUES (___, ___);
# INSERT INTO tableName (columnName, columnName) VALUES (value, value);

INSERT INTO movies (id, title, genre, duration)
VALUES (5, 'The Circus', 'Comedy', 71);

INSERT INTO movies
VALUES (5, 'The Circus', 'Comedy', 71); # same as above since movies has only 4 columns

INSERT INTO movies (title, duration)
VALUES ('The Fly', 80)
```

#### Primary Keys
- Primary keys are unique for a table. They're never blank or empty. Once value in the column can not be the same as another value in the column.
- SQL can auto-increment the primary key for a table for new rows. Each time a row is added to the table, the key gets automatically incremented and added to the row.
- Primary Keys are usually used as reference keys, you use these to identify and get the rows. Some examples are customer_id, product_id, post_id etc. 
- Primary keys are **unique identifiers**


### Changing existing data
- `UPDATE` is the keyword for _updating_ existing data
- Withut a `WHERE` clause, the entire column will update for all rows

```sql
# UPDATE ___ SET ___ = ___ (WHERE ___) 
# UPDATE tableName SET columnName = columnValue WHERE clause

UPDATE movies
SET genre = 'Romance'
WHERE id = 5;

UPDATE movies
SET genre = 'Comedy', duration = 70 # update multiple values
WHERE id = 5;

UPDATE movies
SET genre = 'Romance'
WHERE id = 5 OR id = 7; # update multiple rows since id is unique
```

### Deleting data
- `DELETE` is the keyword
- `WHERE` can be used for further refining the statement
- If you don't mention a `WHERE` clause, it'll delete all data from the table

```sql
# DELETE FROM ___ (WHERE ___)
# DELETE FROM tableName (WHERE clause)

DELETE FROM movies
WHERE id = 5;

DELETE FROM movies
WHERE duration < 100;
```

## Managing databases
- `CREATE DATABASE` and `CREATE TABLE` are the self-explanatory keyword for creating databases and tables
- `DROP DATABASE` is when you want to remove a database (i.e. _drop it_)
- Dropping databases is irreversible

```sql
# CREATE DATABASE ___;
CREATE DATABASE Chaplin Theaters;

# DROP DATABASE ___;
DROP DATABASE Chaplin Theaters;

# CREATE TABLE ___ ( columnName dataType, columnNamedataType)
CREATE TABLE movies
( 
id int, 
title varchar(320),
genre varchar(160),
duration int
);

# DROP TABLE ___;
DROP TABLE movies;
```

### Manipulating tables
- When you want to add/remove columns to/from a table, you use the `ALTER TABLE` keyword in conjunction with `ADD COLUMN` and `DROP COLUMN`

```sql
# ALTER TABLE ___ ADD COLUMN ___ ___;
ALTER TABLE movies
ADD COLUMN ratings int;

# ALTER TABLE ___ DROP COLUMN ___;
ALTER TABLE movies
DROP COLUMN ratings;
```

Links
---
- [CodeSchool: Try SQL](http://campus.codeschool.com/courses/try-sql/) free video course with code challenges (less than 3 hrs approx for the entire course, Took me 1 hour per Level while i was also taking notes)