---
title: "[cut] cut, print selected parts of a file"
date: 2017-03-13
---

## Example
grab all the usernames in `/etc/passwd`

```bash
cut -f1 -d: /etc/passwd
```

where field `f1` is the first occurrence before delimiter `:`. Since the first occurrence is the username, the command above will grab all the usernames.

```bash
cut -f7 -d: /etc/passwd
```

Field 7 is the last part in `/etc/passwd`, i.e, the shell associated with each account. 


```
-d, delimiter
-f, field
```