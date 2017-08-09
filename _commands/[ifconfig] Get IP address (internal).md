---
title: '[ifconfig] Get IP address of your machine (internal & external)'
permalink: ifconfig-get-internal-external-ip-address
ctime: 2015-12-02
---

<div class="Post-note Post-note--info">
NOTE: Much simpler is <code>hostname -I</code> or <code>hostname --all-ip-addresses</code> which gives you all addresses for the host, IPV4s as well as IPV6s. Check <code>hostname -h</code> for more nifty details
</div>

`ifconfig` is for configuring a network _interface_. (**I**nter**f**ace **Conf**iguration)


## Get IP by interface (eth, wlan, lo etc)

```bash
ifconfig $1 | grep "inet addr" | awk -F: '{print $2}' | awk '{print $1}'
```

![cmd-ifconfig-3](/assets/img/cmd-ifconfig-3.png) 

`grep` prints lines mathcing a pattern
`awk` is a pattern scanning and processing language.

### interfaces
- eth0 = Ethernet  
- wlan0 = Wi-Fi  
- lo = Local Network (127.0.0.1)  
- inet = TCP/IP, default  
- inet6 = IPv6

See more about [linux interface][interfaces]. `ifconfig -l` on a Mac lists all inetrfaces available.

## Get IP of every interface

```bash
ifconfig |grep -B1 "inet addr" |awk '{ if ( $1 == "inet" ) { print $2 } else if ( $2 == "Link" ) { printf "%s:" ,$1 } }' |awk -F: '{ print $1 ": " $3 }'
```

![cmd-ifconfig-2](/assets/img/cmd-ifconfig-2.png)

## Get IPv6

```bash
ifconfig eth | grep --color 'inet6'
```

![cmd-ifconfig](/assets/img/cmd-ifconfig.png)

OR

```bash
ifconfig eth | grep 'inet6' | awk '{print $3}'
```

![cmd-ifconfig-4](/assets/img/cmd-ifconfig-4.png)
    
## external IP
You can curl an _endpoint_ for your external public IP, like so:

```bash
curl http://ipecho.net/plain; echo
```

There are plenty of services that give you your public IP address by going to a URL. You can then curl that URL to see your extrenal public IP in CLI.

Some alternatives are:

```bash
curl http://ip.appspot.com/
curl https://icanhazip.com/
```

Links
---
- [Linux: Get IP (internal/external) on Command Line/Shell](http://www.if-not-true-then-false.com/2010/linux-get-ip-address/)
- http://superuser.com/questions/468727/how-to-get-the-ipv6-ip-address-of-linux-machine

[interfaces]: https://wiki.openwrt.org/doc/networking/network.interfaces
