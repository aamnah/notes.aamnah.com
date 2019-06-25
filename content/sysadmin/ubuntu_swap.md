---
title: Increasing performance on low-RAM
date: 2018-10-26
description: Increase the performance of a low-RAM system by increasing swap space, swappiness and decreasing cache pressure. Basically, make it not hang.
---

tl;dr
---

```bash
# Increase swappiness & cache pressure
sudo echo "
# increase swappiness
# https://help.ubuntu.com/community/SwapFaq
vm.swappiness=100

# Cache Pressure Setting
# https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-18-04
vm.vfs_cache_pressure=50" >> /etc/sysctl.conf

# Create a new swap file and delete the old one
sudo fallocate -l 8G /swapfile8G # create new file
sudo chmod 600 /swapfile8G # recommended permissions
sudo mkswap /swapfile8G # format file as swap
sudo swapon /swapfile8G # turn it on
sudo swapoff /swapfile # turn off old swapfile
sudo sudo rm -rf /swapfile # remove old swap file
sudo swapon -s # verify 

# After all edit your /etc/fstab, if you use it to turn on swap when reboot, to switch /swapfile to /swapfile8G
sudo nano /etc/fstab
# /var/swapfile8G none swap sw 0 0
```

---

#### background:
I have an old Acer Aspire 5742 with 4GB of RAM that i'm trying to use for dev work. But the darn thing hangs up after running out of memory. The stuff i'm running is not much - VS Code, npm, Chromium with 6 or so tabs, Sublime Text for note taking and File explorer. 

The OS i have installed is Ubuntu Budgie 18.04.

The existing swap file was 2GB in size, which means i was running out on apprx. 6.5GB of memory+swap.

#### what i can't do:

- buy more RAM. this thing uses DDR3 1033MHz RAMs and can only support a max of 8GB. In order to upgrade i'd have to buy outdated technology that isn't readily available and costs too much.

#### what i can do:
- make OS tweaks like increasing swap size and swappiness
- disable/remove processes i don't need to free up RAM

## swappiness

> The swappiness parameter controls the tendency of the kernel to move processes out of physical memory and onto the swap disk.

```bash
# check current cache presure value
sudo sysctl vm.swappiness
```

```bash
sudo nano /etc/sysctl.conf
```

Add the following to the end of file

```
vm.swappiness=100
```

`100` is maximum. Since i have an SSD, i'm not too worried about moving processes onto disk, SSDs are fast enough to handle it.

## increase swap file size
i don't have a swap _partition_, i have a swap _file_ (in the `/` dir) that is already in place. This file which is 2GB in size was created when i installed the OS. You can verify whether a swap os being used with `sudo swapon --show`, `swapon --all` or `free -h`

```bash
sudo swapon --show
```

```bash
NAME      TYPE SIZE USED PRIO
/swapfile file   2G 1.6G   -2
```

No output means no swap file.

```bash
free -h
```

```
              total        used        free      shared  buff/cache   available
Mem:           3.5G        2.7G        149M        353M        732M        308M
Swap:          2.0G   
```

### resize the old swap

```bash
# Turn all swap off
sudo swapoff -a

# Resize the swapfile
sudo dd if=/dev/zero of=/swapfile bs=1M count=1024

# Make swapfile usable
sudo mkswap /swapfile

# Make swapon again
sudo swapon /swapfile
```

### create and enable a new swap file and delete the old one

For 4GB RAM, i can add a maximum of 8GB swap file, i.e. double the size of the physical memory.

```bash
sudo fallocate -l 8G /swapfile8G # create new file
sudo chmod 600 /swapfile8G # recommended permissions
sudo mkswap /swapfile8G # format file as swap
sudo swapon /swapfile8G # turn it on
sudo swapoff /swapfile # turn off old swapfile
sudo sudo rm -rf /swapfile # remove old swap file
sudo swapon -s # verify 
# After all edit your /etc/fstab, if you use it to turn on swap when reboot, to switch /swapfile to /swapfile8G
```

```bash
# After all edit your /etc/fstab, if you use it to turn on swap when reboot, to switch /swapfile to /swapfile8G
sudo nano /etc/fstab
```

```
/var/swapfile8G none swap sw 0 0
```

## Cache pressure setting

```bash
# check current cache presure value
sudo sysctl vm.vfs_cache_pressure
```

```bash
sudo nano /etc/sysctl.conf
```

```
vm.vfs_cache_pressure=50
```

Decreasing `vfs_cache_pressure` causes the kernel to prefer to retain `dentry` and `inode` caches, which basically is access data about the file system and is requested frequently.

Links
---

- [SwapFaq](https://help.ubuntu.com/community/SwapFaq)
- [DigitalOcean: ](https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-18-04)
- [DigitalOcean: How to change swap size on Ubuntu 14.04 ?](https://www.digitalocean.com/community/questions/how-to-change-swap-size-on-ubuntu-14-04)