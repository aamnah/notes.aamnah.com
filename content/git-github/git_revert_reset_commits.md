---
title: Git revert and reset
date: 2019-03-12

---

### undo un-committed code

- `git checkout -- filename.js` undo a specific file
- `git checkout -- .` undo all files

### undo committed code (revert)
Revert only reverts the changes in a specified commit. So if you are reverting a commit that happened 9 commits ago, it'll only revert that particular commit and take it out and the other 9 commit changes still remain in place. It only reverts (undo) the specified commit.

Revert and commit the change

```bash
git revert CommitIDXXXXXX
```

Revert, review the changes and then manually commit

```bash
git revert -n CommitIDXXXXXX
```

this does not delete the commits that you are reverting, the other changes are preserved and you can see them in the git log.

### reset vs. revert
`reset` is destructive, you lose the other changes and they don't show in git log.

### reset

```bash
git reset CommitIDXXXXXX
git reset --hard CommitIDXXXXXX
```

takes you back in time, and gets rid of any changes that are newer than the point you reverted to.

### checkout and track a remote branch

use the shortcut `-t` flag

```bash
git checkout -t origin/branchName
```

https://www.youtube.com/watch?v=3dk3s4LK-Wg