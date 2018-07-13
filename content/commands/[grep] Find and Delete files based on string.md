---

title: '[grep] Find and Delete files based on string'
date: 2015-12-08
lastmod: 2017-03-16
---

```bash
grep -lZrw xxx-hacker /home/theitali/ | xargs -0 rm -f --
```

where _xxx-hacker_ is your string and _/home/theitali/_ is your location.

- `l` lists the file name
- `Z` is required for the `xargs -0` part
- `r` is for recursive, try `-R` if small r doesnt work.
- `w` is for searching the whole word
