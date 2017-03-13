---
layout: post
title: Vim Basics
permalink: vim-basics
tags: cheatsheet, *nix, 
---

Save file and exit in Vim
---

To go to insert mode: `a`  
To save: `[Esc] and zz`  
To quit: `[Esc] and :wq`  

Common Vi / Vim File Savings Related Commands (ex mode)
---

You need to press [`Esc`] key followed by the colon (`:`) before typing the following commands:

`q` Quit  
`q!` Quit without saving changes i.e. discard changes  
`r` fileName Read data from file called fileName  
`wq` Write and quit (save and exit)  
`w` fileName Write to file called fileName (save as)  
`w!` fileName Overwrite to file called fileName (save as forcefully)  

`e filename.txt` open filename.txt. This could be a path to filename or just the filename.

Movement
---
`h`, `j`, `k`, `l` to move around. Or just use arrow keys.

##### `f`, `F`, `t`, `T`
`f` Move forward. For example: `f` then `a` will take you to the next **a**.
`F` Move backward
`t` and `T` are simliar to `f` and `F`. The only difference is they place the cursor before the next a instead of exactly on it.

##### `w`, `b`, `e` 
`w` Move to the beginning of next word
`b` Move to the beginning of the previous word 
`e`  Move to the end of current or next word

##### `0`, `_`, `$`
`0` Move to the far-left on the current line
`_` Move to the first character on the current line
`$` Move to the last character on the current line

##### `gg`, `G`
`gg` Top of the file
`G` Bottom of the file

##### `{`, `}`
`{` Beginning of Paragraph
`}` End of Paragraph

Modes
---
##### Normal 
Defult mode. This is the mode for moving around files. You can always get to the normal mode by pressing the [`Esc`] key. 

##### Insert
This mode is for typing. Press `i` to go to **i**nsert mode.

##### Visual 
This mode is for selecting things. Press `v` to go to **v**isual mode.

Delete
---

##### `d`, `D`
Delete lines
`d` Delete
`d` then `w` Deletes till the end of the word
`d` then `$` Deletes till the end of the line
`d` then `0` Deletes all the way back to the start of the line
`D` Deletes the whole line

##### `x`, `X`
Delete a single character
`x` Delete the character under the cursor
`X` Delete the character before the cursor

Case swapping
---
`~` Swap the case of the character under the cursor
`v` then `$` then `~` to change the case of the whole line

Repeat, Undo, Redo
---
`.` Repeats the last action you did
`u` Undo
`ctrl`+`r` for Redo



Substitue (aka Search)
---
`:s` followed by `/`, `?` or `&`

Search and Replace
---
`:%s/amazing/awesome` Search this document for *amazing* and replace it with *awesome*
`:%s/and/\&` Search this document for *and* and replace it with *&*. Notice that you need to escape *&*
`:%s` Search this document
`:%s/and/but/g` The `/g` in the end means change it globally (everywhere in the file), not just the first instance.

Resources
---
- [HowTo: Save File in Vi / Vim Text Editor](http://www.cyberciti.biz/faq/save-file-in-vi-vim-linux-apple-macos-unix-bsd/)
- [Harnessing the power of Vim](https://teamtreehouse.com/library/harnessing-the-power-of-vim)