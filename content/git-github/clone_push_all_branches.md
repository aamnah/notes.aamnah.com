---
title: Clone and Push all branches
date: 2018-12-18
description: Pull and Push all branches of a repo along with its refs from one server to another
---

tl;dr

```bash
git clone --mirror URL
cd NEW_REPO
# git remote NEW_REMOTE URL
# for remote in `git branch -r | grep -v '\->' | sed 's/ origin\///'`; do git branch --track $remote; done
# git push NEW_REMOTE master -u 
git push --mirror NEW_REMOTE_URL
```

`--mirror` is supposed to be used when you don't have a working copy locally.

---

# Clone the repo with all branch refs
Better to do this if you don't have any local changes and are just migrating the branch from one palce to another.

`--mirror` updates all the refs as well

- `refs/heads/*` all the branch names
- `refs/remotes/*` all the remote-tracking names 
- `refs/tags/*` all the tag names

furthermore, `--mirror` implies both `--force` and `--prune`. locally updated refs will be _force updated_ on the remote end, and locally deleted refs will be _deleted_ from the remote as well.

```bash
# Clone / Pull
git clone --mirror repo_url

# change to the new dir and push with --mirror to the new remote URL
```
This is a bare repo, which means your normal files won't be visible, but it is a full copy of the Git database of your repository

# setup mirrored branches locally

> Using the `--mirror` option seems to copy the `remote` tracking branches properly. However, it sets up the repository as a bare repository, so you have to turn it back into a normal repository afterwards.

```bash
git config --bool core.bare false
# git checkout anybranch
```

# track all the remotes locally

If you are moving branches to a new repo from an old one and do NOT have all the old repo branches local, you will need to track them first.

```bash
# Track all repos locally
for remote in `git branch -r | grep -v '\->' | sed 's/ origin\///'`; do git branch --track $remote; done
```

The tracking all repos step is necessary. Because even after having pushed all branches, Bitbucket won't show any branches in the web admin, only the ones that are locally tracked show up in the dropdown.

# push all the repos
 Better to only `push --mirror` with repos that were cloned with `--mirror` as well

```bash
# Push
git push origin master -u
git push origin --mirror

# Push just all the local branches
# git push new_origin --all
```

Links
---
- [How to properly mirror a git repository](http://blog.plataformatec.com.br/2013/05/how-to-properly-mirror-a-git-repository/)
- [StackOverflow - Set up git to pull and push all branches](https://stackoverflow.com/a/35378011)
- [StackOverflow - How to clone all remote branches in Git?](https://stackoverflow.com/a/7216269)
- [StackOverflow - Git push --all vs --mirror](https://stackoverflow.com/questions/49343025/git-push-all-vs-mirror)