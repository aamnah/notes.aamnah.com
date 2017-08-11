---
title: Image Optimization on Linux Servers using jpegoptim and optipng
subtitle: Compress and optimize images on your websites via the command line
permalink: image-optimization-linux-ubuntu-jpegoptim-optipng
ctime: 2017-08-11
---

The idea is to have a script that runs periodically and compresses image files in specified directories

- Optimize images in known directories, e.g. `wp-content/uploads` for WordPress, `image/catalog/` in OpenCart etc.
- Only optimize newly added files, instead of redoing the whole folder every time (on every cron run)
- Setup a cron so it does it on it's own, periodically (e.g. every day)

You being the developer might be conscious of optimizing images before you upload them, but the clients usually aren't. In cases like these, you can optimize the images on the server after the client has uploaded them, without having to bother yourself or the client.

It also provides a way to optimize your website images to **pass google’s pagerank** 

```bash
FREQUENCY='daily' # hourly, daily, weekly, monthly
LOGFILE='imageOptimization.log'
IMGDIR='' # no trailing forward slash please

# INSTALL TOOLS
# install Jpegoptim and OptiPNG
sudo apt update
sudo apt install jpegoptim optipng

# OPTIMIZATION
# PNGs
find ${IMGDIR}/ *.png -exec optipng -silent -preserve {} \;

# JPEGs
find ${IMGDIR}/ *.{jpeg,jpg} -exec jpegoptim {} \;


# CRON

# LOGGING
# find out how long the command took, add that to the log
# how many files were compressed, details of task etc.
# send log via email (or look into some sort of mobile notifications e.g. https://simplepush.io/)

# TODO
# [ ] setup cron
# [ ] setup logging
# [ ] accept multiple dirs and loop over them
```

Optipng options:

```
-preserve
       Preserve file attributes (time stamps, file access rights, etc.) where applicable.

-quiet, -silent
       Run in quiet mode.
       The messages are still written to the log file if the option -log is enabled.
```




Links
---
- [How to Optimize and Compress JPEG or PNG Images in Linux Commandline](https://www.tecmint.com/optimize-and-compress-jpeg-or-png-batch-images-linux-commandline/)
- [Jpegoptim](https://github.com/tjko/jpegoptim)
- [OptiPNG](http://optipng.sourceforge.net/)