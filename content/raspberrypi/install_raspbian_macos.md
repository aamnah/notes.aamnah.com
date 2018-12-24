---
title: Installing Raspbian on SD Card (macOS)
date: 2017-12-19
---

```bash
IMAGE=""
SDCARD="disk3" # identify SD partition card with `diskutil list`

# unmount card
diskutil unmountDisk ${SDCARD}

# write to card
sudo dd bs=1m if=${IMAGE} of=/dev/r${SDCARD}
```


Short:

1. mount card, `diskutil list` and identify your card partition, something along the lines of `disk2s1`. make note.
2. unmount card, `sudo diskutil unmount disk2s1`
3. change naming convention, `disk2s1` to `rdisk2`. Getting the name right is important, so is adding the **R** at the start.
4. `sudo dd bs=1m if=~/FILE/LOCATION of=/dev/rdisk2`
5. wait till done. It’ll take a while. (takes around 3-6 mins usually)
6. eject. `sudo diskutil eject /dev/rdisk2`

Note: 

- On a Mac, with no USB peripherals attached, the SD Card is usually mounted on `/dev/disk2/`. If that’s the case, you only need to unmount the card (otherwise it’ll give you a “dd: /dev/rdisk2: Resource busy” error) and run the `dd` command:

```bash
sudo dd bs=1m if=/Users/aamnah/Downloads/2016-02-09-raspbian-jessie.img of=/dev/rdisk2
``` 


If you are comfortable with the command line, you can image a card without any additional software. Run:

```bash
diskutil list
```

identify the disk (not partition) of your SD card. e.g. disk4 (not disk4s1)

```bash
diskutil unmountDisk /dev/<disk# from diskutil>
```
e.g. diskutil unmountDisk /dev/disk4

```bash
sudo dd bs=1m if=<your image file>.img of=/dev/<disk# from diskutil>
```
e.g. `sudo dd bs=1m if=2014-09-09-wheezy-raspbian.img of=/dev/disk4`

(This will take a few minutes)

Detailed:

1. These commands and actions need to be performed from an account that has administrator privileges.
2. [Download the image](http://www.raspberrypi.org/downloads) from a mirror or torrent
3. Extract the image:
    * `unzip ~/Downloads/2012-12-16-wheezy-raspbian.zip`
    * (or: just double click the zip, it will extract automatically)
4. From the terminal run `diskutil list`
5. Connect the SD card reader with the SD card inside
6. Run `diskutil list` again and look for the new device that wasn't listed last time. Record the device name of the filesystem's partition, for example, `/dev/disk3s1`
7. Unmount the partition so that you will be allowed to overwrite the disk:
    * `sudo diskutil unmount /dev/disk3s1`
    * (or: open Disk Utility and unmount the partition of the SD card (do not eject it, or you have to reconnect it)
8. Using the device name of the partition work out the raw device name for the entire disk, by omitting the final "s1" and replacing "disk" with "rdisk" (this is very important: you will lose all data on the hard drive on your computer if you get the wrong device name. **r** is for removable i think). Make sure the device name is the name of the whole SD card as described above, not just a partition of it (for example, rdisk3, not rdisk3s1. Similarly you might have another SD drive name/number like rdisk2 or rdisk4, etc. -- recheck by using the df -h command both before & after you insert your SD card reader into your Mac if you have any doubts!):
    * For example, /dev/disk3s1 => /dev/rdisk3
9. In the terminal write the image to the card with this command, using the raw disk device name from above (read carefully the above step, to be sure you use the correct rdisk# here!):
    * `sudo dd bs=1m if=~/Downloads/2015-05-05-raspbian-wheezy.img of=/dev/rdisk3`
    * if the above command report an error(dd: bs: illegal numeric value), please change bs=1M to bs=1m
    * (note that dd will not feedback any information until there is an error or it is finished, information will show and disk will re-mount when complete. However if you are curious as to the progresss - ctrl-T (SIGINFO, the status argument of your tty) will display some en-route statistics).
10. After the dd command finishes, eject the card:
    * `sudo diskutil eject /dev/rdisk3`
    * (or: open Disk Utility and eject the SD card)
11. Insert it in the Raspberry Pi, and have fun


## Backup/Clone and existing card

```bash
sudo dd if=/dev/sdb of=sd.img bs=4M
```

1. Make sure you know which device the SD card is, or you can mess up our hard drive. Do this by typing `df` or `diskutil list` and it should show you the SD card and how big it is. Also can be done in Disk Utility
2. After doing the above, unmount the SD card prior to running `dd`. This can be done at the command line or in Disk Utility.

- `if` = input file
- `of` = output file
- `bs` = block size

```bash
# backup:
dd if=/dev/disk2 of=sd.img bs=4m

# restore:
dd if=sd.img of=/dev/disk2 bs=4m
```

Links
---
- [elinux](http://elinux.org/RPi_Easy_SD_Card_Setup#Using_Mac_OSX)
- [How to Clone Your Raspberry Pi SD Card for Super Easy Reinstallations](http://lifehacker.com/how-to-clone-your-raspberry-pi-sd-card-for-super-easy-r-1261113524) start at 5m:57s