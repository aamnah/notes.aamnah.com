---

title: Using tmux
description: Windows, Panes and Sessions. Keyboard shortcuts, and how to configure custom key bindings
date: 2018-08-17
lastmod: 2018-08-19
tags: 
-tmux

---

```bash
# Debian
sudo apt install tmux

# macOS
brew install tmux
```

### Sessions

| Actions | Key bindings |
|-|-|
| name/rename current session | `<prefix> $` |

### Windows

| Actions | Key bindings |
|-|-|
| create a new window | `<prefix> c` |
| kill all windows | `<prefix> &` |


### Panes

| Actions | Key bindings |
|-|-|
| kill current pane | `<prefix> x` |


Links
--- 

- [tmux Manual](https://man.openbsd.org/OpenBSD-current/man1/tmux.1)
