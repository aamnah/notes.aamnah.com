---

title: Require script to be run as root
subtitle: Require user to run the script as root/sudo
slug: run-script-as-root
date: 2015-11-22
lastmod: 2017-03-13
---

# Run as root

```bash
[ "$EUID" -eq 0 ] || {
  echo 'Please run with sudo or as root.'
  exit 1
}
```
