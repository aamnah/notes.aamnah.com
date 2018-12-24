---
title: Date Time troubleshooting on Armbian
date: 2018-08-06
---

Set time zone

```bash
sudo dpkg-reconfigure tzdata
```

Check if `/etc/localtime` exists and if it points to the right timezone 

```bash
ls /etc
```

```
lrwxrwxrwx   1 root root      32 Aug  6 15:53 localtime -> /usr/share/zoneinfo/Asia/Karachi
```

Install `ntp` Network Time Protocol for automatically setting/updating time

```bash
sudo apt install ntp
```


Check time for RTC (your hardware may be equiped with a real time clock)

```bash
sudo hwclock --test -D
```

```
aamnah@orangepiplus:~$ sudo hwclock --test -D
sudo hwclock --test -D
hwclock from util-linux 2.27.1
Using the /dev interface to the clock.
Assuming hardware clock is kept in UTC time.
Waiting for clock tick...
...got clock tick
Time read from Hardware Clock: 1970/01/01 02:11:34
Hw clock time : 1970/01/01 02:11:34 = 7894 seconds since 1969
Time since last adjustment is 7894 seconds
Calculated Hardware Clock drift is 0.000000 seconds
Thu 01 Jan 1970 07:11:32 AM +05  .131148 seconds
```
Since Ornage Pi Plu2 (my hardware) isn't equipped with an RTC, or any options for a backup battery aren't exposed for it, it'll always show date _1.Jan.1970 + uptime_


Check if RTC time is being used by the system to set local time

```bash
sudo timedatectl
```

```
aamnah@orangepiplus:~$ sudo timedatectl 
      Local time: Mon 2018-08-06 15:59:10 PKT
  Universal time: Mon 2018-08-06 10:59:10 UTC
        RTC time: Thu 1970-01-01 02:14:03
       Time zone: Asia/Karachi (PKT, +0500)
 Network time on: yes
NTP synchronized: yes
 RTC in local TZ: no
```

Try manually writing time to RTC and see if it survives reboot. Set correct system time and run:

```bash
sudo hwclock -w
```

You can check that the writte was successful with `sudo timedatectl`

```
aamnah@orangepiplus:~$ sudo timedatectl 
      Local time: Mon 2018-08-06 16:20:15 PKT
  Universal time: Mon 2018-08-06 11:20:15 UTC
        RTC time: Mon 2018-08-06 11:20:15
       Time zone: Asia/Karachi (PKT, +0500)
 Network time on: yes
NTP synchronized: yes
 RTC in local TZ: no
```

Now, moment of truth, reboot

```bash
sudo reboot
```

Worked!

Links
---

- [Armbian Forum - Wrong time and date / hwclock timed out](https://forum.armbian.com/topic/425-wrong-time-and-date-hwclock-timed-out/)
