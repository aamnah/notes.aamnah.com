---
title: Finding slow MySQL queries
date: 2019-03-21
---

tl;dr

```sql
SELECT @@GLOBAL.slow_query_log, @@GLOBAL.long_query_time, @@GLOBAL.slow_query_log_file;
```

---

Check if logging is already on

By default the slow query log is disabled, it comes with a performance hit.

```sql
-- get all glbal variables
SHOW GLOBAL VARIABLES;

-- get values for specific variables
SHOW GLOBAL VARIABLES LIKE 'long_query_time';
-- or
SELECT @@GLOBAL.long_query_time;

-- get Slow Query related values 
SELECT @@GLOBAL.slow_query_log, @@GLOBAL.long_query_time, @@GLOBAL.slow_query_log_file;
```


From within `mysql`

```sql
-- Enable logging
SET GLOBAL slow_query_log = 'ON';

-- decide how many seconds determine a long query (X seconds)
SET GLOBAL long_query_time = X;

-- set log file path
SET GLOBAL slow_query_log_file = '/path/filename';
```

If you want queries longer than 10 seconds to be logged, you need to disable `log_queries_not_using_indexes`, which causes queries quicker than 10 seconds to be logged if they are not using an index for row lookups in the statements written to slow query log.

```sql
SELECT @@GLOBAL.log_queries_not_using_indexes;

SET GLOBAL log_queries_not_using_indexes = 'OFF';
```


Empty the log file

```bash
> hostname-slow.log
```

### GLOBAL vs SESSION
If you are not seeing any results, it could be that you updated the GLOBAL variables (that only apply when you reconnect) instead of SESSION variables (that are for current session)

```sql
SHOW SESSION VARIABLES LIKE "long_query_time";
SHOW GLOBAL VARIABLES LIKE "long_query_time";
SHOW VARIABLES LIKE "long_query_time";
```

### pt-query-digest

```bash
cd
curl -LO https://percona.com/get/pt-query-digest
chmod +x pt-query-digest
./pt-query-digest /var/lib/mysql/*-slow.log
```

```
# Query 15: 2.50 QPS, 0.00x concurrency, ID 0x9E26938B15493109AAFED97F2F8963F5 at byte 6309295
# This item is included in the report because it matches --limit.
# Scores: V/M = 0.00
# Time range: 2019-03-21 12:37:41 to 12:45:07
# Attribute    pct   total     min     max     avg     95%  stddev  median
# ============ === ======= ======= ======= ======= ======= ======= =======
# Count          8    1116
# Exec time      0      1s   927us     8ms     1ms     1ms   237us     1ms
# Lock time      0       0       0       0       0       0       0       0
# Rows sent     34  49.04k      45      45      45      45       0      45
# Rows examine   0 252.84k     232     232     232     232       0     232
# Rows affecte   0       0       0       0       0       0       0       0
# Bytes sent    24   3.28M   2.98k   3.02k   3.01k   2.89k       0   2.89k
# Query size     0  92.53k      83      86   84.90   84.10    1.50   84.10
# String:
# Databases    dating
# Hosts        10.0.113.11 (558/50%), 10.0.113.12 (558/50%)
# Last errno   0
# Users        fppuser
# Query_time distribution
#   1us
#  10us
# 100us  #
#   1ms  ################################################################
#  10ms
# 100ms
#    1s
#  10s+
call `dating`.`GetUserSelectedAttributes` (343297, 'USER_IDEAL', @_cnet_param_OPCount)\G
```

### mysqldumpslow
you can use the `mysqldumpslow` command to process a slow query log file and summarize its contents.

```bash
# use mysqldumpslow to sort the log file (prints to stdout by default)
mysqldumpslow -a -s t
```
Sort `-s` options: `-c` is count, `-t` is time, `-at` is avergae time (default), `-l` is lock time, `-al` is avg. lock time, `-r` is rows sent and `-ar` is avg. rows sent

`-r` will reverse any sort order that you specify.

NOTE: This disn't work for me, it'd just show all time values as `0.0`

Links
---

- [MySQL Refernce: 5.4.5 The Slow Query Log](https://dev.mysql.com/doc/refman/8.0/en/slow-query-log.html)
- [MySQL Performance: Identifying Long Queries](https://www.liquidweb.com/kb/mysql-performance-identifying-long-queries/)
- [How to enable the slow query log in MySQL](https://www.a2hosting.com/kb/developer-corner/mysql/enabling-the-slow-query-log-in-mysql)
- [5 Ways to Empty or Delete a Large File Content in Linux](https://www.tecmint.com/empty-delete-file-content-linux/)
- [MySQL Refernce: 13.7.6.39 SHOW VARIABLES Syntax](https://dev.mysql.com/doc/refman/8.0/en/show-variables.html)
- [MySQL Refernce: 5.1.8 Server System Variables](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html)
- [4.6.9 mysqldumpslow — Summarize Slow Query Log Files](https://dev.mysql.com/doc/refman/8.0/en/mysqldumpslow.html)
- [Analyzing a MySQL slow query log with pt-query-digest](https://www.jeffgeerling.com/blog/2018/analyzing-mysql-slow-query-log-pt-query-digest)
- [long_query_time not working](https://www.percona.com/forums/questions-discussions/mysql-and-percona-server/24075-long_query_time-not-working?p=24100#post24100)
- [StackOverflow: Why I could not alter the variable long_query_time variable at runtime](https://stackoverflow.com/a/15541785)