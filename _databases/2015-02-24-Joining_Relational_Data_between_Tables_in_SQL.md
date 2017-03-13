---
layout: post
title: Joining Relational Data between Tables in SQL
permalink: joining_relational_data_between_tables_in_sql

---

Keys and Auto-Incrementing Values
---

### PRIMARY keys (id)

Used to uniquely define each row in a table. It can't be duplicated, can't be null.

### UNIQUE keys (email_address, ssn)

Is similar to Primary keys but enforces uniqueness, can't be duplicated but can be null.

### FOREIGN keys (genre_id)

Special keys that describe the relationship between data in two in two tables. Also known as **reference keys** because they reference data from another table. These can be duplicated and can be null.

`AUTO-INCREMENT` increments the integer by 1 every time you insert a new row.

Let's create a genres table with a primary key as id and a unique key for name.

    {% highlight mysql %}
    CREATE TABLE genres (id INTEGER NOT NULL AUTO-INCREMENT PRIMARY, name VARCHAR(30) NOT NULL UNIQUE)
    {% endhighlight %}

By definition, `PRIMARY KEY` is always not null. But you can specify it for clarity.

Mentioning 'KEY' is optional. You can use `PRIMARY`, `UNIQUE` and `REFERNCE` instead of PRIMARY KEY, UNIQUE KEY, and REFERENCE KEY.

`UNIQUE`, `UNIQUE KEY`, and `UNIQUE INDEX` all mean the same thing.

The order of things in the statement is as follows:

    {% highlight mysql %}
    CREATE TABLE table_name (column_name data_type [NOT NULL | NULL] [DEFAULT default_value] [AUTO_INCREMENT] [UNIQUE|PRIMARY] [reference_definition]
    {% endhighlight %}

Let's add values to the _genres_ tables

    {% highlight mysql %}
    INSERT INTO genres (name) VALUES("Sci Fi");
    {% endhighlight %}

Since the _id_ will be auto-incremented, we don't need to specify it in our name. And because we set our genres _name_ column to be _unique_, we won't be able to add 'Sci Fi' again.


Linking data between tables
---
In the statement below, we want our _genre_id_ to be a foreign key, meaning it references a key from another table. 

    {% highlight mysql %}
    ALTER TABLE movies ADD COLUMN genre_id INTEGER NULL, ADD CONSTRAINT FOREIGN KEY (genre_id) REFERENCES genres(id);
    {% endhighlight %}

A `CONSTRAINT` means that only particular values can be entered in this column. You can add a **constraint** as a `FOREIGN` key.

    {% highlight mysql %}
    UPDATE movies SET genre_id = 1 WHERE id = 8 OR id = 9;
    {% endhighlight %}

References
---
[MySQL 5.1 Reference Manual](http://dev.mysql.com/doc/refman/5.1/en/create-table.html)