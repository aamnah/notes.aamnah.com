---
layout: post
title: Linux - Basic User Management
permalink: linux_basic_user__management
categories: linux
tags: cli,
---

### Cheatsheet

|command|meaning|
|-|-|
| whoami | show which user is logged in |
| passwd | change password of current user |
| passwd jane | change Jane's password |
| su | become **s**uper**u**ser / change user to root |
| su jane | change user to jane |
|sudo | superuser do = do it as a superuser |
| adduser james | add a user named 'james' |
| deluser james | delete the user 'james' |
| passwd -l jane | lock jane's password |
| passwd --lock jane | lock jane's password |

#### `whoami`
shows which user is logged in

#### `passwd` 
change the password for the current user. `passwd jane` = Change Jane's password

#### `su` 
**S**uper**U**ser. login to a different user, for example `su jalal` = login to jalal's account. only `su` without a username provided will change to root user by default.

#### `su root`
login to a different user, in this case root. `su` and `su root` will both do the same thing.

#### `adduser`
add a user. for example, `adduser jane` will add a user called jane. You need root/sudo access/permissions to cerate or delete a user.

#### `userdel` 
delete a user. for example: `userdel jalal` will delete the user named jalal. Use the `-r` flag to delete the user BUT keep the user's directory/files. For example: `userdel -r jalal` will delete a user named jalal but keep his home directory and other files.

#### Locking a user's password `-l` or `--lock`

	passwd -l jane
    
The **passwd** command with the `-l` or `--lock` flag will lock the password of the named account (in our example, jane). Users with a locked password are not allowed to change their password.

Note that this does not disable the account. You need to be root (or have sudo priveleges) to be able to lock a user's password.


## Adding trusted sudo users
Sudo allows regular users to run commands as a super user. That way you won't have to be running as root the whole time.

If you are on Ubuntu, sudo is already installed for you. If you are on Debian, you'll have to install sudo:

	apt-get install sudo
    
If the package is not found then you'll have to update the system.

	apt-get update
    
The above command will update our linux machine with all of the available source for apt-get.

Now that you have sudo installed, you'll need to create/edit the `sudoers` file. This file is located in the `/etc` directory.
	
    cd /etc
    nano sudoers
    
    
    
Resources:
---
- [How To Add, Delete, and Grant Sudo Privileges to Users on a Debian VPS](https://www.digitalocean.com/community/tutorials/how-to-add-delete-and-grant-sudo-privileges-to-users-on-a-debian-vps)
- [How can I add a new user as sudoer using the command line?](http://askubuntu.com/questions/7477/how-can-i-add-a-new-user-as-sudoer-using-the-command-line)