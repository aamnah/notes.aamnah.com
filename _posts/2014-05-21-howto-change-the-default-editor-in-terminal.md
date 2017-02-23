---
layout: post
title: How to change the default editor in Terminal
permalink: /howto-change-default-editor-terminal
date: 2014-05-21 16:34:20.000000000 +05:00
type: post
published: true
status: publish
tags: ['terminal', 'editor']
---

In the terminal, run

```bash
export EDITOR=nano
```
to change the default editor to `nano` (or whatever) and then run

```bash
source ~/.bashrc
```

for the change to take effect
