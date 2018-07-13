---
title: Configuring WIFI via Command Line
date: 2015-08-24
tags:
- wifi
---

The [RaspberryPi Wireless WiFi Dongle Configuration guide](http://www.farnell.com/datasheets/1668709.pdf) by Farnell is THE BEST i’ve found so far.

#### To check if your wifi dongle is recognized 

	ifconfig 

if you see **wlan0**, it confirms that raspberry pi has detected your wifi adaptor.

#### To scan for wifi networks 

	sudo iwlist wlan0 scan

#### Edit the `wpa_supplicant.conf` file

	sudo nano /etc/wpa_supplicant/wpa_supplicant.conf

Add the following with your network details at the end of the file, below `update_config=1`.

	network={
	     ssid=“Area 51"
	     psk=“password"
	     key_mgmt=WPA-PSK
	}

To add another network, just add the same code with details specific to the network you want to add.