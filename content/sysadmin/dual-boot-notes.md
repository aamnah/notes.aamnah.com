---
title: Dual booting Windows and Linux
date: 2019-07-26
---

tl;dr: Life will be simpler if you just install Windows first and then Ubuntu later.

- Unplug all other hard drives
- Install Windows to SSD. With Windows installer create a partition for your Windows, it'll create it's `Recovery` and `MSR` (Microsoft Reserved Partition) partitions as well. Leave any extra space for your Ubuntu install later

The point of installing Windows first is so that it creates its Recovery and MSR partition and the partitioning scheme does not interfere with the BIOS and bootup. For example, if your drive is in MBR format, good luck figuring out disabling _Safe Boot_ and _Fast Boot_, enabling _CSM and Legacy Support_, and wrangling with _UEFI_ nonsense in general. Worst case scenario, your device wouldn't even be recognized or listed by the motherboard. (actually happened!)

## Links

- [SSD detected by Windows, but not available as boot device in BIOS](https://forums.tomshardware.com/threads/ssd-detected-by-windows-but-not-available-as-boot-device-in-bios.1858936/)
- [Convert an MBR disk into a GPT disk](https://docs.microsoft.com/en-us/windows-server/storage/disk-management/change-an-mbr-disk-into-a-gpt-disk)
