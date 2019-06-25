---

title: Getting started with Tmux
description: Windows, Panes and Sessions. Keyboard shortcuts, and how to configure custom key bindings
slug: tmux-basics
date: 2017-03-28
lastmod: 2018-08-19
tags: 
- tmux

---

```bash
# Debian
sudo apt install -y tmux

# macOS
brew install tmux
```

- `tmux` open tmux 
- `exit` or `Ctrl`+`D` to close a pane, exit tmux

tmux is controlled by a key combination of a prefix key, 'C-b’ `Ctrl-b` by default, followed by a command key.

- `ctrl`+`B`, then `?` to open a list of all key bindings
- `ctrl`+`B`, then `%` to open a new pane (horizontal)
- `ctrl`+`B`, then `"` (double-quote) to open a pane (vertical)
- `ctrl`+`B`, then **arrow key** (left/right/up/down) to move between panes (horizontal)

### Sessions

| Actions                         | Key bindings |
|---------------------------------|--------------|
| list all tmux sessions          | `tmux ls`    |
| name/rename current session     | `<prefix> $` |
| detach session                  | `<prefix> d` or `tmux detach` |
| connect to the detached session | `tmux a` or `tmux attach` or `tmux attach -d`|

### Windows

| Actions               | Key bindings |
|-----------------------|--------------|
| create a new window   | `<prefix> c` |
| close window          | `exit` |
| kill all windows      | `<prefix> &` |
| switch to next window | `<prefix> n` |
| switch to prev window | `<prefix> p` |
| switch to window using index | `<prefix> 0-9` |


### Panes

| Actions             | Key bindings |
|---------------------|--------------|
| kill current pane   | `<prefix> x` |
| close pane          | `<prefix> D` or `exit` |
| split horizontally  | `<prefix> "` |
| split vertically    | `<prefix> %` |
| move to pane        | `<prefix> arrow-key` |
| zoom in/out on active pane  | `<prefix> z` |



Links
---
- [Egghead.io: Wrangle your terminal with tmux](https://egghead.io/courses/wrangle-your-terminal-with-tmux)
- [tmux](https://tmux.github.io/)
- [tmux manual](http://man.openbsd.org/OpenBSD-current/man1/tmux.1)
- [tmux cheatsheet](https://tmuxcheatsheet.com/)
- [a tmux crash course](http://robots.thoughtbot.com/a-tmux-crash-course)