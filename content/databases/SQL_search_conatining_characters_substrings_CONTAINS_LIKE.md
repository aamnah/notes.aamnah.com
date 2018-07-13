---
title: Search for characters in SQL with LIKE and CONTAIN
date: 2017-11-30
category: Databases
---

- You have two options: `LIKE` and `CONTAINS()`. `CONTAINS()` is supposed to be more performant
- `LIKE`, if it starts with a wildcard, will require a full table scan
- `%` and `_` are wildcards for the `LIKE` operator. `%` represents zero, one or multiple characters. `_` represents a single character (e.g. `%ish` will represent everything that ends in *ish* like *Lavish*, *McTavish* and so on)
- `*` is a wildcard in `CASE` statements. e.g. `*test*` will find words like *testing* and *greatest* as well.
- `CONTAINS` is not a standard SQL function. The implementation varies across servers and the required arguments vary as well. 
- In MySQL, CONTAINS does not work on ordinary strings (it was developed as an implementation of the OpenGIS framework and only works when dealing with spatial data, whatever that means).

### LIKE operator

```sql
SELECT * FROM table WHERE Column LIKE 'test'; -- test
SELECT * FROM table WHERE Column LIKE 'test%'; -- test, testing, tested ..
SELECT * FROM table WHERE Column LIKE '%test'; -- test, greatest, latest ..
SELECT * FROM table WHERE Column LIKE '%test%'; -- test, greatest, latest, testing, tested ..

SELECT * FROM table WHERE Column LIKE '_r%' -- Finds any values that have "r" in the second position e.g. Orphan
SELECT * FROM table WHERE Column LIKE 'a_%_%'	-- Finds any values that starts with "a" and are at least 3 characters in length
SELECT * FROM table WHERE Column LIKE 'a%o'	-- Finds any values that starts with "a" and ends with "o"
```

### CONTAINS() function

```sql
-- SELECT columnName FROM yourTable WHERE CONTAINS (columnName, ‘yourSubstring’);
SELECT * FROM table WHERE CONTAINS(column, 'test'); -- test
SELECT * FROM table WHERE CONTAINS(column, 'test*'); -- test, testing, tested ..
SELECT * FROM table WHERE CONTAINS(column, '*test'); -- test, greatest, latest ..
SELECT * FROM table WHERE CONTAINS(column, '*test*'); -- test, greatest, latest, testing, tested ..

-- search for multiple substrings (AND, OR)
SELECT DocID, DocSummary FROM production.documents WHERE CONTAINS (DocSummary, ‘”replacing” OR “pedals”’);
```

### Searching for multiple words/substrings

If you need all words to be present, use `OR`

```sql
SELECT * FROM table
WHERE column LIKE '%word1%'
   OR column LIKE '%word2%'
   OR column LIKE '%word3%'
```


If you need all words to be present, use `AND`

```sql
SELECT * FROM table
WHERE column LIKE '%word1%'
  AND column LIKE '%word2%'
  AND column LIKE '%word3%'
```

Links
---
- [StackOverflow: LIKE vs CONTAINS on SQL Server](https://stackoverflow.com/questions/7510646/like-vs-contains-on-sql-server)
- [StackOverflow: SQL search for containing terms](https://stackoverflow.com/questions/2691917/sql-search-for-containing-terms)
- [w3schools: SQL Wildcard Characters](https://www.w3schools.com/sql/sql_wildcards.asp)
- [StackOverflow: SQL SELECT WHERE field contains words](https://stackoverflow.com/questions/14290857/sql-select-where-field-contains-words)
- [Udemy Blog: Search Your Database with the CONTAINS SQL Function](https://blog.udemy.com/sql-contains/)