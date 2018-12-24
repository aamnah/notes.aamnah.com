---

title: Install/Upgrade Node.js on Raspberry Pi (Raspbian Jessie)
date: 2016-08-24 17:07:46.000000000 +05:00
type: post
published: true
status: publish
categories: []
tags:
- Raspberry Pi
- node
excerpt: The Node.js version that comes pre-installed with Raspbian Jessie is old.
  If you check the version using `node -v`, it'll give you v0.10.29. The latest ARM-version
  of Node.js as of this writing is v4.2.1. Let's remove the old and install the latest
  version available on our Raspberry Pi
---

tl;dr
---

Run this one command in Terminal:

```bash
curl raw.githubusercontent.com/aamnah/bash-scripts/master/install_nodejs.sh | bash
```

This will automatically run a script i wrote that takes care of removing existing Node.js stuff, downloading and installing the latest version, and cleaning up afterwards. It also confirms the Node.js version once the installation is done.

---

The Node.js version that comes pre-installed with Raspbian Jessie is old. If you check the version using `node -v`, it'll give you v0.10.29. The latest ARM-version of Node.js as of this writing is v4.2.1. Let's remove the old and install the latest version available on our Raspberry Pi.

### Remove existing Node.js

Run the following commands one by one:

```shell
sudo apt-get remove nodered -y
sudo apt-get remove nodejs nodejs-legacy -y
sudo apt-get remove npm -y
```

### Install latest Node.js ARM-release

Download:

```bash
wget https://node-arm.herokuapp.com/node_latest_armhf.deb
```

Install:

```bash
sudo dpkg -i node_latest_armhf.deb
```

That's it, you now have the latest Node.js version available for the Raspberry Pi. You can confirm the version using `node -v`.

### Re-install Node-RED

We uninstalled Node-RED as part of removing Node. If you want to re-install it, you can do so by running the following command:

```bash
sudo apt update && sudo apt install nodered -y
```

[source](https://www.raspberrypi.org/forums/viewtopic.php?f=34&amp;t=140747)
