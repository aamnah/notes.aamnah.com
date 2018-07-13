---
title: Resetting an 'Unavailable' Serial Number on a Mac
date: 2017-11-11
---

### tl;dr
- Note down your serial number (printed on underside of laptop, or purchase receipt)
- Download and write [Blank Board Serializer][BBS] `.dmg` to a USB
- Boot from USB by pressing the `C` key
- Follow instructions and enter your serial number

---

Not having a serial number is usually due to a hardware change. Something was repaired, added (e.g. extra RAM) or replaced. The next common reason is software upgrade. Upgrading to OS X El Capitan has been reported to make the serial number go missing (the case with my 2013 Macbook Air, never repaired and bought directly from Apple in Dubai).

Some software are reported to not work if you're missing the serial number. For example: FaceTime won't login, or [Messages won't connect](https://www.engadget.com/2013/01/14/if-messages-on-os-x-cant-connect-check-your-serial-number/). I have faced no connectivity issues on current macOS High Sierra though. 

Do note that the software used to do this, **Blank Board Serializer**, is provided by Apple to all authorized service providers, and you can get your laptop to your local Apple authorized place and they'll 'serialize' the 'logic board' for you for free. It takes 5 minutes.  If they don't know how to do that I'd be questioning their abilities.

The only reason i bothered to add the Serial number myself was, well, why not? If you wan't to do it yourself, follow along..

## Setting your serial number on a Mac


#### Find out what your Serial number is
If you don't know what your serial number is, it's the last piece of information printed on the **underside of your laptop**. It'll also be mentioned on the **purchase receipt**, and on a barcode label on the **original packaging**. Or find out using this [Apple support article](https://support.apple.com/en-gb/HT204308) as a reference.

Write it down, you'll need to enter it later.


#### Make sure one is not already set
You can only set a serial number if one is not already set. Make sure you don't have a serial number by either checking **About This Mac** from the Apple menu 

![About This Mac - serial number missing](about_this_mac.png)

or running the following command from the Terminal:

```bash
system_profiler SPHardwareDataType
```

```
Hardware:

    Hardware Overview:

      Model Name: MacBook Air
      Model Identifier: MacBookAir6,2
      Processor Name: Intel Core i5
      Processor Speed: 1.3 GHz
      Number of Processors: 1
      Total Number of Cores: 2
      L2 Cache (per Core): 256 KB
      L3 Cache: 3 MB
      Memory: 4 GB
      Boot ROM Version: MBA61.0103.B00
      SMC Version (system): 2.13f15
      Serial Number (system): Not Available
      Hardware UUID: D99E999E-A999-9999-AD99-A999999AE99B
```

## Steps

1. Burn the disk image to a USB. Keep the USB connected to your machine
2. Reboot the computer while pressing the `C` key
3. Once the Blank Board Serializer (BBS) has started, follow on-screen instructions


### 1. Burn the BBS image to a USB
I prefer burning to a USB since all Mac machines have a USB port, a CD drive is not always there (case in point my MacBook Air). You can use a USB as small as 1GB (the actual file we're going to write is just 40MB)

Download [Blank Board Serializer][BBS]. It's an Apple only, unsupported tool that let's you write a serial number. Once downloaded, uncompress the zip file and write the `.dmg` inside to the USB using **Disk Utility**

### 2. Reboot form USB
Reboot and immediately press the `C` key. This will make your Mac start up from the connected CD, DVD, or USB thumb drive (or show you the [Startup Manager](https://support.apple.com/en-gb/HT202796) where you can select which disk to boot from).

### 3. Enter your serial number
Once BBS has started, follow the on screen instructions.
 

Links
---
- [iCloud problems with Mac OS (setting your mac serial number)](https://rogersm.net/icloud-problems-mountain-lion-serial-number)
- [StackOverflow: What causes a Mac to lose its serial number?](https://apple.stackexchange.com/questions/77482/what-causes-a-mac-to-lose-its-serial-number)
- [Apple Discussions: Mac Pro Missing Serial Number after SSD install](https://discussions.apple.com/thread/5145167?tstart=0)
- [Apple Support: Startup key combinations for Mac](https://support.apple.com/en-us/HT201255)
- [YouTube: Writing a Serial Number to a Mac Logic Board](https://www.youtube.com/watch?v=GYkGgugiVHA)


[BBS]: https://www.dropbox.com/s/t6i9bzn165en6d4/Blank%20Board%20Serializer.zip?dl=0