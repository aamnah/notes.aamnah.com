---
title: Enable / Disable root user in Ubuntu
date: 2018-12-10
---


```bash
# set password for root
sudo passwd root

# enable root
sudo passwd -u root

# disable root
sudo passwd -dl root
```

- `-u` unlocks the password of the named account (in this case `root`)
- `-d` deletes and `-l` locks the password

Links
---

- [StackOverflow](https://askubuntu.com/questions/44418/how-to-enable-root-login)