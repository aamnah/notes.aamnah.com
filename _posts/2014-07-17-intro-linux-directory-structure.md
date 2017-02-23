---
layout: post
title: Linux Directory Structure
date: 2014-07-17 23:04:19.000000000 +05:00
type: post
published: true
status: publish
categories:
tags:
- LFS
- linux
---

Home ~
---
``~`` represents the home directory of the user. ``~`` is the same as ``/username``. All user specific files are saved here and the user has permission to write files by default in the home folder. Files in a user's home directory can not be listed or viewed by other users.

Root / 
---

``/`` is the root directory. Do not confuse it with ``/root``. While ``/`` represents the root directory of the system, ``/root`` is the home directory for the root user. Do not save files in ``/``.

/usr
---
``/usr`` contains the user applications and all the files needed to run them like documents, images, source code and more. ``/usr`` is the biggest directory on the system so it is recommended to give it its own partition.

/etc
---
``/etc`` stores your configuration files for the linux system and other software. Most of these are text files and can be tweaked using a text editor. For example, ``/etc/init`` which contains your boot procedures, can be easily tweaked in a text editor.

/dev
---
``/dev`` has your device files that relate to your computer's hardware components. For example, your keyboard and printer's info is located in ``/dev/input``.

/mnt
---
Similar to ``/dev``, ``/mnt`` shows you your physical storage devices like hard drives, externals, dvd roms and such.

/lost+found
---
contains all your restored files that would have been lost after your system crashes or something strange happens to the mounted device. Kernel panics don't mean you have to panic. Every partition has a ``lost+found`` directory.