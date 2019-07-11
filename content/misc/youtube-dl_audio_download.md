---
title: Download audio from YouTube with youtube-dl
date: 2019-04-09

---


```bash
# install youtube-dl
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl
source ~/.bashrc 

# install ffmpeg to be able to convert video files to audio
sudo apt install -y ffmpeg

# macOS
# brew install youtube-dl ffmpeg
```

```bash
youtbe-dl -x https://www.youtube.com/watch?v=xvtBAXM-YZs -o ~/Music/%(title)s.%(ext)s
```

You can also `sudo apt install youtube-dl -y` but that installs an outdated version. (Installed 2018.03.14 for me when the latest was 2019.07.02) on July 10, 2019.

### Saving config

```bash
# create conf file
sudo touch /etc/youtube-dl.conf
```

```
# Always extract audio (-x or --extract-audio)
--extract-audio

# Always save Audio in MP3 format
--audio-format mp3

# Save all files to this folder
-o /mnt/d/Music/%(title)s.%(ext)s
```

Now you only need tp pass the URL and that's it.

```bash
youtbe-dl https://www.youtube.com/watch?v=xvtBAXM-YZs
```
