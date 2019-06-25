---
title: getting Hard Drive information in Linux Ubuntu
date: 2019-03-14

---


## parted

```bash
sudo parted
(parted) print all   
```

```                                       
Model: ATA Hitachi HTS54505 (scsi)
Disk /dev/sda: 500GB
Sector size (logical/physical): 512B/512B
Partition Table: msdos
Disk Flags: 

Number  Start   End    Size   Type     File system  Flags
 1      1049kB  500GB  500GB  primary  ntfs


Model: Samsung SSD 970 EVO 250GB (nvme)
Disk /dev/nvme0n1: 250GB
Sector size (logical/physical): 512B/512B
Partition Table: gpt
Disk Flags: 

Number  Start   End    Size    File system     Name                          Flags
 1      1049kB  524MB  523MB   ntfs            Basic data partition          hidden, diag
 2      524MB   629MB  105MB   fat32           EFI system partition          boot, esp
 3      629MB   646MB  16.8MB                  Microsoft reserved partition  msftres
 4      646MB   107GB  107GB   ntfs            Basic data partition          msftdata
 5      107GB   210GB  103GB   ntfs            Basic data partition          msftdata
 6      210GB   241GB  30.7GB  ext4
 7      241GB   243GB  2048MB  linux-swap(v1)
 8      243GB   250GB  7168MB  ext4
```

## blkid

```bash
blkid
```

```
/dev/loop0: TYPE="squashfs"
/dev/loop1: TYPE="squashfs"
/dev/loop2: TYPE="squashfs"
/dev/loop3: TYPE="squashfs"
/dev/loop4: TYPE="squashfs"
/dev/loop5: TYPE="squashfs"
/dev/loop6: TYPE="squashfs"
/dev/loop7: TYPE="squashfs"
/dev/nvme0n1p1: LABEL="Recovery" UUID="50848BB0848B96DE" TYPE="ntfs" PARTLABEL="Basic data partition" PARTUUID="66d23ad9-de81-4fe6-b258-9a29dc73b8e2"
/dev/nvme0n1p2: UUID="0A8E-8C8A" TYPE="vfat" PARTLABEL="EFI system partition" PARTUUID="1add6274-3a54-41ba-bfa1-90850aa6f9a6"
/dev/nvme0n1p4: LABEL="Wnidows" UUID="CC64A60764A5F47C" TYPE="ntfs" PARTLABEL="Basic data partition" PARTUUID="861920fc-30a1-42d7-acc1-eae68ab97d21"
/dev/nvme0n1p6: UUID="8079c350-e261-490c-815f-8919ec4bf591" TYPE="ext4" PARTUUID="81ff0ca6-c3d9-406e-bfba-91196cae7013"
/dev/nvme0n1p7: UUID="2854a8db-6494-41d0-9cff-974714bb0b00" TYPE="swap" PARTUUID="41cac334-16ed-4842-9d1c-41c695c9ce33"
/dev/nvme0n1p8: UUID="7ac8abae-c422-4626-a484-a84f92a5f356" TYPE="ext4" PARTUUID="dd9f6f89-c036-44ac-907e-94b2af39d2da"
/dev/sda1: LABEL="Games" UUID="269E88799E8842F3" TYPE="ntfs" PARTUUID="d4dfbd61-01"
/dev/loop8: TYPE="squashfs"
/dev/loop9: TYPE="squashfs"
/dev/loop10: TYPE="squashfs"
/dev/loop11: TYPE="squashfs"
/dev/loop12: TYPE="squashfs"
/dev/loop13: TYPE="squashfs"
/dev/loop14: TYPE="squashfs"
/dev/loop15: TYPE="squashfs"
/dev/loop16: TYPE="squashfs"
/dev/loop17: TYPE="squashfs"
/dev/loop18: TYPE="squashfs"
/dev/loop19: TYPE="squashfs"
/dev/loop20: TYPE="squashfs"
/dev/loop21: TYPE="squashfs"
/dev/loop22: TYPE="squashfs"
/dev/loop23: TYPE="squashfs"
/dev/loop24: TYPE="squashfs"
/dev/loop25: TYPE="squashfs"
/dev/loop26: TYPE="squashfs"
/dev/loop27: TYPE="squashfs"
/dev/loop28: TYPE="squashfs"
/dev/nvme0n1p5: LABEL="Files" UUID="6F6BD7A40CA9B8A7" TYPE="ntfs" PTTYPE="dos" PARTLABEL="Basic data partition" PARTUUID="08584533-9729-4fdf-9016-967761331792"
```

## lsblk

```bash
lsblk -f
```

```
NAME        FSTYPE   LABEL    UUID                                 MOUNTPOINT
loop0       squashfs                                               /snap/gnome-3-26-1604/70
loop1       squashfs                                               /snap/opera/26
loop2       squashfs                                               /snap/opera/28
loop3       squashfs                                               /snap/gnome-calculator/260
loop4       squashfs                                               /snap/opera/25
loop5       squashfs                                               /snap/core/6405
loop6       squashfs                                               /snap/gnome-3-26-1604/78
loop7       squashfs                                               /snap/gtk-common-themes/1122
loop8       squashfs                                               /snap/canonical-livepatch/58
loop9       squashfs                                               /snap/slack/11
loop10      squashfs                                               /snap/sublime-text/44
loop11      squashfs                                               /snap/sublime-text/51
loop12      squashfs                                               /snap/gnome-calculator/180
loop13      squashfs                                               /snap/gnome-3-26-1604/82
loop14      squashfs                                               /snap/gtk-common-themes/1198
loop15      squashfs                                               /snap/gnome-system-monitor/57
loop16      squashfs                                               /snap/slack/12
loop17      squashfs                                               /snap/vscode/87
loop18      squashfs                                               /snap/chromium-ffmpeg/9
loop19      squashfs                                               /snap/gnome-logs/37
loop20      squashfs                                               /snap/core/4917
loop21      squashfs                                               /snap/gtk-common-themes/319
loop22      squashfs                                               /snap/gnome-logs/45
loop23      squashfs                                               /snap/canonical-livepatch/54
loop24      squashfs                                               /snap/gnome-system-monitor/51
loop25      squashfs                                               /snap/gnome-characters/139
loop26      squashfs                                               /snap/gnome-characters/103
loop27      squashfs                                               /snap/vscode/77
loop28      squashfs                                               /snap/core/6531
sda                                                                
└─sda1      ntfs     Games    269E88799E8842F3                     /media/aamnah/Games
nvme0n1                                                            
├─nvme0n1p1 ntfs     Recovery 50848BB0848B96DE                     
├─nvme0n1p2 vfat              0A8E-8C8A                            /boot/efi
├─nvme0n1p3                                                        
├─nvme0n1p4 ntfs     Wnidows  CC64A60764A5F47C                     
├─nvme0n1p5 ntfs     Files    6F6BD7A40CA9B8A7                     /media/aamnah/Files1
├─nvme0n1p6 ext4              8079c350-e261-490c-815f-8919ec4bf591 /
├─nvme0n1p7 swap              2854a8db-6494-41d0-9cff-974714bb0b00 [SWAP]
└─nvme0n1p8 ext4              7ac8abae-c422-4626-a484-a84f92a5f356 /home
```


## fdisk

```bash
sudo fdisk -l
```

```
Disk /dev/loop0: 140.9 MiB, 147722240 bytes, 288520 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop1: 154.7 MiB, 162160640 bytes, 316720 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop2: 154.7 MiB, 162242560 bytes, 316880 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop3: 2.3 MiB, 2355200 bytes, 4600 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop4: 154.7 MiB, 162156544 bytes, 316712 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop5: 91 MiB, 95416320 bytes, 186360 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop6: 140.7 MiB, 147496960 bytes, 288080 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop7: 34.8 MiB, 36503552 bytes, 71296 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/nvme0n1: 232.9 GiB, 250059350016 bytes, 488397168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 14D83A00-434C-47E8-99F3-5F9B5861F32F

Device             Start       End   Sectors  Size Type
/dev/nvme0n1p1      2048   1023999   1021952  499M Windows recovery environment
/dev/nvme0n1p2   1024000   1228799    204800  100M EFI System
/dev/nvme0n1p3   1228800   1261567     32768   16M Microsoft reserved
/dev/nvme0n1p4   1261568 209717247 208455680 99.4G Microsoft basic data
/dev/nvme0n1p5 209717248 410394623 200677376 95.7G Microsoft basic data
/dev/nvme0n1p6 410396672 470396927  60000256 28.6G Linux filesystem
/dev/nvme0n1p7 470396928 474396671   3999744  1.9G Linux swap
/dev/nvme0n1p8 474396672 488396799  14000128  6.7G Linux filesystem


Disk /dev/sda: 465.8 GiB, 500107862016 bytes, 976773168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0xd4dfbd61

Device     Boot Start       End   Sectors   Size Id Type
/dev/sda1        2048 976769023 976766976 465.8G  7 HPFS/NTFS/exFAT


Disk /dev/loop8: 7.5 MiB, 7839744 bytes, 15312 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop9: 144.8 MiB, 151764992 bytes, 296416 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop10: 29.5 MiB, 30920704 bytes, 60392 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop11: 67.6 MiB, 70828032 bytes, 138336 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop12: 2.3 MiB, 2433024 bytes, 4752 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop13: 140.7 MiB, 147496960 bytes, 288080 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop14: 35.3 MiB, 37027840 bytes, 72320 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop15: 3.7 MiB, 3878912 bytes, 7576 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop16: 144.9 MiB, 151912448 bytes, 296704 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop17: 124.8 MiB, 130867200 bytes, 255600 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop18: 17.6 MiB, 18464768 bytes, 36064 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop19: 14.5 MiB, 15196160 bytes, 29680 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop20: 86.9 MiB, 91099136 bytes, 177928 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop21: 34.7 MiB, 36323328 bytes, 70944 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop22: 14.5 MiB, 15208448 bytes, 29704 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop23: 7.5 MiB, 7811072 bytes, 15256 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop24: 3.7 MiB, 3887104 bytes, 7592 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop25: 13 MiB, 13619200 bytes, 26600 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop26: 13 MiB, 13619200 bytes, 26600 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop27: 128.5 MiB, 134746112 bytes, 263176 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop28: 91.1 MiB, 95522816 bytes, 186568 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```