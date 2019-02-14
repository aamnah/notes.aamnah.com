---
title: Add missing Monitor Resolution profile
description: Add missing resolution setting for Acer ASpire 5742 (1366x768) to be used with a 24" Dell P2414H capable of FHD resolution (1920x1080)
date: 2019-01-21
---

### tl;dr

1. get Modeline `cvt 1366 768`
2. create and add new mode with `xrandr` based on the generated modeline
3. add settings to `~/.xprofile` to preserve them, so the settings are still there when you restart


```bash
# Add 1366x768@60Hz
xrandr --newmode "1368x768"  85.86  1368 1440 1584 1800  768 769 772 795  -HSync +Vsync
xrandr --addmode VGA-1 1368x768
xrandr --output VGA-1 --mode 1368x768
```

## get Modeline

```bash
cvt 1366 768
```

```bash
# 1368x768 59.88 Hz (CVT) hsync: 47.79 kHz; pclk: 85.25 MHz
Modeline "1368x768_60.00"   85.25  1368 1440 1576 1784  768 771 781 798 -hsync +vsync
```

## create and add mode

```bash
# Add the resolution supported by Acer Aspire 5742 on VGA port
xrandr --newmode "1368x768_60.00"   85.25  1368 1440 1576 1784  768 771 781 798 -hsync +vsync
xrandr --addmode VGA-1 1368x768_60.00
```

```bash
# find the monitor identifier to set the mode for
xrandr --listmonitors
```

```
Monitors: 2
 0: +*LVDS-1 1366/344x768/194+0+0  LVDS-1
 1: +VGA-1 1024/271x768/203+1366+0  VGA-1
```

## set output mode

```bash
xrandr --output VGA-1 --mode 1368x768_60.00
```

## create .xprofile

Create a `~/.xprofile` file and simply add the commands for the programs you wish to start with the session

```bash
touch ${HOME}/.xprofile
echo "
# Add the resolution supported by Acer Aspire 5742 on VGA port
xrandr --newmode "1368x768_60.00"   85.25  1368 1440 1576 1784  768 771 781 798 -hsync +vsync
xrandr --addmode VGA-1 1368x768_60.00
xrandr --output VGA-1 --mode 1368x768_60.00
" >> ${HOME}/.xprofile
```

## Troubleshooting

- if the resolution is not working, try changing the frequency. You can specify the frequency when getting modeline with the `gtf` command

```bash
gtf 1366 768 30 -x
```

```bash
# get video controller details
sudo lshw -C video
```

Links
---

- [AskUbuntu: Can't set a higher screen resolution in a external display in a Dell Mini 10v laptop](https://askubuntu.com/questions/73007/cant-set-a-higher-screen-resolution-in-a-external-display-in-a-dell-mini-10v-la)
