---
title: "[curl] run a script remotely from web"
date: 2017-03-13
---

```bash
curl -s http://scriptLocation.com | bash -s
```

bash `-s` flag takes `stdin`

You can also do:

```bash
curl -s http://scriptLocation.com | sh -s
```
    