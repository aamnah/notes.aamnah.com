---
title: Package management in Ubuntu with snap
date: 2019-04-09

---

```bash
sudo apt install snapd

snap find FOO # find packages

sudo snap install FOO
sudo snap install --channel=edge FOO # release channel

FOO # run installed package

snap refresh # update all packages
snap refresh FOO # update the pckage FOO
snap refresh --list # only list the updates, don't update actual packages

snap list # see all installed snaps

sudo snap revert FOO # downgrade
sudo snap remove FOO # uninstall

# Enable / Disable
sudo snap enable FOO
sudo snap disable FOO

# Service Management
snap services
snap services lxd Service
sudo snap restart lxd
sudo snap start lxd.daemon 
sudo snap stop lxd.daemon 
```


```bash
snap refresh
```

```
sublime-text 3207 from Snapcrafters refreshed
```

```bash
snap list
```

```
Name                  Version                    Rev   Tracking  Publisher        Notes
canonical-livepatch   8.2.0                      58    stable    canonical✓       -
chromium-ffmpeg       0.1                        13    stable    canonical✓       -
core                  16-2.38                    6673  stable    canonical✓       core
core18                18                         782   stable    canonical✓       base
gnome-3-26-1604       3.26.0.20190228            82    stable/…  canonical✓       -
gnome-3-28-1804       3.28.0-9-gce87599.ce87599  23    stable    canonical✓       -
gnome-calculator      3.32.0+git2.cae338ea       352   stable/…  canonical✓       -
gnome-characters      v3.32.0+git1.9ff74a2       206   stable/…  canonical✓       -
gnome-logs            3.32.0                     57    stable/…  canonical✓       -
gnome-system-monitor  3.32.0                     70    stable/…  canonical✓       -
gtk-common-themes     0.1-16-g2287c87            1198  stable/…  canonical✓       -
opera                 58.0.3135.127              31    stable    opera-software✓  -
slack                 3.3.8                      12    stable    slack✓           classic
sublime-text          3207                       58    stable    snapcrafters     classic
vscode                1.32.3-1552606978          89    stable    snapcrafters     classic
```