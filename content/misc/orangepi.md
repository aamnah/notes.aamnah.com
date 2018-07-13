---
title: Orange Pi+ 2 - Getting started and headaches
date: 2018-07-10
category: hardware
---

While the Orange Pi+ 2 has better hardware, the software support for it sucks.

### What came pre-installed
An Android looking OS that has 5 icons, but none of the icons open anything or go anywhre

### Armbian
So far i have tried 2 different images (Ubuntu Xenial and Debian , both mainline kernels), none of them gave me a display. I go as far as loading kernel, and then the screen goes black with the monitor displaying an _out of range_ message. The monitor i have is Asus VX24AH (WQHD / 2K resolution).

Turns out if you want a desktop, you have to use the _legacy_ kernel.  While the _mainline_ kernels do say _Server or light desktop usage scenarios_, light desktop does not mean you will get a minimal desktop. You will end up getting no desktop with either of the images with the mainline kernel.

Then tried the Ubuntu image with legacy kernel and got a working prompt. Onwards!

First thing it asks is to create a user (which is automatically added to sudoers). If you don't create the user, you don't get the desktop environment, or so it says on the prompt.

### Screen Resolution

Next is setting your screen resolution. Give the command for your appropriate resolution

```bash
h3disp -m 1080p60 -c 2
```
Even though i have a 2K monitor, i ended up selecting 1080p because 2K/QHD wasn't an available mode (There are _patches_ to set custom modes but they override the default ones, and the patches are not that easy to apply either) 

### Moving OS to eMMC
Orange Pi+ 2 comes with 16GB of built-in storage, meaning i don't need to use an SD card to run the OS, i can run it directly from the inbuilt storage. 16GB is plenty of any Linux distro. I'm running Armbian here.

Run:

```bash
nand-sata-install
```

- Select boot from eMMC / NAND
- Select `ext4`

Now wait. For me the wait was 'approximately 35 minutes'.. Go get your coffee, eat some food, stretch.

As someone who already has 4 corrupted micro sd cards (power outages mostly, improper shutdowns), using the eMMC is preferred.

i honestly wouldn't recommend this board to any enthusiast, it will suck the enthusiasm out of you.


Links
---
- [Orange Pi Plus 2](http://www.orangepi.org/orangepiplus2/)
- [Armbian - Orange Pi+ 2](https://www.armbian.com/orange-pi-plus-2/)
- [Armbian Documentation](https://docs.armbian.com/User-Guide_Getting-Started/)