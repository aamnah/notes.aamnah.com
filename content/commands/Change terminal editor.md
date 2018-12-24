---
title: Change Default Terminal Editor
date: 2017-03-13
---

```bash
export EDITOR=nano
```

OR

```bash
echo export EDITOR=nano >> /etc/profile
```
    
OR

```bash
EDITOR=nano
```

Don't foreget to `source ~/.bash_profile` or `exec bash` for the change to take effect.


[Source](http://stackoverflow.com/questions/647032/unable-to-change-the-default-editor-in-terminal)