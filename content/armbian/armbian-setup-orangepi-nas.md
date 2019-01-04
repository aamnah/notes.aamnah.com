---
title: Setup Orange Pi Plus 2 (Armbian) as a network attached storage (NAS)
date: 2018-08-12
---

## The Plan

- install and configure Samba
- set a static IP for your OrangePi



```bash
SAMBA_USERNAME=''
DATE="$(date +%d%h%Y-%H%M%S)"

# Install Samba
sudo apt install -y samba 

# Config
# make a backup of original conf file
sudo /etc/samba/smb.conf /etc/samba/smb_bak_${DATE}.conf

# edit conf file and add share folders
echo -e "
# SHARED FOLDERS
# Added by Aamnah on $(date)

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
" >> /etc/samba/smb.conf


# restart Samba
sudo /etc/init.d/samba restart
Create a user to use with Samba
# create user
sudo useradd bumblebee -m -G users
# set password for the user you just created
sudo passwd bumblebee
Set a password for your user in Samba
sudo smbpasswd -a <username>
```