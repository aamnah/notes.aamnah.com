---
layout: post
title: Automated mysql backups with automysqlbackup
---

This how to will teach you how to take automated backups of all your MySQL databases and send them to Amazon S3.


What do i need?
---

#### Logins


  1. root login for the server (sudo is required to run automysqlbackup, root is req. to add to root user’s cron)

  2. admin login for the mysql server (to provide for backup config file)

  3. IAM access keys to use with s3cmd (to configure s3cmd)

sudo is required to run the AutoMySQLBackup script, so when adding the command to cron, you'd need to add it to the root user's cron (so that it runs successfully on set intervals without asking for a password). 


#### Tools


  1. [AutoMySQLBackup](http://sourceforge.net/projects/automysqlbackup/)

  2. [s3cmd](http://s3tools.org/repositories)

  3. SSH client (Terminal on Mac / [putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/) on Windows)



Installing S3cmd on Debian
---
Check the [Repos](http://s3tools.org/repositories) page for install on other systems.


  1. Import S3tools signing key: 
  `wget -O- -q http://s3tools.org/repo/deb-all/stable/s3tools.key | sudo apt-key add -`
  2. Add the repo to sources.list: 
  `sudo wget -O/etc/apt/sources.list.d/s3tools.list http://s3tools.org/repo/deb-all/stable/s3tools.list`
  3. Refresh package cache and install the newest s3cmd: 
  `sudo apt-get update && sudo apt-get install s3cmd`

Run `s3cmd --configure` to configure settings and add IAM access keys for Amazon S3.

Installing AutoMySQLBackup
---
Download and extract the latest tarball and run the install script.
1. Create a directory where you want to download and extract the AutoMySQLBackup file and move to that directory. 
`sudo mkdir /automysqlbackup && cd /automysqlbackup`
2. Download automysqlbackup (v3.0_rc6) to the server. (Check [Sourceforge](http://sourceforge.net/projects/automysqlbackup) for the latest version of AutoMySQLBackup. As of this writing v3.0_rc6 is the latest)
`wget http://kaz.dl.sourceforge.net/project/automysqlbackup/AutoMySQLBackup/AutoMySQLBackup%20VER%203.0/automysqlbackup-v3.0_rc6.tar.gz`

3. Extraxt the downloaded tarball `tar zxvf automysqlbackup-v3.0_rc6.tar.gz` 
4. Run the installer `./install.sh`

By default it will install the configuration files in `/etc/automysqlbackup` and the executable files in `/usr/local/bin`.

Configuring AutoMySQLBackup
---
Edit the `/etc/automysqlbackup/myserver.conf` file to customise your settings. 
The myserver.conf file is VERY well documented, all you have to do is read and it'll tell you what setting is supposed to do what and how you should configure it. You do not need to edit beyond the basics. What you generally edit are basic settings (username, passsword, host and backup directory), database settings (which ones to backups, which ones to not), rotation settings (when to backup), and notification settings (who and what to tell when a backup is complete).

```
# Basic Settings

CONFIG_mysql_dump_username='root'
CONFIG_mysql_dump_password='password'
CONFIG_mysql_dump_host='localhost'
CONFIG_mysql_dump_host_friendly='Main MySQL Server'
CONFIG_backup_dir='/backup/db'
```

```
# Databases to backup

# List of databases for Daily/Weekly Backup e.g. ( 'DB1' 'DB2' 'DB3' ... )
# set to (), i.e. empty, if you want to backup all databases
CONFIG_db_names=()

# List of databases for Monthly Backups.
# set to (), i.e. empty, if you want to backup all databases
CONFIG_db_month_names=()

# List of DBNAMES to EXLUCDE if DBNAMES is empty, i.e. ().
CONFIG_db_exclude=( 'information_schema' )
```


```
# Rotation Settings

# Which day do you want backups?
CONFIG_do_monthly="01"
CONFIG_do_weekly="5"

# Set rotation of daily backups.
CONFIG_rotation_daily=7
CONFIG_rotation_weekly=14
CONFIG_rotation_monthly=12
```
```

# Notification setup

# What would you like to be mailed to you?
# - log   : send only log file
# - files : send log file and sql files as attachments (see docs)
# - stdout : will simply output the log to the screen if run manually.
# - quiet : Only send logs if an error occurs to the MAILADDR.
CONFIG_mailcontent='log'

# Email Address to send mail to? (user@domain.com)
CONFIG_mail_address='hello@aamnah.com'
```

Adding AutoMySQLBackup to Cron
---
Edit crontab `sudo crontab -e` and add the following at the end.

```
# AutoMySQLbackup run command for backing up databases every day at 12:05am.
5 0 * * * sudo automysqlbackup /etc/automysqlbackup/myserver.conf

# Copy backed up databases to Amazon S3 via s3cmd, daily at 5am.
0 5 * * * sudo s3cmd -r sync /backup/location/ s3://location/
```

Creating an Alias
---
To run database backups and send them to S3 with one single word, make an alias for it. Edit your `.bash_profile` (or `.bashrc`) and add the following at the end:

	# backup databases and send them to S3
	alias backupdb='automysqlbackup /etc/automysqlbackup/myserver.conf && s3cmd sync -r /backup/location/ s3://location/'
    
Now that you have made an alias, every time you run `backupdb` in the terminal, it'll take database backups and send them to S3. Creating an alias is good for manually taking database backups as it saves you the effort of remembering and writing two different commands.
