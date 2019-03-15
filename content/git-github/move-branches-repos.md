---
title: move master branch from one repo as the master branch to another repo, without merging
date: 2018-12-25
---

- old repo is on Github, new repo is on Bitbucket
- old site was built with Jekyll, new site is built with Hugo

- create a new branch, checkout from within master

```bash
git checkout -b jekyll
git push -u origin jekyll
```

delete everything inside the master of old repo

```bash
git checkout master
rm -rf ./*
```


```bash
git remote add bitbucket git@bitbucket.org:aamnah/tldrdevnotes.com.git
git remote update
```

```bash
git merge --allow-unrelated-histories bitbucket/master
```