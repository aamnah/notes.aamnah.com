---
title: Tips for Querying a MySQL Database
slug: querying-selecting-showing-data-from-mysql-database-tips
tags: ['basics', 'database', 'mysql', 'how-to']
date: 2015-02-20
---

Sort result ORDER based on frequency
---

Here is a nifty way of influencing the ORDER of rows returned by a query that helps in displaying a list with frequently accessed items at the top.

An example is a name/address form where the country is a selectable list. If most of your users are from the UK and US you may want to do something like:

```sql
SELECT * FROM countries ORDER by iso_code IN ('UK', 'US') desc
```

Which returns something like:

    +----------+----------------------------------------+
    | iso_code | name                                   |
    +----------+----------------------------------------+
    | UK       | United Kingdom                         |
    | US       | United States                          |
    | AF       | Afghanistan                            |
    | AL       | Albania                                |
    | DZ       | Algeria                                |
    | AS       | American Samoa                         |

Tip from [Imran](mailto:megazoid@hotmail.com)

I found that if you also add in another 'iso_code' column in the order by statment after the first one containing the IN() statment, it will sort the remaining records:

```sql
SELECT * FROM countries ORDER by iso_code IN ('UK', 'US') desc, iso_code
```

Tip from [Gregory](http://dev.mysql.com/doc/refman/5.6/en/select.html)

Check for NULL when anti-matching (NOT LIKE)
---
In order to anti-match fields by wildcards, one has to check whether the value of the field is not NULL:

For example: The table 'runs' contains 34876 rows. 205 rows have an 'info' field containing the string 'wrong'.

To select those rows for which the 'info' column does *NOT* contain the word 'wrong' one has to do:

    ```sql
    mysql> select count(*) FROM runs WHERE info is NULL or info not like '%wrong%';
    ```

which will result

    +----------+
    | count(*) |
    +----------+
    |    34671 |
    +----------+

but not:

```sql    
mysql> select count(*) FROM runs WHERE info NOT LIKE %wrong%';
```

resulting with

    +----------+
    | count(*) |
    +----------+
    |     5537 |
    +----------+

which would lead to a much smaller number of selected rows.

Tip from [MySQL Docs: SELECT](http://dev.mysql.com/doc/refman/5.6/en/select.html)

Use Parantheses **( )** when combining complex statements
---

I discovered a well placed parentheses can make a difference in output. This Query search at least three columns for data like the $query variable.

Example 1: (This doesn't work)

```sql
$query = "Whatever text";

$sql2 = "SELECT * FROM $tbl_name WHERE CompanyName LIKE '%". $query ."%' OR description LIKE '%". $query ."%' OR KeywordTags LIKE '%". $query ."%' AND Active='yes' AND State=Florida ";
```

Example 2: (Works for Me)

Notice the parentheses enclosing the `WHERE` section of the query separating it from the final `AND` Section.

```sql
$sql2 = "SELECT * FROM $tbl_name WHERE (CompanyName LIKE '%". $query ."%' OR description LIKE '%". $query ."%' OR KeywordTags LIKE '%". $query ."%' AND Active='yes') AND State=Florida ";
```

Tip from [Elliot](http://www.sioure.com)

