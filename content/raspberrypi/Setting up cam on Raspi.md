---
title: Setting up cam on Raspberry Pi
date: 2015-08-25
---
You have two options:

	- [motion](http://www.lavrsen.dk/foswiki/bin/view/Motion/WebHome)
	- [kerberos](https://kerberos.io/)

Motion install is pretty much all commmand line based. 

Kerberos is more user friendly, easier to install and has a modern interface

### Install motion

	sudo apt-get install motion -y

### Config

	sudo nano /etc/motion/motion.conf

The following settings should do. Frame settings (width, height, framerate) and ports (webcam_port, control_port) are optional. The most important are the two on/off settings for `daemon` and `webcam_localhost`

	daemon on
	width 640
	height 480
	framerate 100
	webcam_localhost off
	webcam_port 8081 #deafult:8081
	control_port 8080 #default:8080

`webcam_localhost` if on will restrict webcam connections to localhost only. Same for `control_localhost`.

### Daemon

	sudo nano /etc/default/motion

set to **yes**

	start_motion_daemon=yes

### Start 

	sudo service motion start