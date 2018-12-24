---
title: Install WebTorrent Desktop on Armbian (OrangePi Plus2 / RaspberryPi 3)
description: Attempts at compiling WebTorrent from source to make it work on Armbian `armhf` architecture, i.e. ARM chips based hardware, for example the Raspberry Pi 2/3.
date: 2018-08-08
---

**tl;dr**: don't bother, my ARM hardware isn't powerful enough for Electronjs which WebTorrent is built with.

## The Plan

- Install Nodejs, because WebTorrent is built with Nodejs and JavaScript
- Clone the WebTorrent repo and install the node modules -- STUCK HERE --
- Run the app to make sure it works on `armhf` architecture
- Package the app as a Linux app
- Build from source


## ABORTED

- Because the `npm install` was stuck
- Because the prerequisites for Electron (which WebTorrent runs on) are a minimum of **25GB** of disk space and **8GB** of RAM. Both of which i don't have with OrangePi or RaspberryPi or any other ARM hardware. Meh.

Links
---

- [WebTorrent](https://webtorrent.io/desktop)
- [Github: WebTorrent Desktop](https://github.com/webtorrent/webtorrent-desktop)
- [Electron Documentation: Build Instructions (Linux)
](https://electronjs.org/docs/development/build-instructions-linux#build-instructions-linux)
