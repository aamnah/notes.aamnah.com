---
title: Configuring networking interfaces
date: 2018-01-07
---

### Finding network interface


```bash
# See a list of networks available
ls /sys/class/net

# See if your network is disabled
sudo lshw -C network

ip addr
```



Turn down a network

```bash
sudo ip ls dev en0 down
sudo ifdown en0
```

```bash
# Enable interfaces
sudo ifup -v eth0 
```

The file to edit to configure networks

```bash
sudo nano /etc/network/interfaces
```

Try booting in recovery and then enabling networking. This was the easiest way for me to get ethernet to work. From GRUB, select Advanced Options and boot in recovery mode.


```bash
# Commands

systemctl status networking.service

# restart networking
service networking restart 
sudo /etc/init.d/networking restart
```

If you don't see eth0 but something like enp0s25, it's because of Predictable Network Interface naming]() which is a part of systemd/udev. Basically it names the interface based on it's hardware location. enp0s25 means PCI bus 0 slot 25. You can get an idea of the hardware location with `lspci`. You can also check the logs for lines like 


Figure out which interface has the cable attached

```bash
ip link

sudo ethtool enp3s0
sudo ethtool enp0s25
```

```bash
sudo nano /etc/network/interfaces
```
```bash
# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
auto enp3s0
iface enp3s0 inet dhcp
```

```bash
sudo ifdown enp3s0 && sudo ifup -v enp3s0
```

```bash
# Enable ethernet
sudo ifconfig eth0 up 
sudo dhclient eth0
```

```bash
# Configure Google Public DNS
echo "nameserver 8.8.8.8" > /etc/resolv.conf
sudo ifconfig enp0s25 down
sudo ifconfig enp25 up
```


### Network manager says network not managed

Note: This happened to me on a fresh Ubuntu Sever 16.10 install from a CD. Ubuntu Desktop was installed separately later, and in it the Network Manager said ethernet networks were unmanaged. Didn't have a wifi card on the system.

This is a [known bug](https://bugs.launchpad.net/ubuntu/+source/network-manager/+bug/1638842) on Ubuntu 16.10. The Network Manager refuses to manage ethernet and bluetooth connections. Someone decided to not let Network Manager manage these interfaces except in a desktop edition (possibly because servers normally uses the ifupdown mechanism to manage networking).

> On desktop images we want NM to manage everything, thus the installer creates `/etc/NetworkManager/conf.d/10-globally-managed-devices.conf`. But on a server, container, or similar environment we do NOT want NM to suddenly take over existing connections from netplan, networkd, or ifupdown -- there it should be restricted to wifi and 3G.

The `10-globally-managed-devices.conf` is the default config file to explicitly unmanage anything that is not wifi or wwan (meaning we definitely want NM to manage wifi and mobile data; and probably don't want it to touch wired in many cases).

This file installed under `/usr/lib/NetworkManager/conf.d/` has the following content by default:

```
[keyfile]
unmanaged-devices=*,except:type:wifi,except:type:wwan
```

that unmanages all network interfaces except wifi and wwan, thus bluetooth interface and ethernet interface are all unmanaged by default.



First try running the following command:

```bash
nmcli d

sudo nmcli dev set enp8s0 managed yes
```

If you get the error message:

```
Error: Device 'enp8s0' not found.
```

Try running the command below:

```bash
ip link show
```
and look for a device name similar to enp8s0 and substitute it in the original command.


Create a blank file called `10-globally-managed-devices.conf` in `/etc/NetworkManager/conf.d`, if one doesn't already exist.

```bash
# Ubuntu 16.04
# create blank `10-globally-managed-devices.conf` under `/etc/NetworkManager/conf.d`
# https://bugs.launchpad.net/ubuntu/+source/network-manager/+bug/1638842
touch /etc/NetworkManager/conf.d/10-globally-managed-devices.conf

# remove /usr/lib/NetworkManager/conf.d/10-globally-managed-devices.conf
rm -rf /usr/lib/NetworkManager/conf.d/10-globally-managed-devices.conf
```

Alternatively, you can edit the `10-globally-managed-devices.conf` to change the value for `unmanaged-devices` to `none`

```bash
# Ubuntu 17.10
cp /usr/lib/NetworkManager/10-globally-managed-devices.conf /etc/NetworkManager/10-globally-managed-devices.conf

nano /etc/NetworkManager/10-globally-managed-devices.conf
# change the value "unmanaged-devices" to none
```

Afterwards, restart Network Manager

```bash
# restart Network Manager
sudo service network-manager restart
sudo systemctl restart NetworkManager
```

https://askubuntu.com/questions/882806/ethernet-device-not-managed/893614#893614

### Check the logs

```bash
 tail /var/log/syslog
 cat /var/log/syslog | grep "eth" | tail -50
```
Links
---

- [NetworkConfigurationCommandLine/Automatic](https://help.ubuntu.com/community/NetworkConfigurationCommandLine/Automatic)
- [Network Configuration](https://help.ubuntu.com/lts/serverguide/network-configuration.html)
- [Why is my network interface named enp0s25 instead of eth0?](https://askubuntu.com/questions/704361/why-is-my-network-interface-named-enp0s25-instead-of-eth0)
- [How to set up ethernet connection? 16.04 server](https://askubuntu.com/questions/833114/how-to-set-up-ethernet-connection-16-04-server)