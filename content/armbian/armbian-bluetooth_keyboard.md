---
title: Pairing Bluetooth devices in Armbian, Orange Pi Plus2 
description: How to pair bluettoth devices in general and the Logitech K480 bluetooth multi-device keyboard in particular on Armbian (Orange Pi Plus2)
date: 2018-08-06
lastmod: 2018-11-14
---


```bash
bluetoothctl
```

Run the following commands:

```
[bluetooth]# agent off
[bluetooth]# agent KeyboardOnly 
[bluetooth]# scan on
[bluetooth]# pair 34:XX:XX:XX:D8:F3
[bluetooth]# trust 34:XX:XX:XX:D8:F3
[bluetooth]# connect 34:XX:XX:XX:D8:F3
```

The key here is `KeyboardOnly`. Logitech K480 requires a pairing key to be typed on the keyboard, and for some reason it wasn't showing in the GUI. `KeyboardOnly` let's you do the complete pairing and connection process using keyboard input.

Here are the commands with their outputs:

```
[bluetooth]# agent off
Agent unregistered
[bluetooth]# agent KeyboardOnly 
Agent registered
[bluetooth]# scan on
Discovery started
[CHG] Controller 00:15:83:0C:BF:EB Discovering: yes
[NEW] Device 3 34:XX:XX:XX:D8:F3 Keyboard K480
[bluetooth]# pair 34:XX:XX:XX:D8:F3
Attempting to pair with 34:XX:XX:XX:D8:F3
[CHG] Device 34:XX:XX:XX:D8:F3 Connected: yes
[agent] PIN code: 870577
[CHG] Device 34:XX:XX:XX:D8:F3 Modalias: usb:v046DpB33Dd2803
[CHG] Device 34:XX:XX:XX:D8:F3 UUIDs: 00001000-0000-1000-8000-00805f9b34fb
[CHG] Device 34:XX:XX:XX:D8:F3 UUIDs: 00001124-0000-1000-8000-00805f9b34fb
[CHG] Device 34:XX:XX:XX:D8:F3 UUIDs: 00001200-0000-1000-8000-00805f9b34fb
[CHG] Device 34:XX:XX:XX:D8:F3 Paired: yes
Pairing successful

[bluetooth]# connect 34:XX:XX:XX:D8:F3
Attempting to connect to 34:XX:XX:XX:D8:F3
[CHG] Device 34:XX:XX:XX:D8:F3 Connected: yes
Connection successful
[Keyboard K480]# 

```

You can now see `info` about your connected device like so:

```
[bluetooth]# info 34:88:5D:97:D8:F3 
Device 34:88:5D:97:D8:F3
	Name: Keyboard K480
	Alias: Keyboard K480
	Class: 0x000540
	Icon: input-keyboard
	Paired: yes
	Trusted: yes
	Blocked: no
	Connected: yes
	LegacyPairing: no
	UUID: Service Discovery Serve.. (00001000-0000-1000-8000-00805f9b34fb)
	UUID: Human Interface Device... (00001124-0000-1000-8000-00805f9b34fb)
	UUID: PnP Information           (00001200-0000-1000-8000-00805f9b34fb)
	Modalias: usb:v046DpB33Dd2803
```

So far so good. But a day later, i find out that you have to either click a prompt to _allow_ the keyboard connection, or you won't see any prompts and the keyboard won't connect. Kind of frustrating when you have already put away that wired keyboard. The quick and dirty solution i could think of was to create a bash script that runs code to connect the keyboard and make it automatically run at startup.

```bash
nano bluetooth_device_connect.sh
```

Copy this code to the file, replacing the `MAC` address value with the MAC address of your own device


```bash
#!/bin/bash

MAC='34:88:5D:97:D8:F3' # MAC address of Bluetooth device

# Proceeding with the assumption that the device is already paired & trusted

bluetoothctl << EOF
connect ${MAC}
EOF

# chmod a+x script.sh    # Make it executable
# chmod 777 script.sh    # Give it universal rights (saves you to write sudo every time)
# Make script run automatically at startup
# https://github.com/OpenLabTools/OpenLabTools/wiki/Launching-bash-scripts-at-startup
```

Make the script executable and accessible

```bash
chmod a+x bluetooth_device_connect.sh
chmod 777 bluetooth_device_connect.sh
```

Add it to bash profile to execute automatically after login

```bash
echo "
# Connect Bluetooth Device on Login (e.g. Logitech K480)
bash $HOME/Scripts/bluetooth_device_connect.sh" >> $HOME/.bashrc
```

NOTE: Bash looks for `~/.bashrc`, `~/.bash_profile`, `~/.bash_login`, and `~/.profile`, in that order, and reads and executes commands from the **first one that exists** and is readable. So, for example. if you have both a `~/.bashrc` and a `~/.bash_profile`, add the script to the `~/.bashrc` file.

NOTE TO SELF: If you have no bluetooth dongle attached, the script will still run. Maybe update the script to check for attached bluetooth and then run?

Here's the help for `bluetoothctl` and other interesting commands that you can use.

```
[bluetooth]# help
Available commands:
  list                       List available controllers
  show [ctrl]                Controller information
  select <ctrl>              Select default controller
  devices                    List available devices
  paired-devices             List paired devices
  power <on/off>             Set controller power
  pairable <on/off>          Set controller pairable mode
  discoverable <on/off>      Set controller discoverable mode
  agent <on/off/capability>  Enable/disable agent with given capability
  default-agent              Set agent as the default one
  set-scan-filter-uuids [uuid1 uuid2 ...] Set scan filter uuids
  set-scan-filter-rssi [rssi] Set scan filter rssi, and clears pathloss
  set-scan-filter-pathloss [pathloss] Set scan filter pathloss, and clears rssi
  set-scan-filter-transport [transport] Set scan filter transport
  set-scan-filter-clear      Clears discovery filter.
  scan <on/off>              Scan for devices
  info [dev]                 Device information
  pair [dev]                 Pair with device
  trust [dev]                Trust device
  untrust [dev]              Untrust device
  block [dev]                Block device
  unblock [dev]              Unblock device
  remove <dev>               Remove device
  connect <dev>              Connect device
  disconnect [dev]           Disconnect device
  list-attributes [dev]      List attributes
  select-attribute <attribute> Select attribute
  attribute-info [attribute] Select attribute
  read                       Read attribute value
  write <data=[xx xx ...]>   Write attribute value
  notify <on/off>            Notify attribute value
  register-profile <UUID ...> Register profile to connect
  unregister-profile         Unregister profile
  version                    Display version
  quit                       Quit program
```
  
Links
---
  
- [StackOverflow - Bluetoothctl set passkey](https://stackoverflow.com/a/41520644)
- [Armbian Forum - How to manually (using command line) configure Bluetooth keyboard/mouse?](https://forum.armbian.com/topic/2992-how-to-manually-using-command-line-configure-bluetooth-keyboardmouse/)
- [StackExchange - Automatically connect trusted Bluetooth speaker](https://raspberrypi.stackexchange.com/questions/53408/automatically-connect-trusted-bluetooth-speaker)
- [Launching bash scripts at startup](https://github.com/OpenLabTools/OpenLabTools/wiki/Launching-bash-scripts-at-startup)
- [6.2 Bash Startup Files](https://www.gnu.org/software/bash/manual/html_node/Bash-Startup-Files.html)
- [~/.bashrc vs. ~/.bash_profile vs. ~/.bash_login](https://askubuntu.com/a/98567)
