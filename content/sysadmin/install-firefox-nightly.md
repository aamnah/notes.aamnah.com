---
title: Install Firefox Nightly on Ubuntu Linux 18.04
date: 2019-07-10
---

```bash
# Create /opt directory
sudo mkdir --mode=755 /opt

# create a directory for firefox
sudo mkdir /opt/firefoxnightly

# Download latest Nightly 64-Bit
wget -O firefoxnightly.tar.bz2 "https://download.mozilla.org/?product=firefox-nightly-latest-ssl&os=linux64&lang=en-US"

# Extract firefox to the folder we created for it in /opt
tar xjf ~/Downloads/firefoxnightly.tar.bz2 /opt/firefoxnightly

# give rights so that it auto-updates
sudo chown -R $USER:$USER /opt/firefoxnightly

# start Firefox Nightly 
cd /opt/firefoxnightly && ./firefox
```


### 1. Download Firefox Nightly
You'll get a `.tar.bz2` file. Mozilla doesn't provide `.deb` or `.rpm` packages since binaries are more universal and work on all distributions.

Extract the file and you'll get a folder called `firefox`.


### 2. Create an `/opt` directory

`/opt` is for system-wdie installation of add-on software,  while `/usr/local` is for single user and local installations. Since `/opt` is optional, Ubuntu doesn't have one by default. You can create one, no big deal.

```bash
sudo mkdir --mode=755 /opt
```

Whichever directory you want to install in is up to you.

### 3. Adding the Dock Icon

I was able to start Firefox Nightly but hwne right-clicked the icon, there were no options to add it as a Favorite.



```bash
# Create a desktop icon
touch ~/firefoxnightly.desktop
```

Add the following to the shortcut icon file. See `/usr/share/applications/firefox.desktop` for inspiration

```bash
#!/usr/bin/env xdg-open

[Desktop Entry]
Version=1.0
Name=Firefox Nightly
Comment=Take a browse on the wild side
Terminal=false
Type=Application
Categories=Network;WebBrowser;
#
# WARNING: Remember to fix the path in Icon and Exec
#
Icon=/opt/firefoxnightly/browser/chrome/icons/default/default128.png
Exec=/opt/firefoxnightly/firefox %u

# Actions=Default;Mozilla;ProfileManager;

# [Desktop Action ProfileManager]
# Name=Profile Manager
# Exec=/opt/firefoxnightly/firefox –no-remote –profile-manager

# These actions show when you right-click the icon in the Dock
Actions=new-window;new-private-window;

# Open a New Window
[Desktop Action new-window]
Name=Open a New Window
Exec=/opt/firefoxnightly/firefox -new-window

# Open a New Private Window
[Desktop Action new-private-window]
Name=Open a New Private Window
Exec=/opt/firefoxnightly/firefox -private-window
```


validate the file, no output means it passed

```bash
desktop-file-validate ~/firefoxnightly.desktop 
```
add the shortcut to Dock

```bash
# for current user
desktop-file-install --dir=.local/share/applications firefoxnightly.desktop

# for all users (/usr/share/applications/)
sudo desktop-file-install firefoxnightly.desktop
```

At this point i can search for Firefox Nightly and see the icon to click. But not seeing the right-click menu options i added.

What i did was search for Firefox Nightly and then dragged the icon to the Dock to add it as Favorite. That added it to the dock as well as gave me the right-click options.

Links
---

- [StackOverflow: /opt folder missing in Ubuntu 14.04](https://askubuntu.com/a/604207)
- [Why is Nightly provided as a tar.bz2 archive? Do I have to compile it?](https://wiki.mozilla.org/Nightly#Linux)
- [Firefox releases README](https://ftp.mozilla.org/pub/firefox/releases/latest/README.txt)
- [Firefox Nightly releases](https://www.mozilla.org/en-US/firefox/nightly/all/)
- [Getting Firefox Nightly to stick to Ubuntu’s Unity Dock](https://blog.nightly.mozilla.org/2016/09/19/getting-firefox-nightly-to-stick-to-ubuntus-unity-dock/)
- [](https://askubuntu.com/questions/13758/how-can-i-edit-create-new-launcher-items-in-unity-by-hand)