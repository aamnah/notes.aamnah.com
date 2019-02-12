---
title: Mount NTFS drives in Linux
date: 2018-12-10
---

```bash
# install ntfs-3g
# on Ubuntu 18.04 ntfs-3g is already installed
sudo apt update && sudo apt install -y ntfs-3g

# create a mount point for the drive ( /media/username/EXTRA )
mkdir /media/${HOME}/EXTRA

# identify the NTFS drive
sudo fdisk -l | grep NTFS

# mount the drive ( /dev/sdb1 )
sudo mount -t ntfs-3g /dev/sdb1 /media/${HOME}/EXTRA
```

Make it permanent by editing `/etc/fstab`


```bash
# identify the UUID of the drive ( 269E88799E8842F3 )
ls -l /dev/disk/by-uuid/

# edit /etc/fstab
sudo nano /etc/fstab
```

```
UUID=269E88799E8842F3 /media/aamnah/EXTRA ntfs-3g defaults 0 0
```


### get a drive's UUID


```bash
ls -l /dev/disk/by-uuid/
```

```
total 0
lrwxrwxrwx 1 root root 10 Dec 10 12:17 269E88799E8842F3 -> ../../sdb1
lrwxrwxrwx 1 root root 10 Dec 10 12:17 8E8015EA8015D993 -> ../../sda4
lrwxrwxrwx 1 root root 10 Dec 10 12:17 a93aa8af-ff03-417f-8682-44bf488469b5 -> ../../sda5
lrwxrwxrwx 1 root root 10 Dec 10 12:17 c26182a4-a9fa-4534-899b-95f369b0e556 -> ../../sda1
lrwxrwxrwx 1 root root 10 Dec 10 12:17 C8C0E236C0E22B00 -> ../../sda3
lrwxrwxrwx 1 root root 10 Dec 10 12:17 d6d1e3b5-23a7-4126-b352-ea85c593b13a -> ../../sda6
```
