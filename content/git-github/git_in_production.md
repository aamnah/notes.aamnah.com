---
title: Git in Production
date: 2019-03-27
---

## Pretty and concise logs
add an alias

```bash
nano ~/.gitconfig
```

```
[alias]
	lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --branches
```

You can now use `git lg` to see better logs

## Change commit message of last commit

```bash
git commit --amend
```
It'll open the editor and you'll be able to update the last commit message. Only do this for **unpushed code**

## Add a file i forgot in last commit

```bash
git commit --amend
```

When you run the command it'll automatically include the newly modified files. Only do this for **unpushed code**

## Update `feature` with latest changes from `master`

Get changes from the main development branch.

```bash
# switch to master and get latest changes
git checkout master
git pull

# switch to feature and pull changes from master
git checkout feature

# merge is good when you have other devs working on the code 
# and the changes have been committed and pushed
git merge master

# rebase is ok if you're the only dev and as long as you haven't pushed yet
# beware of rebase changing commit hashes
git rebase
```
- `git merge` is recommended when you have a shared branch and other developers are working on it as well
- `git rebase` will get all changes from `master` and merge it on top of your feature branch. Doing so will change the commit hashes.
- `git rebase` will _rewind head_ and _replay our work on top of it_.

## Move _accidental_ commits from `master` to another branch

```bash
# Changes haven't been pushed yet, and NOT synced with remote
# otherwise you'll mess up commit history

# create a new branch from master 
# since you have pushed your changes to master the new branch will have those changes
git checkout master
git checkout -b newBranch

# go back to master and remove those accidental changes by going back
# to the point where those commits weren't added
git checkout master
git reset --hard XXXXX
```

## Combine multiple commits into one

```bash
git rebase -i  XXX

# select the actions you want to take for every commit, close editor and continue
```

You'll get a summary of all the commits from `XXX` onwards

- `-i` is for inetractive 
- `XXX` is the commit from where you want to start and update commits that came after this point

## See the changes in local commits (with `diff`)

```bash
git diff # unstaged changes
git diff --staged # staged changes
git diff HEAD # both staged+unstaged changes
git diff --stat # summary of what files changed, no. of line +/- etc.
git diff --check # check for merge conflicts
```

## Create empty branches
Create the Git branch as an _orphan_. That means it'll have no 'parent', hence no code. All the code that is there can be removed with `git rm --cahced -r .`

```bash
git checkout --orphan FOO

# multiple ways of removing files.. 
git rm -r --cached .
git reset --hard
git clean -fd
```

## Save _dirty_ copy of your work in progress

```bash
git add . # capture all 'Work In Progress' files
git stash # put it away

# la la la, go to other branches, make changes, commit etc.

# go back to the branch you were working in
git stash pop # get it back, remove it from stash
```

```bash
git stash list
git stash apply # get it back, keep the stashed copy as well
git stash apply X # apply the number 'X' stash from your list (e.g. stash@{1})
git stash save 'wip: fancy feature' # stash it with a name
```

- `pop` will take the stash out of `git stash list`, `apply` would not.
- by default `apply` will get back the the most recent stash

## See changes between your file and remote file (with `diff`)

```bash
git diff HEAD myFile.js
```

compare two different commits

```bash
git diff XXXX YYYY
```

## Wipe a commit from local

```bash
git reset --hard XXXX
```

- will jump back to the `XXXX` commit discarding all the ones that came after it
- make sure you're getting rid of only local commits and that the cahnges haven't already been pushed

## Delete a commit from remote

```bash
# find your commit 
git log --oneline 

# reset will checkout the specified commit and remove everything that came after it
git reset --hard XXX

# push your changesto remote
git push --force
# git push origin +develop
```

- keep in mind that `--hard` throws away all your uncommitted changes. to use `--hard` first make sure the output of `git status` is clean

## Undo commits that have already been pushed to remote (with `revert`)

```bash
git revert XXXX
```

- `reset` and `amend` will change the commit hash, which we don't want, as it'll cause conflicts since the code has already been pushed to remote and other people may have pulledit already. 
- `revert` does not change the commit hash, which is why it is a good command for getting rid of changes that have already been pushed to remote 

Links
---

- [Rewriting history](https://www.atlassian.com/git/tutorials/rewriting-history)
- [egghead: Productive Git for Developers](https://egghead.io/courses/productive-git-for-developers)
- [](https://www.atlassian.com/git/tutorials/learn-undoing-changes-with-bitbucket)
