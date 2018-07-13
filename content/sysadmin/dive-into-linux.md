---
title:  Dive into Linux (workshop notes)
description: Notes for 'Dive into Linux' workshop at Makeistan
date: 2017-09-23
---

Hardware > Kernel (Ubuntu/Android) > OS
Linux is a Kernel, Android uses that Kernel but the OS on top is different

Desktop Environmentss (basically a theme on top of the OS)

- GNOME
- KDE


Package Management

- Debian `apt`
- CentOS `yum`
- Fedora `dng`
- FreeBSD `make`

Linux code you either get from marketplace or you compile it.

- Terminal makes batch operation really simple and fast
- Linux let's you make your own commands (using Bash or Python)

#### Viruses

- Worm for execution of modules
- Link file for execution of copied files

#### System Administration

- Web dev and deployments
- Hypervisors (lookup clustering. let's you run different OSes in **parallel** - instead of dual boot where you can only run one OS at a time. Labs with mainframes. Gaming lounges with one main computer with all the GPUs and high-end rigs. You can share the hardware resources.)
  - VMware
  - Virtualbox
  - Proxmox (Linux, opensource)
  - Hyper-V
  - ESXI (Linux, backed by VMware)
- Networks
  - pfSense
  - OPNSense
  - NAS

pfSense makes a normal computer a router. Router = firewall + switch + WiFi antennas. Routers handle networks. Allocation of resources, IP addresses etc.

#### IoT and Operation Specific Devices (Ubiquitous Computing)
##### Hardware
- Raspberry Pi
- Intel's Joule (people made a Transformer using it)
- Intel's Edison (wearables)

##### Software
-  OpenELEC
- OpenBTS (a full communication network, opensource telecom network)

Intel's Joule is good for image processing, 3D scanning etc.

#### Hacking
- Hacking (altering something that already exists) vs. Making (creating something from scratch. Makeistan is a maker's lab)
- Linux vs. Windows
- Tools (RAT - Remote Access Tool) and Scripts
- Network Administration (Routers let you access all computers on the network, can redirect traffic, password protect pages etc.)
- CCNA
- CEH (Certified Ethical Hacker)

ways

- DNS spoofing (showing some other site because you messed with the router)
- SET (Social Engineering Toolkit, skiddies)

#### What's next?
- Research 
- Freelancing