---

title: Customizing tmux
description: How to create a tmux theme, load changes and define styles and formats for the panes and status bar
date: 2018-08-17
lastmod: 2018-08-19
tags:
- tmux 

---

- Finished theme: [tmux Flat Theme](https://github.com/aamnah/tmux-flat-theme)

There are example templates available in the `/usr/share/doc/tmux/examples` folder which are a really good starting point and help you understand how to configure your own theme

## creating a tmux theme

- You can edit the `~/.tmux.conf` file directly and add your styles or you can save the theme separately and load it from the conf file.

Add this line to the bottom of `~/.tmux.conf`:

```bash
run-shell ~/file/path/flatui-theme.tmux
```

This approch is safer as you are not editing your conf file directly and won't mess it up by chance. It is also good when you're testing multiple themes. You can just comment/uncomment the line that loads a theme instead of overwriting the entire `.tmux.conf` file every time

## reloading the changes

- You can either load the file from inside `tmux`
- You can load the file from the Terinal

```bash
tmux source-file ~/.tmux.conf
```

- Or you can add a key binding for it

```bash
bind r source-file ~/.tmux.conf \; display "Reloaded ~/.tmux.conf"
```

- Or you can quit `tmux` and start it again

```bash
# kill all sessions
<prefix> &
```

- In cases when you can't see your changes but are sure you made them, try quitting and restarting `tmux` and see if it is giving any errors


### Panes

`-g` shows the styles for the current pane
`-T` sets the title for the current pane

## Customization

- You can save color variables like Bash `HIGHLIGHT="#3fcfff"` and use the `$HIGHLIGHT`
- You can use terminal colors  (black, red, green, yellow, blue, magenta, cyan, white etc.), Hexadecimal ('#ffffff', all 6 digits, no #FFF shorthand, needs to be in commas), and 256 colour set: (colour0 till colour256)

- Possible color values:
	- Hexadecimal (`'#ffffff'`, all 6 digits, no #FFF shorthand, needs to be in commas) 
	- Terminal colors (`black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`)
	- 256 colour set: `colour0` till `colour256`
- You can use the `default` keyword to use default colors.

- Possible Attribute values:
	- `none`, `bright`, `bold`, `dim`, `underscore`, `blink`, `reverse` (reverses the FG and BG colors), `hidden`, `italics`, `strikethrough` (bold, underscore and reverse worked for me)
	- to disable the attribute, prefix with _no_. e.g. `noreverse`, `noitalics` etc.

```bash
# Multiple ways of defining style
# --------------------------------

# 1. Define background `bg` and foreground `fg` separately
set-window-option -g window-status-current-fg white
set-window-option -g window-status-current-bg default
	
# 2. One-liner
set -g pane-border-style 'fg=#585858, bg=#262626'

# 3. Use color variables (double quotes "" are important to get the values)
set -g status-style "fg=${CLOUDS}, bg=${TURQUOISE}"
```

```bash
# Examples with colors AND attributes
fg=yellow,bold,underscore,blink
bg=black,fg=default,noreverse
```

- Variable substitution only works if you use double commas `" "`


#### Pane Styles
- by default `window-style` and `window-active-style` are used to style a pane.

```bash
# Color Variables
WINDOW_FG="#95a5a6"
WINDOW_BG="black"
WINDOW_ACTIVE_FG="#ecf0f1"
WINDOW_ACTIVE_BG="black"

# Inactive Pane
set -g window-style "fg=${WINDOW_FG}, bg=${WINDOW_BG}"

# Active Pane
set -g window-active-style "fg=${WINDOW_ACTIVE_FG}, bg=${WINDOW_ACTIVE_BG}"
```

- you can also set the style for a single pane by using the `select-pane` option with the `-P` flag

```bash
select-pane -t:.1 -P 'bg=red'
```

#### Conditionals

- You can use conditionals in config files

> Within a configuration file, commands may be made conditional by surrounding them with `%if` and `%endif` lines. Additional %elif and %else lines may also be used. The argument to `%if` and `%elif` is expanded as a format and if it evaluates to false (zero or empty), subsequent lines are ignored until the next `%elif`, `%else` or `%endif`. For example:

```bash
%if #{==:#{host},myhost} 
set -g status-style bg=red 
%elif #{==:#{host},myotherhost} 
set -g status-style bg=green 
%else 
set -g status-style bg=blue 
%endif
```  
> Will change the status line to red if running on ‘myhost’, green if running on ‘myotherhost’, or blue if running on another host.


### Existing variables and running commands

- Special character sequences are enclosed in `#{ }`
- Commands are enclosed in `#( )`

```
#(pwd)
#{pane_current_path}
```

Links
--- 

- [tmux Manual](https://man.openbsd.org/OpenBSD-current/man1/tmux.1)
