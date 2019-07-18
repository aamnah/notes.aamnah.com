---
title: Configure WiFi from command line (Ubuntu 18.04)
date: 2019-07-18
---

tl;dr

```bash
sudo su
killall wpa_supplicant
wpa_passphrase "your_essid" "your_password" >> /etc/wpa_supplicant/wpa_supplicant.conf
wpa_supplicant -B -i wlp2s0  -c /etc/wpa_supplicant/wpa_supplicant.conf
dhclient eth1
```

- `wpa_supplicant` and `dhclient` require `sudo`

---

```bash
# figure out what's your WiFi interface called
iwlist scan
#iwconfig

# scan for wifi networks
iwlist wlp2s0 scan
#iwlist wlp2s0 s


# generate a 'network' entry for wpa_supplicant.conf file
# replace MyWifiNetwork with the name of the wifi network you want to connect to
# enter the wifi password when prompted
sudo su
wpa_passphrase MyWifiNetwork >> /etc/wpa_supplicant/wpa_supplicant.conf
# you'll get a blinky cursor, enter the password now

# connect to the network now
wpa_supplicant -B -i wlp2s0  -c /etc/wpa_supplicant/wpa_supplicant.conf

# obtain an IP address
dhclient wlp2s0
```

---

NOTES:

- i don't have `ifconfig` avaialble because i don't have `net-tools` installed. And i can't installed `net-tools` because i don't have WiFi access!
- i can't SSH in from another machine because i don't have WiFi

### Find out what's your interface called

On the Raspberry Pi it might be `wlan0`. On a laptop it could be `wlp2s0`. You could have multiple WiFi interfaces if you use built-in WiFi card and have attached a dongle as well.

- `iwconfig` will give you the inetrfaces and the networks they might already be connected to

```bash
# TODO: add interface output here..
# the output for iwconfig for when it is connected and when it is not connected to a network
```

### Scan for available networks

```bash
iwlist scan wlp2s0
```

the `ESSID` is the name of a wifi network.

A network will look like this:

```bash
# TODO: add scanned wifi network here..
```

### Add a network entry

```bash
sudo su
wpa_passphrase MyWifiNetwork >> /etc/wpa_supplicant/wpa_supplicant.conf
```

- You need `sudo` to be able to add/edit files in `/etc/wpa_supplicant`
- Redirection `>>` will also create the file `wpa_supplicant.conf`
- You will get an empty prompt with blinky cursor after running the command. You have to enter the password here (i thought the command failed because i got no output, but it didn't)
- Once you have the network entry added, edit the file and remove the plain text password from it, it's not needed.
- Add country code for good measure. The Raspberry Pi 3 Model B+ requires it to set the correct frequency bands..

Your resulting entry will look like this:

```bash
# This is the entry for MyWifiNetwork with WPA2
network={
  ssid="MyWifiNetwork"
  psk=
  priority=2 # higher will get more priority
  country=PK # needed on Raspberry Pi models with builtin WiFi
}
```

When there are multiple network entries, the network with the highest priority will get connected. If it fails then the one with next highest priority will be connected and so on.. In my case, the hotspot is not always available, but when it is i want to always connect to it rather than the home network as the hotspot provides faster speeds. When the hotspot is off it'll automatically connect to the home network.

### Connect to the network

This assumes you already have a `wpa_supplicant.conf` file with your network entries

```bash
# this one will give you command line output for what's happening
# you can disable the output by passing -B
wpa_supplicant -iwlp2s0 -c/etc/wpa_supplicant/wpa_supplicant.conf -Dwext
```

- the `-Dwext` part doesn't seem all that necessary. Will connect without it too. FYI, the `-D` if for driver, you find it out by with the `wpa_supplicant` command

i kept getting a `CTRL-EVENT-DISCONNECTED` error

```bash
# with -Dwext
wlp2s0: CTRL-EVENT-DISCONNECTED bssid=xx:xx:xx:xx:xx:xx reason=0

# without -Dwext
wlp2s0: CTRL-EVENT-DISCONNECTED bssid=xx:xx:xx:xx:xx:xx reason=3
```

The error could be because an instance of `wpa_supplicant` is already running and interfering with the connection.

Got rid of it by running `killall wpa_supplicant` and running the command again. Connected successfully this time, but `wpa_supplicant` didn't leave the prompt. So ran the command again, this time with `-B` to run the daemon background and get the prompt back.

You can now confirm that you are connected with the `iwconfig` command.

Now you also need to obtain an IP address (`reason=3` usually comes up when failing to get a dhcp lease)

```bash
dhclient wlp2s0
```

From now on you should be connected to WiFI (and internet).

If you want to know what your IP is (if you want to SSH, and you still don't have `ifconfig`) you can use the following command

```bash
ip add
ip addr show
ip addr show wlp2s0
```

Both `ip add` and `ip addr` are valid commands

### Alternate Command 1

```bash
iwconfig wlp2s0 essid MYNETWORK key MYPASSWORD
```

### Alternate Command 2

```bash
wpa_cli -i wlp2s0 reconfigure
```

- `-i` is for interface
- `reconfigure` will force `wpa_supplicant` to re-read its configuration file

Run this command after you have configured your `wpa_supplicant.conf` file. I kept getting a `FAIL`. I ran `killall wpa_supplicant` and tried again, but then it was unable to connect to `wpa_supplicant` and i got the following error:

```bash
Failed to connect to non-global ctrl_ifname: wlp2s0  error: No such file or directory
```

### Troubleshooting

- If your configuration is wrong in `wpa_supplicant` you'll get an error with line numbers pointing out where the issue is

```
Failed to read or parse configuration `/etc/spa_supplicant/spa_supplicant.conf`
```

#### Set power management to off permanently

```bash
# create or edit a configuration file that will override the default powermanagement behavior
gksudo gedit /etc/pm/power.d/wireless
```

Add the follownig to the file:

```bash
#!/bin/bash
/sbin/iwconfig wlan0 power off
```

## Links

- [Setting WiFi up via the command line](https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md)
- [Connect to Wi-Fi Network through Ubuntu Terminal](https://bhattigurjot.wordpress.com/2013/10/26/connect-to-wi-fi-network-through-ubuntu-terminal/)
- [AskUbuntu: How to connect and disconnect to a network manually in terminal?](https://askubuntu.com/questions/16584/how-to-connect-and-disconnect-to-a-network-manually-in-terminal)
- [Wifi keeps breaking the connection](https://www.linuxquestions.org/questions/slackware-14/wifi-keeps-breaking-the-connection-4175510265/)
- [Using WPA_Supplicant to Connect to WPA2 Wi-fi from Terminal on Ubuntu 16.04 Server](https://www.linuxbabe.com/command-line/ubuntu-server-16-04-wifi-wpa-supplicant)
