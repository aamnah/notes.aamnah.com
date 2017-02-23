---
layout: post
title: Vim Basics
date: 2014-05-21 16:27:11.000000000 +05:00
type: post
published: true
status: publish
categories:
- cheatsheet
tags:
- cheatsheet
- commands
- linux
- editor
---

## Save file and exit in Vim

- To go to insert mode: `i`  
- To save: `[Esc] and zz`  
- To quit: `[Esc] and :wq`  

## Common Vi / Vim File Savings Related Commands (ex mode)

You need to press `[Esc]` key followed by the colon `:` before typing the following commands:  

- `q`   Quit  
- `q!`   Quit without saving changes i.e. discard changes  
- `r fileName`   Read data from file called fileName  
- `wq`   Write and quit (save and exit)  
- `w fileName` Write to file called fileName (save as)  
- `w! fileName`    Overwrite to file called fileName (save as forcefully)  

Links
---

- [HowTo: Save File in Vi / Vim Text Editor](http://www.cyberciti.biz/faq/save-file-in-vi-vim-linux-apple-macos-unix-bsd/)
