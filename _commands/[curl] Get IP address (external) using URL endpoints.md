---
layout: post
title: '[curl] Get IP address (external) using URL endpoints'
permalink: curl
command: curl
---

## external IP using `dig`

```bash
dig +short myip.opendns.com @resolver1.opendns.com
```

This asks the IP address of `myip.opendns.com` from the name server `resolver1.opendns.com` (something you trust), which will return your external IP address.

`curl` works over HTTP, and therefore less efficient than the direct DNS query with dig.

## external IP using `curl`
You can curl an _endpoint_ for your external public IP, like so:

```bash
curl http://ipecho.net/plain; echo
```

There are plenty of services that give you your public IP address by going to a URL. You can then curl that URL to see your extrenal public IP in CLI.

Some alternatives are:

```bash
curl https://icanhazip.com/
curl http://ifconfig.me/ip
curl http://ip.appspot.com/
curl http://ip-addr.es/
curl http://eth0.me/
curl http://curlmyip.com/
curl http://checkip.dyndns.org/ 
curl -s http://checkip.dyndns.org/ | grep -o "[[:digit:].]\+" # get onlt the IP digits
```

You can also get other details as well. For example:

```bash
curl ifcfg.me/all
```

will give you your ISP and Country as well

![Screenshot 2015-12-02 17.34.32.png](resources/327F4B5F6F6D4C813E9880F9D29F48DA.png)

Notes
---
- `icanhaz` should be the most preferred since it works over SSL (https). It also seems to be well monitored for uptime.
- ifcfg.me is better than ifconfig.me.
- ifcfg.me has other interesting info as well: ISP, Country

### icanhaz tools
- icanhazip.com – returns your IP address
- icanhazptr.com – returns the **reverse DNS record** (PTR) for your IP
- icanhaztrace.com – returns a **traceroute** from my servers to your IP address
- icanhaztraceroute.com – returns a **traceroute** from my servers to your IP address
- icanhazepoch.com – returns the **epoch time** (also called Unix time)
- icanhazproxy.com – can determine if your traffic is being proxied

Get JSON
---

```bash
https://wtfismyip.com/json
```

OR

```bash
curl https://wtfismyip.com/json
```

Links
---
- [CommandLineFu: Get your external IP address](http://www.commandlinefu.com/commands/view/5427/get-your-external-ip-address#comment)
- [icanhaz.com FAQ](https://major.io/icanhazip-com-faq/)
- [ifcfg.me Commandlist](http://4.ifcfg.me/?)
- [Coderwall: Extract your external IP using command line tools](https://coderwall.com/p/lyrjsq/extract-your-external-ip-using-command-line-tools)