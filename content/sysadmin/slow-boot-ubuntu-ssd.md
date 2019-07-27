---
title: Troubleshooting slow boot time on Ubuntu on an NVMe SSD
date: 2019-07-27
---

tl;dr: check if the `swap` drive has been changed or removed


Check the `syslog`

```bash
tail -20 /var/log/syslog
```

```
Jul 27 13:46:06 PandaU systemd[1]: dev-disk-by\x2duuid-2854a8db\x2d6494\x2d41d0\x2d9cff\x2d974714bb0b00.device: Job dev-disk-by\x2duuid-2854a8db\x2d6494\x2d41d0\x2d9cff\x2d974714bb0b00.device/start timed out.
Jul 27 13:46:06 PandaU systemd[1]: Timed out waiting for device dev-disk-by\x2duuid-2854a8db\x2d6494\x2d41d0\x2d9cff\x2d974714bb0b00.device.
Jul 27 13:46:06 PandaU systemd[1]: Dependency failed for /dev/disk/by-uuid/2854a8db-6494-41d0-9cff-974714bb0b00.
Jul 27 13:46:06 PandaU systemd[1]: dev-disk-by\x2duuid-2854a8db\x2d6494\x2d41d0\x2d9cff\x2d974714bb0b00.swap: Job dev-disk-by\x2duuid-2854a8db\x2d6494\x2d41d0\x2d9cff\x2d974714bb0b00.swap/start failed with result 'dependency'.
Jul 27 13:46:06 PandaU systemd[1]: dev-disk-by\x2duuid-2854a8db\x2d6494\x2d41d0\x2d9cff\x2d974714bb0b00.device: Job dev-disk-by\x2duuid-2854a8db\x2d6494\x2d41d0\x2d9cff\x2d974714bb0b00.device/start failed with result 'timeout'.
Jul 27 13:48:37 PandaU dhclient[3143]: DHCPREQUEST of 192.168.0.79 on wlo1 to 192.168.0.1 port 67 (xid=0x52706f58)
Jul 27 13:48:37 PandaU dhclient[3143]: DHCPACK of 192.168.0.79 from 192.168.0.1
Jul 27 13:48:37 PandaU NetworkManager[1066]: <info>  [1564217317.7820] dhcp4 (wlo1):   address 192.168.0.79
Jul 27 13:48:37 PandaU NetworkManager[1066]: <info>  [1564217317.7820] dhcp4 (wlo1):   plen 24 (255.255.255.0)
Jul 27 13:48:37 PandaU NetworkManager[1066]: <info>  [1564217317.7820] dhcp4 (wlo1):   gateway 192.168.0.1
Jul 27 13:48:37 PandaU NetworkManager[1066]: <info>  [1564217317.7820] dhcp4 (wlo1):   lease time 600
Jul 27 13:48:37 PandaU NetworkManager[1066]: <info>  [1564217317.7820] dhcp4 (wlo1):   nameserver '192.168.0.1'
Jul 27 13:48:37 PandaU NetworkManager[1066]: <info>  [1564217317.7820] dhcp4 (wlo1): state changed bound -> bound
Jul 27 13:48:37 PandaU dbus-daemon[1056]: [system] Activating via systemd: service name='org.freedesktop.nm_dispatcher' unit='dbus-org.freedesktop.nm-dispatcher.service' requested by ':1.14' (uid=0 pid=1066 comm="/usr/sbin/NetworkManager --no-daemon " label="unconfined")
Jul 27 13:48:37 PandaU systemd[1]: Starting Network Manager Script Dispatcher Service...
Jul 27 13:48:37 PandaU dbus-daemon[1056]: [system] Successfully activated service 'org.freedesktop.nm_dispatcher'
Jul 27 13:48:37 PandaU systemd[1]: Started Network Manager Script Dispatcher Service.
Jul 27 13:48:37 PandaU nm-dispatcher: req:1 'dhcp4-change' [wlo1]: new request (1 scripts)
Jul 27 13:48:37 PandaU nm-dispatcher: req:1 'dhcp4-change' [wlo1]: start running ordered scripts...
Jul 27 13:48:37 PandaU dhclient[3143]: bound to 192.168.0.79 -- renewal in 243 seconds.
```

Sure enough, the UUID it is trying to find (as it is listed in `/etc/fstab`) no longer exists. I ran `blkid`, got the new `UUID` of the `swap` partition and updated the `/etc/fstab` file