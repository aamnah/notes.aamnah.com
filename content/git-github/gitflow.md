## Gitflow

```bash
# macOS
brew install git-flow

# Linux
sudo apt install git-flow

# Wndows
# https://github.com/nvie/gitflow/wiki/Windows

# Initiate Gitflow inside your repo
git flow init
```

![gitflow commands](https://danielkummer.github.io/git-flow-cheatsheet/img/git-flow-commands.png)

Main and supporting branches: 

- master
- develop
- feature/
- hotfix/
- release/

### Master branch `master/`
This is the production branch for live, released code. `develop` gets merged into master whenever you release. Do not work on this branch directly, your commits will always come via `develop` or `hotfix`. The `master` and `develop` branches are long-running branches and you do not commit directly into them.

### Development branch `develop/`
This is the main branch for continuous development. All feature branches get merged into develop when they are finished

### Feature branches `feature/`
Every feature gets its own branch. Start a feature branch with 

```bash
git flow feature start feature_name
```

When done, close the feature branch with 

```bash
git flow feature finish feature_name
```

When you finish a feature banch, it gets merged into `develop`. The finished feature branch itself is deleted. 

### Release branches `release/`
Release branches are created off of `develop`, and merge into `master` as well as back-merge all changes into `develop`. 

```bash
git flow release start v3.4.5

git flow release finish v3.4.5
```

Start a release branch, updated the `CHANGELOG.md` with details of the release and finish it.

### Hotfix branches `hotfix/`
Maintenance or “hotfix” branches are used to quickly patch production releases.

- Hotfix branches are the only branches that are based off of `master`
- They get a release number just like Release branches
- They get merged into `master` and back-merged into `develop`

```bash
git flow hotfix start v3.4.6

git flow hotfix finish v3.4.6
```

### Removing deleted Gitflow feature branches from remote

```bash
# if you are finishing the branch, use -F
git flow feature finish foo -F

# if feature is finished and changes are already pushed
git push origin :feature/foo

# delete remote manually
git push origin --delete feature/foo
```

- the `-F` fetches the remote before finishing the feature
- `git push origin serverfix:serverfix`, does the same thing — it says, “Take my serverfix and make it the remote’s serverfix.”
- `--delete` let's you delete a remote branch


Links
---

- [install Gitflow](https://github.com/nvie/gitflow/wiki/Installation)
- [gitflow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
- [detailed intro to Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [A successful Git branching model by Vincent Driessen](https://nvie.com/posts/a-successful-git-branching-model/)
- [Does Git flow deletes branch on remote server?](https://stackoverflow.com/a/11152136/890814)
