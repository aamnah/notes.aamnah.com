---
title: tmux cheatsheet
date: 2019-08-21
---


| action | key bindings |
|-----|-----------------|
| `tmux` | start new |
| `tmux new -s <sessionName>` | start new with session name |
| `tmux a` | attach to last used session |
| `tmux a #` | attach |
| `tmux a -t <sessionName>` | attach to named |
| `tmux ls` | List sessions |
| `tmux kill-session -t <sessionName>` | kill session |

### Sessions

| action | key bindings |
|-----|-----------------|
| `:new foo session` | new session |
| `s` | list sessions |
| `$` | name session |

### Windows

| action | key bindings |
|-----|-----------------|
| `c` | create window |
| `x` | kill current window |
| `&` | kill all windows |
| | rename current window |
| `0` | switch to window 0 |
| `1` | switch to window 1 |
| `2` | switch to window 2  etc.|

### Panes

| action | key bindings |
|-----|-----------------|
| `%` | Vertical split |
| `"` | Horizontal split |
| `x` | kill current pane |
