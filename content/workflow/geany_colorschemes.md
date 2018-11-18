---
title: Customizing Geany colorschemes and syntax highlighting
description: an overview of what is reuired in order to change the colors. Where the files are, what the code means and where to save everything etc.
date: 2018-08-07
lastmod: 2018-08-08
---

### File paths 

- System-wide config files are in `/usr/share/geany`
- USer-specific config files are in `$HOME/.config/geany`
- Files placed in the user-specific folder will overwrite the code in files placed in the syste-specific folder
- Don't make changes directly in the system files, those will be overwritten when Geany is updated

### File names and extensions

- The general colorscheme for the editor is a `.conf` file in the `colorschemes` directory. For example: `monokai.conf`
- The programming language specific file is a `filetypes.ext` file where `.ext` is your programming language extension. For example, `filetypes.markdown` for Markdown, `filetypes.js` for JavaScript and `filetypes.sh` for Bash files. These files placed in `/$HOME/.config/geany/filedefs/` will overwrite the code in default files placed in `/usr/share/geany/`.

### Making changes

- Colors can be HEX values, prepended with either a `#` or a `0x`. For example: `#ff0000` or `#f00` or `0xFF0000` are all valid values for Red. 
- You can save all your colors as named variables under the `[named_colors]` section

```bash
[named_colors]
color_navy=#0C1021
color_orange=#FF6400
color_light=#ECF0F1
color_red=#FF0000
color_mustard=#FFCB4F
color_blue=#79b6e8
color_pink=#DB0A5B
color_yellow=#ffff06
color_green=0x7EB35B
color_teal=#16a085

[styling]
# key=foreground;background;bold;italic
# bold and italic are true/false flags, i.e. boolean values (false is default)

default=color_light;color_navy
strong=color_mustard;color_navy;true;false
```

- The styling takes 4 values for every key. The values are:
	- Foreground color (takes a named color or a HEX value)
	- Background color (takes a named color or a HEX value)
	- Bold (takes a true/false value)
	- Italic (takes a true/false value)

Below are all valid ways of writing the values

```bash
[styling]
default=#ECF0F1;#0C1021
strong=0xFFCB4F;0x0C1021;true
emphasis=color_mustard;color_navy;false;true
```

Links
---

- [Geany Docs](https://www.geany.org/manual/current/index.html#filetype-definition-files)
- [Monokai Colorscheme for Geany](https://github.com/codebrainz/geany-themes/blob/master/colorschemes/monokai.conf)
