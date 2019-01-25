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
- `-k` or `--skel` adds skeleton files to home dircetory (you need to pass an argument)
- `-aG` will append the the user to (supplimentary) group(s)


```bash
# TEST sudo powers
su aamnah # switch to aamnah

sudo apt update # try a sudo command
```