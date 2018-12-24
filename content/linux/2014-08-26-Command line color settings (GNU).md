---

title: Command line color settings (GNU)
slug: command-line-color-settings-gnu
date: 2014-08-26
---

# Coloring the `list` and `tree` command outputs (GNU)

Customizing Colors (GNU)
---
The format is as follows: `LS_COLORS="di=01;90:ow=01;90"`

The LS_COLORS environment variable is a colon `:` separated list of key=colour pairs. There are 2 types of key: file types and file extensions.

| key | effect | color | meaning |
|---|---|---|---|
| di | 01 | 90 | color all dirs dark grey and make it bold |
| ow | 01 | 90 | color all other_writable (o+w) dirs dark grey and make it bold |

Links:
---
- [Configuring LS_COLORS (GNU)](http://www.bigsoft.co.uk/blog/index.php/2008/04/11/configuring-ls_colors)
- [Howto: Add custom color to directory listings](http://ubuntuforums.org/showthread.php?t=41538)
- [COLORS-Dircolors](http://linux-sxs.org/housekeeping/dircolor.html)
- [dircolors: modify color settings globaly](http://unix.stackexchange.com/questions/94299/dircolors-modify-color-settings-globaly)
