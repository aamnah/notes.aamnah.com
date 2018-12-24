---
title: Add Monitor Profile
date: 2018-08-26
lastmod: 2018-11-14
---


On Armbian, i'm getting no monitors listed, just one entry saying `default`. Nothing in terms of `display` or `video` with `lshw`. Nothing in _Applications > Settings > Display_.

For refernce, i have an Asus VX24AH 2K-WQHD 23.8"" monitor. Drivers for this monitor are only available for Windows

```bash
sudo lshw -C display
sudo lshw -C video
```

You can add a monitor with the `xrandr` command. **RandR** (**R**otate **and R**esize)

```bash
$ xrandr --help | grep monitor
```

```
  --listmonitors
  --listactivemonitors
  --setmonitor <name> {auto|<w>/<mmw>x<h>/<mmh>+<x>+<y>} {none|<output>,<output>,...}
  --delmonitor <name>
```

```
xrandr --listmonitors 
Monitors: 4
 0: +*DVI-I-2 5040/473x1050/296+0+0  DVI-I-2
 1: DVI-I-2~1 1680/490x1050/270+0+0 
 2: DVI-I-2~2 1680/490x1050/270+1680+0 
 3: DVI-I-2~3 1680/490x1050/270+3360+0
```

On an Orange Pi Plus 2 with Armbian connected to Asus VX24AH

```
xrandr --listmonitors
xrandr: Failed to get size of gamma for output default
Monitors: 1
 0: +default 1920/508x1080/286+0+0  default
```
The format for adding a monitor is as follows

```
xrandr --setmonitor "monitor_name" "width_px"/"width_mm"x"height_px"/"height_mm"+"x_offset_px"+"y_offset_px" "output_name"
```

```bash
xrandr --setmonitor "Asus" 2560/526x1440/296+0+0 "default"
```

- Asus 24" VX32AH monitor has screen dimensions of 526mm x 296mm
- Sony Bravia 32" TV has a screen size of 27.8" width x 15.5"  (706mm x 394mm). The resolution is HD-Ready 1280x720 (720p)

```bash
xrandr --setmonitor "Sony Bravia" 1280/706x720/394+0+0 "default"
```

```bash
output list Sony Bravia
add monitor Sony Bravia
output name Sony Bravia
xrandr: Failed to get size of gamma for output default
```
---

## NOTES

- The X conf file is at `/etc/X11/xorg.conf`
- [conf files naming convention](https://askubuntu.com/questions/671367/is-there-a-numbering-convention-for-xorg-conf-d-files)
- `fbturbo`  is  an Xorg driver for Allwinner and other ARM-based devices
- Check for errors in `cat /var/log/Xorg.0.log`

### ERROR

```
xrandr: Failed to get size of gamma for output default
```

Gamma is specified in the `xrandr --output` command. For example:

```bash
xrandr --output default --mode 1280x720_60 --gamma 1.000:1.000:1.000
```

```
xrandr: Configure crtc 0 failed
```


---

### Setting up the monitor in `/etc/X11/xorg.conf.d`

```bash
sudo touch 05-asus_vx24ah.conf
```


Links
---

- [Xorg Manual](https://www.x.org/archive//X11R7.7-RC1/doc/man/man5/xorg.conf.5.xhtml)
- [RandR Manual](http://www.straightrunning.com/tools/xrandr.html)
- [XRandR - Arch Wiki](https://wiki.archlinux.org/index.php/xrandr)
- https://askubuntu.com/questions/659381/use-one-monitor-as-multiple-monitors/998429#998429
