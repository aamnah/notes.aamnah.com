---
title: Clone and Push all branches
date: 2018-12-18
description: Pull and Push all branches of a repo from one server to another
---

```bash
# Clone / Pull
git clone --mirror repo_url

# change to the new dir and add remote
```

```bash
# Push
git push origin master -u
git push origin --mirror

# Push just all the local branches
# git push new_origin --all
```

Links
---
- [StackOverflow - Set up git to pull and push all branches](https://stackoverflow.com/a/35378011)
- [StackOverflow - How to clone all remote branches in Git?](https://stackoverflow.com/a/7216269)