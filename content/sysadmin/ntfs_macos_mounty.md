---
title: NTFS read/write on macOS
date: 2018-05-07
---

### tl;dr

get [Mounty](http://enjoygineering.com/mounty/)!

```bash
brew cask install mounty
```

If after copying the files are garyed out and are inaccessible, it's because of Finder's `xattr` file attributes.

```bash
# list attributes
ls -l@
```

```bash
# delete Finder attributes
xattr -d com.apple.FinderInfo FOO.ext
```

## The old way

[source](https://www.howtogeek.com/236055/how-to-write-to-ntfs-drives-on-a-mac/)
This is more complicated than installing Mounty and didn't work (the files didn't show up in the Finder..)

```bash
# Install Command Line Tools
xcode-select --install

# Install Homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Install ntfs-3g
brew install ntfs-3g

# create mount point
sudo mkdir /Volumes/NTFS

# determine your drive's partition
diskutil list

# unmount if partition was already mounted by Mac
sudo umount /dev/disk2s1

# mount the drive to the mount point you created
sudo /usr/local/bin/ntfs-3g /dev/disk2s1 /Volumes/NTFS -olocal -oallow_other
```

1. First, download [FUSE for macOS](https://github.com/osxfuse/osxfuse/releases) and install it. Use the default options when installing it.
2. Install Command Line Tools
3. Install Homebrew 
4. Install `ntfs-3g`
5. Create mount point, `/Volumes/NTFS` in the example above
6. Determine your drive's partition identifier, `disk2s1` in the example above
7. Unmount partition if it was automatically mounted by your Mac
8. (Optional) Make an alias for the mount command e.g. `mountntfs`
