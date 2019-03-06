---
title: "[scp] Secure Copy"
subtitle: Transfer files between servers with scp
slug: scp-secure-copy
category: Commands
date: 2015-11-25
lastmod: 2016-02-11
---

NOTE: Use `rsync` instead of `scp`. `rsync` is faster and can give you the ability to see progress and pause/resume downloads with the `-P` flag.

Basic syntax is this:

    scp fileToCopy user@remoteServer:Location

## SCP using port number:
use the `-P` (capital P) flag for port. `-p` (small p) is reserved for rsync time.

     scp -P 2200 /file-to-copy user@server.com:/location-to-copy-to

## Passing an authentication key:

    scp -P 2200 -i ~/.ssh/rsa_key /file-to-copy user@server.com:/location-to-copy-to

If you have saved ssh keys already and there is only one key for the server you are copying to, scp much like ssh will automatically pick up the key and you will not have to pass the -i argument. You will still have to specify the port you are using though if it is anything other than 22.

## Passing options for ssh:

    scp -P 2200 -i ~/.ssh/rsa_key  /file-to-copy user@server.com:/location-to-copy-to

### Working Example:

    scp -P2200 -i ~/.ssh/kh /Users/aamnah/Dropbox/backup-7.14.2013_06-03-28_noor.tar.gz root@server9.hostmarkaz.com:~/

you can pass all ssh options to scp as well.

Resources
---
- http://www.hypexr.org/linux_scp_help.php
