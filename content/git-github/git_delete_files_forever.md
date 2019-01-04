---
title: Delete files forever from a git repo on Github or Bitbucket
description: "delete personal/private files from a repo that is publicly available and you have accidentally pushed files that shouldn't be out there like SSH keys, passwords, configs etc. Do this using BFG Repo-Cleaner to alter the history of your Git repo"
date: 2018-12-25
---

tl;dr

```bash
git clone --mirror REPO_URL
java -jar ~/Downloads/bfg-1.13.0.jar --delete-files FILE_NAME MY_REPO.git
cd MY_REPO.git
git reflog expire --expire=now --all && git gc --prune=now --aggressive
git push # this will force update all refs as well because you cloned with --mirror
```

---


```bash
# see if java is installed
echo $(/usr/libexec/java_home)

# download and install Java
# https://java.com/en/download/mac_download.jsp
# jre-8u191-macosx-x64.dmg

# to use Java runtime and command line tools you need to install Java Developer Kit
# install JDK
# https://www.oracle.com/technetwork/java/javase/downloads/index.html
# jdk-11.0.1_osx-x64_bin.dmg

# download BFG Repo-Cleaner
# https://rtyley.github.io/bfg-repo-cleaner/

# check that BFG works 
java -jar ~/Downloads/bfg-1.13.0.jar

# mirror the repo
# clone a fresh copy of your repo, using the --mirror flag
git clone --mirror git@bitbucket.org:aamnah/deleteme.git

# use bfg
java -jar ~/Downloads/bfg-1.13.0.jar --delete-files id_rsa deleteme.git

# go to the repo, cleanup, and push changes
cd deleteme.git
git reflog expire --expire=now --all && git gc --prune=now --aggressive
git push # this will force update all refs as well because you cloned with --mirror
```

So i pushed some files that were personal to a public Github repo. Nothing too damaging but still stuff i wouldn't want to be included on a tech blog.

For the sake of this tutorial let's just assume that i committed SSH keys, and NO you don't want the public to have your keys..


```bash
java -jar ~/Downloads/bfg-1.13.0.jar --delete-files id_rsa deleteme.git
```


Replace all passwords listed in a file (prefix lines 'regex:' or 'glob:' if required) with `***REMOVED***` wherever they occur in your repository :

```bash
$ bfg --replace-text passwords.txt  deleteme.git
```



### Help

```bash
# java -jar ~/Downloads/bfg-1.13.0.jar
bfg 1.13.0
Usage: bfg [options] [<repo>]

  -b, --strip-blobs-bigger-than <size>
                           strip blobs bigger than X (eg '128K', '1M', etc)
  -B, --strip-biggest-blobs NUM
                           strip the top NUM biggest blobs
  -bi, --strip-blobs-with-ids <blob-ids-file>
                           strip blobs with the specified Git object ids
  -D, --delete-files <glob>
                           delete files with the specified names (eg '*.class', '*.{txt,log}' - matches on file name, not path within repo)
  --delete-folders <glob>  delete folders with the specified names (eg '.svn', '*-tmp' - matches on folder name, not path within repo)
  --convert-to-git-lfs <value>
                           extract files with the specified names (eg '*.zip' or '*.mp4') into Git LFS
  -rt, --replace-text <expressions-file>
                           filter content of files, replacing matched text. Match expressions should be listed in the file, one expression per line - by default, each expression is treated as a literal, but 'regex:' & 'glob:' prefixes are supported, with '==>' to specify a replacement string other than the default of '***REMOVED***'.
  -fi, --filter-content-including <glob>
                           do file-content filtering on files that match the specified expression (eg '*.{txt,properties}')
  -fe, --filter-content-excluding <glob>
                           don't do file-content filtering on files that match the specified expression (eg '*.{xml,pdf}')
  -fs, --filter-content-size-threshold <size>
                           only do file-content filtering on files smaller than <size> (default is 1048576 bytes)
  -p, --protect-blobs-from <refs>
                           protect blobs that appear in the most recent versions of the specified refs (default is 'HEAD')
  --no-blob-protection     allow the BFG to modify even your *latest* commit. Not recommended: you should have already ensured your latest commit is clean.
  --private                treat this repo-rewrite as removing private data (for example: omit old commit ids from commit messages)
  --massive-non-file-objects-sized-up-to <size>
                           increase memory usage to handle over-size Commits, Tags, and Trees that are up to X in size (eg '10M')
  <repo>                   file path for Git repository to clean
```


Links
---

- [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)
- [Github Help - Removing sensitive data from a repository](https://help.github.com/articles/removing-sensitive-data-from-a-repository/)