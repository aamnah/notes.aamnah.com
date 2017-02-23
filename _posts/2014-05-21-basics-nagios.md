---
layout: post
title: Nagios
permalink: basics-nagios
date: 2014-05-21 16:31:32.000000000 +05:00
type: post
published: true
status: publish
categories:
- SysAdmin
tags:
- nagios
---

- Install: `apt update && apt install -y nagios3`
- Check install: `dpkg -l | grep -i nagios`
- Default login: `nagiosadmin, g_!_o`  
- Listing packages of nagios: `dpkg -L nagios3`


NOTES
---

- **aptitude** is a front-end for **dpkg**. `dpkg` is the package manager.
