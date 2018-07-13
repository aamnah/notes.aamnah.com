---
title: Backups with tar
slug: backups-tar-linux
date: 2017-08-17
---

# tar

`tar` is an archiving utility, it creates and extracts (compressed) archives (aka tarballs).

```bash
tar -czpf foo.tar.gz sourceFiles file1 file2 # creates compressed archive
tar -xpf foo.tar.gz # extracts archive
tar -xpf foo.tar.gz -C dest/ # extracts archive in the `dest/` directory
```

- `c` or `--create`creates
- `x` or `--extract` extracts
- `z` or `--gzip`/`--gunzip` zip, compresses or uncompresses the archive with `gzip`
- `p` or `--preserve-permissions` preserves file and directory permissions
- `f` provide the File name (_foo.tar.gz_ in the above example)

- Compress your backups for faster transfer, less bandwidth usage, and less disk space usage (you will get charged for the disk space and bandwidth if you're transferring backups off-site, to a service like Amazon S3).
- Since backups are usually automated, you can skip `-v` for verbosity.

#### ownership
You can optionally preserve and restore file ownerships as well with the `-s`, `--preserve` `--same-owner` flags.

```
s
                             from the archive (default for ordinary users)
      --numeric-owner        always use numbers for user/group names
      --owner=NAME           force NAME as owner for added files
  -p, --preserve-permissions, --same-permissions
                             extract information about file permissions
                             (default for superuser)
      --preserve             same as both -p and -s
      --same-owner           try extracting files with the same ownership as
                             exists in the archive (default for superuser)
```

#### add backup dates

```bash
tar -czpf foo.'/bin/date + \%y%m\%d'.tar.gz
```

#### compression
- `bzip` is the best in terms of compression ration, but is very CPU and RAM intensive
- `gzip` has a decent compression ratio, and a decent resource usage

#### See what's inside a backup

You might want to for different reasons.. Let's say you want to find out what date the files inside a tarball were backed up/created

```bash
tar -tf foo.tar.gz # list the files in the tar archive
tar -tvf foo.tar # list all files in foo.tar verbosely (permissions, ownerships, file size, time)
tar --list -f foo.tar.gz # -t and --list are the same thing (equivalent of `tar -tf foo.tar.gz`)
```

```bash
# tar -tf foo.tar.gz
foo/
foo/file2.txt
foo/file3.txt
foo/file9.txt
foo/file4.txt
foo/file1.txt
foo/file5.txt
foo/file8.txt
foo/file7.txt
foo/file6.txt
```

```bash
# tar -tvf foo.tar.gz
drwxr-xr-x root/root         0 2017-08-17 06:48 foo/
-rw-r--r-- root/root         0 2017-08-17 06:45 foo/file2.txt
-rw-r--r-- root/root         0 2017-08-17 06:45 foo/file3.txt
-rw-r--r-- root/root         0 2017-08-17 06:45 foo/file9.txt
-rw-r--r-- root/root         0 2017-08-17 06:45 foo/file4.txt
-rw-r--r-- root/root         0 2017-08-17 06:48 foo/file1.txt
-rw-r--r-- root/root         0 2017-08-17 06:45 foo/file5.txt
-rw-r--r-- root/root         0 2017-08-17 06:45 foo/file8.txt
-rw-r--r-- root/root         0 2017-08-17 06:45 foo/file7.txt
-rw-r--r-- root/root         0 2017-08-17 06:45 foo/file6.txt
```

#### A bash script to automate the whole thing

Here's a script that i have used on one of my sites. It creates a file backup of a website in `/var/www` and saves it in a backups directory on the server. It also deletes backups older than 5 days, and can optionally sync backups to S3.

```bash
DIR='/backups'
TIMESTAMP=`date +%Y%b%d`
YEAR=`date +%Y`

# Create & Compress
echo "Backing up: foo.com"
tar -czpf ${DIR}/${TIMESTAMP}.foo.com.tar.gz /var/www/foo.com/public_html/

echo "Success: backup created"

# Delete old backups (older than 5 days)
echo "Deleting old backups.."
find ${DIR}/${YEAR}*.*.tar.gz -type f -lastmod +5 -delete
# -delete might not work on all systems
#find ${DIR}/${YEAR}*.*.tar.gz -type f -lastmod +5 -exec rm -f {} \;

# Sync to S3
# s3cmd sync /backups/ s3://s3.foo.com/
# echo "Success: backup synced with S3"
```
Links
---
- [Ermin Kreponic's Course for CentOS and Red Hat Linux - RHCSA](https://www.udemy.com/red-hat-linux-centos-rhcsa/)
	- [35. Backups, recovery, and compression in Linux part 1. Introduction and use.
	18:46]()
	- [36. Backups part 2. How to uncompress files and restore backed up files. 9:18](https://www.udemy.com/red-hat-linux-centos-rhcsa/learn/v4/t/lecture/3000094?start=0)
	- [37. Backups, recovery, and compression part 3. More about tar. 11:05](https://www.udemy.com/red-hat-linux-centos-rhcsa/learn/v4/t/lecture/3000100?start=0)
- [Shell Scripting: Discover How to Automate Command Line Tasks](https://www.udemy.com/shell-scripting-linux/)
