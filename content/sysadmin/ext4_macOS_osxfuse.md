---
title: Mount an ext4 Linux drive on macOS Mojave
date: 2019-01-14
status: draft
---

#### tl;dr

- install [FUSE for macOS](https://osxfuse.github.io/)
- install [Fuse-ext2](https://github.com/alperakcan/fuse-ext2)
- mount the drive using `fuse-ext2`

---

### Fuse for macOS (osxfuse)

make sure you have MacFUSE Compatibility Layer checked as this is required for Fuse-ext2


```bash
brew cask install osxfuse
```

Fuse for macOS (aka osxfuse) does nothing out of the box, it just gives you the capability of installing plugins. From hereon you can install _plugins_ for the different _filesystems_ that you want to mount.

#### Ext2/3/4

Read-only:

```bash
brew install ext4fuse # read only support
```

Read/Write:

```bash
# install dependencies
# brew install autoconf automake libtool gettext e2fsprogs
# brew link --force gettext

# install osxfuse
# git clone --recursive -b support/osxfuse-3 git://github.com/osxfuse/osxfuse.git osxfuse
# ./build.sh -t distribution


# install fuse-ext2
git clone git@github.com:alperakcan/fuse-ext2.git
cd fuse-ext2
./autogen.sh
CFLAGS="-idirafter/$(brew --prefix e2fsprogs)/include -idirafter/usr/local/include/osxfuse" LDFLAGS="-L$(brew --prefix e2fsprogs)/lib" ./configure
make
sudo make install
```

```
Usage:    fuse-ext2 <device|image_file> <mount_point> [-o option[,...]]

Options:  ro, rw+, force, allow_other
          Please see details in the manual.

Example:  fuse-ext2 /dev/sda1 /mnt/sda1
```

```bash
diskutil list
```

```
fuse-ext2 <device|image> <mountpoint> [-o option[,...]]
options:
ro   : mount read only
force: mount read/write
allow_others: allow other users to access
debug: noisy debug output
```

```bash
mount -t fuse-ext2 /dev/sda2 /mnt/sda2
```

### NTFS

```bash
# install NTFS plugin for FUSE
brew install ntfs-3g

# manually mount in read/write mode
sudo mkdir /Volumes/NTFS
sudo /usr/local/bin/ntfs-3g /dev/disk1s1 /Volumes/NTFS -olocal -oallow_other
```

```bash
# find your drive's partition
diskutil list
```

Links
---

- [osxfuse](https://github.com/osxfuse/osxfuse)
- [Ext](https://github.com/osxfuse/osxfuse/wiki/Ext)
- [Fuse Ext2](https://github.com/alperakcan/fuse-ext2)