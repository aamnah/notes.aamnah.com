---
title: How to add and enable 2K display resolution for your monitor
description: Adding 2K 2560x1440 (WQHD) resolution for my Asus VX24AH monitor on an Armbian based Orange Pi Plus 2
status: draft
date: 2018-08-26
lastmod: 2019-01-08
---

### tl;dr
this was all in vain since the Orange Pi Plus 2 i was trying to configure didn't support outputting 2K resolution.. But the method of how to add custom resolution is still valid.

---

```bash
# create mode
xrandr --newmode "2560x1440_60.00"  312.25  2560 2752 3024 3488  1440 1443 1448 1493 -Hsync +Vsync

# add mode
xrandr --addmode default 2560x1440_60.00

# set mode for current display
xrandr --output default --mode 2560x1440_60.00
```


### Get a _Modeline_ using `cvt` or `gtf` 

`cvt` calculates VESA CVT mode lines

```bash
gtf 2560 1440 60 -x
```

```
# 2560x1440 @ 60.00 Hz (GTF) hsync: 89.40 kHz; pclk: 311.83 MHz
Modeline "2560x1440_60.00"  311.83  2560 2744 3024 3488  1440 1441 1444 1490  -HSync +Vsync
```

`gtf` calculates VESA GTF mode lines

```bash
cvt 2560 1440 60
```

```
# 2560x1440 59.96 Hz (CVT 3.69M9) hsync: 89.52 kHz; pclk: 312.25 MHz
Modeline "2560x1440_60.00"  312.25  2560 2752 3024 3488  1440 1443 1448 1493 -hsync +vsync
```

> CVT is a newer (i.e., less ancient) standard. For a LCD panel it shouldn't matter. The timings are significant only for CRT displays; and even for CRT displays the two sets of parameters should produce just about the same picture.

### Create, add and enable a custom resolution mode with `xrandr`

`xrandr` is a utility that is used to set the screen size, orientation and display outputs etc.

The `--gamma` (`--gamma <r>:<g>:<b>`) value was added to `--output` because it kept giving the error:

```
xrandr: Failed to get size of gamma for output default
```

The value for gamma was found using `xgamma`

```
# xgamma
-> Red  1.000, Green  1.000, Blue  1.000
```

Forces to use a 1024x768 mode on an output called VGA:

```bash
xrandr --newmode "1024x768" 63.50  1024 1072 1176 1328  768  771
775 798 -hsync +vsync
xrandr --addmode VGA 1024x768
xrandr --output VGA --mode 1024x768
```

### Add HD-Ready resolution (1280 x 720 - 720p)

```bash
xrandr --newmode "1280x720_60"   74.50  1280 1344 1472 1664  720 723 728 748 -hsync +vsync

xrandr --addmode default 1280x720_60

xrandr --output default --mode 1280x720_60 --gamma 1.000:1.000:1.000
```

On Armbian, if you are getting errors relaed to output, remember that there is only one HDMI port on the Orange Pi plus and the output is called `default`.


```
xrandr --fb 1280x720
xrandr: Failed to get size of gamma for output default
xrandr: specified screen 1280x720 not large enough for output default (1920x1080+0+0)
```

### Troubleshooting

- Reducing the frequency from 60Hz might work. Try _40Hz_ or _33Hz_
- Find all monitors with `xrandr --listmonitors`
- Find current resolution details with `xrandr -q`

Following are thoughts when i was getting overscan on my TV.. it had nothing to do with the confgurations though, fixed in the end by chnaging TV settings for picture

- Somewhere along the way i added a monitor profile for Asus 24" VX24AH in `/etc/X11/xorg.conf.d` and that seems to have messed up the dimensions Nope.
- I'll probably have to add a new monitor profile for the Sony Bravia 32" (KLV-32BX350) that i intend on using.. Nope. The issue was with TV's settings..
