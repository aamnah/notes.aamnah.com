---
title: "Use rsync to mirror websites"
date: 2017-09-06T09:22:43+05:00
categories: ["System Administration"]
tags: ["backups", "commands"]
---

tl;dr
---


```bash
apt update && apt install rsync

#Access via remote shell:
#  Pull: rsync [OPTION...] [USER@]HOST:SRC... [DEST]
#  Push: rsync [OPTION...] SRC... [USER@]HOST:DEST

# Pull: sync remote with local
rsync -vhaze ssh user@server.example.com:/var/www/ /var/www 
rsync -vhaze "ssh -p 1234 -i /root/.ssh/id_rsa" root@server.example.com:/var/www/cakebox.me/public_html/ /var/www/cakebox.me/public_html
rsync -qaze "ssh -p 1234 -i /root/.ssh/id_rsa" root@server.example.com:/etc/letsencrypt/archive :/etc/letsencrypt/live :/etc/letsencrypt/renewal /etc/letsencrypt/
```

```
-v, --verbose               increase verbosity
-h, --human-readable        output numbers in a human-readable format
-q, --quiet                 suppress non-error messages
-a, --archive               archive mode; equals -rlptgoD (no -H,-A,-X)
-z, --compress              compress file data during the transfer
-e, --rsh=COMMAND           specify the remote shell to use 
```

- [explainshell][explainshell] for the rsync command. 
- `-e` is basically the shell to use, e.g. `ssh -p 2234 -i /user/.ssh/id_rsa`, followed by the command
- `-a` is used for preservation (ownership, permissions, soft links etc.)
- You can specify custom SSH port and SSH key to use for the connection. The path for the key file needs to be absolute, `~` will not expand, so you have to use `/userhome`
- Make sure which way you're syncing. If note sure, you could end up overwriting imprtant files. For example config files with database connection details for example, this has happened.
- An easy way to determine which way you are syncing is the `-e` flag. `-e` determines the remote shell, so if you're using the option, you're pulling, i.e. syncing remote changes to local. 
- `-e` can not be used when you're syncing local changes to remote

---

Create an _unprivileged_ user for the sake of transferring files

```bash
useradd -d /home/rsyncuser -m -s /bin/bash rsyncuser
passwd rsyncuser
```

Create and copy an SSH key for password-less access

```bash
# Generate, copy and connect with an SSH key
ssh-keygen -t rsa 
ssh-copy-id -i /home/
rsyncuser/.ssh/id_rsa.pub rsyncuser@webserver.example.com
ssh rsyncuser@webserver.example.com
```

Create a cronjob to automate the whole thing
 
```bash
crontab –e
*/5 *  *  * * rsync -vhaze "ssh -p 1234 -i /root/.ssh/id_rsa" root@server.example.com:/var/www/cakebox.me/public_html/ /var/www/cakebox.me/public_html

```

Links
---

- [How to Sync Two Apache Web Servers/Websites Using Rsync](https://www.tecmint.com/sync-two-apache-websites-using-rsync/)
- [Mirror Your Web Site With rsync ](https://www.howtoforge.com/mirroring_with_rsync)

[explainshell]: https://explainshell.com/explain?cmd=rsync+-avzhe+ssh+tecmint%40webserver.example.com%3A%2Fvar%2Fwww%2F+%2Fvar%2Fwww