---
title: "Create a 'New Document' shortcut in Nautlius File Manager"
date: 2018-12-12
---

It's fairly simple, just create a file in the `~/Templates` folder, it'll show up in the _right click menu_

```bash
touch ${HOME}/Templates/Empty\ Document
```

The only caveat is that you have to rename the file after it's created. 

I used the name `1_Markdown.md` for my file. 

- The `.md` extension because 90% of the files i create in Nautlius with the right click menu are Markdown files. I made other `.sh`, `.js`, `.scss` templates too..
- `1_` at the beginning means that it shows up at the top of the list view in the folder when it is set to `sort A-Z`