---
title: Fix slow boot after deleting Swap partition
date: 2019-04-03

---

tl;dr

- Edit `/etc/fstab`. You need to comment out the lines that mount swap partitions. Ideally you should do this before deleing the swap partition
- Edit `/etc/initramfs-tools/conf.d/resume` (with sudo) and comment out the swap partition
- Edit `/etc/crypttab` if you had an encrypted swap partition

---

- You should update the `/etc/fstab` first, comment out the swap entries, and _then_ delete the swap partition.

Editing `/etc/fstab` afterwards didn't really fix the slow boot issue for me. 

Upon installing a virtualization package with `apt` i came across this warning:

```bash
W: initramfs-tools configuration sets RESUME=UUID=2854a8db-6494-41d0-9cff-974714bb0b00
W: but no matching swap device is available.
```

> The initramfs is an cpio archive. At boot time, the kernel unpacks that archive into ram, mounts and uses it as initial root file system. From there on the mounting of the real root file system occurs in user space. 

```
resume
      The resume hook tries to autodetect the resume partition and uses  the  first  swap
      partition   as  valid  guess.  It  is  possible  to  set  the  RESUME  variable  in
      /etc/initramfs-tools/conf.d/resume.  The boot variable noresume overrides it.
```

I had originally created the Swap _partition_ (a partition and no a swapfile), because a swap partition is required to be able to hibernate an Ubuntu system..

```bash
sudo nano /etc/initramfs-tools/conf.d/resume
```

```
#RESUME=UUID=2854a8db-6494-41d0-9cff-974714bb0b00
```

Additionally, you can also try re-configuring the `initramfs-tools`, but i didn't need to do so.

```bash
sudo dpkg-reconfgure initramfs-tools
```