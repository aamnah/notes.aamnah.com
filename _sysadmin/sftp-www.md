---
title: SFTP Users for Website directory
subtitle: Create an SFTP User/Group for /var/www
permalink: sftp-www
ctime: 2017-08-09
---

- The `ChrootDirectory` must be owned by root. You can enable access to dirs inside the `ChrootDirectory` owned by differet users
- The `ChrootDirectory` needs `755` permissions
- Add everything to the END OF THE FILE. Or else it won't work
- Web directories `/var/www` need to be owned by `www-data`

### What we'll do
- Create a Group for SFTP access
- Add our users to that SFTP Group

Here's what each of those directives do:

- `Match User` tells the SSH server to apply the following commands only to the user specified. 
- `ForceCommand internal-sftp` forces the SSH server to run the SFTP server upon login, disallowing shell access.
- `PasswordAuthentication yes` allows logging in with passowrd. (Just in case you're big on security and have it disabled because you use SSH keys..)
- `ChrootDirectory /var/sftp/` ensures that the user will not be allowed access to anything beyond the `/var/sftp` directory. You can learn more about chroot in this chroot tutorial.
- `AllowAgentForwarding no`, `AllowTcpForwarding no`. and `X11Forwarding no` disables port forwarding, tunneling and X11 forwarding for this user.


```bash
GROUP='sftpgrp'
USER='sftpuser'
USER_PASS='sftppass'
CHROOT='/var/www'

# create a group for SFTP access
sudo groupadd ${GROUP}

# add SFTP config for the group to SSH configuration file
echo -e "

Match Group ${GROUP}
	ChrootDirectory ${CHROOT} # limit access to this dir and it's subdirs (jailed access)
	ForceCommand internal-sftp # force run SFTP upon login
	PasswordAuthentication yes # allow logging in with passowrd
	PermitTunnel no # disable tun device (tunnel software network interface) forwarding
	X11Forwarding no # disable GUI over VNC
	AllowTcpForwarding no # disable tunneling
	AllowAgentForwarding no # disable port (ssh-agent) forwarding
" >> /etc/ssh/sshd_config

# create and add user to the SFTP Group
sudo useradd ${USER} -p ${USER_PASS} -g ${GROUP}
# add the user to www-data so it can rwx /var/www
sudo usermod -aG www-data ${USER}

# PERMISSIONS
# chroot dir has to be owned by root
sudo chown root:root ${CHROOT}
# chroot directory also needs 755 in order to avoid: Server unexpectedly closed network connection
sudo chmod 755 ${CHROOT}
# web directories have to be owned by www-data (assuming you're creating sftp users for websites)
sudo chown -R www-data:www-data /var/www/*

# chmod g+s forces new files and dirs to pick up the group owner (www-data), 
# making sure that permissions change propagates 
# (`-s` means set user or group ID on execution)
find /var/www -type d -print0 | sudo xargs -0 chmod g+s 

service ssh restart
```



Links
---
- [How To Enable SFTP Without Shell Access on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-enable-sftp-without-shell-access-on-ubuntu-16-04)
- [Granting a sftp user access to a /var/www directory](https://askubuntu.com/questions/143700/granting-a-sftp-user-access-to-a-var-www-directory)