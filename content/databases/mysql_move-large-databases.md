---
title: Nottes on Moving up large databases
date: 2019-03-06
---

## NOTES

- by default, when you do a `mysqldump`, it locks the tables. You can change that by passing `--lock-tables=false` as a parameter.
- take differential backups every day and full backups every week.
- don't have to sit and look at the Terminal screen and wait and wait.. Write a script, run it wth `cron`
- 36.56 GB database took 21 minues to backup, without any `gzip` compression.. You can use the `time` command to find out how long it took. The backup file was 21GB in size. 
- 20.62 GB database took 12 minutes to backup, without any compression. Resulting file was 11 GB in size
- use `rsync` instead of `scp`. `scp` gets stalled. `rsync` copies faster. use the `-P` flag to see progress and the ability to pause/resume file transfers
- the server where these tests were done had the following specs: 2GB RAM, 2 vCPUs, 160GB HDD, 10MBps network link


### Sizes

| Database Size | Backup Size (.sql) | Compressed Size (.sql.gz) |
|---------------|--------------------|---------------------------|
| 36.56 GB      | 21 GB              | 4.0 GB                    |
| 20.62 GB      | 11 GB              | 2.4 GB                    |


### Creating the backups

```bash
# 36.56 GB input > 21 GB output file
time mysqldump -uroot -p --databases foo > bak_foo.sql
Enter password:

real    21m3.347s
user    5m21.110s
sys     1m26.830s
```

```bash
# 20.62 GB input > 11 GB output file
time mysqldump -uroot -p bar > bak_bar.sql
Enter password:

real    12m40.238s
user    2m36.310s
sys     0m37.380s
```

### Compressng the backups

- Using `gzip` compresses the original file. Meaning it won't say the compressed backup `.sql.gz` as a separate file and you lose the original `.sql` file.

```bash
# 11 GB input file >  2.4 GB
time gzip -9 bak_bar.sql

real    20m30.855s
user    17m8.170s
sys     0m14.760s
```

- Compressing a 36GB `.sql` file resulted in a 4GB `.sql.gz` file

### Uncompressing the backups

- 2.4 GB took 2.4 minutes to extract. (An average of 1 GB per minute).
- Uncompressing the backup gets rid of the original `.sql.gz` file.

```bash
time gunzip bar.sql.gz

real    2m4.765s
user    1m22.872s
sys     0m12.850s
```

### Importing the backups
The database you import should already exist. 

```sql
CREATE DATABASE foo;
```

```bash
# uncompressed .sql file
mysql -uroot -p DBNAME > BAKFILE.sql

# compressed .sql.gz file
pv mydump.sql.gz | gunzip | mysql -u root -p
```

`pv` lets you monitor the progress of data through a pipe, meaning you'll see a progress bar!

```
-- Open the console and start the interactive MySQL mode
USE <name_of_your_database>;
SOURCE <path_of_your_.sql>;
```


Links
---

- [What Are Full, Incremental, and Differential Backups?](https://www.percona.com/blog/2012/01/23/what-are-full-incremental-and-differential-backups/)