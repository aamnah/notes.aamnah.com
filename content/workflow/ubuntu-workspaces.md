---
title: Using workspaces like a  pro in Ubuntu
date: 2019-11-07
lastmod: 2019-11-27

---

**tl;dr**

With the keyboard shortcuts, i now `ctrl+alt+up/down` to move between workspaces which have full screen apps. And `shift+ctrl+alt+up/down` to move an app between workspaces. `F11` to make an app full screen. `shift+start+ARROW` to move apps between different monitors. `super+LEFT/RIGHT` for split views

---

The top thing i missed about macOS after switching to a Thinkpad with Ubuntu was the swipe gestures. I could three-finger swipe left/right to switch between full screen apps. 

On Ubuntu, i tried to do the same thing by setting up gestures, but it wasn't as smooth as i wanted.

Ever since i have figured out the shortcuts and started using them, i have felt more productive

### Managing Workspaces
- <kbd>shift</kbd> + <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>UP/DOWN</kbd> - move app to a Workspace above or below
- <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>UP/DOWN</kbd> - move to Workspace up or below
- <kbd>start</kbd> + <kbd>Page Up/Down</kbd> - move to Workspace above or below
- <kbd>start</kbd> + <kbd>Home/End</kbd> - move to First/Last Workspace

- Windows key is also known as: super, flag, start, logo, win

#### Tweaks for Workspaces
Also set the below Gnome Tweaks

```bash
sudo apt install gnome-tweaks
``` 

- _Tweaks > Workspaces > Dynamic Workspaces_ will create/remove Workspaces on the fly
- _Tweaks > Workspaces > Display Handling > Workspaces span displays_ will move all displays, very helpful when you have a multi-monitor setup

### Managing Application Windows

- <kbd>F11</kbd> - make app full screen
- <kbd>ESC</kbd> - exit full screen mode
- <kbd>start</kbd> + <kbd>shift</kbd> + <kbd>UP/DOWN/LEFT/RIGHT</kbd> - move between Monitors (very useful in a multi-monitor setup)

You can also maximize, restore and split windows using keyboard shortcuts

- <kbd>start</kbd> + <kbd>LEFT/RIGHT</kbd> - split View left/right
- <kbd>start</kbd> + <kbd>LEFT/RIGHT</kbd> - split View left/right
- <kbd>start</kbd> + <kbd>UP/DOWN</kbd> - Maximize/Restore window
