---
title: Checking log files
subtitle: Common directories and programs used for checking log files
permalink: check-log-files
ctime: 2017-08-17
---

### Logs directory
The common directory for logs is `/var/log`. Programs tend to save their logs in their own subdirectories under `/var/log/`. For example:

- Apache: `/var/log/apache2`
- MySQL: `/var/log/mysql`

### Monitoring logs
#### Get n number of lines from the end of the file with `tail -n`
To check log files, `tail` is better than `cat`. `cat` will dump the whole log file to the console, good luck scrolling. `tail -20` will print only the last 20 lines of the file. 

Considering that you only really need to see the most recent changes in the logs, and that changes are usually at the end of the file, using`tail` makes absolute sense.

```bash
tail -20 foo.log # see last 20 lines of foo.log
```
#### Watch files with `tail -f`
`tail -f` will open the log file in the terminal, watch it, and update terminal output as changes are made. Consider this when you're figuring out an internal server error 500 for Apache, you can watch the file and make your changes for faster troubleshooting.

```bash
tail -f foo.log # watch foo.log for changes
tail --follow foo.log # -f and --follow are the same thing
```

#### See errors by line numbers with `cat -n`
`cat -n` prints file contents with line numbers. If you know the line number for the error (let's say 74), you can see it with `cat -n | grep 74`

```bash
cat -n foo.log | grep 74 # will output whatever is on line 74 of foo.log
```