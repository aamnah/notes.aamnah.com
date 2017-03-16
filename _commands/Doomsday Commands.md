---
layout: post
title: Doomsday Commands
subtitle: One-liners to wipe disk data
permalink: doomsday-commands
ctime: 2016-01-19
---

### Delete everything

Use these to annihilate your computer.

```bash
sudo rm -rf / --no-preserve-root
sudo rm -rf /*
```

Deletes everything, rm rf's the root directory.

```bash
sudo shred dev/sda

# fill disk with zeroes
dd if=/dev/zero of=/dev/sda 
```

completely wipes all data on a drive by overwriting the whole thing, i.e. write zeros (or pseudorandom numbers) over the entire drive

**dd** has a nickname as **Disk Destroyer** as it's very easy to blank the wrong device :)

```bash
# fill disk with pseudorandom data
dd if=/dev/random of=/dev/sda bs=1m 
```

The command reads "copy input file /dev/[whatever] to output file /dev/[whatever], by copying 1MB at a time (the blocksize)".

### Fork bomb

```bash
:(){ :|:& };:
```
 
### Notes
- Most of these were inspired from TwitchInstallArchLinux chat.
- [Fork bomb](http://www.unixmen.com/fork-bomb-can-prevent-danger/)

