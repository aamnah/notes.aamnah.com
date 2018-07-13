---
title: Linux - Basic User Management
slug: linux_basic_user__management
category: Linux
tags: 
  - cli
date: 2014-08-31
lastmod: 2015-08-20
---

### Cheatsheet

| command              | meaning                                                              |
|-----------------------|---------------------------------------------------------|
| whoami                 | show which user is logged in |
| passwd                  | change password of current user |
| passwd jane           | change Jane's password |
| su                          | become **s**uper**u**ser / change user to root |
| su jane                   | change user to jane |
| sudo                      | superuser do = do it as a superuser |
| adduser james        | add a user named 'james' |
| deluser james         | delete the user 'james' |
| passwd -l jane        | lock jane's password |
| passwd --lock jane | lock jane's password |

#### `whoami`
shows which user is logged in

#### `passwd` 
change the password for the current user. `passwd jane` = Change Jane's password

#### `su` 
**S**uper **U**ser. login to a different user, for example `su jalal` = login to jalal's account. only `su` without a username provided will change to root user by default.

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
 
---


`whoami` = check which user are you 
`su` = switch to Super User
`passwd` = change password



### Change password

	passwd

will prompt to change the password for the current user

	passwd john

will prompt to chnage the password for user 'john'.

### Add User

	useradd james

will add a user called 'james'. Adding user requires sudo priveleges.

### Remove a user

You have a couple of options:

- change his password
- lock the user
- delete him from the system

	userdel -r john

### Check if a user has been added

The `-r` flag removes the home directory of the particular user from the system. You can not delete a user that's logged in.

You can check if a user is part of the system by checking the password file.

	cat /etc/passwd

 In some cases, the act of creating a user does not create the directory, only when that user logs in the first time will the home directory be created. You can check if your user was created by doing a:

	sudo cat /etc/passwd | grep USERNAME

### Creating user directory

Ubuntu considers the useradd utility a low level utility and sets it so that the homedir is not added by default. You fan manually add the directory if the user is created.

	useradd -m USERNAME

In Ubuntu, `adduser` creates a directory for new users by default. If not, you can use the `-d` flag.

If you want to specify the path of the home directory, use:

	useradd -m d /PATH/TO/FOLDER USERNAME
	
---
    
    
Links
---

- [How To Add, Delete, and Grant Sudo Privileges to Users on a Debian VPS](https://www.digitalocean.com/community/tutorials/how-to-add-delete-and-grant-sudo-privileges-to-users-on-a-debian-vps)
- [How can I add a new user as sudoer using the command line?](http://askubuntu.com/questions/7477/how-can-i-add-a-new-user-as-sudoer-using-the-command-line)
