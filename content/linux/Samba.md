---
title: Setting up shared network between Ubuntu and Mac using Samba
date: 2017-01-23
lastmod: 2018-05-25
---

Ubuntu 16.04 LTS

### Install Samba

```bash
sudo apt install -y samba 
```

### Config

```bash
# make a backup of original conf file
sudo /etc/samba/smb.conf /etc/samba/smb_bak.conf
# edit conf file and add share folders
sudo nano /etc/samba/smb.conf
```

```bash
# SHARED FOLDERS
# Added by Aamnah on Fri 25 May 2018

[Movies]
    comment = Movies
    path = /media/NAS/MOVIES/
    browseable = yes
    read only = no
    guest ok = yes
    
[TVShows]
    comment = TV Show
    path = "/media/NAS/TV Shows/"
    browseable = yes
    read only = no
    guest ok = yes
```

```bash
# restart Samba
sudo /etc/init.d/samba restart
```

### Create a user to use with Samba

```bash
# create user
sudo useradd bumblebee -m -G users
# set password for the user you just created
sudo passwd bumblebee
```

### Set a password for your user in Samba

```bash
sudo smbpasswd -a <username>
```


### Share a folder
Right click on folder > Properties > Share this folder


Now on Mac, `Cmd`+`K`, enter `smb://yourIPwhatever`, enter your username and password, and mount any of the folders you shared. You can share whole partitions or drives if you want. 

That's it.