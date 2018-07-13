---
date: 2017-01-23
title: Run JNLP Files on Ubuntu
---

```bash
sudo apt install icedtea-netx icedtea-plugin -y
```
`icedtea-netx` requires `openjdk-8-jre` and `openjdk-8-jre-headless` as dependencies so it'll install JRE (Java Runtime Environment) for you as well if you don't have that already.

- _JNLP_ is Java Network Launching Protocol
- `icdeatea-netx` is Netx implementation of JNLP
- `icedtea-plugin` is web browser plugin to execute Java applets
