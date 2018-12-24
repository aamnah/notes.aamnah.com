---
title: Troubleshooting Audio
date: 2017-12-16
---

Situation: Audio is not working over HDMI

### Possibility 1: The TV/Monitor is not being detected in CEA mode

DMT is only well defined in DVI and DVI can not do audio. Audio only works in CEA modes..

```bash
# run to detect if tv/monitor mode 
tvservice -s

# tvservice -m CEA
# tvservice -m DMT
```

Uncomment the following in `/boot/config.txt` to force an HDMI mode. It can make audio work in DMT (computer monitor) modes.

NOTE: `/boot/config.txt` is kinda like the Linux version of BIOS settings

```
# Force the monitor to HDMI mode so that sound will be sent over HDMI cable
hdmi_drive=2
```

Now reboot for the changes to take effect

```bash
sudo reboot
```


Links
--- 
- [RaspberryPi Docs: config.txt](https://www.raspberrypi.org/documentation/configuration/config-txt/README.md)
