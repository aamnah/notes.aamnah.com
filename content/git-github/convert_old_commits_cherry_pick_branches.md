---
title: Convert commits to branches and bring back reverted changes with cherry-pick
date: 2019-04-08

---

Scenario:

- i have 3 old commits that were reverted and which i need to add back to code
- i want all those commits to be in one (new) branch and pushed as one change (feature)
- i don't want the history or any commits that happened in between, i want ONLY the code that was changed inside that particular commit
- (optional) squash all commits into one and push it to remote


```bash
# create a new branch, we use Gitflow
git flow feature start bringBackChange
# git checkout -b bringBackChange 

# cherry pick a commit
git cherry-pick -x abc123 

# pick multiple commits
git cherry-pick -x 456def ghi789

# resolve conflicts and continue
git cherry-pick --continue

# bail out
git cherry-pick --abort
```

- `-x` will add a message saying that this commit was cherry pciked

```
(cherry picked from commit abc123)
```

- `--no-commit`, bring the changes but don't commit

NOTES:

- you should merge if you can. Cherry picking creates duplicates of original commits..

Links
---

- [Git cherry pick from another branch](https://www.christianengvall.se/git-cherry-pick/)
- [Learn to git cherry-pick a commit with this easy example](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Need-to-git-cherry-pick-a-commit-Heres-an-example-how)
- [git manual: git-cherry-pick](https://git-scm.com/docs/git-cherry-pick)
