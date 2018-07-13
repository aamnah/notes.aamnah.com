---
title: Get all kinds of information about your Mac machine using the Terminal
date: 2017-11-11
---

```bash
# generate a System Report..
system_profiler
```

This command is the command line equivalent of going to  **About This Mac** > **System Report..**

You might need this if you write Bash scripts for example where you want to know if a program is installed on the system or not. 

If you just run the command in the Terminal, it will start outputting all kinds of information, LOADS of it, including stuff like your machine's UUID, available Wi-Fi networks, system diagnostic tests, details about what Applications are installed on the system and their versions, the fonts installed, hardware overview and so on..

So much information that you'll not be able to scroll up and see everything in Terminal. A better approach is to redirect the output to a file, which we can easily view and search. I ended up with a file with more than 65000 lines

```bash
# save the profile to a text document called system_profile.txt on the Desktop
system_profiler > /Users/$(whoami)/Desktop/system_profile.txt
```

Alternatively, you can also create a file that can be opened by the **System Profiler.app** 

```bash
system_profiler -xml > /Users/$(whoami)/Desktop/system_profile.spx
```
You can open this file in the same view as **System Report**. The only difference is that now you have the report saved as a file (and can send the file to other people if need be, say you want tech support or something of the sort)

Find out what more you can do with the command

```bash
man system_profiler # manual
system_profiler -usage # quick usage info
```

## Get specific info

You can view specific details by passing `system_profiler` a 'data type'.

```bash
# View all data types available
system_profiler -listDataTypes
```

```bash
# Some common data types
system_profiler SPHardwareDataType # Hardware overview 
system_profiler SPSoftwareDataType # Software overview
system_profiler SPDisplaysDataType # Displays (type, resolution, chipset model etc.)
system_profiler SPNetworkDataType # Network overview (Ethernet, WiFi, Bluetooth, Thunderbolt etc.)
system_profiler SPMemoryDataType # Memory / RAM (size, type, speed etc.)
system_profiler SPPowerDataType # Battery (cycles, capacity, charge remaining etc.) + Power settings
system_profiler SPAirPortDataType # WiFi details (current network, available WiFi networks etc.)
system_profiler SPStorageDataType # Storage (Hard drives, available space, capacity etc.)
```

Example output

```bash
# system_profiler SPStorageDataType
Storage:

    Macintosh HD:

      Available: 11.38 GB (11,382,779,904 bytes)
      Capacity: 121.12 GB (121,123,069,952 bytes)
      Mount Point: /
      File System: APFS
      Writable: Yes
      Ignore Ownership: No
      BSD Name: disk1s1
      Volume UUID: 8519CF4C-1F99-3382-89F1-DE596D69BF9E
      Physical Drive:
          Device Name: APPLE SSD SM0128F
          Media Name: AppleAPFSMedia
          Medium Type: SSD
          Protocol: PCI
          Internal: Yes
          Partition Map Type: Unknown
```
## Examples

#### Find out if Xcode / Developer Tools is installed
The details include version, SDKs, install location etc.

```bash
system_profiler SPDeveloperToolsDataType
```

```
Developer:

    Developer Tools:

      Version: 9.0.1 (9A1004)
      Location: /Applications/Xcode.app
      Applications:
          Xcode: 9.0.1 (13249)
          Instruments: 9.0 (63198)
      SDKs:
          iOS:
              11.0: (15A372)
          iOS Simulator:
              11.0: (15A372)
          macOS:
              10.13: (17A360)
          tvOS:
              11.0: (15J380)
          tvOS Simulator:
              11.0: (15J380)
          watchOS:
              4.0: (15R372)
          watchOS Simulator:
              4.0: (15R372)
```

#### Find out which  OS X / macOS version is installed

```bash
system_profiler SPSoftwareDataType | grep 'System Version:'
```

```
      System Version: macOS 10.13.1 (17B48)
```

macOS 10.13 is High Sierra