---
title: Add Host configurations to ssh config
description: Add Host configurations and aliases (shortcuts) for easy ssh connections
date: 2018-12-13
---


```bash
# ~/.ssh/config

# server on Amazon LightSail
Host lightsail
  HostName tornado.mycooldomain.com
  User kunami
  IdentityFile ~/.ssh/id_rsa
  Port 4234
```

- `Host` is followed by whatever alias you want to give the host definition
- `HostName` could be an FQDN or a numeric IP address
- `IdentityFile` is the SSH key used for connecting to the server. I always use a key..
- `User` and `Port` are self explanatory. `Port` is good to specify here if you use custom ports (which you should). 

You can also do other cool stuff like tunneling and port forwarding

Now you can do this:

```bash
ssh lightsail
```

instead of this:

```bash
ssh -i ~/.ssh/id_rsa -p 4234 kunami@tornado.mycooldomain.com
```

Links
---
- [Manual: ssh_config](https://linux.die.net/man/5/ssh_config)
- [Simplify Your Life With an SSH Config File](https://nerderati.com/2011/03/17/simplify-your-life-with-an-ssh-config-file/)