---
title: Armbian / Orange Pi Plus 2 - getting started issues
description: Misc. issues like when sound over HDMI doesn't work or time is wrong
date: 2018-08-06
lastmod: 2018-08-08
---

### Sound over HDMI doesn't work
Click the Volume icon in the top-right menu bar. Set the _Default Sink_ to `sndhdmi Analog Stereo`

### HDMI Volume too low
Click the Volume icon in the top-right menu bar. Open _Volume Control.._. Select the _Output Devices_ tab. Under `sndhdmi Analog Stereo` drag the volume bar to the far right (mine goes up to 153%, 11.0dB)

### Time is wrong, shows UTC instead of local time
Time shows wrong even after updating system time from _Armbian config_ as well as `sudo dpkg-reconnfigure tzdata`. Shows time in UTC instead of local time (UTC +5)

It's probably the RTC. Set the correct system time with `sudo dpkg-reconfigure tzdata` and then manually write the time to RTC `hwclock -w`. Now `sudo reboot`.

### Bluetooth keyboard won't pair, Bluetooth Device manager would crash/never load

```bash
bluetoothctl
```

Run the following commands:

```
[bluetooth]# agent off
[bluetooth]# agent KeyboardOnly 
[bluetooth]# scan on
[bluetooth]# pair 34:XX:XX:XX:D8:F3
[bluetooth]# trust 34:XX:XX:XX:D8:F3
[bluetooth]# connect 34:XX:XX:XX:D8:F3
```
