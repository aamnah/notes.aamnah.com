---
title: '[uname] Find out system Architecture (32-bit vs. 64-bit)'
date: 2018-08-17
lastmod: 2021-02-05
---


```bash
uname # Operating System
uname -a # Kernel version and System Architecture
uname -m # Machine hardware name, tells whether system is 32-bit or 64-bit
uname -p # Processor type (usually unknown on modern Unix)
```

- `i686` or `i386` is **32-bit** 
- `x86_64` is **64-bit**

```bash
uname -a
```

```
# Ubuntu 20.04 inside WSL2 on a Windows machine - 64bit
Linux Panda 4.19.104-microsoft-standard #1 SMP Wed Feb 19 06:37:35 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux
```

### ARM

```bash
# Orange Pi Plus 2 running Armbian

aamnah@orangepiplus:~$ uname
Linux

aamnah@orangepiplus:~$ uname -a
Linux orangepiplus 3.4.113-sun8i #18 SMP PREEMPT Wed Jan 24 22:10:49 CET 2018 armv7l armv7l armv7l GNU/Linux

aamnah@orangepiplus:~$ uname -m
armv7l

aamnah@orangepiplus:~$ uname -p
armv7l
```

- FYI, ARM v7 (and below) is 32-bit. ARM v8 introduced the 64-bit istruction set.
