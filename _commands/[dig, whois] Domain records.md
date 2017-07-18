---
title: '[dig, whois] Domain records'
subtitle: Use the dig and whois commands to get DNS and Registration records of any domain
permalink: dig-whois-domain-records
ctime: 2017-03-13

---

## Registration details

`whois domain.com` will return domain registration details for domain.com, including when it was registered, who registered it, when it was created and who is the contact.

`dig` is another useful command. You can use the `dig +short` to only list values.

## Name Servers

```bash
whois aamnah.com | grep -i --color "Name Server:"
```

OR

```bash
dig NS aamnah.com
```

![cmd-dig-ns](/assets/img/cmd-dig-ns.png)

## NS, TXT, MX, SOA, SPF records
You can either pass the record as an argument

```bash
dig MX aamnah.com
```

![dig MX aamnah.com](/assets/img/cmd-dig-mx-2.png)

or use `grep` to find it in the output of `dig`

```bash
dig aamnah.com | grep --color "MX"
```

![cmd-dig-mx](/assets/img/cmd-dig-mx.png)

![cmd-dig.png](/assets/img/cmd-dig.png)

## Get technical contact for a domain

```bash
whois espn.com | grep -i --color "Tech Name:\|Tech Phone:\|Tech Email:"
```

![cmd-whois-2](/assets/img/cmd-whois-2.png)


## Creation and Expiry dates

```bash
whois espn.com | grep -i --color "Creation date:\|Expiration date:"
```
    
![cmd-whois](/assets/img/cmd-whois.png)