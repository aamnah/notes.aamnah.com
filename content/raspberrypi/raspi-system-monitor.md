---

title: System Monitor for Raspberry Pi
slug: /howto-system-monitor-for-raspberry-pi
date: 2014-05-21 16:30:36.000000000 +05:00
type: post
published: true
status: publish
categories:
tags:
- raspberry pi
- linux
---

[RPi-Monitor](http://rpi-experiences.blogspot.fr/p/rpi-monitor.html) is a nifty utility that monitors and displays system information about your Raspberry Pi in a nice-looking graphical interface in the browser.  
It can show you how much CPU Load you have, what is the temperature of your Raspberry Pi (good to know in cases where you have overclocked the raspberry pi), Used, Free and Total Memroy (RAM), Used, Free and Total Space you have on both partitions of your SD Card, Used, Free and Total SWAP  space (Virtual RAM), how long the Raspberry Pi has been running (Uptime), and general information about your Versions (Kernel, Firmware, Processor etc.) as well as any packages that might need updating.  
You can see these as stats as well as Graphs.


Installing RPi-Monitor
---
Download it from the official repository in Github:  
 
<pre class="lang:sh decode:true " >sudo wget http://goo.gl/P4Bl6I -O rpimonitor_2.4-1_all.deb</pre> 

Install the dependencies by executing the following command:  
 
<pre class="lang:sh decode:true " >sudo apt-get install librrds-perl libhttp-daemon-perl libjson-perl libipc-sharelite-perl</pre> 

Install RPi-Monitor using the following command:  
 
<pre class="lang:js decode:true " >sudo dpkg -i rpimonitor_2.4-1_all.deb</pre> 

	
Usage
---
Browse **http://RPiIPaddress:8888/** (from another computer or mobile on the same network) to access to the web interface. For example, the IP of my Raspberry Pi is 192.168.2.103, so the link for RPi-Monitor is http://192.168.2.103:8888/  
As of now Chrome and Firefox are the recommended browsers to view RPi-Monitor interface.

Auto Refreshing Status Page
---
By default the status page does not automatically refresh stats, but you can enable that from Configuraion by checking the 'Auto refresh status page' option.

-----

[Optional] Changing Default Port (:8888)
---
You can change the default 8888 port by editing the rpimonitord.conf file in /etc/ directory.
 
<pre class="lang:sh decode:true " >sudo nano /etc/rpimonitord.conf</pre> 


Uncomment (by removing the # sign) and edit the line that says 'daemon.port=8889'. Like this:
 
<pre class="lang:sh decode:true " ># daemon.port=8888
# Define port of the web server (default:8888)
daemon.port=1234</pre> 

where 1234 is my custom port.

----

[Optional] Monitoring a WiFi Connection
---
You can also add a WiFi icon to the status page, like I did. Since I use a WiFi adopter with my raspberry pi and not an ethernet cable, it makes sense to be able to monitor WiFi bandwidth and speed. 
The process of adding the WiFi indicator involves editing the default.conf file in /etc/rpmonitord.conf.d directory.
 
```bash
sudo nano /etc/rpimonitord.conf.d/default.conf
```


The snippet to add is:
 
```bash
###############################################################
# Graph WLAN
###############################################################
dynamic.17.name=wifi_received
dynamic.17.source=/sys/class/net/wlan0/statistics/rx_bytes
dynamic.17.regexp=(.*)
dynamic.17.postprocess=$1*-1
dynamic.17.rrd=DERIVE

dynamic.18.name=wifi_send
dynamic.18.source=/sys/class/net/wlan0/statistics/tx_bytes
dynamic.18.regexp=(.*)
dynamic.18.postprocess=
dynamic.18.rrd=DERIVE

web.status.1.content.9.name=WiFi
web.status.1.content.9.icon=wifi.png
web.status.1.content.9.line.1="WiFi Sent: <b>"+KMG(data.wifi_send)+"<i class='icon-arrow-up'></i></b> Received: <b>"+KMG(Math.abs(data.wifi_received)) + "<i class='icon-arrow-down'></i></b>"

web.statistics.1.content.9.name=WiFi
web.statistics.1.content.9.graph.1=wifi_send
web.statistics.1.content.9.graph.2=wifi_received
web.statistics.1.content.9.ds_graph_options.net_send.label=Upload bandwidth (bits)
web.statistics.1.content.9.ds_graph_options.net_send.lines={ fill: true }
web.statistics.1.content.9.ds_graph_options.net_send.color="#FF7777"
web.statistics.1.content.9.ds_graph_options.net_received.label=Download bandwidth (bits)
web.statistics.1.content.9.ds_graph_options.net_received.lines={ fill: true }
web.statistics.1.content.9.ds_graph_options.net_received.color="#77FF77"
```

	

You can read more about how to monitor wifi using rpi-monitor [here](http://rpi-experiences.blogspot.fr/2013/09/add-wifi-to-raspberry-pi-and-monitor-it.html#more). The linked article, written by the author of rpi-monitor himself tells how to add a wifi connection and monitor it with rpi-monitor. If you have already configured your WiFi card/connection then ignore the first part about installing the wifi network and proceed to configuring rpi-monitor to show wifi network interface.  
You might have to restart your Raspberry Pi in order to see/apply the changes. The command for restart is:
 
<pre class="lang:sh decode:true " >sudo reboot</pre> 

----

Documentation
---
To see instructions on how to use and configure RPi-Monitor, use the following commands:
 
<pre class="lang:sh decode:true " >man rpimonitord</pre> 
and
<pre class="lang:sh decode:true " >man rpimonitord.conf</pre> 

Man pages are also available in the Github [wiki](https://github.com/XavierBerger/RPi-Monitor/wiki).

Updating RPi-Monitor
---
Run the following command to upgrade RPi-Monitor:
 
<pre class="lang:sh decode:true " >sudo apt-get update &amp;&amp; sudo service rpimonitor update</pre> 

You will also be able to see this command in the RPi-Monitor web interface when there are upgardes available.

Uninstall / Remove RPi-Monitor
---
If you would like to uninstall RPi-Monitor, you can do so by entering the following command:
 
<pre class="lang:sh decode:true " >dpkg --purge rpimonitor</pre> 


Links
---

- [Source](http://rpi-experiences.blogspot.fr/2013/09/rpi-monitor-version-24-is-available.html)
