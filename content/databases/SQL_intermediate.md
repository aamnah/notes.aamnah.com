---
title: Intermediate SQL
date: 2017-11-18
---

> In database management an **aggregate function** is a function where the values of multiple rows are grouped together to form a single value of more significant meaning or measurement such as a set, a bag or a list.
> [Wikipedia](https://en.wikipedia.org/wiki/Aggregate_function)

## Common Aggregate Functions
- `count()` returns total number of rows that match our search
- `sum()` returns added sum of values for a group of rows
- `avg()` returns calculated average value for a group of rows
- `max()` returns largest value in a group of rows
- `min()` returns smallest value in a group of rows
- `sum()`, `average()`, `max()`, `min()` only work if the values are numbers (numeric values)
- `count()` doesn't count null values
- `count( * )` will count all the rows, regardless of the null values



```sql
SELECT count( * ) FROM movies; # count all rows in movies database

SELECT count( title ) FROM movies; # count all rows in title column, which are not `null`

SELECT sum( cost ) FROM movies; # product cost for all movies

SELECT avg( tickets ) FROM movies;  # average ticket cost

SELECT max( tickets ) FROM movies; # most popular movie, by determining the max amount of tickets sold

SELECT min( tickets ) FROM movies; # least popular movie, by determining the max amount of tickets sold

SELECT max( tickets ), min( tickets ) FROM movies; # multiple functions = multiple values
```

### Grouping results
- `GROUP BY` groups results by column values

```sql
# SELECT ___, aggregateFunction( ___ ) FROM ___ GROUP BY ___
# SELECT columnName, aggregateFunction( columnName ) FROM tableName GROUP BY columnName

SELECT genre, sum(cost)
FROM movies
GROUP BY genre # returns lists of all genres & sum total of costs for each of them
```

### Grouping with conditions

- `HAVING` is the keyword for inclusion, show results only if they have met the condition
- `HAVNIG` works in conjunction with an aggregate function

```sql
# SELECT ___, aggregateFunction( ___ ) 
# FROM ___ 
# GROUP BY ___ 
# HAVING aggregate_functino(___) operator value;

# SELECT columnName, aggregateFunction( columnName ) FROM tableName GROUP BY columnName HAVING aggregate_functino(columnName) operator value;

SELECT genre, sum(cost)
FROM movies
GROUP BY genre 
HAVING count(*) > 1 # returns lists of all genres (grouped) & sum total of costs for each of them, only if there are more than one row
```

- You can add  a `WHERE` clause before `GROUP BY` to further refine your query


## Constraints
Constraints are meant to avoid addition of bad or unwanted data. They provide additional validation

- `NOT NULL` prevents NULL values
- `UNIQUE` Ensures column values are unique (prevents duplicates)
- `PRIMARY KEY` unique identifiers (both UNIQUE and NOT NULL). Can only be assigned **once** per table (i.e. you can not have more than one primary key column).
- `PRIMARY KEY` can only be defined on only one column (once per table) while `UNIQUE` and `NOT NULL` can be used on multiple columns

### Column constraints syntax

```sql
CREATE TABLE Promotions
(
id int PRIMARY KEY, # name must be NOT NULL, must be UNIQUE
name varchar(150) NOT NULL, # name can not be null
category varchar(15)
);


CREATE TABLE Promotions
(
id int PRIMARY KEY,
name varchar(150) NOT NULL UNIQUE, # name can't be null, or the same as another value already in column
category varchar(15)
);
``` 

```
ERROR: duplicate key value violates unique constraint "promotions_name_key"
DETAIL:  Key (name)=(Matinee) already exists.
```

### Table constraints syntax

You can _define_ your constraints (i.e. assign it a name). Makes it easy to edit them later. Also, you get the constraint name in the error message instead of the key value

```sql
CREATE TABLE Promotions
(
id int PRIMARY KEY,
name varchar(150) NOT NULL, 
category varchar(15)

CONSTRAINT unique_name UNIQUE (name) # unique_name is what we assigned for our custom constraint name
);

CREATE TABLE Promotions
(
id int PRIMARY KEY,
name varchar(150) NOT NULL, 
category varchar(15)

CONSTRAINT unique_name UNIQUE (name, category) # constraint on multiple columns
);
``` 

```
ERROR: duplicate key value violates unique constraint "unique_name"
DETAIL:  Key (name)=(Matinee) already exists.
```

## Value Constraints

With value constraints you create references between two tables. 

Naming convention for these is to singularize the table you are referencing, followed by an underscore and the column name (e.g. `country_id`, `movie_id`, `customer_id`)

### Foreign Key
- A foreign key is a column in one table that references the primary key column of another table
- A `movie_id` column is a foreign key referencing the `id` primary key column in the `Movies` table

```sql
# find out movie id
SELECT id
FROM movies
WHERE title = "Gone With The Wind"; # assume it returns 2

# use that movie id to find out promotions
SELECT name, category
FROM Promotions
WHERE movie_id = 2;
```

- To avoid overriding referenced columns (e.g. adding values to a foreign key column will add the value, but it wouldn't give you any referenced data because there is no reference, you just added the value directly in this table, not the referenced one), you use a `REFERENCES` constraint
- You can only reference (i.e. create a constraint) an existing table

```sql
movie_id int REFERENCES movies(id)
```

```sql
# table being referenced must be created first (should be existing)
CREATE TABLE Movies
(
  id int PRIMARY KEY,
  title varchar(120) NOT NULL UNIQUE
);


CREATE TABLE Promotions
(
  id int PRIMARY KEY,
  movie_id int REFERENCES movies(id),
  name varchar(50),
  category varchar(15)
);


CREATE TABLE Promotions # same as above
(
  id int PRIMARY KEY,
  movie_id int REFERENCES movies, # primary key column is used by default
  name varchar(50),
  category varchar(15)
);


CREATE TABLE Promotions # same as above, different syntax
(
  id int PRIMARY KEY,
  movie_id int,
  name varchar(50),
  category varchar(15),
  FOREIGN KEY (movie_id) REFERENCES movies
);
```

Once you have a foreign key constraint in place, it'll give you an error if you try to reference a foreign key value that doesn't exist

```sql
INSERT INTO Promotions (id, movie_id, name, category)
VALUES (4, 999, 'Fake Promotion, 'Hoax');
```

```
ERROR: insert or update on table "promotions" violates foreign key constraint "promotions_movie_id fkey"
DETAIL: Key (movie_id)=(999) is not present in table "movies".
```

### Orphan records
(Child) records with a foreign key reference to a (parent) record that has been deleted

- Orphan records are records with foreign key references where the foreign records have since been deleted. For example, you were referencing `movie_id` 11 in your Promotions table, but the movie has been deleted.
- This could happen when you delete the referenced row or just drop the referenced table
- Orphan records = bad data
- The solution is a **foreign key constraint**

```sql
DELETE FROM Movies WHERE id = 6;
```

```
ERROR: update or delete on table "movies" violates foreign key constraint "promotions_movie_id_fkey" on table "promotions"
DETAIL: Key (id)=(6) is still being referenced from table "promotions". 
```

```sql
DROP TABLE Movies;
```

```
ERROR: can not drop table movies because other objects depend on it
DETAIL: constraint promotions_movie_id_fkey on table promotions depends on table movies
```

If you delete both the Movie and Promotions, you'll get no errors. Basically, you'll delete all referenced/associated  records first and then delete the thing you wanted to delete

```sql
DELETE FROM Promotions WHERE movie_id = 6;
DELETE FROM Movies WHERE id = 6;
```

Same goes for dropping tables. First, drop any tables that are making references to the table you want to delete, and then delete the actual table

```sql
DROP TABLE Promotions;
DROP TABLE Movies;
```

### Validating input values
For example, let's say you want to make sure people are not entering negative values

```sql
CREATE TABLE Movies
(
  id int PRIMARY KEY,
  title varchar(120) NOT NULL UNIQUE,
  genre varchar(120),
  duration int CHECK (duration > 0) # validate input for this column
);
```

```sql
INSERT INTO Movies (id, title, genre, duration)
VALUES (7, 'Intouchables', 'Drama', -10);
```

```
ERROR: new row for relation "movies" violates check constraint "movies_duration_check"
DETAIL: Failing row contains (7, 'Intouchables', 'Drama', -10 )
```
 
Links
---
- [CodeSchool: The Sequel to SQL](https://www.codeschool.com/courses/the-sequel-to-sql)