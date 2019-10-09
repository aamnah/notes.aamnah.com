---
title: Enable macOS like touchpad gestures on Ubuntu
date: 2019-10-09
---

FYI: 
- I'm using the touchpad of a Lenovo T450.
- On my Mac, i use 3-finger swipe up for app Expose, and 3-finger left/right to switch between full-screen apps

### Installation and setup

Add yourself to the `input` group.

```bash
# must be a part of the 'input' group to have permission to read touchpad device
sudo gpasswd -a $USER input
```

Logout completely to assign this group and log back in (or reboot). You can confirm that you were added to the group with `groups`

Loggin out/in didn't work for me so went ahead and rebooted..

```bash
# install xdotool for keyboard input and wmctrl for Window Manager control
sudo apt install -y xdotool wmctrl

# install libinput-tools
sudo apt install libinput-tools

# install dependencies for Gestures GUI
sudo apt install -y python3 python3-setuptools python3-gi python-gobject

# install libinput-gestures from its repo
cd /home/${USER}/Downloads/
git clone https://github.com/bulletmark/libinput-gestures.git
cd libinput-gestures
# sudo make install 
# OR
sudo ./libinput-gestures-setup install

# Install the Gestures GUI from it's git repo
cd /home/${USER}/Downloads/
git clone https://gitlab.com/cunidev/gestures
cd gestures
sudo python3 setup.py install

# start and set it to start automatically on boot
libinput-gestures-setup autostart
libinput-gestures-setup start

# cleanup
cd /home/${USER}/Downloads/
sudo rm -rf ibinput-gestures gestures
sudo apt autoremove -y
```

- We need `xdotool` to stimulate keyboard input
- We need `wmctrl` to control Window Manager
- We may need to install `libinput-tools` on Ubuntu
- `libinput` supports both _pinch_ and _swipe_ gestures

### 3 finger swipe and middle click

If you want to use **3** finger gestures, and your touchpad also detects **3** finger tap as **middle click**, then you may wanna disable the middle click if you want to use 3 finger gestures.. `synclient TapButton3=0`

```bash
# Disable middle click in order to use 3 finger gestures
sudo apt install xserver-xorg-input-synaptics
synclient TapButton3=0
```

If this doesn't work, you can disable it in Gnome Tweaks: _Tweaks > Keyboard & Mouse > Disable 'Middle click Paste'_

### Commands for Gestures

At this point you are ready to start defining your gestures using the GUI

- If you want the gesture to perform a **keystroke**, you'd use `xdotool`

```
xdotool key super
```

- If you want to show a notification, you will use `notify-send`

```
notify-send "Swiped up"
```

| Gesture              | Function                   | Command           |
|----------------------|----------------------------|-------------------|
| 3 Finger swipe UP    | Expose (see all open apps) | xdotool key super |
| 3 Finger swipe DOWN  | Expose (see all open apps) | xdotool key super |
| 3 Finger swipe LEFT  | Move to prev workspace     | xdotool key super+Page_Up |
| 3 Finger swipe RIGHT | Move to next workspace     | xdotool key super+Page_Down |


You can find a list of Keyboard shortcuts and the key combinations in _Settings > Devices > Keyboard_


### Multiple monitor displays and Workspaces

I have a 3 monitor setup and by default, switching the Workspace only switches the active _screen_, not all monitor screens change.. You can disable this behaviour with Gnome Tweaks


```bash
sudo apt install gnome-tweaks
```
Run Tweaks. Under settings for Workspaces, set _Workspaces spans displays_

### Config files

- System wide settings: `/etc/libinput-gestures.conf `
- User settings: `~/.config/libinput-gestures.conf`

The user file overrides the system defaults. The system config file is very nicely commented and you may wanna have a look if you want to understand what's happening.. Here's a sample of my config

```bash
# ~/.config/libinput-gestures.conf

# Gestures
gesture swipe up 3 xdotool key super
gesture swipe down 3 xdotool key super
gesture swipe left 3 xdotool key super+Page_Up
gesture swipe right 3 xdotool key super+Page_Down
```

What the _Gestures GUI_ does is basically give you a user interface where you can add your gestures and commands for them. Underneath, it just writes to a user's `libinput-gestures.conf` file

Links
---
- [Github: libinput-gestures](https://github.com/bulletmark/libinput-gestures)
- [libinput-gestures: Sample Configuration](https://github.com/bulletmark/libinput-gestures/blob/master/libinput-gestures.conf)
- [GitLab: gestures](https://gitlab.com/cunidev/gestures)
- [Customize Linux Touchpad Gestures with ‘Gestures’ App](https://www.omgubuntu.co.uk/2018/09/linux-touchpad-gestures-app)
- [xdotool Key codes list](https://gitlab.com/cunidev/gesturesswipe/wikis/xdotool-list-of-key-codes)
- [3 finger swipe accidently pastes clipboard contents to any focused cursor. #112](https://github.com/bulletmark/libinput-gestures/issues/112)