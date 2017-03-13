---
layout: post
title: Colored Output
permalink: colored-output
ctime: 2015-12-07
mtime: 2017-03-13
---

```bash
Start=`\033[`
Color=`0;32m`
Close=`0m`
```

`\033[0;32` marks the beginning of color and `\0333[0m` marks the end. 

What you do is:

```bash
echo -e "\033[0;32m This text is green \033[0m"
```

```bash
echo -e "${StartColor} This text is green ${StartClose}"
```

**NOTE**: When referencing variables inside an `echo`, the `-e` flag is important. So are the double quotation marks `"`

In Bash, the `<Esc>` character can be obtained with the following syntaxes:

- `\e`
- `\033`
- `\x1B`

[http://misc.flogisoft.com/bash/tip_colors_and_formatting](http://misc.flogisoft.com/bash/tip_colors_and_formatting) has very detailed examples with pictures.

|Color         | Code | Color        | Code |
|--------------|------|--------------|------|
| Black        | 0;30 | Dark Gray    | 1;30 |
| Red          | 0;31 | Light Red    | 1;31 |
| Green        | 0;32 | Light Green  | 1;32 |
| Brown/Orange | 0;33 | Yellow       | 1;33 |
| Blue         | 0;34 | Light Blue   | 1;34 |
| Purple       | 0;35 | Light Purple | 1;35 |
| Cyan         | 0;36 | Light Cyan   | 1;36 |
| Light Gray   | 0;37 | White      | 1;37cl |