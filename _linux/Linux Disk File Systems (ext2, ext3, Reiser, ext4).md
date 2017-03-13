---
title: Linux Disk File Systems (ext2, ext3, Reiser, ext4)
permalink: linux-disk-file-systems
ctime: 2015-12-18
mtime: 2017-03-13
---

ext2
---
2nd Extended File System. It was originally introduced back in 1993 and ext2 stores data in the standard hierarchial fashion used by most other file systems.

Data is stored in files, files are stored in directories, and a directory can simply contain either files or other directories.

**Max file size is 2TB. An ext2 volume can be upto 4TB**. File names can be upto 255 characters long and ext2 supports Linux filesystem users, groups and permissions. It also supports compression.

It's been around a long time is very stable since most of the bugs have been worked out.


ext3
---
3rd Extended File System.

You can upgrade/downgrade from/to ext2. Difference with ext2 is journaliing.

The main disadvantage of the ext2 file system is that the fact taht it must check the entire file system if your file system goes down uncleanly.

Journaling eliminates that problem. ext3 file systems record _transactions_ to what's called a _journal_ and marks it as incomplete. After the disk transaction is complete, teh ext3 file system finally marks that transaction as complete within our journal. By doing this, ext3 file systems can keep a long journal for most of the recent file transactions and whether or not those transactions were completed. When a system goes down unexpectedly (without properly dismounting the disk, power outage), ext3 replays the journal when the system comes back on. This allows the file system to verify the data on the disk and bring it back to a consistent date, when possible, using the data in our journal.

Unlike ext2, ext3 doesn't ned to check our entire file system when it comes back on. This is because it keeps a log (journal) of our most recent changes. ext3 file system simply checks the transactions that are listed as incomplete only.

Using journaling, disk discovery time after an improper shutdown takes dramatically less time than an ext2 file system. In fact, ext2 can take hours, ext3 can replay in only minutes even if the filesystem is exteremly large.


Reiser
---
Alternative to ext3. Utilizes journaling to make crash recovery very fast. However, completely different from ext2 and ext3 as utilizes a dramatically different internal structure.

**Max file size of 8TB, max volume size of 16TB**.

The structure of Reiser allows it to support larger max file sizes. In addition, the structure of Reiser allows it to perform faster than ext2 and ext3.


ext4
---
Released late 2008. 4th Extended File System.

Backwards compatible with ext2.

**Max file size 16TB, max volume size 1EB** (1 Exabyte = 1000 petabytes = 1millionterabytes = 1billiongigabytes.)

You can have a maximum of 4 billion files on an ext4 file system. File name can be a max of 256 bytes.

ext4 also uses checksums to verify the journal file itself. This helps improve the pverall reliability of our system since the journal file is one of the most heavily used files on our disk system.

Since we can now support volumes of upto 1EB, this is a dramatic leap forward in technology in that of both ext3 adn Reiser.

---
Notes:

- FAT32 max file size is 4GB, max volume size is 8TB
- You can mount EXT file systems on OS X using [FUSE for OS X](http://osxfuse.github.io/)
- [How to Mount EXT4 Linux File Systems on a Mac with OS X Fuse](http://osxdaily.com/2014/03/20/mount-ext-linux-file-system-mac/)