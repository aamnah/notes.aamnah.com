---
title: SSH Tunneling / Port Forwarding
permalink: ssh-tunnel-port-forward
ctime: 2015-11-15
mtime: 2017-03-13
---

```bash
ssh -f -L 2222:54.86.218.65
```

```bash
ssh -f -L 2222:vortex.myserver.com:22 localhost -N
```

- `-f` force
- `-L` local 
- `-N` don't execute any commands at remote host
- `2222` is local port
- `vortex.myserver.com` is remote server
- `22` is remote port
- `localhost` is the system we're creating an alias for

It looks like you have connected to yourself, but what you have done is you've _tunneled_ your connection on the `2222` local port. Now you have a gateway to a remote network.