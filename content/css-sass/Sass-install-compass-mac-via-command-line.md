---

title: How to install Compass on a Mac via Command Line
slug: howto-sass-install-compass-on-a-mac-via-command-line
date: 2014-05-21 15:34:28.000000000 +05:00
type: post
published: true
status: publish
categories:
- CSS
tags:
- compass
- sass
---

Compass is a Ruby gem, so in order to install it you must have Ruby installed. Macs come pre-installed with Ruby.

```bash
sudo gem update --system
sudo gem install compass 
compass --version
```

Notes
---

- `sudo gem update --system` will make sure all gems are up to date
- You can use `sass --version` to see if you have installed or what version of Sass is it
- `sudo gem install compass` will also install Sass if it isn't already installed
- `compass --version` will confirm the installation by telling you what version of Compass you have installed
- If command line scares you, you can install GUI apps for Compass, like: 

- [compass.app - $10 - Mac, Windows, Linux](http://compass.kkbox.com)  
- [Scout - Free - Mac, Windows](http://mhs.github.io/scout-app/)  
- [CodeKit - $29 - Mac only](https://incident57.com/codekit/)  
