---
title: Replace and overwrite branches in Git
date: 2019-03-12
---

tl;dr

```bash
# merge a branch on top of your existing master
git checkout hotstuff
git merge -s ours master
git checkout master
git merge hotstuff
```

---

NOTES:

- `-s ours` or `--strategy=ours` will get rid of all changes in the other (obsolete) branch and overwrite with _our_ branch (the branch you'er currently in).
- If you are using `our` with a `master` branch, it'll overwrite everything in master and prefer changes in the other branch
- You can use `--no-commit` when merging to avoid the need of a commit message

You can also try obliterating `master` all together:

```bash
git push -f origin hotstuff:master
```

This is useful when the other branch is not based off of master and the branch histories are completely irrelevant

Links
---

- [https://stackoverflow.com/a/2862938](https://stackoverflow.com/a/2862938)
- [https://stackoverflow.com/a/11658312](https://stackoverflow.com/a/11658312)