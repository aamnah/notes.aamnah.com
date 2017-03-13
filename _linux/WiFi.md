---
title: Getting WiFi details in Linux
subtitle: Get WiFi details in Linux, put your Wireless card in monitor mode, get network details and more
permalink: wifi-linux-commands
ctime: 2016-09-15
mtime: 2017-03-13
---

## put wireless card in monitor mode

```bash
sudo iwconfig wlan0 mode monitor && iwconfig
```

via airmon

```bash
airmon-ng start wlan0
```

`wlan0mon` here is your wifi in monitor mode. To disable, run `airmon-ng stop wlan0mon`

## get wifi details (BSSID)
- `iwlist scan`
- `wash -i wlan0mon --ignore-fcs`
- `airodump-ng wlan0mon`


### get available networks

```bash
iwlist scanning
``` 

or 
```bash
airodump-ng wlan0
```

### put wifi card in monitor mode

```bash
airmon-ng start wlan0
```