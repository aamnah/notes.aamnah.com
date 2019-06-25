---
title: Add a sudo user to an Ubuntu system
date: 2019-01-25
---

```bash
# create a new user
# sudo useradd meowmeow -m -p '123badpassword'
sudo useradd meowmeow -m

# set password manually
sudo passwd meowmeow

# add to sudo 
sudo usermod -aG sudo meowmeow
```

- `-m` or `--create-home` creates the user's home dircetory
- `-p` let's you set the password
- `-k` or `--skel` adds skeleton files to home dircetory (you need to pass an argument). e.g. `useradd meowmeow -m -k '/etc/skel/*'`
- `-aG` will append the the user to (supplimentary) group(s)


```bash
# TEST sudo powers
su meowmeow # switch to meowmeow

sudo apt update # try a sudo command
```


```bash
# manually copying skel files
sudo cp -r /etc/skel/.* /home/meowmeow 
```

```bash
# remove the user and it's home dir
sudo userdel -r meowmeow
```
