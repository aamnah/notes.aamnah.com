---
title: Configure SFTP
permalink: sftp-install-configure
ctime: 2016-03-08
mtime: 2016-08-09
---

- The `ChrootDirectory` must be owned by root. You can enable access to dirs inside the `ChrootDirectory` owned by differet users
- The `ChrootDirectory` needs `755` permissions
- Add everything to the END OF THE FILE. Or else it won't work
- Web directories `/var/www` need to be owned by `www-data`

## Setup [link][2]
Step 1 : Install OpenSSH package if not installed

```bash
sudo apt-get install openssh-server
```

Step 2 : Create separate group for SFTP users.

```bash
sudo addgroup ftpaccess
```

Step 3 : Edit `/etc/ssh/sshd_config` file and make changes as below. Find and comment below line.

```bash
#Subsystem sftp /usr/lib/openssh/sftp-server
```
and add these lines to the end of the file.

```bash
Subsystem sftp internal-sftp

Match Group ftpaccess
    ChrootDirectory /var/www
    AllowTCPForwarding no
    X11Forwarding no
    ForceCommand internal-sftp
```

Step 4 : Restart sshd service.

```bash
sudo service ssh restart
```

Step 5 : Add user with ftpaccess group and create password.

```bash
sudo adduser paul --ingroup ftpaccess --shell /usr/sbin/nologin
```

OR

```bash
sudo useradd -m paul -g ftpaccess -s /usr/sbin/nologin
```

Step 6 : Modify home directory permission.

```bash
sudo chown root:root /home/paul
```

Step 7 : Create a directory inside home for upload and modify permission with group.

```bash
sudo mkdir /home/paul/www
sudo chown paul:ftpaccess /home/paul/www
```

## Chroot Directory
`ChrootDirectory` is an `sshd_config` option. This can be used to "jail" users into a limited view of the filesystem, such as their home directory, rather than letting them see the full filesystem.

## Restricted Access [link][3]
To set up a restricted sftp server one should use the `ForceCommand` and `ChrootDirectory` directives in `sshd_config`. Presumably most people will not want to restrict every user, so they should also use the `Match` directive to select a user or group to apply the restrictions to. For example:

### User

```bash
Match user jimbo
    ForceCommand internal-sftp
    ChrootDirectory /chroot
```

This will cause the user 'jimbo' to be chrooted to the "/chroot" directory at login. The user will not be able to login interactively, or run arbitrary commands - the login will only be useful for sftp transfers. Note that the user's home directory may exist under the "/chroot" directory above (e.g. "/chroot/home/djm") and sshd will try to chdir to it before starting to serve files, but it doesn't matter if it does not exist.

```bash
Subsystem sftp internal-sftp

Match User paul
    ChrootDirectory /home/paul
    ForceCommand internal-sftp
    AllowTCPForwarding no
    X11Forwarding no
```

You can also match a certain group, like `Match group webmaster`.

If you do login via SSH to paul's sftp account though, it'll give an error that no such file or dir exists and 

### Group

```bash
Subsystem sftp internal-sftp

Match Group sftp-only
        AllowTCPForwarding no
        X11Forwarding no
        ForceCommand internal-sftp
```



## Ownership [link][4]


```bash
sudo chown root /home/paul
sudo chmod go-w /home/paul
sudo mkdir /home/paul/writeable
sudo chown paul:sftponly /home/paul/writeable
sudo chmod ug+rwX /home/paul/writeable
```



[1]: https://en.wikibooks.org/wiki/OpenSSH/Cookbook/SFTP "OpenSSH/Cookbook/SFTP"
[2]: http://askubuntu.com/questions/420652/how-to-setup-a-restricted-sftp-server-on-ubuntu "How to setup a restricted SFTP server on Ubuntu?"
[3]: http://undeadly.org/cgi?action=article&sid=20080220110039 "Chroot in OpenSSH"
[4]: http://askubuntu.com/questions/134425/how-can-i-chroot-sftp-only-ssh-users-into-their-homes "How can I chroot sftp-only SSH users into their homes?"
[5]: http://www.krizna.com/ubuntu/setup-ftp-server-on-ubuntu-14-04-vsftpd/ "How to setup FTP server on ubuntu 14.04 ( VSFTPD )"
[6]: https://www.debian-administration.org/article/590/OpenSSH_SFTP_chroot_with_ChrootDirectory "OpenSSH SFTP chroot() with ChrootDirectory"
[7]: http://www.thegeekstuff.com/2012/03/chroot-sftp-setup/ "How to Setup Chroot SFTP in Linux (Allow Only SFTP, not SSH)"
[8]: http://serverfault.com/questions/617081/how-to-use-both-allowgroups-and-allowusers-in-sshd-config "how to use both AllowGroups and AllowUsers in sshd_config"

## Troubleshooting

### Permission denied

add user "demo" to group "www-data" (below replace demo with your username)

```bash
sudo usermod -a -G www-data demo
```

set permissions for user group www-data

```bash
sudo chgrp -R www-data /var/www/html
```

followed by

```bash
sudo chmod -R g+w /var/www/html
```

Now you can modify files as "demo" via SFTP and your wordpress installation can modify files without requesting credentials


###	Server unexpectedly closed network connection
- `chmod 755` the Chroot directory. 

> OpenSSH server may fail to start shell when chroot is configured, but not possible (e.g. due to group writeable permissions to chroot directory)
> Some environments require specific permissions (e.g. `755`) to files like `.profile` or `.bashrc`

### Connection refused
- If you are getting connection refused error at end then make sure that `Subsystem sftp internal-sftp` is placed _after_ `UsePAM yes`. If not then update and restart SSH

Links
---

- http://askubuntu.com/questions/280894/changing-write-permissions-for-jailed-sftp-denies-login
- https://www.digitalocean.com/community/questions/why-doesn-t-chown-r-root-www-data-work-on-my-wordpress-installation

- [Server unexpectedly closed network connection](https://winscp.net/eng/docs/message_unexpected_close)