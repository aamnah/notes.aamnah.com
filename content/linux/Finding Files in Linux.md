---
title: Finding Files in Linux
date: 2015-08-20
---

## Locate

#### Check if locate is installed

	which locate

If it is installed, it'll give you the path `/usr/bin/locate`

#### Install Locate

	yum install locate

OR

	apt-get install locate


#### Update Database

The locate command uses a database of file names and locations. That database is updated frequently via a system cron job.

	sudo updatedb

## Find

Find is verstile and powerful. We can search files based of the permissions a file has. We can find by modification date or how long ago the file was created. Regex can also be added. Search based on text inside a file..

	find /etc -name "motd"

will find files in the /etc directory where file name is "motd"

	find /etc -name "motd*"

will find files in the /etc directory where file name starts with 'motd'

By default, the `-name` flag is case sensitive. `-iname` will search by file name, case-insensitively.
