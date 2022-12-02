---
title: Update hostname on an Ubuntu machine
date: 2019-01-25
---

### tl;dr

use the `hostnamectl` command on Ubuntu (and other Systemd based distros)

```bash
hostnamectl set-hostname new.hostname.com
```

```bash
# TEMPORARILY update hostname, will reset on reboot, will need a new Terminal to see the change
hostname my.newHostname.com
```

```bash
# make a more permanent change by updating `/etc/hosts` and `/etc/hostname` files
sudo nano /etc/hostname
sudo nano /etc/hosts
sudo reboot
```

```bash
# use the `hostnamectl` command
hostnamectl set-hostname new.hostname.com
```

```bash
hostnamectl
```

```
   Static hostname: new.mydomain.com
         Icon name: computer-vm
           Chassis: vm
        Machine ID: 23f62493fbfe41359cc6b4f409570ac1
           Boot ID: 6916c2a8a1e049bda00ed12a189d90dd
    Virtualization: xen
  Operating System: Ubuntu 18.04.1 LTS
            Kernel: Linux 4.15.0-1021-aws
      Architecture: x86-64
```
