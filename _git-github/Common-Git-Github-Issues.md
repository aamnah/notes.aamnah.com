---
layout: post
title: Common Git/Github Errors 
permalink: common-git-github-errors
ctime: 2017-05-21

---


### fatal: refusing to merge unrelated histories

```
$ git pull origin master
From github.com:aamnah/myproject.com
 * branch            master     -> FETCH_HEAD
fatal: refusing to merge unrelated histories
```

Newly created Guthub repo, has only a `.gitignore` file that the local repo doesn't. can't push without pulling first.

**Solution**: You can use `--allow-unrelated-histories` to force the merge to happen.

[source](http://stackoverflow.com/questions/37937984/git-refusing-to-merge-unrelated-histories)