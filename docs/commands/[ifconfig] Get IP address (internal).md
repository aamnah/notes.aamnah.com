`ifconfig` is for configuring a network _interface_.


## Get IP by interface (eth, wlan, lo etc)

```sh
ifconfig $1 | grep "inet addr" | awk -F: '{print $2}' | awk '{print $1}'
```

![Screenshot 2015-12-02 16.09.28.png](resources/E409342ADEABA24414285206B68A05C2.png) 

`grep` prints lines mathcing a pattern
`awk` is a pattern scanning and processing language.

### interfaces
eth0 = Ethernet
wlan0 = Wi-Fi
lo = Local Network (127.0.0.1)

inet = TCP/IP, default
inet6 = IPv6

See more about [linux interface][interfaces]. `ifconfig -l` on a Mac lists all inetrfaces available.

## Get IP of every interface

```sh
ifconfig |grep -B1 "inet addr" |awk '{ if ( $1 == "inet" ) { print $2 } else if ( $2 == "Link" ) { printf "%s:" ,$1 } }' |awk -F: '{ print $1 ": " $3 }'
```

![Screenshot 2015-12-02 16.26.22.png](resources/F9399DFCDA8F429CD27FF7571FE0ABAD.png)

## Get IPv6

    ifconfig eth | grep --color 'inet6'

![Screenshot 2015-12-02 16.47.48.png](resources/8C3D7F840B230E811C7C30B24A18BC10.png)

OR

    ifconfig eth | grep 'inet6' | awk '{print $3}'

![Screenshot 2015-12-02 16.42.35.png](resources/0540FFD2F4BF3DFF76B758F8D728128B.png)
    
## external IP
You can curl an _endpoint_ for your external public IP, like so:

    curl http://ipecho.net/plain; echo

There are plenty of services that give you your public IP address by going to a URL. You can then curl that URL to see your extrenal public IP in CLI.

Some alternatives are:

    curl http://ip.appspot.com/
    curl https://icanhazip.com/

[Linux: Get IP (internal/external) on Command Line/Shell](http://www.if-not-true-then-false.com/2010/linux-get-ip-address/)
[interfaces]: https://wiki.openwrt.org/doc/networking/network.interfaces
http://superuser.com/questions/468727/how-to-get-the-ipv6-ip-address-of-linux-machine