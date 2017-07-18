---
title: FHS, File System Architecture and Directory Structure
permalink: fhs-linux-file-system
ctime: 2015-11-12
---

## **F**ilesystem **H**ierarchy **S**tandard

> **FHS** is the standard method of laying out the directory structure in Linux distributions, so that the contents follow a standard layout. That you can always depend upon certain types of files being in certain types of directories, and that they are generally consistent accross distributions.

Some systems may deviate from FHS in some areas. The current FHS is v2.3, was actually announced Jan 29th, 2004. v3 has been under development for almost 5 years. It stands to reason that some Linux file systems or dirs may have developed over the last ten years use of Linux that don't quite fit this FHS standard.

# Structure

Please note that OSX is not FHS-compliant. I've added screenshots because i'm a Mac user and am interested in seeing the similarities and differences with Linux.

file system structure on Ubuntu

![file system structure on Ubuntu](/assets/img/resources/8DBDC808-06B2-4860-9FF7-7F800E68C6B2.jpg)

file system structure on Mac

![file system structure on Mac](/assets/img/resources/5EEAF980-E1C8-4B89-86D0-57BF835645B5.png)

![Screenshot 2015-11-21 12.19.16.png](/assets/img/resources/B227BFB020BAB95E9BBBF7396AF7138C.png)

![Screenshot 2015-11-21 12.21.51.png](/assets/img/resources/95121B382DD49EDA93505D3F8DF92EF8.png)

You can do `man hier` to get help and explanations concerning the **layout of filesystems**. This command works on both Linux and Mac

- `/` entire System hierarchy, primary hierarchy
- `/bin` Command binaries and other executable files
- `/boot` Boot files, boot loaders, kernel
- `/cdrom` Mount point for CD ROMs
- `/dev` Devices
- `/etc` System Configuration files
- `/home` User Home directories
- `/media` Removeable media, like CDs
- `/mnt` Mounted devices and disks
- `/opt` Optional or third party sofwtare
- `/proc` Provides info about running processes
- `/root` Home dir for the root user
- `/sbin` System administration binaries
- `/tmp` Temporary space, typically cleared on reboot
- `/usr` User realted programs, binaries and docs
- `/usr/bin` most of our executable progarms live here
- `/usr/sbin` system adminisration programs
- `/usr/lib` libraries for `/usr/bin`
- `/usr/libexec`
- `/usr/local` Locally installed software that is not part of the base OS
- `/usr/share/man` man pages reside here
- `/var` Variable data, most notably log files
- `/var/log` Log files

# /
`/` aka root is the top of your file system. Do not confuse this with `/root` because /root is the home user directory of the root user. Do not store files in `/`

# /bin
Essential command binaries and executable programs. These need to be available to all users, if you run in Single User Mode. Anything (command) that you might need, whether it is `ls` or `cp` or `mv` or `cat`, these commands are gonna be in the _/bin_ directory for any Linux distribution that complies with FSH.

If you're booting in Single User Mode to recover your system, you're going to need the binaries in _/bin_.

They are called _binaries_ because machine reads binary code, which is ones and zeros.

Programs are written in source code and this is human readable text. These text files are then compiled in to machine readable binaries.

/bin on Linux

![](/assets/img/resources/0770FCDE-4277-4A6C-B8FF-1BE87B402990.png)

/bin on Mac

![](/assets/img/resources/F2508E8F-6707-4F7A-8575-F82A02424942.png)

# /boot
Boot files: boot loaders, initrd files, kernel files etc. These are files that are necessary for the kernel to pass into the boot stage from the grub boot loader

![](/assets/img/resources/E0EC0C8E-3C51-4437-83F9-BE1BE0AAC439.png)

# /dev
Device directory. These are essential devices. /dev/null, /dev/random, /dev/urandom.. These are the devices that are actually on our system. Our hard drives, CD ROMs etc.

For example, you may have the first hard drive as /dev/sda/, the second as /dev/sdb/ and so on. If they have partitions they'd even have furthermore numbers that'd follow them , like /dev/sda1/ /dev/sda2/ etc.

In Linux, devices are treated as files and you can write them as such.

There are actually two sorts of device files that can be stored in /dev/ folder. Character oriented and Block type. Character oriented device files are used for devices that send or receive data sequentially, one character at a time. Like printers. Block oriented device files manage data in what is known as blocks. Like your actual hard drive, USB drives etc.

# /etc
Host system specific configuration file directory. Most of these are text files and can be edited using a text editor.

/etc on Linux
![Screenshot 2015-11-21 12.47.01.png](/assets/img/resources/5BDB3285C1752FE5491F1A0718D2C758.png)

For example:
Apache conf (Ubuntu): `/etc/apache2/apache2.conf`
Apache conf (CentOS): `/etc/httpd/httpd.conf`
SSH conf: `/etc/ssh/sshd_config`
System-wide php.ini: `/etc/php5/apache2/php.ini`
PHPMyAdmin: `/etc/apache2/phpmyadmin.conf`
MySQL: `etc/mysql/my.cnf`

![Screenshot 2015-12-18 12.50.50.png](/assets/img/resources/55767302F5585E86A017AA59F31E4132.png)
![Screenshot 2015-12-18 01.08.14.png](/assets/img/resources/4EB455D278466E54AD4EB863C541643A.png)

It inculdes backronyms such as editable text configurations and extended tool chest. You'll find all of the configuration of run level files that you need to configure for your system from the boot up and boot devices that are connected to the run levels of your system.

Condig files for X Windows systems and your root documents.

# /home
User home dirs. Typically with Linux distros, it's the (only) place where you have write perms by default.

# /lib
Essential libraries (dependencies?) for all of our binaries that are in /bin and /sbin

# /media
Temporarily mounted file systems. Removable media, an extenral USB drive e.g. Linux distros that have /media include OpenSUSE, Fedora and Debian Ubuntu

# /mnt
The mount directory is used by some Linux distros to mount other external devices like CD-drives, DVD drives, USB drives and so on.

# /opt
Optional applciation software packages, or third party software. Things that we have insatlled. Software that do not come with the OS. For example, Google Earth

# /proc
All of the info for ecerything inculding our kernel core, IO ports as well as references to all the running PIDs on the system.

/proc is actually a pseudo filesystem that is dynamically created whenever it is actually accessed. Within our /proc directories there are furthermore sub-directories and each of these sub-directories is identifiable with a number and not a name. That number is a PID (Process ID) number. The directory stands for a process. (You can check PIDs with the `ps ax` command)

![Screenshot 2015-12-18 12.58.40.png](/assets/img/resources/0F2406EBD4C954A01612BB893C31828D.png)

There are also other files in this /proc folder, like /proc/cpuinfo that might be of interest

![Screenshot 2015-12-18 13.02.00.png](/assets/img/resources/697F29FB1C063A81C033BFE9260994EF.png)


# /root
Home dir for root user. This is usually at the base of the file system instead of in /home/root like the home directories for normal users

# /sbin
Similar to /bin, only the /sbin folder conatins essential **system management and administration files**/bianries. This includes utilities such as `init`, `netstat`, `sysctl`, `fsck`, `fdisk`, `fsch`, `ifconfig`, `mkfs`, `shutdown` and `halt` etc. All **administrator users** will need these binaries at some point.

# /srv
Site specific data served by the system. Contains sub-dirs for services running on our system such as *httpd* for apache or *ftpd* for FTP

# /sys
The /sys folder contains info about hardware that is on our system

![Screenshot 2015-12-18 13.08.52.png](/assets/img/resources/4B83A9A3CEF7E7AA5245D22038044112.png)

# /tmp
Temporary space, typically cleared on reboot. all of our users have read/write access to /tmp.

# /usr
The /usr directory contains application files. Most of the application files used on our system are stored in a sub-dir of the /usr dir.

- `/usr/bin` is where most of our executable programs live
- `/usr/lib` is library files for the application in /usr/bin
- `/usr/lib64` is similar to `/usr/lib`, however it only contains 64-bit libraries
- `/usr/local` is locally insalled software that we have cerated (installed?) ourselves.
- `/usr/sbin` similar to `/usr/bin`, only that it contains **s**ystem administration programs
- `/usr/share` is where the documentation and man pages reside

Secondary hierarchy, read-only user data. Contains the majority of multi-user.

`/usr` conatins software applications and all the files necessary to run them (aka _dependencies_).
It's the biggest dir on the file system. It's recommended giving it it's own partition.

# /var
Variable files. Log files, spool dir for printing, run files etc.

# /lost+found
Stores all of your restored files that would've been lost after a system crashes or something strange happens.. e.g. kernel panics

Every partition has a lost+found in it's upper directory.

Notes
---
- try to follow the naming convention when creating your files: lowercase, no spaces, slashes or astericks. 
- Remember, files that begin with a `.` are hidden.

Application Directory Structure
---
- /opt
- /usr/lcoal

Software that you install is usually installed in `/usr/local/`

    /usr/local/PROGRAM/bin
    /usr/local/PROGRAM/etc
    /usr/local/PROGRAM/lib
    /usr/local/PROGRAM/log

OR in a fodler in `/opt/`. The folder name could be the program's name or the company's name. Like in Windows they have the _Adobe_ folder for Adobe software.

    /opt/PROGRAM/bin
    /opt/PROGRAM/etc
    /opt/PROGRAM/lib
    /opt/PROGRAM/log

or in `/opt/`

    /opt/COMPANY
    /opt/COMPANY/bin
    /opt/COMPANY/etc

or in `/opt/` using both company and program names as folders.

    /opt/google
    /opt/google/chrome
    /opt/google/earth

OR

    /etc/opt/PROGRAM => Config files
    /opt/PROGRAM/etc
    /opt/PROGRAM/lib
    /var/opt/PROGRAM => Log files

OR

    /usr/local/bin/PROGRAM 
    /usr/local/etc/PROGRAM.conf
    /usr/local/lib/libPROGRAM.so


Links
---
- [Filesystem Hierarchy Standard: Official documentation](http://www.pathname.com/fhs/pub/fhs-2.3.pdf)
- [What is standard for os x filesystem? e.g. /opt/ vs. /usr/](http://apple.stackexchange.com/questions/119230/what-is-standard-for-os-x-filesystem-e-g-opt-vs-usr)
- [YouTube: Nixie Pixel: The Linux File System Explained ](https://www.youtube.com/watch?v=2qQTXp4rBEE)
- [Linux Academy: The Linux Filesystem](https://linuxacademy.com/cp/courses/lesson/course/331/lesson/1/module/38)
- [Linux Training Academy: The Linux Directory Structure](https://stackskills.com/courses/learn-linux-in-5-days-and-level-up-your-career/lectures/488038)
