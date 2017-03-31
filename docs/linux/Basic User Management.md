Basic User Management
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