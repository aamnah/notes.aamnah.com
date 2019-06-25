---
title: Case-insesnitive tab auto-complete in the Terminal
date: 2018-11-18
tags: 
- bash

---


### For a User

Add the following at the end of your `~/.bashrc` (Linux) or `~/.bash_profile` (macOS) file.

```bash
# Case-insensitive Tab auto-complete
$include /etc/inputrc
set completion-ignore-case on
```

You may get a _Permission denied_ error. In that case just add it to the system-wide file

### For the System

```bash
sudo nano /etc/inputrc
```

Add the following at the end of the file

```bash
# Case-insensitive Tab auto-complete
set completion-ignore-case on
```

[source](https://askubuntu.com/a/1081444)
