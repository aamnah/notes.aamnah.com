---
layout: post
title: Manipulating Schema with SQL
permalink: manipulating_schema_with_sql
status: published

---

If your database is connected to an app, you'd probably want to take that app offline or put into some maintenance mode so that any database changes you make don't effect the application.

Also, BACKUP before making any changes.

Altering Tables
---

| Keyword    | Meaning |
|------------|---------|
| `RENAME`   | Rename  |
| `DROP`     | Delete  |
| `TRUNCATE` | Empty   |

### Rename

    {% highlight mysql %}
    RENAME TABLE movies TO movie_table;
    {% endhighlight %}

You can also rename multiple tables in one go

    {% highlight mysql %}
    RENAME TABLE movies TO movie_table, actors TO actor_table;
    {% endhighlight %}



### Drop (Delete)

    {% highlight mysql %}
    DROP TABLE reviews;
    {% endhighlight %}

You can also use the `IF EXISTS` keyword (preferred)

    {% highlight mysql %}
    DROP TABLE IF EXISTS reviews;
    {% endhighlight %}    

The benefit of `IF EXISTS` is that it'll result in a warning instead of an error. The rest of the code will still run after a warning but not after an error.

### Empty (Truncate)

Truncate deletes a table and then creates a new empty table of the same name.

    {% highlight mysql %}
    TRUNCATE TABLE movie_table;
    {% endhighlight %}

The `TRUNCATE` keyword doesn't need to take the `TABLE` keyword after it. The following will work just fine.

    {% highlight mysql %}
    TRUNCATE movie_table;
    {% endhighlight %}

Altering Columns
---

| Keyword  | Meaning       |
|----------|---------------|
| `ADD`    | Add Column    |
| `CHANGE` | Rename Column |
| `DROP`   | Delete Column |

To make changes to a column, first you'll specify the table which contains the column with `ALTER TABLE table_name` and then you'll use the keyword `ADD`, `CHANGE`, or `DELETE` followed by column name and values.

### Add Columns `ADD COLUMN`

    {% highlight mysql %}
    ALTER TABLE movies ADD COLUMN genre VARCHAR(100);
    {% endhighlight %}

`COLUMN` is an optional keyword, only `ADD` will also work. Here's another example

    {% highlight mysql %}
    ALTER TABLE actors ADD (pob VARCHAR(100), dob DATE);
    {% endhighlight %}

### Rename Columns `CHANGE`

    {% highlight mysql %}
    ALTER TABLE table_name CHANGE column_current_name column_new_name data_type;
    {% endhighlight %}

    {% highlight mysql %}
    ALTER TABLE actors CHANGE pob place_of_birth VARCHAR(100);
    {% endhighlight %}

Unlike `ADD`, `CHANGE` can not take multiple columns. For every column name you want to change, you'll have to create a new statement.

    {% highlight mysql %}
    ALTER TABLE actors CHANGE pob place_of_birth VARCHAR(100);
    ALTER TABLE actors CHANGE dob date_of_birth DATE;
    {% endhighlight %}

### Change Data Type

    {% highlight mysql %}
    ALTER TABLE movies CHANGE year year_released YEAR;
    {% endhighlight %}

### Delete Column `DROP`

    {% highlight mysql %}
    ALTER TABLE actors DROP date_of_birth;
    {% endhighlight %}

### Determing a Column's place

You can determine where to add a column using the keywords `FIRST` and `AFTER`.

    
    {% highlight mysql %}
    ALTER TABLE movies ADD COLUMN name VARCHAR(150) FIRST;
    {% endhighlight %}

will add a column _name_ and add it as the `FIRST` column of the table. Similarly, the code below will add the column _name_ `AFTER` the column _id_

    {% highlight mysql %}
    ALTER TABLE movies ADD COLUMN name VARCHAR(150) AFTER id;
    {% endhighlight %}

Here is another example

    {% highlight mysql %}
    ALTER TABLE movies ADD COLUMN id INTEGER PRIMARY KEY AUTO_INCREMENT FIRST;
    {% endhighlight %}


Removing Databases
---

    {% highlight mysql %}
    DROP (DATABASE | SCHEMA) [IF EXISTS] db_name;
    {% endhighlight %}


Using `IF EXISTS` when dropping a database which doesn't exist will return in a warning instead of an error, meaning the subsequent SQL commands will still run. Using `IF EXISTS` will keep your script running and avoid errors.
