---
layout: post
title: Change Raspberry Pi's system startup message (MOTD)
permalink: change-raspberry-pi-motd-system-startup-message
categories: how-to
tags: raspberry pi
---

MOTD = **M**essage **O**f **T**he **D**ay

Add the following to `~/.bashrc`

	{% highlight bash %}
	################################
	# CUSTOM MOTD FOR RASPBERRY PI	
	################################

	let upSeconds="$(/usr/bin/cut -d. -f1 /proc/uptime)"
    let secs=$((${upSeconds}%60))
    let mins=$((${upSeconds}/60%60))
    let hours=$((${upSeconds}/3600%24))
    let days=$((${upSeconds}/86400))
    UPTIME=`printf "%d days, %02dh %02dm %02ds" "$days" "$hours" "$mins" "$secs"`

    # get the load averages
    read one five fifteen rest < /proc/loadavg

    echo "$(tput setaf 2)
       .~~.   .~~.    `date +"%A, %e %B %Y, %r"`
      '. \ ' ' / .'   `uname -srmo`$(tput setaf 1)
       .~ .~~~..~.
      : .~.'~'.~. :   Uptime.............: ${UPTIME}
     ~ (   ) (   ) ~  Memory.............: `cat /proc/meminfo | grep MemFree | awk {'print $2'}`kB (Free) / `cat /proc/meminfo | grep MemTotal | awk {'print $2'}`kB (Total)
    ( : '~'.~.'~' : ) Load Averages......: ${one}, ${five}, ${fifteen} (1, 5, 15 min)
     ~ .~ (   ) ~. ~  Running Processes..: `ps ax | wc -l | tr -d " "`
      (  : '~' :  )   IP Addresses.......: `/sbin/ifconfig wlan0 | /bin/grep "inet addr" | /usr/bin/cut -d ":" -f 2 | /usr/bin/cut -d " " -f 1` and `wget -q -O - http://icanhazip.com/ | tail`
       '~ .~~~. ~'    Free Disk Space....: `df -Pk | grep -E '^/dev/root' | awk '{ print $4 }' | awk -F '.' '{ print $1 }'`k on /dev/root
           '~'        Weather............: `curl -s "http://rss.accuweather.com/rss/liveweather_rss.asp?metric=1&locCode=ASI|PK|PK007|LAHORE|" | sed -n '/Currently:/ s/.*: \(.*\): \([0-9]*\)\([CF]\).*/\2$
      $(tput sgr0)"
      {% endhighlight %}




![Raspberry Pi - Custom MOTD]({{site.url}}assets/img/raspberrypi-motd.png)

### Location:
For the location info, we are using `curl` to get live weather updates from the AccuWeather website. To change the location for the weather edit the `locCode=ASI|PK|PK007|LAHORE|` bit. Mine was Lahore at the time i set this. Here is an extensive list of [region codes for Accuweather](http://pastebin.com/dbtemx5F).

### Remove last login text:

Change from 'PrintLastLog yes' in `/etc/ssh/sshd_config` to

	PrintLastLog no


Sources:
---

- [Custom MOTD - Message of the Day](http://www.raspberrypi.org/forums/viewtopic.php?f=91&t=23440) 
- [Customize your MOTD - Linux](http://www.mewbies.com/how_to_customize_your_console_login_message_tutorial.htm)