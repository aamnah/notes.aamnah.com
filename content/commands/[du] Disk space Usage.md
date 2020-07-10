---
title: "[du] Disk Space Usage"
category: 
  - Commands
  - SysAdmin
date: 2015-11-21
lastmod: 2020-07-08

---

## Examples

### check how much space is taken by files of a certain type
Say you want to find out how much space in total the `.tar.gz` backup files are taking, you can do so with the following command. (note that it will not check subdirectories)

- `-h`, `--human-readable`  prints sizes in human readable format (e.g. 261M instead of 266692)
- The `-c` or `--total` size produces a grand total


```bash
# find out space taken by tarballs in current dir
du -h *.tar.gz
```
```
23M     aamnah.tar.gz
54M     clients.aamnah.tar.gz
261M    clients.hostmarkaz.tar.gz
113M	clients.ravihost.tar.gz
2.9M	ravihost.tar.gz
36K 	tldrdevnotes.tar.gz
```

```bash
# find out TOTAL space taken by all tarballs in current dir
du -ch *.tar.gz
```
```
23M     aamnah.tar.gz
54M     clients.aamnah.tar.gz
261M    clients.hostmarkaz.tar.gz
113M	clients.ravihost.tar.gz
2.9M	ravihost.tar.gz
36K 	tldrdevnotes.tar.gz
453M	total
```

### check space consumed and sort by size
    
[explainshell][1]

```bash
du --max-depth=1 | sort -n | awk 'BEGIN {OFMT = "%.0f"} {print $1/1024,"MB", $2}'
```

```
du: cannot access `./proc/18566/task/18566/fd/4': No such file or directory
du: cannot access `./proc/18566/task/18566/fdinfo/4': No such file or directory
du: cannot access `./proc/18566/fd/4': No such file or directory
du: cannot access `./proc/18566/fdinfo/4': No such file or directory
0 MB ./proc
0 MB ./sys
0 MB ./admin
0 MB ./media
0 MB ./mnt
0 MB ./selinux
0 MB ./srv
0 MB ./backup
0 MB ./dev
0 MB ./lost+found
0 MB ./tmp
4 MB ./root
8 MB ./bin
14 MB ./sbin
27 MB ./lib64
28 MB ./etc
38 MB ./opt
125 MB ./boot
557 MB ./lib
5533 MB ./usr
5929 MB ./home
15520 MB ./var
27784 MB .
```

### List top ten largest files/directories in current directory

```bash
du -cks *|sort -rn|head -11
```

you can add this as an alias to your `~/.bash_profile` for easy access later

```bash
alias ducks='du -cks *|sort -rn|head -11'
```

### Find the biggest in a folder
alias ds='du -ks *|sort -n'

```bash
du -ks *|sort -n
```

you can add this as an alias to your `~/.bash_profile` for easy access later

```bash
alias ds='du -ks *|sort -n'
```

## Common files that take up a lot of space

**TIP**: The `-S` flag for the `ls` command lists files sorted by size

#### outdated apt packages

You can remove outdate packages that were installed but are no longer required with `sudo apt autoremove -y`. This freed up 1.5Gb of storage for me

#### WordPress Diff
If on wordpress, delete diff files. `/wp-includes/Text/Diff/Engine/cache`. 

Diff is what keeps page revisons.

#### Trash
in cPanel, check trash folder: `/home/username/.trash`

#### cpmove
The cpmove files are left-overs by the cPanel transfer process. From what i understand, the cpamove file is the result of a full cPanel backup of an account. Once you're done with the transfers, you no longer need the cpmove files

1. Check for unwanted `cpmove/tar` files for the user accounts in /home and delete them.

2. Check for any `cpmove` folders as well in /home

3. Check the folder `cprestore` in `/home` for any tar files. Be careful. These should be deleted only if they are very old, say about 4-5 months.

4. Using find command you can check for unwanted tar files (especially `cpmove/backup`) in the entire home directory. Check their size. If you think that deleting them will make considerable difference to the disk space then delete them.

#### Old backups

Old backups in cPanel are usually stored in the user's home directory. When you create a full backup, it includes everything in the home dir. So if you have existing backups you inadvertently end up backing up with old backups inside, doubling the file size. 

It is recommended to delete all unnecessary old backups when creating a new one.

#### Log files
Log files usually end up taking hundreds of MBs. These include error logs as well as access logs. Some common paths/dirs for log files are:

  - /var/log/
  - /var/www/domain.com/logs


Links
---
- [StackOverflow: Measure disk space of certain file types in aggregate](https://stackoverflow.com/questions/1358920/measure-disk-space-of-certain-file-types-in-aggregate)
- [cPanel forum: Dealing with space issues](https://forums.cpanel.net/threads/dealing-with-space-issues.121433/)

[1]: http://explainshell.com/explain?cmd=++++du+--max-depth%3D1+%7C+sort+-n+%7C+awk+%27BEGIN+%7BOFMT+%3D+%22%25.0f%22%7D+%7Bprint+%241%2F1024%2C%22MB%22%2C+%242%7D%27
