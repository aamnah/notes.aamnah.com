---

title: Custom Raspberry Pi MOTD (Message Of The Day)
slug: howto-raspberry-pi-motd-message-of-the-day
date: 2014-05-21 16:25:33.000000000 +05:00
type: post
published: true
status: publish
categories:
tags:
- raspberry pi
- linux
---

```bash
let upSeconds="$(/usr/bin/cut -d. -f1 /proc/uptime)"
let secs=$((${upSeconds}%60))
let mins=$((${upSeconds}/60%60))
let hours=$((${upSeconds}/3600%24))
let days=$((${upSeconds}/86400))
UPTIME=`printf "%d days, %02dh%02dm%02ds" "$days" "$hours" "$mins" "$secs"`

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
    (  : '~' :  )   IP Addresses.......: `/sbin/ifconfig eth0 | /bin/grep "inet addr" | /usr/bin/cut -d ":" -f 2 | /usr/bin/cut -d " " -f 1` and `wget -q -O - http://icanhazip.com/ | tail`
    '~ .~~~. ~'    Weather............: `curl -s "http://rss.accuweather.com/rss/liveweather_rss.asp?metric=1&locCode=EUR|UK|UK001|NAILSEA|" | sed -n '/Currently:/ s/.*: \(.*\): \([0-9]*\)\([CF]\).*/\2°\3, \1/p'`
        '~'
$(tput sgr0)"

Free Disk Space....: `df -Pk | grep -E '^/dev/sda1' | awk '{ print $4 }' | awk -F '.' '{ print $1 }'`k on /dev/sda1
```
    
I had to change eth0 to wlan0 in order to show the local IP of Raspberry Pi. This depends on the way you are connected to the network, change this accrodingly. eth0 is for ethernet and wlan0 is for wifi.
    
### Changing Location

```bash
    For Lahore: 
    
    	ASI|PK|PK007|LAHORE 
```
    	
### Remove existing stuff

```bash
sudo nano motd
```

Press Ctrl+K for a few seconds. Then Ctrl+O, Enter and Ctrl+X
