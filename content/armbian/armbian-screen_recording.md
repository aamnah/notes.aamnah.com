---
title: Screen recording on Armbian
description: Setting up my Orange Pi Plus 2 for some screen recording so i could make mini tutorials
date: 2018-08-12	
tags:
- armbian
---

tl;dr
---

- build [Simple Screen Recorder](https://github.com/MaartenBaert/ssr/) from source


The options for sreen recording tools are:

- ~~Kazam~~ Config doesn't get saved, recording issues, last updated 2014
- ~~OBS Studio~~ Make error, something about `target 'all'` failing
- ~~Simple Screen Recorder~~ Package not found, compile from source??
- ~~RecordMyDesktop~~ Recording is pink
- ~~Istanbul~~ Unable to locate package, dead project, last update 2013

## OBS Studio
- OBS Studio is not officially available for Armbian. Adding the repo still ends up in an error saying the package could not be found. You have to build it from source.
- Building OBS from source also ended in vain. 

```bash
Installing with make install...

========================= Installation results ===========================
[  1%] Built target glad
[  2%] Building C object deps/media-playback/CMakeFiles/media-playback.dir/media-playback/decode.c.o
cc: error: unrecognized command line option ‘-mmmx’
cc: error: unrecognized command line option ‘-msse’
cc: error: unrecognized command line option ‘-msse2’
deps/media-playback/CMakeFiles/media-playback.dir/build.make:62: recipe for target 'deps/media-playback/CMakeFiles/media-playback.dir/media-playback/decode.c.o' failed
make[2]: *** [deps/media-playback/CMakeFiles/media-playback.dir/media-playback/decode.c.o] Error 1
CMakeFiles/Makefile2:212: recipe for target 'deps/media-playback/CMakeFiles/media-playback.dir/all' failed
make[1]: *** [deps/media-playback/CMakeFiles/media-playback.dir/all] Error 2
Makefile:149: recipe for target 'all' failed
make: *** [all] Error 2

****  Installation failed. Aborting package creation.

Cleaning up...OK

Bye.

```


## Kazam

```bash
sudo apt install kazam
```

- for some reason my configuration for Kazam was not being saved when being edited from _File > Preferences_. So i ended up editing the config file at `~/.config/kazam/kazam.conf`

```bash
[DEFAULT]
autosave_video_file = kazam_
autosave_picture_file = kazam_
capture_microphone = True
autosave_video_dir = /home/aamnah/Screencasts
autosave_picture_dir = /home/aamnah/Screenshots
framerate = 20
```

Editing the conf file directly was also in vain. Kazam resets the settings every time it runs, the conf file gets overwritten.

- According to the author, framerates above 20fps are unlikely to work well because of software and hardware limitations.
- Kazam seems to have been abandoned, the last release was in 2014

- Errors when running `kazam`. Errors when compiling from source. Errors with `python3`

## Simple Screen Recorder

```bash
sudo add-apt-repository -y ppa:maarten-baert/simplescreenrecorder
sudo apt update
sudo apt install simplescreenrecorder
```

```
E: Unable to locate package simplescreenrecorder
```

## RecordMyDesktop

```bash
# install tool
sudo apt install recordmydesktop 

# install GUI
sudo apt install gtk-recordmydesktop
```

```
aamnah@orangepiplus:~$ recordmydesktop
Initial recording window is set to:
X:0   Y:0    Width:1920    Height:1080
Adjusted recording window is set to:
X:0   Y:4    Width:1920    Height:1072
Your window manager appears to be Xfwm4

Initializing...
Buffer size adjusted to 4096 from 4096 frames.
Opened PCM device default
Recording on device default is set to:
1 channels at 22050Hz
Capturing!
^C
```

- `recordmydesktop` encodes the videos after you're done recording and it takes it's sweet time, about a minute for 2%. No idea why.
- the output files are in `ogg (theora/vorbis)` format. These are open formats, theora for video and vorbis for audio, using the ogg container.

```
*********************************************

Cached 150 MB, from 9814 MB that were received.
Average cache compression ratio: 98.5 %

*********************************************
Saved 1250 frames in a total of 1245 requests
Shutting down.....
STATE:ENCODING
Encoding started!
This may take several minutes.
Pressing Ctrl-C will cancel the procedure (resuming will not be possible, but
any portion of the video, which is already encoded won't be deleted).
Please wait...
Output file: out.ogv
[101%]
Encoding finished!
Wait a moment please...
   
Done.
Written 11998043 bytes
(11071029 of which were video data and 927014 audio data)

Cleanning up cache...
Done!!!
Goodbye!
```

- a 1 minute recording took 12MB of space
- the resulting video had a pink hue and had no audio even though i had set my source/sink to my microphone in ALSA


## Notes

- Search for tools that run on Raspberry Pi instead of Linux/Debian tools. Since Raspberry Pi is AMR-based, chances are the tools will run on OrangePi too.  
- If you're just recording, Kazam is enough. If you also plan on editing your recorded footage than OBS Studio is the way to go.
- OBS Studio is multi-platform, available for Linux, macOS, and Windows
- OBS also supports streaming to different platforms including Twitch and YouTube
- If you're into making GIFs then [Gefine](https://github.com/leafo/gifine) is a great tool


Links
---

- [OBS Studio](https://obsproject.com)
- [Gifine](https://github.com/leafo/gifine)
