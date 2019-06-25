---
tiitle: Download audio from YouTube with youtube-dl
date: 2019-04-09

---


```bash
# install youtube-dl
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl

# install ffmpeg to be able to convert video files to audio
sudo apt install -y ffmpeg

# macOS
# brew install youtube-dl ffmpeg
```

```bash
youtbe-dl -x https://www.youtube.com/watch?v=xvtBAXM-YZs -o ~/Music/%(title)s.%(ext)s
```

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